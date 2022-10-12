import React from 'react';
import './QuizLoad.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';


const QuizLoad = ({ quizLoad }) => {
    const { id, name, logo, total } = quizLoad;
    return (
        <Container className='box-con'>
            <Card style={{ width: '18rem' }} className='box'>
                <Card.Img className='bg-danger img' variant="top" src={logo} />
                <Card.Body className='bg-secondary'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Total Quiz: {total}
                    </Card.Text>
                    <Link to={`/Quiz/${id}`}>
                        <Button>Select</Button>
                    </Link>
                </Card.Body>
            </Card>
         </Container>
        
    );
    
};

export default QuizLoad;