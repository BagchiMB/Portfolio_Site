import React from 'react';


const Skill = ({name,marks}) => {
    let arr=[]
    for (let i = 1; i <= 5; i++) 
    {
        arr.push(<div className={`Skill-marker ${i<=marks?'Skill-marker-scores':''}`}></div>)    
    }
    return (
        <div className="Skill">
            <p>{name}</p>
            <div className="Skill-marker-Container">{arr}</div>
        </div>
    );
};

export default Skill;