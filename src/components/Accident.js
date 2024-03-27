import React, { useState, useEffect } from "react";
import { Container,Row,Col,Card } from "react-bootstrap";
import NavBar from "./navBar";
import FooterCar from "./FooterCar";
import {GetBannerMargin } from "./functions";
import { Link,useNavigate, useSearchParams } from 'react-router-dom';
import car from '../assets/car.jpg'
import { FaHandshake,FaTools,FaBuilding } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
const Accident=()=>{
    const banM=GetBannerMargin();
    return(
        <>
        <NavBar/>
        <section className="accident" style={{marginTop:banM}}>
            <Container>
                <Row>
                    <Col sm={8}>
                        <h1>Rent a Car After an Accident</h1>
                        <p>Was your vehicle recently damaged from an accident or weather? The average rental for a collision repair takes two weeks.* Wondering how you will get around without your vehicle? Rent-a-car can help.</p>
                        
                    </Col>
                    <Col className="img-a" sm={4}>
                     <img src={car} alt="Car"/>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col>
                    <h3>CONVENIENT & RELIABLE TRANSPORTATION</h3>
                    </Col>
                    <Col>
                    <p><em>Take advantage of our low rates while your car is being repaired</em></p>
                        <ul>
                            <li>We work with nearly all insurance companies and body shops and have 60 years' experience.</li>
                            <li>90% of Americans have an Rent-a-Car location within 15 minutes of their home. </li>
                            <li>We’ll pick you up® - from your body shop, home or work. And, we'll take you back when your repairs are complete.</li>
                            <li>Not sure how long you'll need the rental? No problem. No early return fees and our rates are valid until your vehicle is repaired.</li>
                        </ul>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <h3>How to get a rental car after an accident:</h3>
                </Row>
                <Row>
                    <Col>
                        <Card >
                        <div className="icons-accident">< FaHandshake/></div>
                        <Card.Body>
                            <Card.Title>Determine Who Is Paying</Card.Title>
                            <Card.Text>
                            If you are filing an insurance claim, ask the adjuster about a rental. Directly billing the insurance company is available for eligible claims, or you can take advantage of our low rates if you will be paying for rental car costs. 
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card >
                            <div className="icons-accident"><FaBuilding/></div>
                        <Card.Body>
                            <Card.Title>Schedule Rental & Repairs</Card.Title>
                            <Card.Text>
                            Reserve your rental for the same date you plan to drop your car at the shop. If your car is not safe to drive, you may need a vehicle now. Let us know if you need a ride from home or work. 
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card >
                        <div className="icons-accident"><FaTools/></div>
                        <Card.Body>
                            <Card.Title>Extend Your Rental</Card.Title>
                            <Card.Text>
                            Repairs can take longer than expected. Contact us to extend your rental. If an insurance company is paying, we work with the repair shop and the adjuster on extensions throughout the repair. 
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card >
                            <div className="icons-accident"><BiSolidLike/></div>
                        <Card.Body>
                            <Card.Title>Repairs Complete</Card.Title>
                            <Card.Text>
                            When your vehicle is complete, return the rental to Rent-a-Car and we can give you a ride to the repair facility. Any billing will need to be finalized with the insurance company before we close your rental contract. 
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
        <FooterCar/>
        </>   
    );
}
export default Accident;