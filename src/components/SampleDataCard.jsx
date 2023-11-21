import React from 'react'
import './sampledata.scss'
import 'bootstrap/dist/css/bootstrap.css';

const SampleDataCard = ({ description, url, types, topics, levels }) => {
    return (
        <div className='card'>
            <div className="card-body">
                <h6 className='card-title'>{description}</h6>
                <p className='card-text'>URL: {url}</p>
                <p className='card-text'>Type: {types}</p>
                <p className='card-text'>Topics: {topics}</p>
                <p className='card-text'>Levels: {levels}</p>
            </div>
        </div>
    )
}

export default SampleDataCard
