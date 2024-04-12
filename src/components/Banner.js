import React, { useState, useEffect } from "react";
import { Container, Form, Row,Col,Button } from "react-bootstrap";
import { GetBannerHeight,GetBannerMargin } from "./functions";
import NavBar from "./navBar";
import FooterCar from "./FooterCar";
import LandingPage from "./LandingPage";
import ListOfCars from "./ListOfCars";
const Banner = () => {
  const [carSelected, setCarSelected]=useState([false,false]);
  const banM = GetBannerMargin();
  const [typeCar,setTypeCar]=useState(null)
  const [typeCarImg,setTypeCarImg]=useState(null)
  const [titleCar,setTitleCar]=useState("")
  const [selectedValueCar, setSelectedValueCar] = useState('');
  const [selectedValueCarPrice, setSelectedValueCarPrice] = useState('');


  const [city,setCity]=useState("")
  const [zip,setZip]=useState("")
  const [type,setType]=useState("")
  const [model,setModel]=useState("")
  const [pickUpDate,setPickupDate]=useState("")
  const [pickUpTime,setPickupTime]=useState("")
  const [returnDate,setReturnDate]=useState("")
  const [returnTime,setReturnTime]=useState("")
  const [price,setPrice] = useState("")
  const [age,setAge] = useState("")
  const [phone,setPhone] = useState("")
  const [email,setEmail] = useState("")

  const formInitialDetails = {
    city: '',
    zip: '',
    type: '',
    model: '',
    pickUpDate: '',
    pickUpTime: '',
    returnDate: '',
    returnTime: '',
    price:'',
    age: '',
    number: '',
    email: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/banner", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
};



 const handleSelectChange = (e)=>{
  const selectedValue = e.target.value;
  const filteredCars = ListOfCars.filter(car => car.type === selectedValue);
  const title = selectedValue.toUpperCase() + " CARS";
  if (selectedValue === "") { 
    setCarSelected([false, false]);
    setTitleCar(""); 
    setSelectedValueCar("");
  } else {
    setTypeCar(filteredCars);
    setCarSelected([true, false]);
    setTitleCar(title);
    setSelectedValueCar(selectedValue);
  }
 }

 const handleSelectChangeCar = (e)=>{
  const selectedValue = e.target.value;
  const filteredCars = typeCar.filter(car => car.title === selectedValue);
  
  if (selectedValue === "") { 
    setTypeCarImg("");
    setCarSelected([true,false]);
    setSelectedValueCar("")
  } else {
    setTypeCarImg(filteredCars);
    setCarSelected([true,true]);
    setSelectedValueCar(selectedValue);
    setSelectedValueCarPrice("");
  }
 }

 const handleSelectChangeCarPrice = (e)=>{
  const selectedValue = e.target.value;
  setSelectedValueCarPrice(selectedValue);
 }
  return (
    <>
    <NavBar/>
    <section className="banner" style={{marginTop:banM}}>
      <Container >
          <form name="rentalcars" method="POST" className="centered-form">
          <input type="hidden" name="form-name" value="rentalcars"/>
            <h1>Reserve a Vehicle</h1>
            <Row className="banner-res">
              <Col>
                <label>City</label><br/>
                  <input type="text" placeholder="City" value={city} name="city" id="city"  onChange={(e)=>setCity(e.target.value)} required/> 
              </Col>
              <Col>
                <label>Zip</label><br/>
                  <input type="text" placeholder="zip" value={zip} name="zip" id="zip"  onChange={(e)=>setZip(e.target.value)} required/>
              </Col>
            </Row>

            <Row className="banner-res">
              <Col >
                <label>Type of Car</label> <br/>
                  <select id="type" name="type" value={type} onChange={(e)=>setType(e.target.value)} required>
                    <option value="" >Select your type of car:</option>
                    <option value="compact">Compact Cars</option>
                    <option value="SUV">SUVs</option>
                    <option value="truck">Truck</option>
                    <option value="vans">Vans</option>
                    <option value="luxury">Luxury Cars</option>
                    <option value="awd">AWD, 4x4 Cars</option>
                  </select>
                </Col>

                {carSelected[0]?(
                <Col >
                  <label>{titleCar}</label><br/>
                  <select id="model" name="model" value={model} onChange={(e)=>setModel(e.target.value)} required >
                    <option value="" >Select your type of car:</option>
                    {typeCar.map((car,index)=>(
                        <option key={index} value={car.title}>{car.text}</option>
                      ))}
                  </select>
                </Col>
                ):(
                null
                )
              }
            </Row>
            {carSelected[1]?(
              <Row className="banner-res">
                  {typeCarImg.map((car,index)=>(
                    <img key={index} src={car.img} alt={`Car ${car.title}`} style={{ width: '50%', margin:'auto' }}/>
                  ))}
              </Row>
              ):(
              null
              )
            }
            <Row className="banner-res">  
              <Col>
                <label>Pick-Up</label><br/>
                  <input type="date" id="pickUpDate" name="pickUpDate" value={pickUpDate} onChange={(e)=>setPickupDate(e.target.value)} required/>
                  <input type="time" id="pickUpTime" name="pickUpTime" value={pickUpTime} onChange={(e)=>setPickupTime(e.target.value)} required/>
              </Col>
              <Col>
              <label>Return</label><br/>
                  <input type="date" id="returnDate" name="returnDate" value={returnDate} onChange={(e)=>setReturnDate(e.target.value)} required/>
                  <input type="time" id="returnTime" name="returnTime" value={returnTime} onChange={(e)=>setReturnTime(e.target.value)} required/>
              </Col>
            </Row>

            <Row className="banner-res">
              <Col>
              {carSelected[1]?(
                <div className="priceCar">
                <label>Select Price</label><br/>
                  <select value={price} className="priceCar"  id="price" name="price" onChange={(e)=>setPrice(e.target.value)} required>
                    <option value="">Select your type of car:</option>
                    {typeCarImg.map((car,index)=>(
                        <option key={index} value={car.price}>{car.price}</option>
                      ))}
                  </select>
                </div>
                ):(
                  null
                  )}
                  
                  </Col>
                  <Col sm={carSelected[1]?null:12}>
              <label>Render Age</label><br/>
                <select id="age" name="age" value={age} onChange={(e)=>setAge(e.target.value)} required>
                  <option value="" >Select your age:</option>
                  <option value='18'>18</option>
                  <option value='19'>19</option>
                  <option value='20'>20</option>
                  <option value='21'>21</option>
                  <option value='22'>22</option>
                  <option value='23'>23</option>
                  <option value='24'>24</option>
                  <option value='25+'>25+</option>
                </select>
              </Col>
            </Row>
            <Row className="banner-res">
              <Col>
                <label>Phone Number</label><br/>
                <input type="tel" name="phone" id="phone" value={phone} pattern="[+]?[0-9\s-]*" placeholder="+1 XXX XXX XXXX" onChange={(e)=>setPhone(e.target.value)} required/>   
              </Col>
              <Col >
                <label>Email address</label><br/>
                <input type="email" value={email} placeholder="name@example.com" name="email" id="email" onChange={(e)=>setEmail(e.target.value)} required/>
              </Col>
            </Row>
            <Row className="banner-res">
              <Col sm={3}>
                  <Button type="submit">
                  <span>{buttonText}</span>
                  </Button>
                </Col>    
                {/* {
                    status.message &&
                    <Col>
                      <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                    </Col>
                  } */}
            </Row>
          </form>

      </Container>  
    </section>
    <LandingPage/>
    
    <FooterCar/>
    </>
  );
};
export default Banner;