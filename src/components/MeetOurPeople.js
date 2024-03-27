import React, { useState, useEffect } from "react";
import { Container,Row,Col,Carousel } from "react-bootstrap";
import NavBar from "./navBar";
import FooterCar from "./FooterCar";
import {GetBannerMargin } from "./functions";
import { Link,useNavigate, useSearchParams } from 'react-router-dom';
import car from '../assets/car.jpg'
import { FaHandshake,FaTools,FaBuilding } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { MdPerson,MdPerson2,MdPerson3,MdPerson4 } from "react-icons/md";
const MeetOurPeople=()=>{
    const banM=GetBannerMargin();
    return(
        <>
        <NavBar/>
        <section className="about-us" style={{marginTop:banM}}>
            <Container>
                <h1>Life at Rent-a-Car</h1>
                <h2>At Rent-a-Car you’ll take care of customers, connect with your community and live our values. And learn what goes into managing a multimillion-dollar business.</h2>
                <Row>
                    <Col>
                    <h3>A Corporate Culture With Family Values at the Core</h3>
                    <p>A corporate culture with family values at the core
The Rent-a-Car Rent-A-Car culture is built on a set of founding values that helps us create relationships with our customers, our communities, our partners, as well as one another. There's a reason why the Rent-a-Car Management Training program is repeatedly recognized as a great place to launch your career. 

You'll get hands-on experience that teaches you how to run a business, empower teams and provide excellent face-to-face customer service. A strong promote-from-within philosophy gives thousands of employees the opportunity take on new challenges throughout our global network—it's an outstanding company that will help you build a career. But don't take our word for it. Here are some things employees have to say:</p>
                    </Col>
                    <Col>
                    <h3>The Rent-a-Car Mission</h3>
                    <ul>
                        <li>To provide our employees with a great place to work.</li>
                        <li>To be the best transportation service provider in the world. </li>
                        <li>To exceed our customers’ expectations for service, quality and value.</li>
                        <li>o serve our communities as a committed corporate citizen.  </li>
                    </ul>
                    </Col>
                </Row>

                <Carousel>
                    <Carousel.Item>
                        <Row className="row-person">
                        <Col>
                            <div className="icon-person">
                                <MdPerson/>
                            </div>
                        </Col>
                        <Col className="about-personal" >
                            <h3>Name:XXX-X.</h3>
                            <p>Joined Rent-a-Car in:</p>
                            <p>2009</p>
                            <p>Role: XXXXX</p>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="row-person">
                        <Col>
                            <div className="icon-person">
                                <MdPerson2/>
                            </div>
                        </Col>
                        <Col>
                            <h3>Name:XXX-X.</h3>
                            <p>Joined Rent-a-Car in:</p>
                            <p>2009</p>
                            <p>Role: XXXXX</p>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="row-person">
                        <Col>
                            <div className="icon-person">
                                <MdPerson3/>
                            </div>
                        </Col>
                        <Col>
                            <h3>Name:XXX-X.</h3>
                            <p>Joined Rent-a-Car in:</p>
                            <p>2009</p>
                            <p>Role: XXXXX</p>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="row-person">
                        <Col>
                            <div className="icon-person">
                                <MdPerson4/>
                            </div>
                        </Col>
                        <Col>
                            <h3>Name:XXX-X.</h3>
                            <p>Joined Rent-a-Car in:</p>
                            <p>2009</p>
                            <p>Role: XXXXX</p>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
        <FooterCar/>
        </>   
    );
}
export default MeetOurPeople;