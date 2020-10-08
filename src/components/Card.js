import React from 'react';
import styled from 'styled-components'

const StyledCard = styled.div`
    border: 1px solid #d2d2d2;
    box-shadow: 0px 1px 6px -2px #807f7f;
    border-radius: 8px;
    margin-top: 16px;
    padding: 16px;
    width: 60%;


    img {
        width: 50%;
    }
`

export default function Card(props) {

    const { picDetails } = props;

    return (
        <StyledCard className='container'>

            <img src={picDetails.hdurl} />

            <div className='info'>
                <p>{picDetails.title}</p>
                <p>{picDetails.copyright}</p>
                <p>{picDetails.date}</p>
                <p>{picDetails.explanation}</p>

            </div>

        </StyledCard>
    )
}