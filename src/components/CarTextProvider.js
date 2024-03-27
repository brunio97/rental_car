import React, { createContext, useContext, useState } from 'react';

/********* Car Context ***********/
const CarContext = createContext();

export const useCar = () => useContext(CarContext);

export const CarProvider = ({ children }) => {
  const [carText, setCarText] = useState("");
  const [carType, setCarType] = useState("");
  return (
    <CarContext.Provider value={{ carText, setCarText, carType, setCarType }}>
      {children}
    </CarContext.Provider>
  );
};


/********* Car example ***********/

const CarExampleContext = createContext({});

export default CarExampleContext;
 