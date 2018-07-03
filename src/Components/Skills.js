import React from 'react'
import './skills.css'

export default () => {
    return (
        <div className='allSkills' >
            <h2>My Skills</h2>
            <div className='skills' >
                <div >
                    <img src={require("./Logos/html5.svg")} alt="" />
                    <h5>HTML 5</h5>
                </div>
                <div id="css">
                    <img src={require("./Logos/CSS.svg")} alt="" />
                    <h5>CSS 3</h5>
                </div>
                <div>
                    <img src={require("./Logos/javascript.png")} alt="" />
                    <h5>Javascript</h5>
                </div>
                <div>
                    <img src={require("./Logos/react.png")} alt="" />
                    <h5>React</h5>
                </div>
                <div>
                    <img src={require("./Logos/redux.png")} alt="" />
                    <h5>Redux</h5>
                </div>
                <div>
                    <img src={require("./Logos/nodejs.png")} alt="" />
                    <h5>Node.js</h5>
                </div>
                <div>
                    <img src={require("./Logos/express.png")} alt="" />
                    <h5>Express</h5>
                </div>
                <div>
                    <img src={require("./Logos/massive.png")} alt="" />
                    <h5>Massive</h5>
                </div>
                <div>
                    <img src={require("./Logos/postgreSQL.png")} alt="" />
                    <h5>PostgreSQL</h5>
                </div>
                <div>
                    <img src={require("./Logos/postman.png")} alt="" />
                    <h5>Postman</h5>
                </div>
                <div>
                    <img src={require("./Logos/git.png")} alt="" />
                    <h5>Git</h5>
                </div>
                <div>
                    <img src={require("./Logos/jest.png")} alt="" />
                    <h5>Jest</h5>
                </div>
                {/* <div>
                <img src={require("./Logos/")} alt="" />
                <h5></h5>
            </div> */}
            </div>

        </div>
    )
}
