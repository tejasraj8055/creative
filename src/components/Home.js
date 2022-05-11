import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import pic from '../pic.png'
import '../App.css';

const Home = () => {
  return (
    <div>
        <Row>
            <Col>
            <img src={pic}  alt="logo" />
            </Col>
            <Col>
            <h3 style={{ color: 'white' }}>Abhishek Choudhary</h3>
            <h1 style={{ color: 'white' }}>I'm a Full Stack </h1>
                <br />
                <h1 style={{ color: '#60F5EE' }}> Developer</h1>
            <p style={{ color: '#white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid minima omnis dolorum! Nostrum, facilis? Mollitia illum hic consequatur excepturi quos quae tempora neque, architecto eos totam quas inventore dolorem ipsa?</p>
            <Button variant="outline-info">DOWNLOAD CV</Button>
            </Col>
            
        </Row>
    </div>
  )
}

export default Home