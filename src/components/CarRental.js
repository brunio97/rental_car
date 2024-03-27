import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./navBar";
import FooterCar from "./FooterCar";
import { Container,Row,Col, Button } from "react-bootstrap";
import { GoPeople } from "react-icons/go";
import { PiBagSimple } from "react-icons/pi";
import cars1 from '../assets/cars/cars1.avif'
import cadillac from '../assets/cars/cadillac.avif'
import F150 from '../assets/cars/F150.avif'
import JEEP from '../assets/cars/JEEP.avif'
import NV200 from '../assets/cars/NV200.avif'
import TAHOE from '../assets/cars/TAHOE.avif'
import { GetBannerMargin } from "./functions";
const CarRental=()=>{
    const banM = GetBannerMargin();
    const handleCarChange = (text) => {
    
        localStorage.setItem('auxiliar',text)
      };

      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
         <NavBar/>
        <section className="car-rental" style={{marginTop:banM}}>
            <Container>
                <Row>
                    <Col sm={9}>
                    <Link to= "/StyleCars" onClick={()=>handleCarChange('compact')}>
                    <h1>Cars </h1>
                    </Link>< GoPeople/><h6>4-5 People</h6><PiBagSimple/><h6>2-4 Bags</h6>
                    <p>Choose from a variety of rental cars in this category including economy, full-size or luxury sedans. Whether you are looking for fuel-efficiency, space, or comfort and style you are sure to find the perfect rental car no matter whether you are going on a quick family visit or an adventurous road trip.</p>
                    <Link to="/StyleCars">
                    <Button onClick={()=>handleCarChange('compact')}>View Car Classes</Button>
                    </Link>
                    </Col>
                    <Col>
                    <img src={cars1} alt="Compact Car" />
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col sm={9}>
                    <Link to= "/StyleCars" onClick={()=>handleCarChange('SUV')}>
                    <h1>SUVs</h1>
                    </Link>< GoPeople/><h6>4-7 People</h6><PiBagSimple/><h6>2-5 Bags</h6>
                    <p>Our SUVs offer plenty of flexibility with seating capacity, power, and luggage room. Whether you are going on a weekend family trip or exploring the countryside we are sure to have the ideal SUV for your needs.</p>
                    <Link to="/StyleCars">
                    <Button onClick={()=>handleCarChange('SUV')}>View SUV Classes</Button>
                    </Link>
                    </Col>
                    <Col>
                    <img src={TAHOE} alt="Chevrolet Tahoe" />
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col sm={9}>
                    <Link to= "/StyleCars" onClick={()=>handleCarChange('truck')}>
                    <h1>Trucks</h1>
                    </Link>< GoPeople/><h6>4 People</h6><PiBagSimple/><h6>2-4 Bags</h6>
                    <p>Whether you’re hauling large items for a DIY project or packing up for a weekend retreat, our pickup trucks have the space, power and durability ideal for your needs. Rent-a-Car Rent-A-Car locations do not allow a hitch to be attached or towing of any kind with the rental vehicle.</p>
                    <Link to="/StyleCars">
                    <Button onClick={()=>handleCarChange('truck')}>View Truck Classes</Button>
                    </Link>
                    </Col>
                    <Col>
                    <img src={F150} alt="F150 Ford" />
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col sm={9}>
                    <Link to= "/StyleCars" onClick={()=>handleCarChange('vans')}>
                    <h1>Vans</h1>
                    </Link>< GoPeople/><h6>2-15 People</h6><PiBagSimple/><h6>1-5 Bags</h6>
                    <p>Need extra room for people, luggage, or cargo or both? Our minivans and passenger vans can seat up to 7 and 15 passengers respectively and are great for family vacations or accommodating large groups. Cargo vans are ideal for transporting bulky items that may not fit in your personal vehicle.</p>
                    <Link to="/StyleCars">
                    <Button onClick={()=>handleCarChange('vans')}>View Van Classes</Button>
                    </Link>
                    </Col>
                    <Col>
                    <img src={NV200} alt="NV200 Nissan" />
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col sm={9}>
                    <Link to= "/StyleCars" onClick={()=>handleCarChange('luxury')}>
                    <h1>Luxury Cars</h1>
                    </Link>< GoPeople/><h6>4-8 People</h6><PiBagSimple/><h6>2-7 Bags</h6>
                    <p>Looking for an upscale driving experience? Our luxury rental cars have plenty of power, modern technology, and creature comforts, making them perfect for business travel or long trips.</p>
                    <Link to="/StyleCars">
                    <Button onClick={()=>handleCarChange('luxury')}>View Luxury Car Classes</Button>
                    </Link>
                    </Col>
                    <Col>
                    <img src={cadillac} alt="Cadillac" />
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col sm={9}>
                    <Link to= "/StyleCars" onClick={()=>handleCarChange('awd')}>
                    <h1>AWD & 4x4 Cars</h1>
                    </Link>< GoPeople/><h6>4-8 People</h6><PiBagSimple/><h6>3-7 Bags</h6>
                    <p>Browse our selection of AWD and 4x4 rental cars for your next adventure. Whether you're traveling for business or taking a family vacation, our selection of all-wheel drive and 4x4 vehicles will help you get there.</p>
                    <Link to="/StyleCars">
                    <Button onClick={()=>handleCarChange('awd')}>View AWD & 4x4 Car Classes</Button>
                    </Link>
                    </Col>
                    <Col>
                    <img src={JEEP} alt="Jeep" />
                    </Col>
                </Row>
            </Container>
        </section>
        <FooterCar/>
        </>
    );
}
export default CarRental;