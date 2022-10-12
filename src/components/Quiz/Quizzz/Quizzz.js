import React from 'react';
import SingleQuiz from '../../SingleQuiz/SingleQuiz';
import './Quizzz.css'


const Quizzz = ({ quizzz }) => {
    const { question, options } = quizzz;
    console.log(options)
    return (
        <div className='map-con'>
            <h2>{question}</h2>
            <div>
                {
                    options.map(option => <SingleQuiz option={option}></SingleQuiz> )
                }
            </div>
        </div>
    );
};

export default Quizzz;