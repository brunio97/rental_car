import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Card, Row,Col,Button,Carousel } from "react-bootstrap";
import { FaTag,FaEnvelopeOpenText,FaMedal } from "react-icons/fa";
import compact from '../assets/cars/compact.avif'
import luxury from '../assets/cars/luxury.avif'
import suv from '../assets/cars/suv.avif'
import truck from '../assets/cars/truck.avif'
import van from '../assets/cars/van.avif'
import career from '../assets/cards/career.webp'
import standardOfCare from '../assets/cards/standardOfCare.jpeg'
import solutions from '../assets/cards/solutions.jpeg'
import tax from '../assets/cards/tax.avif'
import app from '../assets/cards/app.webp'
import people from '../assets/cards/people.jpeg'
import pursuit from '../assets/cards/pursuit.jpeg'

const LandingPage = () => {
   
    const handleCarChange = (text) => {
        localStorage.setItem('auxiliar',text);
      };
 return (
        <section className="landing-page">
            <Container>
                <Row sm={12}>
                    <Col sm={4}>
                        <Card >
                        <a href="CurrentDeals"><FaTag className="icon-card"/></a>
                            <Card.Body>
                                <Card.Title><a href="#">Current Deals&gt;</a> </Card.Title>
                                <Card.Text>
                                Explore our current deals and promotions or start a reservation to find the right vehicle at everyday low rate.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card >
                        <a href="#"><FaEnvelopeOpenText className="icon-card"/></a>
                            <Card.Body>
                                <Card.Title><a href="#">Your Kind of Travel Planning&gt;</a> </Card.Title>
                                <Card.Text>
                                    Sign Up to receive our latest benefits, updates and great rates delivered to your box.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card >
                            <a href="#"><FaMedal className="icon-card"/></a>
                            <Card.Body>
                                <Card.Title><a href="#">Plus Program&gt;</a></Card.Title>
                                <Card.Text>
                                    You could be earning  points toward free rentals. What are you  waiting for?
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <section className="fleet">
                <Container >
                <h2>Meet the Fleet</h2>
                <Carousel>
                <Carousel.Item>
                <img src={compact} alt="Example of Compact car"/>
                    <Carousel.Caption>
                    <Link to= "/StyleCars" onClick={()=>handleCarChange('compact')}>
                    <h3>Compact Cars</h3>
                    </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={luxury} alt="Example of luxury car" />
                    <Carousel.Caption>
                    <Link to= "/StyleCars" onClick={()=>handleCarChange('luxury')}>
                    <h3>Luxury Cars</h3>
                    </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src={suv} alt="Example of SUV "/>
                    <Carousel.Caption>
                    <Link to= "/StyleCars" onClick={()=>handleCarChange('SUV')}>
                    <h3>Standard SUVs</h3>
                    </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src={van} alt="Example of Minivan"/>
                    <Carousel.Caption>
                    <Link to= "/StyleCars" onClick={()=>handleCarChange('vans')}>
                    <h3>Minivan</h3>
                    </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src={truck} alt="Example of Pickup"/>
                    <Carousel.Caption>
                    <Link to= "/StyleCars" onClick={()=>handleCarChange('truck')}>
                    <h3>PickUp Trucks</h3>
                    </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                <Button href="CarRental">View All Vehicles</Button>
                </Container>
            </section>

            <section className="latest-offering">
                <Container >
                    <h2>Latest Offerings</h2>
                    <Row sm={12}>
                        <Col sm={3}> 
                            <Card>
                            <Card.Img variant="top" src={standardOfCare} />
                            <Card.Body>
                                <Card.Title>Our Standard of Care</Card.Title>
                                <Card.Text>
                                Our commitment to ensure you always have a clean, well-maintained vehicle.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={3}>
                        <Card>
                            <Card.Img variant="top" src={solutions} />
                            <Card.Body>
                                <Card.Title>Mobility Solutions</Card.Title>
                                <Card.Text>
                                Offers customized solutions for the short term or the long haul.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={3}>
                        <Card>
                            <Card.Img variant="top" src={tax} />
                            <Card.Body>
                                <Card.Title>It's Tax Refund Season</Card.Title>
                                <Card.Text>
                                Shop our selection of quality used vehicles this tax season - with many under $20,000.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={3}>
                        <Card>
                            <Card.Img variant="top" src={career} />
                            <Card.Body>
                                <Card.Title>Career</Card.Title>
                                <Card.Text>
                                Get ready to start your journey.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="programs">
            <Container >
                    <h2>Programs</h2>
                    <Row className="prog-view" sm={12}>
                        <Col sm={4}> 
                            <Card>
                            <Card.Body>
                                <Card.Title><a >Business Rentals</a></Card.Title>
                                <Card.Text>
                                    Our customized rental programs are designed specifically to meet your company's needs, saving you time and money.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title><a >Truck Rental</a></Card.Title>
                                <Card.Text>
                                Needsomething bigger for your Business? Check out <a >xxx.com</a> for a broader selection.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title><a>Replacement Rentals</a> </Card.Title>
                                <Card.Text>
                                Is your vehicle in the shop? After an accident the average time for repair is two weeks. We have the vehicle you need to keep your life moving.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            
            <Container className="culture">
                    <h2>Culture</h2>
                    <Row sm={12}>
                        <Col sm={4}> 
                            <Card>
                            <Card.Img variant="top" src={app} />
                            <Card.Body>
                                <Card.Title>The App</Card.Title>
                                <Card.Text>
                                Our iOS and Android apps make it easier than ever to manage reservations on the go.
                                </Card.Text>
                                <Button disabled >Coming Soon</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={4}>
                        <Card>
                            <Card.Img variant="top" src={people} />
                            <Card.Body>
                                <Card.Title>Our People</Card.Title>
                                <Card.Text>
                                Every day at Rent-A-Car is different. We care about of our customers.
                                </Card.Text>
                                <Button href="MeetOurPeople" >Learn More</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={4}>
                        <Card>
                            <Card.Img variant="top" src={pursuit} />
                            <Card.Body>
                                <Card.Title>Pursuits</Card.Title>
                                <Card.Text>
                                Plan your next road trip, weekend getaway or personal challenge.
                                </Card.Text>
                                <Button href="RoadTrip">Learn More</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </section>
 );
};
export default LandingPage;