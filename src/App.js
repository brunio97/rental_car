import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import LandingPage from './components/LandingPage'
import FooterCar from './components/FooterCar';
import CarRental from './components/CarRental';
import CurrentDeals from './components/CurrentDeals';
import SignUp from './components/SignUp';
import CarInfo from './components/CarInfo';
import Accident from './components/Accident';
import AboutUS from './components/AboutUs';
import MeetOurPeople from './components/MeetOurPeople';
import RoadTrip from './components/RoadTrip';
import Help from './components/Help';
import ContactUs from './components/ContactUs';
import StyleCars from './components/StyleCars';
function App() {
  return (
<div className="App">
      
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path='/CarRental' element={<CarRental/>}/>
          <Route path='/CurrentDeals' element={<CurrentDeals/>}/>
          <Route path='/Accident' element={<Accident/>}/>
          <Route path='/AboutUS' element={<AboutUS/>}/>
          <Route path='/MeetOurPeople' element={<MeetOurPeople/>}/>
          <Route path='/RoadTrip' element={<RoadTrip/>}/>
          <Route path='/Help' element={<Help/>}/>
          <Route path='/ContactUs' element={<ContactUs/>}/>
          <Route path='/CarInfo' element={<CarInfo/>}/>
          <Route path='/StyleCars' element={<StyleCars/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
