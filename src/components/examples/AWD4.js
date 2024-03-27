import React, { useState, useEffect } from "react";
import { GoPeople } from "react-icons/go";
import { PiBagSimple } from "react-icons/pi";
import { TbManualGearbox } from "react-icons/tb";
import { Container,Row,Col, Button,Card,ListGroup } from "react-bootstrap";
import BannerCar from "../BannerCar";
import NavBar from "../navBar";
import FooterCar from "../FooterCar";
import ListOfCars from "../ListOfCars";
const AWD=()=>{
    const carCompact = ListOfCars.filter(car => car.type === 'awd')
    return(
        <>
        <NavBar/>
        <BannerCar/>
        <section className="style-car" >
            <Container >
                <Row>
                    <Col sm={10}>
                    <h1>4x4 Rental Cars</h1>
                    <p>Browse our selection of AWD and 4x4 rental cars for your next adventure. Whether you're traveling for business or taking a family vacation, our selection of all-wheel drive and 4x4 vehicles will help you get there.</p>
                    </Col>
                    <Col sm={2}>
                    <Button>Start a Reservation</Button>
                    </Col>
                    </Row>
            </Container>
            <Container>
                    {carCompact.map(car=>(
                        <div key={car.id} className="card-column">
                        <Card   >
                        <Card.Body>
                            <Card.Title>{car.title}</Card.Title>
                            <Card.Text>
                            {car.text}
                            </Card.Text>    
                        </Card.Body>
                        <Card.Img variant="top" src={car.img} alt={`Car ${car.title}`} />
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>
                                <TbManualGearbox/>{car.gearBox} <GoPeople/> {car.people} People <PiBagSimple/> {car.bags} Bags
                            </ListGroup.Item>
                            <Button>View Details</Button>
                        </ListGroup>
                        </Card>
                        </div>
                    ))}
                
            </Container>
        </section>
        <FooterCar/>
        </>
    );
}
export default AWD;