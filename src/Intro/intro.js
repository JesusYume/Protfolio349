import React from 'react';
import './intro.css';
import rocket from '../images/rocket.png';

const intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className='introText'>My name is Jesus Castillo </span>
                <p className = "introPara">I am a soon to be graduate from Cal State University - Fullerton with a degree in Physics and Computer Science.</p>
                <p className = "introPara">I am really into the Universe and Astrophysics as a field.</p>
                <p className = "introPara">Email: jesuscastillo019s@gmail.com</p>
            </div>
            <img src={rocket} alt="rocket.png" className='introImg'/>
        </section>
    );
}

export default intro;