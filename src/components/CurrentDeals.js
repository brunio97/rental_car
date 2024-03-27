import React, { useState, useEffect } from "react";
import { Container,Row } from "react-bootstrap";
import NavBar from "./navBar";
import FooterCar from "./FooterCar";
import {GetBannerMargin } from "./functions";
import { Link,useNavigate, useSearchParams } from 'react-router-dom';
const CurrentDeals=()=>{
    const banM=GetBannerMargin();
    return(
        <>
        <NavBar/>
        <section className="current-deals" style={{marginTop:banM}}>
            <Container>
                <Row>
                    <h1>Car Rental Deals & Promotions</h1>
                    <p>Explore our current deals and promotions below, or start a reservation to find the right vehicle at everyday low rates.</p>
                </Row>
                <Row>
                    <h2>Featured Deals</h2>
                    <h3>"Currently, there are no deals available. Please check back later for our latest offers."</h3>
                </Row>
                <Row>
                    <h2>Promotions</h2>
                    <h3>"Currently, there are no promotions available. Please check back later for our latest offers."</h3>
                </Row>
            </Container>
        </section>
        <FooterCar/>
        </>
        
    );
}
export default CurrentDeals;