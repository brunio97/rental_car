import React, { useState, useEffect } from "react";
import { Container,Row,Col } from "react-bootstrap";
import cadillac from '../assets/cars/cadillac.avif';
import cars1 from '../assets/cars/cars1.avif';
import F150 from '../assets/cars/F150.avif'
import { GetBannerMargin } from "./functions";
const BannerCar =()=>{
    const banM=GetBannerMargin();
    return(
        <section className="banner-car" style={{marginTop:banM}}>
            <Container>
                <Row>
                    <Col sm={4}>
                        <h1>Not Sure Wich Car to Pick?</h1>
                        <p>Find the perfect car that suits you</p>
                        <h2>"Rent a car with us and trust in our services"</h2>
                    </Col>
                    <Col>
                        <div className="row-cars">
                        <img src={cadillac} alt="cars together" />
                        </div>
                        <div className="row-cars">
                        <img src={cars1} alt="cars together" />
                        </div>
                        <div className="row-cars">
                        <img src={F150} alt="cars together" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    
                    </Col>
                    <Col>
                    
                    </Col>
                    <Col>
                    
                    </Col>
                {/* </Row>
                <Row> */}
                    <Col>
                    
                    </Col>
                    <Col>
                    
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default BannerCar;