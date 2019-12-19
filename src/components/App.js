import Header from './Header';
import React from 'react';
import ContestList from './ContestList'
import Contest from './Contest'
import * as api from '../api';

const pushState = (obj, url)=>{
    window.history.pushState(obj, '', url);
}
const onPopState = (handler)=>{
    window.onpopstate = handler;
}

class App extends React.Component {
    state = this.props.initialData


    componentDidMount(){
        onPopState(event=>{
            this.setState({
                currentContestId: (event.state || {}).currentContestId              
            })
            // console.log(event.state);
        })
        
    }
    componentWillUnmount(){
        onPopState(null);
        
    }
    fetchContest = (contestId)=>{
        pushState(
            {currentContestId: contestId},
            `/contests/${contestId}`
            )
        api.fetchData(contestId)
            .then(contest=>
                this.setState({                    
                    currentContestId: contest.id,
                    contests: {
                        ...this.state.contests,
                        [contest.id]: contest
                    }

                })

            )
            .catch(console.error)
        
    }
    fetchContestList = ()=>{
        pushState(
            { currentContestId: null},
            '/' 
        )
        api.fetchContestList()
            .then(contests=>{
                this.setState({
                    currentContestId: null,
                    contests
                })
            })
            .catch(console.error)
    }
    currentHeader(){
        if(this.state.currentContestId){
            return this.currentContest().contestName;
        }else{
            return "Naming Contests";
        }
    }
    currentContest(){
        return this.state.contests[this.state.currentContestId];
    }
    currentContent(){
        if(this.state.currentContestId){
            return <Contest onClickListener={this.fetchContestList} {...this.currentContest()}/>
        }else{
            return <ContestList onContestClick = {this.fetchContest} contests = {this.state.contests}/>   
        }

    }


    render(){
        // debugger;
        return (
            <div className = "text-center outer-box">
                <Header message = {this.currentHeader()}/>
                {this.currentContent()}       
            </div>
    
        );
    }
}
export default App;