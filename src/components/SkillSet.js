import React from 'react';
import Title from "../components/Title"
import Skill from './Skill'



const SkillSet = ({sectionTitle,skills}) => {
    let arr=[]
    for (let i = 0; i < skills.length; i++) 
    {
        arr.push(<Skill name={skills[i].name} marks={skills[i].marks}/>)    
    }
    return (
        <article className="SkillSet">
            <Title title={sectionTitle} />
            <div className="SectionSkill">
                {arr}
            </div>
        </article>
    );
};

export default SkillSet;