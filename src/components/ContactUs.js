import React, { useState, useEffect } from "react";
import NavBar from "./navBar";
import FooterCar from "./FooterCar";
import {GetBannerMargin } from "./functions";
import { Link,useNavigate, useSearchParams } from 'react-router-dom';
import car from '../assets/car.jpg'
import jeepWrangler4Door from '../assets/cars/AWD/jeepWrangler4Door.avif'
import road from '../assets/road.jpg'
import OlympicNationalPark from '../assets/OlympicNationalPark.jpeg'
import capeCod from '../assets/capeCod.jpg'
import { Container, Row,Card,Col } from "react-bootstrap";
import { FaMailBulk,FaQuestionCircle,FaPhone } from "react-icons/fa";
const ContactUs=()=>{
    const banM=GetBannerMargin();
    return(
        <>
        <NavBar/>
        <section className="about-us" style={{marginTop:banM}}>
           <h1>We're Here to Help</h1>
           <p>Please select a topic below so we can provide the best assistance.</p>
            <Container>
                <Row>
                    <Col className="contact-us-cards">
                    <a href="" className="contact-us-cards">
                        <Card>
                        <div className="icon-contact-us-card">
                            <FaMailBulk/>
                        </div>
                        <Card.Body>
                            <Card.Title>Email Customer Support</Card.Title>
                            <Card.Text>
                            Get Help with Billing, reservations and more.<br/>
                            "Rent-a-Car"
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </a>
                    </Col>
                    <Col className="contact-us-cards">
                    <a href="Help" className="contact-us-cards">
                        <Card>
                        <div className="icon-contact-us-card">
                            <FaQuestionCircle/>
                        </div>
                        <Card.Body>
                            <Card.Title>Frequently Asked Questions</Card.Title>
                            <Card.Text>
                            Questions before, during or after your rental?<br/>
                            We have answers!
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </a>
                    </Col>
                </Row>
            </Container>   
            <Container>
                <h1>Help with Reservations</h1>
                <p>Rent-a-Car Car Rental Reservations</p>
                <p><FaPhone/> X-XXX-XXX-XXXX</p>
                <hr/>
                <p>en Español</p>   
                <p><FaPhone/> X-XXX-XXX-XXXX</p>
                <hr/>
                <h1>Customer Service & Support</h1>
                <p>Customer Service</p>
                <p><FaPhone/> X-XXX-XXX-XXXX</p>
                <hr/>
                <p>Rent-a-Car Plus® Member Services</p>
                <p><FaPhone/> X-XXX-XXX-XXXX</p>
                <hr/>
                <p>Customers with Disabilities</p>
                <p><FaPhone/> X-XXX-XXX-XXXX</p>
                <hr/>
              
            </Container>
        </section>
        <FooterCar/>
        </>   
    );
}
export default ContactUs;