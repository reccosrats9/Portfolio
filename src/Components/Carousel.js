import React from 'react';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

export default () => {
    // let style = {
    //     height: '300px',
    //     width: '500px'
    // }
    return (
    <StyleRoot>
            <Coverflow className='carousel'
                displayQuantityOfSide={0.75}
                // navigation
                infiniteScroll
                enableHeading
            
                media={{
                    '@media (max-width: 900px)': {
                        width: '600px',
                        height: '300px'
                    },
                    '@media (min-width: 900px)': {
                        width: '555px',
                        height: '300px',
        }
    }}
>
                <img src='https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=Y073vSvhXCpH1h5PcC3O9U1TlyE%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWi8LJbee-Cl9UBCLCkAjQA2d-e1EmXlF465Kt_uedgij5PlcZD5agYUbhl4lWdI' alt='Landing' data-action="https://mypriceflights.com" target="_blank"/>
                <img src='https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=8iu51wyYevzJekmfOXLqqDPOGKs%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWi8esHZfLXz8UBEKn1UjQA0fL21ETCwEI7vf4Lse9h0iMPgd8H5agYUbhl4lWdI' alt='Home' data-action="https://mypriceflights.com" target="_blank"/>
                <img src='https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=7vhIek3nKivI6qi2RPMGSWX9bdw%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjrL5SJL-PzpEATfnkHjQBneuq1ETjoEY68LN_tf9513cPnJML5agYUbhl4lWdI' alt='Match' data-action="https://mypriceflights.com" target="_blank"/>
        </Coverflow>
    </StyleRoot>
        
    )
}