import React from "react";
import './project.css';

const Projects = () => {
    return (
        <section id='projects'>
            <span className="projTitle">Projects That I Have Done</span>
            <span className="projDesc">These are projects that I have worked on over the years in university and off on my free time. These projects range from web developments to game development. Using various type of coding langauge like C#, C++, HTML, CSS, JS, Python, and more.</span>
            <div className="projBars">
                <div className="projBar">
                    <div className="projBarText">
                        <a href='https://jesusyume.github.io/QuizzyPop-/' className="item">QuizzyPop!</a>
                        <p>This project uses HTML, CSS, and JS to create a Quiz application. The Quiz will test your knowledge in several fields, great for students. As well this app offers fun quizzes! Click the name QuizzyPop! to be taken to it.</p>
                    </div>
                </div>
            </div>       
        </section>
    );
}

export default Projects;
