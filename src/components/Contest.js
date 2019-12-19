import React, { Component } from 'react';

class Contest extends Component{
    render(){
        return(
            <div className="ContestHolder">
                <div className="contestDesc">
                    {this.props.description}
                </div>
                <div className="home-link link" onClick={this.props.onClickListener}>
                    Contest list                
                </div>
            

            </div>
            
        );
    }

}
export default Contest;