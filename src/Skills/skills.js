import React from "react";
import './skills.css';
import probImage from '../images/problemSolving.png';
import webImage from '../images/webDec.png';
import gameImage from '../images/gameDes.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a skilled and passionate programmer and physicist with experience in creating websites, games, and problem solving. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and Javascript, as well as many other langauages. As for physics, i am proficient in solving and undesrtanding physics fields for example quantum mechanics.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={probImage} alt="ProbImage" className="skillImg"/>
                    <div className="skillBarText">
                        <h2>Problem Solving</h2>
                        <p>I am proficient in solving real life problems.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={webImage} alt="webImage" className="skillImg"/>
                    <div className="skillBarText">
                        <h2>Web Development</h2>
                        <p>I have a full understanding on how to use HTML, CSS, and Javascript. I am able to create my own websites with front-end and back-end components.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={gameImage} alt="gameImage" className="skillImg"/>
                    <div className="skillBarText">
                        <h2>Game Development</h2>
                        <p>I am currently learning game development. I have a understand on using unity engine on developing and designing games with C#.</p>
                    </div>
                </div>
            </div>       
        </section>
    );
}

export default Skills;
