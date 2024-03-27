import React, { useState, useEffect } from "react";
import { GoPeople } from "react-icons/go";
import { PiBagSimple } from "react-icons/pi";
import { TbManualGearbox } from "react-icons/tb";
import { Container,Row,Col, Button,Card,ListGroup } from "react-bootstrap";
import BannerCar from "../BannerCar";
import NavBar from "../navBar";
import FooterCar from "../FooterCar";
import ListOfCars from "../ListOfCars";
const Pickup=()=>{
    const carCompact = ListOfCars.filter(car => car.type === 'truck')
    return(
        <>
        <NavBar/>
        <BannerCar/>
        <section className="style-car" >
            <Container >
                <Row>
                    <Col sm={10}>
                    <h1>Rental Trucks</h1>
                    <p>Whether you’re hauling large items for a DIY project or packing up for a weekend retreat, our pickup trucks have the space, power and durability ideal for your needs. Rent-A-Car locations do not allow a hitch to be attached or towing of any kind with the rental vehicle.</p>
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
export default Pickup;