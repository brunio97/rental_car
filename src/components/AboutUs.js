import React, { useState, useEffect } from "react";
import { Container,Row,Col,Card } from "react-bootstrap";
import NavBar from "./navBar";
import FooterCar from "./FooterCar";
import {GetBannerMargin } from "./functions";
import { Link,useNavigate, useSearchParams } from 'react-router-dom';
import car from '../assets/car.jpg'
import { FaHandshake,FaTools,FaBuilding } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
const AboutUS=()=>{
    const banM=GetBannerMargin();
    return(
        <>
        <NavBar/>
        <section className="about-us" style={{marginTop:banM}}>
            <h1>About Rent-a-car</h1>
            <h2>What's the Rent-a-Car Way? Taking care of our customers, our communities, our employees and our environment.</h2>
            <Row>
                <Col>
                <h3>Culture and hard work created Rent-a-Car</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
                </Col>
                <Col>
                <h3>Did you know?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Col>
            </Row>
            <Row>
                <Col sm={2}>
                <h1>Values</h1>
                </Col>
                <Col sm={6}>
                <h4>“Take care of your customers and employees first, and the profits will follow.”</h4>
                <p><strong>It all started with seven cars and a hunch</strong></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Col>
                <Col sm={4}>
                    <img src={car} alt="car" />
                </Col>
            </Row>
        </section>
        <FooterCar/>
        </>   
    );
}
export default AboutUS;