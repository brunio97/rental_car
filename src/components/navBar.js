import React, { useEffect, useState, useRef,useLayoutEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import {Container,Button, Nav, Offcanvas, Navbar,Row,Col,DropdownButton,Dropdown, Form,Tab,NavDropdown,Overlay} from 'react-bootstrap';
import rentCar from '../assets/rentCar.svg'
import { TiThMenuOutline } from "react-icons/ti";
import { FaExternalLinkAlt, FaMapMarkerAlt } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import car from '../assets/car.jpg'
import capeCod from '../assets/capeCod.jpg'
import fullsizeLuxurySedan from '../assets/cars/luxury/fullsizeLuxurySedan.png'
import {setWidth992,setCols} from './functions'
import TAHOE from '../assets/cars/TAHOE.avif'
import CargoVan from '../assets/cars/Vans/CargoVan.avif'
import people from '../assets/cards/people.jpeg'
const NavBar = () => {
  const [show, setShow] = useState([false,false,false,false,false,false]);
  const target = [useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),useRef(null)];
  const [activeLink, setActiveLink]=useState('home');
  const [selectedCurrency, setSelectedCurrency]=useState("USD ($)");
  const [scrolled, setScrolled]=useState(false);
  const [widthx, setWidthx]=useState(setWidth992());
  const [columnsm, setColumnsm]=useState(setCols(12,11));
  
  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  }
  const handleClose = (index) => {
    setShow((prevShow) =>
      prevShow.map((value, i) => (i === index ? !value : false))
    );
  };

  useEffect(()=>{
    const onScroll = ()=>{
      if (window.scrollY>200){
        setScrolled(true);
      }else{
        setScrolled(false);
      }
    }
    const onCols=()=>{
      if(window.innerWidth<992){
        setColumnsm(12);
      } else{
        setColumnsm(11);
      }
    }
    const onWidth=()=>{
      if(window.innerWidth<992){
        setWidthx(true);
      } else{
        setWidthx(false);
      }
    }
    window.addEventListener('resize',onWidth);
    window.addEventListener('resize',onCols)
    window.addEventListener('scroll',onScroll);
    return()=>window.removeEventListener('scroll',onScroll);
    window.removeEventListener('resize',onCols);
    window.removeEventListener('resize',onWidth)
  },[])

  const onUpdateLink = (value) => {
    setActiveLink(value);
  }

  const reservationContent = (
    <>
    <Row className="rowc">
      <Col className="c-bot" sm={widthx?4:3}>
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
      </Col>
      <Col className="c-bot" sm={widthx?4:3}>
        <Container >
          <h2>REPLACEMENT RENTALS</h2>
          <Link to="/Accident">Rent a Car After an Accident&gt;</Link><br/>
            <a className="unavailable" >Dealership & Service Vehicles&gt;</a><br/>
            <a className="unavailable">Paymant Options&gt;</a><br/>
            <a className="unavailable">Rental Coverage&gt;</a><br/>
            <a className="unavailable" >Rental Coverage Levels&gt;</a>
        </Container>
      </Col>
      <Col className="c-bot" sm={widthx?4:3}>
        <Container>
          <h2>BUSINESSES</h2>
          <a className="unavailable" >Solutions for Business&gt;</a><br/>
          <a className="unavailable" >Truck Rental </a><FaExternalLinkAlt className="unavailable"/><br/>
          <a className="unavailable" >Manage Your Fleet </a><FaExternalLinkAlt className="unavailable"/><br/>
          <a className="unavailable" >Dealership Solutions & Technology&gt;</a><br/>
        </Container>
      </Col>
      {widthx?(null):(<Col className="c-botc" sm={3}>
        <img src={car} alt="car-rent"/>
      </Col>)}  
    </Row>
    </>
  )
  const vehicleContent = (
    <>
     <Row className="rowc">
      <Col className="c-bot" sm={widthx?4:4}>
          <Container>
          <h2>VEHICLES FOR RENT</h2>
          <Link to="/CarRental">Cars, SUVs, Trucks & Vans&gt;</Link><br/>
          <a className="unavailable" >Moving Trucks & Vans </a><FaExternalLinkAlt className="unavailable"/><br/>
          <a className="unavailable" >Exotic Cars&gt;</a>
          </Container>
          </Col>
          <Col className="c-bot" sm={widthx?4:5}>
          <Container>
              <h2>BUY A CAR</h2>
              <a className="unavailable">Browse Selection </a><FaExternalLinkAlt className="unavailable"/><br/>
              <a className="unavailable" >Find a Dealership </a><FaExternalLinkAlt className="unavailable"/><br/>
               <a className="unavailable">Vehicles under $25,000 </a><FaExternalLinkAlt className="unavailable"/>
            </Container>
            </Col>
            <Col className="c-botc" sm={widthx?4:3}>
              <img src={TAHOE} alt="car-rent"/>
            </Col>
            </Row>
    </>
  );
  const locationContent = (
    <Row className="rowc">
      <Col className="c-bot" sm={4}>
        <Container>
          <h2>CAR LOCATIONS</h2>
          <a href="">United States Car Rental Locations&gt;</a><br/>
          <a className="unavailable" >Europe Car Rental Locations&gt;</a><br/>
          <a className="unavailable" >Latin America & Caribbean Car Rental Locations&gt;</a><br/>
          <a className="unavailable" >Asia & Pacific Car Rental Locations&gt;</a><br/>
          <a className="unavailable" >All International Car Rental Locations&gt;</a>
        </Container>
      </Col>
      <Col className="c-bot" sm={5}>
        <Container>
          <h2>OTHER LOCATIONS</h2>
          <a className="unavailable" >Truck Rental Locations </a><FaExternalLinkAlt className="unavailable"/><br/>
          <a className="unavailable" >Car Sales Locations </a><FaExternalLinkAlt className="unavailable"/><br/>
          <a className="unavailable" >Exotic Car Rental Locations&gt;</a><br/>
          <a className="unavailable" >Car Share Locations </a><FaExternalLinkAlt className="unavailable"/><br/>
          <a className="unavailable" >Fleet Management </a><FaExternalLinkAlt className="unavailable"/>
        </Container>
      </Col>
      <Col className="c-botc" sm={3}>
         <img src={capeCod} alt="car-rent"/>
      </Col>
  </Row>
  ); 
  const carSalesContent= (
    <Row className="rowc">
      <Col className="c-bot" sm={4}>
        <Container>
          <h2>BUY A CAR</h2>
          <a className="unavailable">Shop Vehicles Under $20,000 </a><FaExternalLinkAlt className="unavailable"/><br/>
          <a className="unavailable">Browser Selection </a><FaExternalLinkAlt className="unavailable"/><br/>
          <a className="unavailable" >Find a Dealership </a><FaExternalLinkAlt className="unavailable"/><br/>
          <a className="unavailable" >Why Buy a Car? </a><FaExternalLinkAlt className="unavailable"/><br/>
        </Container>
      </Col>
      <Col className="c-bot" sm={5}>
        <Container>
          <h2>PLAN YOUR PURCHASE</h2>
          <a className="unavailable">Start Your Purchase Online </a><FaExternalLinkAlt className="unavailable"/><br/>
          <a className="unavailable" >Schedule Your Test Drive </a><FaExternalLinkAlt className="unavailable"/><br/>
          <a className="unavailable" >Value Your Vehicle </a><FaExternalLinkAlt className="unavailable"/><br/>
        </Container>
      </Col>
      <Col className="c-botc" sm={3}>
        <img src={fullsizeLuxurySedan} alt="car-rent"/>
      </Col>
  </Row>
  );
  const forBusinessContent = (
    <Row className="rowc">
      <Col className="c-bot" sm={widthx?4:3}>
        <Container>
          <h2>SOLUTIONS FOR BUSINESS</h2>
          <a className="unavailable">Driving Business&gt;</a><br/>
          <a className="unavailable" >Rent-a-Car Business Rental Program&gt;</a><br/>
          <a className="unavailable" >Mileage Reimbursement Calculator&gt;</a><br/>
          <a className="unavailable" >Truck Rentals </a><FaExternalLinkAlt className="unavailable"/><br/>
          <a className="unavailable" >Entertainment & Production Rentals&gt;</a><br/>
          <a className="unavailable" >CarShare for Business </a><FaExternalLinkAlt className="unavailable"/><br/>
          <a className="unavailable" >Commute with Rent-a-Car </a><FaExternalLinkAlt className="unavailable"/><br/>
          <a className="unavailable" >Car Sales for Business </a><FaExternalLinkAlt className="unavailable"/><br/>
        </Container>
      </Col>
      <Col className="c-bot" sm={widthx?4:3}>
        <Container>
          <h2>Rent-a-Car FLEET MANAGEMENT</h2>
           <a className="unavailable" >Learn More about Fleet </a><FaExternalLinkAlt className="unavailable"/><br/>
           <a className="unavailable">Client Login </a><FaExternalLinkAlt className="unavailable"/><br/>
        </Container>
      </Col>
      <Col className="c-bot" sm={widthx?4:3}>
        <Container>
          <h2>PLAN YOUR PURCHASE</h2>
          <a className="unavailable" >Dealership Solutions & Technology</a><br/>
        </Container>
      </Col>
      {widthx?(null):(<Col className="c-botc" sm={3}>
        <img src={CargoVan} alt="car-rent"/>
      </Col>)}
    </Row>
  );
  const learnContent = (
    <Row className="rowc">
      <Col className="c-bot" sm={widthx?4:3}>
        <Container>
          <h2>THE COMPANY</h2>
          <Link to="/AboutUS">About Us&gt;</Link><br/>
          <a className="unavailable" >Total Mobility Solutions&gt;</a><br/>
          <Link to="/MeetOurPeople">Meet our People&gt;</Link><br/>
          <a className="unavailable" >Supporting those in Service&gt;</a><br/>
          <a className="unavailable" >Community & Sustainability&gt;</a><br/>
          <a className="unavailable" >Mobility </a><FaExternalLinkAlt className="unavailable"/><br/>
          <a className="unavailable" >Careers </a><FaExternalLinkAlt className="unavailable"/><br/>
        </Container>
      </Col>
      <Col className="c-bot" sm={widthx?4:3}>
        <Container>
          <h2>INSPIRATION</h2>
          <a className="unavailable" >Pursuits&gt;</a><br/>
          <a className="unavailable" >Scenic Drives by Pursuits&gt;</a><br/>
          <a className="unavailable" >Weekend Adventures by Pursuits&gt;</a><br/>
          <Link to="/RoadTrip">Road Trip Ideas&gt;</Link><br/>
        </Container>
      </Col>
      <Col className="c-bot" sm={widthx?4:3}>
        <Container>
          <h2>LOYALTY</h2>
          <a className="unavailable" >Plus Program&gt;</a><br/>
          <a className="unavailable" >Join Plus&gt;</a><br/>
          <a className="unavailable" >Complete Your Enrollment&gt;</a><br/>
        </Container>
      </Col>
      {widthx?(null):(<Col className="c-botc" sm={3}>
        <img src={people} alt="car-rent"/>
      </Col>)}
    </Row>
  );
