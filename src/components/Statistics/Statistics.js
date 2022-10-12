import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



const Statistics = () => {
    const quiz = useLoaderData().data;
    return (
        <div>
            <section>
                <div>
                   
                </div>
            </section>

        </div>
    );
};

export default Statistics;