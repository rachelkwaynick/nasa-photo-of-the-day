import React from 'react';


export default function Card(props) {

    const { picDetails } = props;

    return (
        <div className='container'>

            <img src={picDetails.hdurl} />

            <div className='info'>
                <p>{picDetails.title}</p>
                <p>{picDetails.copyright}</p>
                <p>{picDetails.date}</p>
                <p>{picDetails.explanation}</p>

            </div>

        </div>
    )
}