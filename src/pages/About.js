import React from "react";
import BannerImage from '../assets/banner.jpg'

function About() {
    return (
        <div className="about">
            <div className='aboutTop' style={{ backgroundImage: `url(${BannerImage})` }}></div>
            <div className="aboutBottom">
                <h1>About Us</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam culpa
                    possimus aliquid delectus nisi accusantium ipsa sint, facilis velit.
                    Quam doloremque sequi laboriosam unde, voluptates sunt nisi obcaecati
                    tempora impedit?
                </p>
            </div>
        </div>
    );
}

export default About;
