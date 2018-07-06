import React from 'react'
import './Projects.css'
// import { Carousel } from 'react-bootstrap'
import Carousel from './Carousel'

export default () => {
    return (
        <div className="projects" >
            <h2>Projects</h2>
            <div className='proj' >
                <div className="projHeader">
                    <h3>My Price Flights</h3>
                    <div className="projLinks" >
                    <a href="https://mypriceflights.com" target="_blank">
                        <h5> Live Site</h5>
                    </a>
                    <a href="https://github.com/reccosrats9/MyPriceFlights" target="_blank">
                        <h5>Github Repo</h5>
                    </a>
                    </div>    
                </div>
                <Carousel />
                <div>

                    <h4>REACT | NODE | CRON | STRIPE | TWILIO | AUTH0 | POSTGRES </h4>
                    <ul>
                        <li>
                            Allows users to input desired flight routes and prices, then notifies the user via text if a flight meeting specifications is found. Match dates, airlines, and prices are displayed on the user’s page.
                        </li>
                        <li>
                            Utilized React with particle.js and CSS styling to create a visually pleasing and intuitive user interface, allowing new users to quickly and simply use the app. Stripe payments enabled for users desiring more than 3 routes.
                        </li>
                        <li>
                            Developed server in Node.js, using Auth0 for authorization and connecting to Postgres database built on Heroku.
                        </li>
                        <li>
                            Scheduled API calls to to Skyscanner using Cron; identified matches to user specifications via javascript and notified users via text (Twilio) up to once a week per route match.
                        </li>
                        <li>
                            Winner of “Most Technical” award.
                        </li>
                    </ul>
                </div>  
            </div>
{/* {SECOND PROJECT} */}
            <div className='proj' >
                <div className="projHeader">
                    <h3>MedTel</h3>
                    {/* <div className="projLinks" >
                        <a href="https://mypriceflights.com" target="_blank">
                            <h5> Live Site</h5>
                        </a>
                        <a href="https://github.com/reccosrats9/MyPriceFlights" target="_blank">
                            <h5>Github Repo</h5>
                        </a>
                    </div> */}
                </div>
                {/* <Carousel /> */}
                <div>
                    <h4>Coming soon!</h4>

                    {/* <h4>REACT | NODE | CRON | STRIPE | TWILIO | AUTH0 | POSTGRES </h4>
                    <ul>
                        <li>
                            Allows users to input desired flight routes and prices, then notifies the user via text if a flight meeting specifications is found. Match dates, airlines, and prices are displayed on the user’s page.
                        </li>
                        <li>
                            Utilized React with particle.js and CSS styling to create a visually pleasing and intuitive user interface, allowing new users to quickly and simply use the app. Stripe payments enabled for users desiring more than 3 routes.
                        </li>
                        <li>
                            Developed server in Node.js, using Auth0 for authorization and connecting to Postgres database built on Heroku.
                        </li>
                        <li>
                            Scheduled API calls to to Skyscanner using Cron; identified matches to user specifications via javascript and notified users via text (Twilio) up to once a week per route match.
                        </li>
                        <li>
                            Winner of “Most Technical” award.
                        </li>
                    </ul> */}
                </div>
            </div>
        </div>
    )
}
