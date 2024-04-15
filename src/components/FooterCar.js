import React, { useState, useEffect,useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container,  Row,Col,Dropdown } from "react-bootstrap";
import { FaFacebook,FaTwitter,FaYoutube,FaExternalLinkAlt, FaMapMarkerAlt } from "react-icons/fa";
import playstore from '../assets/playstore.png';
import appStore from '../assets/appStore.png'
import { setwidth640 } from "./functions";
const FooterCar =()=>{
    const [footerWidth, setFooterWidth] = useState(setwidth640());
    const [isOpen, setIsOpen] = useState(Array(9).fill(false));

   
    
    const handleToggle = (nextOpenState, index) => {
        if (!isOpen[index] && nextOpenState) {
          window.scrollBy(0, 99999); 
          
          const element = document.getElementsByClassName('gtg')
          console.log(element)
          if (element){
            console.log("acaacaa")
           
          }else{
            console.log("nada")
          } 
        } 

        const newIsOpen = [...isOpen];
        newIsOpen[index] = nextOpenState; 
        setIsOpen(newIsOpen);


       
      };


    useEffect(() => {
        const handleResize = () => {
            setFooterWidth(setwidth640());
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); 

    return(

         <section className="footer">
            <hr/>
                {footerWidth?(
                    <Container className="footer-small">
                        <Row>
                        <Dropdown show={isOpen[0]} onToggle={(nextOpenState) => handleToggle(nextOpenState, 0)}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                            CAR RENTAL
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="gtg" >
                                <Link to="/CarRental">Watch All Vehicles&gt;</Link><br/>
                                <a className="unavailable" >Viwe/Modify/Cancel&gt;</a><br/>
                                <Link to="/CurrentDeals">All Deals & Coupons&gt;</Link><br/>
                                <a className="unavailable" >Moving Truck or Van Rentals </a><FaExternalLinkAlt className="unavailable"/><br/>
                                <a className="unavailable" >One-way Car Rentals&gt;</a><br/>
                                <a className="unavailable" >Long-Term Car Rentals&gt;</a><br/>
                                <a className="unavailable" >Subscribe&gt;</a>
                            </Dropdown.Menu>
                        </Dropdown>
                        </Row>
                        <Row>
                        <Dropdown show={isOpen[1]} onToggle={(nextOpenState) => handleToggle(nextOpenState, 1)}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                            REPLACEMENT RENTALS
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Link to="/Accident">Rent a Car After an Accident&gt;</Link><br/>
                                <a className="unavailable" >Dealership & Service Vehicles&gt;</a><br/>
                                <a className="unavailable">Paymant Options&gt;</a><br/>
                                <a className="unavailable">Rental Coverage&gt;</a><br/>
                                <a className="unavailable" >Rental Coverage Levels&gt;</a>    
                            </Dropdown.Menu>
                        </Dropdown>
                        </Row>
                        <Row>
                        <Dropdown show={isOpen[2]} onToggle={(nextOpenState) => handleToggle(nextOpenState, 2)}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                            BUSINESSES
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <a className="unavailable" >Solutions for Business&gt;</a><br/>
                            <a className="unavailable" >Truck Rental </a><FaExternalLinkAlt className="unavailable"/><br/>
                            <a className="unavailable" >Manage Your Fleet </a><FaExternalLinkAlt className="unavailable"/><br/>
                            <a className="unavailable" >Dealership Solutions & Technology&gt;</a><br/>
                            </Dropdown.Menu>
                        </Dropdown>
                        </Row>
                        <Row>
                        <Dropdown show={isOpen[3]} onToggle={(nextOpenState) => handleToggle(nextOpenState, 3)}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                            VEHICLES FOR RENT
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Link to="/CarRental">Cars, SUVs, Trucks & Vans&gt;</Link><br/>
                                <a className="unavailable" >Moving Trucks & Vans </a><FaExternalLinkAlt className="unavailable"/><br/>
                                <a className="unavailable" >Exotic Cars&gt;</a>
                            </Dropdown.Menu>
                        </Dropdown>
                        </Row>
                        <Row>
                        <Dropdown show={isOpen[4]} onToggle={(nextOpenState) => handleToggle(nextOpenState, 4)}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                            BUY A CAR
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <a className="unavailable">Browse Selection </a><FaExternalLinkAlt className="unavailable"/><br/>
                            <a className="unavailable" >Find a Dealership </a><FaExternalLinkAlt className="unavailable"/><br/>
                            <a className="unavailable">Vehicles under $25,000 </a><FaExternalLinkAlt className="unavailable"/>
                            </Dropdown.Menu>
                        </Dropdown>
                        </Row>
                        <Row>
                        <Dropdown show={isOpen[5]} onToggle={(nextOpenState) => handleToggle(nextOpenState, 5)}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                            CAR LOCATIONS
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <a href="">United States Car Rental Locations&gt;</a><br/>
                                <a className="unavailable" >Europe Car Rental Locations&gt;</a><br/>
                                <a className="unavailable" >Latin America & Caribbean Car Rental Locations&gt;</a><br/>
                                <a className="unavailable" >Asia & Pacific Car Rental Locations&gt;</a><br/>
                                <a className="unavailable" >All International Car Rental Locations&gt;</a>
                            </Dropdown.Menu>
                        </Dropdown>
                        </Row>
                        <Row>
                        <Dropdown show={isOpen[6]} onToggle={(nextOpenState) => handleToggle(nextOpenState, 6)}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                            OTHER LOCATIONS
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <a className="unavailable" >Truck Rental Locations </a><FaExternalLinkAlt className="unavailable"/><br/>
                                <a className="unavailable" >Car Sales Locations </a><FaExternalLinkAlt className="unavailable"/><br/>
                                <a className="unavailable" >Exotic Car Rental Locations&gt;</a><br/>
                                <a className="unavailable" >Car Share Locations </a><FaExternalLinkAlt className="unavailable"/><br/>
                                <a className="unavailable" >Fleet Management </a><FaExternalLinkAlt className="unavailable"/>
                            </Dropdown.Menu>
                        </Dropdown>
                        </Row>
                        <Row>
                        <Dropdown show={isOpen[7]} onToggle={(nextOpenState) => handleToggle(nextOpenState, 7)}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                            BUY A CAR
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <a className="unavailable">Shop Vehicles Under $20,000 </a><FaExternalLinkAlt className="unavailable"/><br/>
                                <a className="unavailable">Browser Selection </a><FaExternalLinkAlt className="unavailable"/><br/>
                                <a className="unavailable" >Find a Dealership </a><FaExternalLinkAlt className="unavailable"/><br/>
                                <a className="unavailable" >Why Buy a Car? </a><FaExternalLinkAlt className="unavailable"/><br/>
                            </Dropdown.Menu>
                        </Dropdown>
                        </Row>
                        <Row>
                        <Dropdown  show={isOpen[8]} onToggle={(nextOpenState) => handleToggle(nextOpenState, 8)} >
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                            PLAN YOUR PURCHASE
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <a className="unavailable">Start Your Purchase Online </a><FaExternalLinkAlt className="unavailable"/><br/>
                                <a className="unavailable" >Schedule Your Test Drive </a><FaExternalLinkAlt className="unavailable"/><br/>
                                <a className="unavailable" >Value Your Vehicle </a><FaExternalLinkAlt className="unavailable"/><br/>
                            </Dropdown.Menu>
                        </Dropdown>
                        </Row>
                        <Row className="row-icons-footer">
                        <Col > 
                            <a id="facebook" href="" ><FaFacebook  className="icon-footer"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a id="youtube" href=""><FaYoutube  className="icon-footer"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a id="twitter" href=""><FaTwitter  className="icon-footer"/></a>
                        </Col>                               
                    </Row>
                    <Row className="row-links-footer">
                        <Col>
                        <a href="">Terms of Use</a>
                            <a href="">Privacy Policy</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="">Cookie Policy</a>
                         </Col>
                        </Row>
                            <Row className="row-links-footer">  
                            <Col>      
                            <a href="">Privacy Choices</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="">Ad Choices</a>
                        </Col>
                    </Row>
                    </Container> 
                ):(
                    <Container className="footer-lg">
                        <Row className="rowc">
                        <Col className="c-bot" >
                            <Container >
                            <h2>CAR RENTAL</h2>
                                <Link to="/CarRental">Watch All Vehicles&gt;</Link><br/>
                                <a className="unavailable" >Viwe/Modify/Cancel&gt;</a><br/>
                                <Link to="/CurrentDeals">All Deals & Coupons&gt;</Link><br/>
                                <a className="unavailable" >Moving Truck or Van Rentals </a><FaExternalLinkAlt className="unavailable"/><br/>
                                <a className="unavailable" >One-way Car Rentals&gt;</a><br/>
                                <a className="unavailable" >Long-Term Car Rentals&gt;</a><br/>
                                <a className="unavailable" >Subscribe&gt;</a>
                            </Container>
                            <Container >
                            <h2>REPLACEMENT RENTALS</h2>
                                <Link to="/Accident">Rent a Car After an Accident&gt;</Link><br/>
                                <a className="unavailable" >Dealership & Service Vehicles&gt;</a><br/>
                                <a className="unavailable">Paymant Options&gt;</a><br/>
                                <a className="unavailable">Rental Coverage&gt;</a><br/>
                                <a className="unavailable" >Rental Coverage Levels&gt;</a>
                            </Container>
                            <Container>
                            <h2>BUSINESSES</h2>
                            <a className="unavailable" >Solutions for Business&gt;</a><br/>
                            <a className="unavailable" >Truck Rental </a><FaExternalLinkAlt className="unavailable"/><br/>
                            <a className="unavailable" >Manage Your Fleet </a><FaExternalLinkAlt className="unavailable"/><br/>
                            <a className="unavailable" >Dealership Solutions & Technology&gt;</a><br/>
                            </Container>
                        </Col>
                        <Col className="c-bot">
                            <Container>
                            <h2>VEHICLES FOR RENT</h2>
                                <Link to="/CarRental">Cars, SUVs, Trucks & Vans&gt;</Link><br/>
                                <a className="unavailable" >Moving Trucks & Vans </a><FaExternalLinkAlt className="unavailable"/><br/>
                                <a className="unavailable" >Exotic Cars&gt;</a>
                            </Container>
                            <Container>
                                <h2>BUY A CAR</h2>
                                <a className="unavailable">Browse Selection </a><FaExternalLinkAlt className="unavailable"/><br/>
                                <a className="unavailable" >Find a Dealership </a><FaExternalLinkAlt className="unavailable"/><br/>
                                <a className="unavailable">Vehicles under $25,000 </a><FaExternalLinkAlt className="unavailable"/>
                            </Container>
                            <Container>
                            <h2>CAR LOCATIONS</h2>
                                <a href="">United States Car Rental Locations&gt;</a><br/>
                                <a className="unavailable" >Europe Car Rental Locations&gt;</a><br/>
                                <a className="unavailable" >Latin America & Caribbean Car Rental Locations&gt;</a><br/>
                                <a className="unavailable" >Asia & Pacific Car Rental Locations&gt;</a><br/>
                                <a className="unavailable" >All International Car Rental Locations&gt;</a>
                            </Container>
                            <Container>
                            <h2>OTHER LOCATIONS</h2>
                                <a className="unavailable" >Truck Rental Locations </a><FaExternalLinkAlt className="unavailable"/><br/>
                                <a className="unavailable" >Car Sales Locations </a><FaExternalLinkAlt className="unavailable"/><br/>
                                <a className="unavailable" >Exotic Car Rental Locations&gt;</a><br/>
                                <a className="unavailable" >Car Share Locations </a><FaExternalLinkAlt className="unavailable"/><br/>
                                <a className="unavailable" >Fleet Management </a><FaExternalLinkAlt className="unavailable"/>
                            </Container>
                        </Col>
                        <Col className="c-bot">
                            <Container>
                            <h2>BUY A CAR</h2>
                                <a className="unavailable">Shop Vehicles Under $20,000 </a><FaExternalLinkAlt className="unavailable"/><br/>
                                <a className="unavailable">Browser Selection </a><FaExternalLinkAlt className="unavailable"/><br/>
                                <a className="unavailable" >Find a Dealership </a><FaExternalLinkAlt className="unavailable"/><br/>
                                <a className="unavailable" >Why Buy a Car? </a><FaExternalLinkAlt className="unavailable"/><br/>
                            </Container>
                            <Container>
                            <h2>PLAN YOUR PURCHASE</h2>
                                <a className="unavailable">Start Your Purchase Online </a><FaExternalLinkAlt className="unavailable"/><br/>
                                <a className="unavailable" >Schedule Your Test Drive </a><FaExternalLinkAlt className="unavailable"/><br/>
                                <a className="unavailable" >Value Your Vehicle </a><FaExternalLinkAlt className="unavailable"/><br/>
                            </Container>
                            <Container>
                                <a href=""><img src={appStore} alt="Download on the app Store" /></a><br/>
                                <a href=""><img src={playstore} alt="Download on the PlayStore" /></a>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="row-icons-footer">
                        <Col>
                            <a id="facebook" href=""><FaFacebook  className="icon-footer"/></a>
                            <a id="youtube" href=""><FaYoutube  className="icon-footer"/></a>
                            <a id="twitter" href=""><FaTwitter  className="icon-footer"/></a>
                        </Col>                               
                    </Row>
                    <Row className="row-links-footer">
                        <Col>
                        <a href="">Terms of Use</a>
                            <a href="">Privacy Policy</a>
                            <a href="">Cookie Policy</a>
                            <a href="">Privacy Choices</a>
                            <a href="">Ad Choices</a>
                        </Col>
                    </Row>
                  </Container>
                  )}
        </section>
  
       
    );
};
export default FooterCar;