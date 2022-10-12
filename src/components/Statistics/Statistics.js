import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



const Statistics = () => {
    const quiz = useLoaderData().data;
    return (
        <div>
            <section>
                <div>
                    <BarChart
                        width={500}
                        height={300}
                        data={quiz}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" fill="#82ca9d" />
                    </BarChart>
                </div>
            </section>

        </div>
    );
};

export default Statistics;