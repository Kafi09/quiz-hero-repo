import React from 'react';
import SingleQuiz from '../../SingleQuiz/SingleQuiz';
import './Quizzz.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Quizzz = ({ quizzz }) => {
    const { question, options, correctAnswer } = quizzz;
    const correctbtn = (option) => {
        if (option === correctAnswer) {
            toast('right')
        } else {
            toast('wrong')
        }
    }
    return (
        <div className='map-con'>
            <h2>{question}</h2>
            <div>
                {
                    options.map(option => <SingleQuiz option={option} btnHandler={correctbtn}></SingleQuiz> )
                }
                <ToastContainer />
            </div>
            
        </div>
    );
};

export default Quizzz;