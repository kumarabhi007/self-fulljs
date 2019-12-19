import React, {Component} from 'react';

class ContestPreview extends Component {
    handleClick = () =>{
        this.props.onClick(
            this.props.id
        )
    }
    render(){
        return (
            <div className="link contestHolder" onClick = {this.handleClick}>
                <div className = "categoryName">
                    {this.props.categoryName}
                </div>
                <div className="contestName">
                    {this.props.contestName}
                </div>
        </div>
        );
    }
    
    

};
export default ContestPreview;