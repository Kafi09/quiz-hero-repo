import React from 'react';
import './SingleQuiz.css'

const SingleQuiz = ({option}) => {
    
    return (
        <div>
            <div className='opt-con'>
                {option}
            </div>
        </div>
    );
};

export default SingleQuiz;