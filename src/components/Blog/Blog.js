import React from 'react';

const Blog = () => {
    return (
        <div>
            <section class="px-5 pt-5">
                <h1 class="fs-4">Q1:What is the purpose of react router?</h1>
                <p class="fs-5">Ans: React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>

                <h1 class="fs-4">Q2:How does contex api works?</h1>
                <p class="fs-5">Ans: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>

                <h1 class="fs-4">Q3:How does useRef works in React?</h1>
                <p class="fs-5">Ans: 
                    useRef() hook creates references. Calling const reference = useRef(initialValue) with the initial value returns a special object named reference. The reference object has a property current : you can use this property to read the reference value reference. current , or update reference.</p>
            </section>
        </div>
    );
};

export default Blog;