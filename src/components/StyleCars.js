import React, { useState, useEffect,useRef,useContext} from "react";
import { GoPeople } from "react-icons/go";
import { PiBagSimple } from "react-icons/pi";
import { TbManualGearbox } from "react-icons/tb";
import { Container,Row,Col, Button,Card,ListGroup } from "react-bootstrap";
import BannerCar from "./BannerCar";
import NavBar from "./navBar";
import FooterCar from "./FooterCar";
import ListOfCars from "./ListOfCars";
import ListOfTypesOfCars from "./ListOfTypesOfCars";
import { Link, useNavigate } from "react-router-dom";
import { getMaxHeight } from "./functions";;
const StyleCars=()=>{
    const [widthx,setWidthx]=useState("")

    const valAux = localStorage.getItem('auxiliar')
   

    const listT = ListOfTypesOfCars.filter(typ => typ.typeOfCar === valAux);  
    const carTypes = ListOfCars.filter(car => car.type === valAux);
    const handleCarTextChange = (text) => {

        localStorage.setItem('auxInfoCar',text)
      };

      useEffect(() => {
        window.scrollTo(0, 0);
        const onWidth=()=>{
            if(window.innerWidth<780){
              setWidthx(true);
            } else{
              setWidthx(false);
            }
          }
          window.addEventListener('load',onWidth);
          window.addEventListener('resize',onWidth);
          return()=>window.removeEventListener('resize',onWidth);
          window.removeEventListener('load',onWidth);
      }, []);



    return(
        <>
        <NavBar/>
        <BannerCar/>
        <section className="style-car" >
            <Container >
                {listT.map((typ,index)=>(
                    <div key={index}>
                        <Row>
                            <Col sm={10}>
                                <h1>{typ.heading}</h1>
                                <p>{typ.paragraph}</p>
                            </Col>
                            <Col sm={2}>
                                <Button>Start a Reservation</Button>
                            </Col>
                        </Row>
                    </div>
                ))}
            </Container>
            <Container>
                    {carTypes.map((car,index)=>(
                        <div key={index} className={widthx?"card-column-one":"card-column"}>
                            <Row >
                                <Col >
                                    <Card >
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
                                            <Button onClick={()=>handleCarTextChange(car.text)}>
                                                View Details
                                            </Button>
                                        </Link>    
                                    </ListGroup>
                                    </Card>
                                </Col>
                            </Row>
                        
                        </div>
                    ))}    
            </Container>
        </section>
        <FooterCar/>
        </>
    );
}
export default StyleCars;