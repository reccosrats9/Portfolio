import React from 'react'
import './Projects.css'
// import { Carousel } from 'react-bootstrap'
import Carousel from './Carousel'

export default () => {
    let projects = [
        {
            name: 'My Price Flights',
            live: "https://mypriceflights.com",
            github: "https://github.com/reccosrats9/MyPriceFlights",
            photos: [
                {
                    src: 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=Y073vSvhXCpH1h5PcC3O9U1TlyE%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWi8LJbee-Cl9UBCLCkAjQA2d-e1EmXlF465Kt_uedgij5PlcZD5agYUbhl4lWdI',
                    alt: 'Landing'
                },
                {
                    src: 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=8iu51wyYevzJekmfOXLqqDPOGKs%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWi8esHZfLXz8UBEKn1UjQA0fL21ETCwEI7vf4Lse9h0iMPgd8H5agYUbhl4lWdI',
                    alt: 'Home'
                },
                {
                    src: 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=7vhIek3nKivI6qi2RPMGSWX9bdw%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjrL5SJL-PzpEATfnkHjQBneuq1ETjoEY68LN_tf9513cPnJML5agYUbhl4lWdI',
                    alt: 'Match'
                }
            ],
            tech: 'REACT | NODE | CRON | STRIPE | TWILIO | AUTH0 | POSTGRES ',
            details: [
                'Allows users to input desired flight routes and prices, then notifies the user via text if a flight meeting specifications is found. Match dates, airlines, and prices are displayed on the user’s page.',
                "Utilized React with particle.js and CSS styling to create a visually pleasing and intuitive user interface, allowing new users to quickly and simply use the app. Stripe payments enabled for users desiring more than 3 routes.",
                "Developed server in Node.js, using Auth0 for authorization and connecting to Postgres database built on Heroku.",
                'Scheduled API calls to to Skyscanner using Cron; identified matches to user specifications via javascript and notified users via text (Twilio) up to once a week per route match.',
                "Winner of “Most Technical” award."
            ]
        },
        {
            name: 'MedTel',
        live: 'https://medtel.devmtn-projects.com',
        github: 'https://github.com/CARSDev/MedTel',
            photos: [
                {
                    src: require('./Logos/MTsched.png'),
                    alt: 'Scheduler'
                },
                {
                    src: require('./Logos/MTdash.png'),
                    alt: 'Patient Dashboard'
                },
                {
                    src: require('./Logos/MTpt.png'),
                    alt: 'Patient List'
                },
                {
                    src: require('./Logos/MTemp.png'),
                    alt: 'Admin View'
                }
            ],
            tech: '',
            details: [
                'Worked with team to develop electronic medical charting system with minimal clicks and attractive page views.',
                'Developed ability for users to schedule patient visits (custom built scheduler with Moment), track visits, conditions, allergies, medical devices, medications, family medical history, and lab/imaging results.',
                'Built complex server and database to manage large data amounts for each patient and employee.',
                'Developed custom middleware and account security using bcrypt.'
            ]
        }
    ]
    return (
        <div className="projects" >
            <h2>Projects</h2>
            {projects.map((val, i) => {
                return (
                    <div className='proj' key={i} >
                        <div className="projHeader">
                            <h3>{val.name}</h3>
                            <div className="projLinks" >
                                <a href={val.live} target="_blank">
                                    <h5> Live Site</h5>
                                </a>
                                <a href={val.github} target="_blank">
                                    <h5>Github Repo</h5>
                                </a>
                            </div>
                        </div>
                        <Carousel photos={val.photos} />
                        <div>

                            <h4>{val.tech}</h4>
                            <ul>
                                {val.details.map((p, i) => {
                                    return (
                                        <li key={i}>{p}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
