import React, { useState, useEffect} from "react";
import { useParams, useLocation ,Link, useNavigate } from "react-router-dom";
import { GoPeople } from "react-icons/go";
import { PiBagSimple } from "react-icons/pi";
import { TbManualGearbox } from "react-icons/tb";
import NavBar from "./navBar";
import FooterCar from "./FooterCar";
import ListOfCars from "./ListOfCars";
import { Container,Row,Col,ListGroup,Button,Card } from "react-bootstrap";
import { GetBannerMargin } from "./functions";
const CarInfo =()=>{
    const [widthx,setWidthx]=useState("")
    const banM=GetBannerMargin();
    const infoAuxCar = localStorage.getItem('auxInfoCar')

    const carInfo = ListOfCars.filter(car => car.text === infoAuxCar);
    const typeCar = ListOfCars.filter(caro => caro.type === carInfo[0].type);

    const handleCarChange = (text) => {
        localStorage.setItem('auxInfoCar',text);
        window.location.reload();
      };

      useEffect(() => {
        window.scrollTo(0, 0);
        const onWidth=()=>{
            if(window.innerWidth<640){
              setWidthx(true);
            } else{
              setWidthx(false);
            }
          }
          window.addEventListener('load',()=>{window.scrollTo(0, 0);})
          window.addEventListener('resize',onWidth);
          return()=>window.removeEventListener('resize',onWidth)
      }, []);



    return(
        <>
        <NavBar/>
        <section className="style-car" style={{marginTop:banM}}>
            <Container>
            {carInfo.map((car,index)=>(
                <div key={index} className="car-info" >
                    <Container>
                    <h1>{car.title}</h1>
                    <p className="desc">{car.description}</p>
                </Container>
                <Container>
                    <Row>
                        <Col sm={6}>
                            <h2>{car.text}</h2>
                            <hr/>
                            <Row>
                                <Col>
                                    <h3>Details</h3>
                                </Col>
                                <Col>
                                    <h3>Features</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p><TbManualGearbox/> &nbsp;&nbsp;&nbsp;{car.gearBox}</p>
                                    <p><GoPeople/> &nbsp;&nbsp;&nbsp;{car.people} People</p>
                                    <p><PiBagSimple/> &nbsp;&nbsp;&nbsp;{car.bags} Bags</p>
                                </Col>
                                <Col>
                                    <ul>
                                        {car.features.map((feature,index)=>(
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={6}>
                        <img src={car.img} alt={`Car ${car.title}`}/>
                        </Col>
                    </Row>
                </Container>
                </div>
            ))}
            <Link to="/">
                <Button >Go to Reservation!</Button>
            </Link>
            </Container>

            <Container className="explore">
                <h1 >Explore Similar Vehicle Classes</h1>
            {typeCar.slice(0,3).map((car,index)=>(
                <div key={index} className={widthx?"card-column-one":"card-column"}>
                    <Card key={car.id}  >
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
                        <Link to="/CarInfo">
                            <Button onClick={()=>handleCarChange(car.text)}>View Details</Button>
                        </Link>
                    </ListGroup>
                    </Card>
                </div>
                    ))}
            </Container>
        </section>  
        <FooterCar/>
        </>
        
    )
}
    
export default CarInfo;