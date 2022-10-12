import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Quiz Hero</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    
                    <div className='nav-bar'>
                        <Nav>
                            <Link className='lip' to='/'>Home</Link>
                            <Link className='lip' to='/Quiz'>Quiz</Link>
                            <Link className='lip' to='Statistics'>Statistics</Link>
                            <Link className='lip' to='/Blog'>Blog</Link>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;