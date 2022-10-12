import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizLoad from '../QuizLoad/QuizLoad';
import './Home.css'

const Home = () => {
    const quiz = useLoaderData().data;
    return (

        <div>
            <div className='welcome-container'>
                <h2>Welcome to Quiz Hero</h2>
            </div>

            <div>
                <div className='load-map'>
                    {
                        quiz.map(quizLoad => <QuizLoad
                            key={quizLoad.name}
                            quizLoad={quizLoad}
                        >
                        </QuizLoad>)
                    }

                </div>


            </div>

        </div>


    );
};

export default Home;