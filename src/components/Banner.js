import React, { useState, useEffect } from "react";
import { Container, Form, Row,Col,Button } from "react-bootstrap";
import { GetBannerHeight,GetBannerMargin } from "./functions";
import NavBar from "./navBar";
import FooterCar from "./FooterCar";
import LandingPage from "./LandingPage";
const Banner = () => {
  const banM = GetBannerMargin();
  return (
    <>
    <NavBar/>
    <section className="banner" style={{marginTop:banM}}>
      <Container >
        <Form className="centered-form">
          <h1 >Reserve a Vehicle</h1>
            <Row className="banner-res">
            {/* controlId="formGridZip2" cada form.group */}
                <Form.Group as={Col} >
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group as={Col} >
                  <Form.Label>Zip</Form.Label>
                  <Form.Control id="formGridCity"/>
                </Form.Group>
            </Row>
            <Row className="banner-res">  
              <Form.Group as={Col} >
                <Form.Label>Pick-up</Form.Label>
                <Form.Control type="date" id="date" name="date"/>
                <Form.Control type="time" id="time" name="time"/>
              </Form.Group>
              <Form.Group as={Col} >
                <Form.Label>Return</Form.Label>
                <Form.Control type="date" id="date1" name="date"/>
                <Form.Control type="time" id="time1" name="time"/>
              </Form.Group>
              <Form.Group as={Col} >
                <Form.Label>Render Age</Form.Label>
                <Form.Select />
              </Form.Group>
            </Row>
            <Row className="banner-res">
              <Col sm={9}>
              <Form.Group as={Col} >
                  <Form.Label>Corporate Account Number</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Col>
              <Col sm={3}>
                <Button type="submit">
                  Browse Vehicles
                </Button>
              </Col>    
            </Row>
            
          </Form>
      </Container>  
    </section>
    <LandingPage/>
    
    <FooterCar/>
    </>
    
  );
};
export default Banner;