import React from 'react';
import "./Skills.css";
import SkillCard from './SkillCard/SkillCard';
import { SkillsData } from "../../utils/data";

const Skills = () => {
    return (
        <section className="skills-container">
            <h5>Technical Proficiency</h5>

            <div className="skills-content">
                <div className="skills">
                    {SkillsData.map((item) => (
                        <SkillCard key={item.title} iconUrl={item.icon} title={item.title} />
                    ))}
                </div>
                <div className="skills-info">

                </div>
            </div>
        </section>
    )
}

export default Skills