return(
  <section className="NavBar">
    <Navbar expand="lg" className={scrolled? "scrolled":""} >
        <Navbar expand="lg" className={widthx?"resize-nav":"onon"} >
          <Container>
              <Navbar>
                <Container>
                <Navbar.Brand href="/">
                  <img src={rentCar} alt="Logo" />
                </Navbar.Brand>
                </Container>
              </Navbar>
          </Container>
        </Navbar>

        <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <span className="navbar-toggle-icon" ><TiThMenuOutline className="tog-icon"/></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container fluid>
            <Row>
              <Col sm={1}>
              <Navbar.Brand href="/" className={widthx?"onon":""}>
                <img src={rentCar} alt="Logo" />
              </Navbar.Brand>
              </Col>
              <Col sm={columnsm} >
                <Nav className="navtop" activeKey="/home">
                  {/*  <Nav.Link  href="SignUp">SignUp</Nav.Link>*/}
                
                  <Nav.Link className= 'unactive-link'>Career <FaExternalLinkAlt className="exticon" /></Nav.Link>
                  <DropdownButton className={activeLink === 'help'? 'active-drop': 'drop'} onClick={()=> onUpdateLink('help')} id="help" title="Help">
                    <Dropdown.ItemText>HELP & FAQS</Dropdown.ItemText>
                    <Link to="/Help">
                      <Button id="but-help" >Get Answer</Button>
                    </Link>
                    <Dropdown.Divider/>
                    <Dropdown.ItemText>NEED TO REACH US?</Dropdown.ItemText>
                    <Link to="/ContactUs">
                      <Button id="but-help1" >Contact Us</Button>
                    </Link>
                  </DropdownButton>
                  <DropdownButton className={activeLink === 'currency'? 'active-drop': 'drop'} onClick={()=> onUpdateLink('currency')} id="dropdown-item-button" title={selectedCurrency}>
                    <Dropdown.ItemText className="currency-text">SELECT YOUR CURRENCY?</Dropdown.ItemText>
                    <Form>
                        <div key={"radio"} className="currency-ratio">
                          <Form.Check label="EUR (€)" name="group1" type="radio" id={"radio-1"} value="EUR (€)" onChange={handleCurrencyChange}/>
                          <Form.Check label="USD ($)" name="group1" type="radio"  id={"radio-2"} value="USD ($)"  onChange={handleCurrencyChange}  checked={selectedCurrency === "USD ($)"}/>
                          <Form.Check label="CAD ($)" name="group1" type="radio" id={"radio-3"} value="CAD ($)" onChange={handleCurrencyChange}/>
                        </div>
                    </Form>
                  </DropdownButton>   
                  <Nav.Link  className= 'unactive-link'><FaMapMarkerAlt className="exticon"/>  Find a Location</Nav.Link> 
                </Nav>
              </Col>
            </Row>
            <Row className="colo">
                <Col sm={12}>
                  <Nav variant="pills" className="nav-pills" id="pills-tab" >
                    <Nav.Item><Button ref={target[0]} onClick={() =>handleClose(0)}>Reservation</Button>
                    {widthx?(
                    <Offcanvas show={show[0]} onHide={handleClose} placement='right'>
                      <Offcanvas.Header  closeButton>
                      </Offcanvas.Header >
                      <Offcanvas.Body >
                        {reservationContent}
                      </Offcanvas.Body>
                    </Offcanvas>):(<Overlay target={target[0].current} show={show[0]} placement="bottom">
                      {({
                        placement: _placement,
                        arrowProps: _arrowProps,
                        show: _show,
                        popper: _popper,
                        hasDoneInitialMeasure: _hasDoneInitialMeasure,
                        ...props
                      }) => (
                        <div
                          {...props}
                          style={{
                            position: 'absolute',
                            backgroundColor: '#fff',
                            padding: '2px 10px',
                            color: '#000',
                            borderRadius: 3,
                            ...props.style,
                          }}
                        >
                          {reservationContent}
                        </div>
                      )}
                    </Overlay>)}
                    </Nav.Item> 
                    <Nav.Item><Button ref={target[1]} onClick={() => handleClose(1)}>Vehicles</Button>
                    {widthx?(
                    <Offcanvas show={show[1]} onHide={handleClose} placement='right'>
                      <Offcanvas.Header closeButton>
                      </Offcanvas.Header>
                      <Offcanvas.Body >
                        {vehicleContent}
                      </Offcanvas.Body>
                    </Offcanvas>):(<Overlay target={target[1].current} show={show[1]} placement="bottom" >
                      {({
                        placement: _placement,
                        arrowProps: _arrowProps,
                        show: _show,
                        popper: _popper,
                        hasDoneInitialMeasure: _hasDoneInitialMeasure,
                        ...props
                      }) => (
                        <div
                          {...props}
                          style={{
                            position: 'absolute',
                            backgroundColor: '#fff',
                            padding: '2px 10px',
                            color: '#000',
                            borderRadius: 3,
                            ...props.style,
                          }}
                        >
                        {vehicleContent}
                        </div>
                      )}
                    </Overlay>)}
                    </Nav.Item>
                    <Nav.Item><Button ref={target[2]} onClick={() => handleClose(2)}>Location</Button>
                    {widthx?(
                      <Offcanvas show={show[2]} onHide={handleClose} placement='right'>
                      <Offcanvas.Header closeButton>
                      </Offcanvas.Header>
                      <Offcanvas.Body >
                        {locationContent}
                      </Offcanvas.Body>
                    </Offcanvas>
                    ):(<Overlay target={target[2].current} show={show[2]} placement="bottom" >
                      {({
                        placement: _placement,
                        arrowProps: _arrowProps,
                        show: _show,
                        popper: _popper,
                        hasDoneInitialMeasure: _hasDoneInitialMeasure,
                        ...props
                      }) => (
                        <div
                          {...props}
                          style={{
                            position: 'absolute',
                            backgroundColor: '#fff',
                            padding: '2px 10px',
                            color: '#000',
                            borderRadius: 3,
                            ...props.style,
                          }}
                        >
                        {locationContent}
                        </div>
                      )}
                    </Overlay>)}
                    </Nav.Item>
                    <Nav.Item><Button ref={target[3]} onClick={() => handleClose(3)}>Car Sales</Button>
                    {widthx?(
                      <Offcanvas show={show[3]} onHide={handleClose} placement='right'>
                      <Offcanvas.Header closeButton>
                      </Offcanvas.Header>
                      <Offcanvas.Body >
                        {carSalesContent}
                      </Offcanvas.Body>
                    </Offcanvas>
                    ):(<Overlay target={target[3].current} show={show[3]} placement="bottom" >
                      {({
                        placement: _placement,
                        arrowProps: _arrowProps,
                        show: _show,
                        popper: _popper,
                        hasDoneInitialMeasure: _hasDoneInitialMeasure,
                        ...props
                      }) => (
                        <div
                          {...props}
                          style={{
                            position: 'absolute',
                            backgroundColor: '#fff',
                            padding: '2px 10px',
                            color: '#000',
                            borderRadius: 3,
                            ...props.style,
                          }}
                        >
                         {carSalesContent}
                        </div>
                      )}
                    </Overlay>)}
                    </Nav.Item>
                    <Nav.Item><Button ref={target[4]} onClick={() => handleClose(4)}>For Business</Button>
                    {widthx?(
                      <Offcanvas show={show[4]} onHide={handleClose} placement='right'>
                      <Offcanvas.Header closeButton>
                      </Offcanvas.Header>
                      <Offcanvas.Body >
                        {forBusinessContent}
                      </Offcanvas.Body>
                    </Offcanvas>
                    ):(<Overlay target={target[4].current} show={show[4]} placement="bottom" >
                      {({
                        placement: _placement,
                        arrowProps: _arrowProps,
                        show: _show,
                        popper: _popper,
                        hasDoneInitialMeasure: _hasDoneInitialMeasure,
                        ...props
                      }) => (
                        <div
                          {...props}
                          style={{
                            position: 'absolute',
                            backgroundColor: '#fff',
                            padding: '2px 10px',
                            color: '#000',
                            borderRadius: 3,
                            ...props.style,
                          }}
                        >
                         {forBusinessContent}
                        </div>
                      )}
                    </Overlay>)}
                    </Nav.Item>
                    <Nav.Item><Button ref={target[5]} onClick={() => handleClose(5)}>Learn</Button>
                    {widthx?(
                      <Offcanvas show={show[5]} onHide={handleClose} placement='right'>
                      <Offcanvas.Header closeButton>
                      </Offcanvas.Header>
                      <Offcanvas.Body >
                        {learnContent}
                      </Offcanvas.Body>
                    </Offcanvas>
                    ):(<Overlay target={target[5].current} show={show[5]} placement="bottom" >
                      {({
                        placement: _placement,
                        arrowProps: _arrowProps,
                        show: _show,
                        popper: _popper,
                        hasDoneInitialMeasure: _hasDoneInitialMeasure,
                        ...props
                      }) => (
                        <div
                          {...props}
                          style={{
                            position: 'absolute',
                            backgroundColor: '#fff',
                            padding: '2px 10px',
                            color: '#000',
                            borderRadius: 3,
                            ...props.style,
                          }}
                        >
                        {learnContent}
                        </div>
                      )}
                    </Overlay>)}
                    </Nav.Item>

                   </Nav>
              </Col>
            </Row> 
          </Container> 
        </Navbar.Collapse>
    </Navbar>    
  </section>
);
}
export default NavBar;