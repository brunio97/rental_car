import React, { useState, useEffect} from "react";
import { GoPeople } from "react-icons/go";
import { PiBagSimple } from "react-icons/pi";
import { TbManualGearbox } from "react-icons/tb";
import { Container,Row,Col, Button,Card,ListGroup } from "react-bootstrap";
import BannerCar from "../BannerCar";
import NavBar from "../navBar";
import FooterCar from "../FooterCar";
import ListOfCars from "../ListOfCars";
import { Link, useNavigate } from "react-router-dom";
import { useCar} from '../CarTextProvider';

const Compact=()=>{
    const carCompact = ListOfCars.filter(car => car.type === 'compact')
    const { setCarText } = useCar();
    
    const handleCarTextChange = (text) => {
        setCarText(text);
      };

    return(
        <>
        <NavBar/>
        <BannerCar/>
        <section className="style-car" >
            <Container >
                <Row>
                    <Col sm={10}>
                    <h1>Rental Car Classes</h1>
                    <p>Choose from a variety of rental cars in this category including economy, full-size or luxury sedans. Whether you are looking for fuel-efficiency, space, or comfort and style you are sure to find the perfect rental car no matter whether you are going on a quick family visit or an adventurous road trip.</p>
                    </Col>
                    <Col sm={2}>
                    <Button>Start a Reservation</Button>
                    </Col>
                    </Row>
            </Container>
            <Container>
                    {carCompact.map((car,index)=>(
                        <div key={index} className="card-column">
                        <Card   >
                        <Card.Body>
                            <Card.Title>{car.title}</Card.Title>
                            <Card.Text>
                            {car.text}
                            </Card.Text>    
                        </Card.Body>
                        <Card.Img variant="top" src={car.img} alt={`${car.title} Car`} />
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>
                                <TbManualGearbox/>{car.gearBox} <GoPeople/> {car.people} People <PiBagSimple/> {car.bags} Bags
                            </ListGroup.Item> 
                            <Link to= "/CarInfo">
                                <button onClick={()=>handleCarTextChange(car.text)}>
                                    View Details
                                 </button>
                            </Link>    
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
export default Compact;