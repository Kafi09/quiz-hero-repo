import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizzz from './Quizzz/Quizzz';

const Quiz = () => {
    const name = useLoaderData().data;
    const question = useLoaderData().data.questions;
    console.log(question);
    return (
        <div>
            <h3>Exam Name: {name.name}</h3>
            {
                question.map(quizzz => <Quizzz
                    key={quizzz.name}
                    quizzz={quizzz}
                >
                </Quizzz>)
            }
        </div>
    );
};

export default Quiz;