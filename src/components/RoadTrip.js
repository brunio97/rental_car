import React, { useState, useEffect } from "react";
import { Container,Row,Col,Card } from "react-bootstrap";
import NavBar from "./navBar";
import FooterCar from "./FooterCar";
import {GetBannerMargin } from "./functions";
import { Link,useNavigate, useSearchParams } from 'react-router-dom';
import car from '../assets/car.jpg'
import jeepWrangler4Door from '../assets/cars/AWD/jeepWrangler4Door.avif'
import road from '../assets/road.jpg'
import OlympicNationalPark from '../assets/OlympicNationalPark.jpeg'
import capeCod from '../assets/capeCod.jpg'
const Accident=()=>{
    const banM=GetBannerMargin();
    return(
        <>
        <NavBar/>
        <section className="about-us" style={{marginTop:banM}}>
            <Container>
                <h1>Road Trips and Driving Guides</h1>
                <p>On a road trip, oftentimes it’s all about the journey and not the final destination. Whether you want to explore the road less traveled, or you're just looking for a way to get home, Rent-a-Car can help. Below you’ll find a variety of road trip guides for popular destinations across the U.S. with easy-to-follow itineraries and recommendations. From visiting small New England towns along the East Coast to following the surf and sand on the West Coast, we have you covered. Start planning your road trip today!</p>
                <Row>
                    <Col sm={7}>
                        <h1>Tips for Planning Your Road Trip</h1>
                        <p>Is it better to rent a car for a road trip? Do you know what to pack for your vacation? Find answers to these questions and more with help from Rent-a-Car! We've got helpful tips to help you plan the perfect family trip.</p>
                    </Col>
                    <Col sm={5}>
                        <img src={car} alt="" />
                    </Col>
                </Row>
                <Row>
                    <Col sm={5}>
                        <img src={jeepWrangler4Door} alt="" />
                    </Col>
                    <Col sm={7}>
                        <h1>Choose Your Destination</h1>
                        <p>Oh, the places you'll go! Whether you're planning a solo trip or starting a new family tradition, it's important to pick the perfect destination for your trip. Check out some of our favorite places to vacation at. </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={7}>
                        <h1>Best Road Trip Cars</h1>
                        <p>From cross-country road trips to weekend getaways, finding the right vehicle for road trip can make all the difference. Check out our selection of cars, trucks, SUVs and more so you can find the perfect car for your vacation.</p>
                    </Col>
                    <Col sm={5}>
                        <img src={road} alt="" />
                    </Col>
                </Row>
                <hr/>
                <Container>
                <Row >
                    <h2 >Featured Road Trips</h2>
                    <Col>
                        <img className="road-trip-img" src={OlympicNationalPark} alt="Olympic National Park"/>
                        <h3>Best National Park Road Trips</h3>
                        <p>Whether you're looking for adventure in Yellowstone or searching for the perfect camping spot in Olympic National Park, Rent-a-Car will help get you there.</p>
                    </Col>
                    <Col>
                    <img className="road-trip-img" src={capeCod} alt="Cape Cod "/>
                        <h3>New York City to Cape Cod</h3>
                        <p>Rent a car from Rent-a-Car and enjoy a gorgeous, scenic drive from New York City to Cape Cod. Relish in the stunning colors along the East Coast as you make your way to your destination.</p>
                    </Col>
                </Row>
                </Container>
            </Container>
        </section>
        <FooterCar/>
        </>   
    );
}
export default Accident;