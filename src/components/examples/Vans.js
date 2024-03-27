import React, { useState, useEffect } from "react";
import { GoPeople } from "react-icons/go";
import { PiBagSimple } from "react-icons/pi";
import { TbManualGearbox } from "react-icons/tb";
import { Container,Row,Col, Button,Card,ListGroup } from "react-bootstrap";
import BannerCar from "../BannerCar";
import NavBar from "../navBar";
import FooterCar from "../FooterCar";
import ListOfCars from "../ListOfCars";
const Vans=()=>{
    const carCompact = ListOfCars.filter(car => car.type === 'vans')
    return(
        <>
        <NavBar/>
        <BannerCar/>
        <section className="style-car" >
            <Container >
                <Row>
                    <Col sm={10}>
                    <h1>Rental Vans</h1>
                    <p>Need extra room for people, luggage, or cargo or both? Our minivans and passenger vans can seat up to 7 and 15 passengers respectively and are great for family vacations or accommodating large groups. Cargo vans are ideal for transporting bulky items that may not fit in your personal vehicle.</p>
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
export default Vans;