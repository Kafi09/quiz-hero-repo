import React from 'react';
import './SingleQuiz.css'

const SingleQuiz = ({option, btnHandler}) => {
    
    return (
        <div>
            <div onClick={(e)=>btnHandler(e.target.innerText)} className='opt-con'>
                {option}
            </div>
        </div>
    );
};

export default SingleQuiz;