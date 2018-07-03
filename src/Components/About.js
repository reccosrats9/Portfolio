import React from 'react'
import './About.css'

export default () => {
    return (
        <div className='about'>
            <h2>About Me</h2>
            <div className='info' >
                <img src={require("./Logos/Professional.JPG")} alt="" className='me' />
                <div>
                    <h5>
                        Hi! I'm Shannon Adair, Registered Dietitian and wellness guru turned web developer.
                    </h5>
                    <h5>
                         My transition to web development originated from a strong desire to help shape the future of healthcare and other industries via tech. As I've gotten further into the field, I have grown to love the constant learning and puzzle solving skills coding requires. 
                    </h5>
                    <h5>
                        Beyond competency in development, I also bring to the table leadership skills, excellent customer service, capability and thirst for quick and continuous learning, and demonstrated strong work ethic. I derive high personal satisfaction from project accomplishment.
                    </h5>
                    <h5>
                        When I'm not coding, I'm usually reading a book, training for a triathlon, solving a crossword puzzle, cooking something delicious, traveling, or adventuring.
                    </h5>
                </div>
            </div>
        </div>
    )
}
