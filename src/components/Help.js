import React, { useState, useEffect } from "react";
import NavBar from "./navBar";
import FooterCar from "./FooterCar";
import {GetBannerMargin } from "./functions";
import { Link,useNavigate, useSearchParams } from 'react-router-dom';
import car from '../assets/car.jpg'
import jeepWrangler4Door from '../assets/cars/AWD/jeepWrangler4Door.avif'
import road from '../assets/road.jpg'
import OlympicNationalPark from '../assets/OlympicNationalPark.jpeg'
import capeCod from '../assets/capeCod.jpg'

const Help=()=>{
    const banM=GetBannerMargin();
    return(
        <>
        <NavBar/>
        <section className="about-us" style={{marginTop:banM}}>
           <h1>Car Rental Frequently Asked Questions (FAQs)</h1>
           <p>Have a question about car rental? Browse the topics below or click on one of the questions to find an answer and get on the road! For quick tips on car rental, check out our car rental guide.</p>
           <h4>General Car Rental Questions</h4>
           <a href="#1">What are your driver license requirements for renting in the US and Canada?</a><br/>
           <a href="#2">Can I add an additional driver to my rental?</a><br/>
           <a href="#3">Do you accept Cash or Money Orders?</a><br/>
           <a href="#4">How much is a rental car?</a><br/>
           <a href="#5">How do I rent a car?</a><br/>
           <hr/>
           <div id="1">
            <h1>What are Your Driver's License Requirements</h1>
            <p>It is important that customers check with the appropriate Department of Motor Vehicles in the States or Provinces in which they intend to travel to ensure compliance with their various licensing laws. The following practices are used to ensure the customer is presenting a facially valid license at the time of rental.
Customers traveling to the United States and Canada from another country must present the following:</p>
            <ul>
                <li>Their home country driver's license that is valid, unexpired and includes a photograph. Digital licenses are not accepted</li>
                <li>If the home country driver's license is in a language other than English (or French, for rentals in Canada) and the letters are English (i.e. German, Spanish, etc.) an International Driver's Permit is recommended, but not required, for translation purposes in addition to the home country driver's license.</li>
                <li>If the home country driver's license is in a language other than English and the letters are not English (i.e. alphabet is not an extended Latin-based alphabet like German or Spanish but is Russian, Japanese, Arabic, etc.) an International Driver's Permit is required.</li>
            </ul>
           </div>
           <hr/>
           <div id="2">
            <h1>Can I Add an Additional Driver to My Rental Car? </h1>
            <p>Any additional driver (excluding a spouse or domestic partner) will pay a daily fee. Renter’s spouse or domestic partner who meet the same age and driver’s license requirements of the renter are authorized drivers at no additional charge. Any additional authorized drivers must appear at time of rental and meet age and driver’s license requirements. 
An additional charge of $15.00 per day for each additional authorized driver will be added to the cost of the rental, unless other contractual conditions apply.  In New York state, the additional authorized driver charge is $5 per day.
Fees are also waived for the following:</p>
            <ul>
                <li>Commercial (corporate) rentals</li>
                <li>Employer or fellow associate</li>
                <li>The renter's business partner</li>
            </ul>
           </div>
           <hr/>
           <div id="3">
            <h1>Can you rent a car with cash or money orders?</h1>
            <p>Some Enterprise Rent-A-Car locations may accept cash or money orders  to secure the rental transaction. To get specific requirements or to find out if the location you wish to rent from allows cash or money orders, please contact the renting location directly.</p>
            <p>Cash Qualification Requirements:</p>
            <ul>
                <li>Two current utility bills - example: water bill, gas bill, or an internet/cable bill. </li>
                <li>Your most recent paycheck stub</li>
                <li>A minimum deposit plus the entire cost of the rental at the time of pickup. Please see renter requirements policy when booking a reservation as the amount can vary between locations. </li>
            </ul>
           </div>
           <hr/>
           <div id="4">
            <h1>How much is a rental car?</h1>
            <p>The cost of a rental car depends on many factors and can vary greatly. These factors include:</p>
            <ul>
                <li>The length of time you are renting the car </li>
                <li>Car class selected</li>
                <li>Rental location </li>
            </ul>
           </div>
           <hr/>
           <div id="5">
            <h1>How Do I Rent a Car?</h1>
            <p>To rent a car from Enterprise, do the following:</p>
            <ul>
                <li>Visit our reservation page </li>
                <li>Type in the location you want to pick up/return your vehicle</li>
                <li>Enter your departure date and return date. Then select “Check Availability.”</li>
                <li>Next, choose the type of vehicle you want for your trip.</li>
                <li>Add any additional items to your rental, like Sirius XM radio or a child car seat.</li>
                <li>Review your reservation, add in your contact information and confirm your reservation by clicking “Confirm Booking.”
</li>
            </ul>
           </div>
        </section>
        <FooterCar/>
        </>   
    );
}
export default Help;