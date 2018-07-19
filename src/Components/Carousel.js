import React from 'react';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

export default (props) => {
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
                {props.photos.map((pic, i) => {
                    return (
                        <img src={pic.src} alt={pic.alt}/>
                )    
            })}
        </Coverflow>
    </StyleRoot>
        
    )
}