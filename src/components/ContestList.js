import React from 'react';
import ContestPreview from './ContestPreview';

const ContestList = ({onContestClick, contests})=>(
        <div className="contestList">
            { Object.keys(contests).map(contestId=>
                <ContestPreview  key={contestId} onClick = {onContestClick} {...contests[contestId]}/>
            
            )}

        </div>
    );



export default ContestList;