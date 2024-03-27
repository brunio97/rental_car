import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import NavBar from './components/navBar';
import LandingPage from './components/LandingPage'
import FooterCar from './components/FooterCar';
import CarRental from './components/CarRental';
import CurrentDeals from './components/CurrentDeals';
import SignUp from './components/SignUp';
import Compact from './components/examples/Compact';
import BannerCar from './components/BannerCar';
import SUV from './components/examples/SUV';
import Pickup from './components/examples/PickUp';
import Vans from './components/examples/Vans';
import Luxury from './components/examples/Luxury';
import CarInfo from './components/CarInfo';
import AWD from './components/examples/AWD4'
import Accident from './components/Accident';
import AboutUS from './components/AboutUs';
import MeetOurPeople from './components/MeetOurPeople';
import RoadTrip from './components/RoadTrip'
import Help from './components/Help';
import ContactUs from './components/ContactUs';
import CarExampleContext, { CarProvider } from './components/CarTextProvider';
import StyleCars from './components/StyleCars';
function App() {
  return (
<div className="App">
      <CarProvider>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path='/CarRental' element={<CarRental/>}/>
          <Route path='/CurrentDeals' element={<CurrentDeals/>}/>
          <Route path='/Accident' element={<Accident/>}/>
          <Route path='/AboutUS' element={<AboutUS/>}/>
          <Route path='/MeetOurPeople' element={<MeetOurPeople/>}/>
          <Route path='/RoadTrip' element={<RoadTrip/>}/>
          <Route path='/Luxury' element={<Luxury/>}/>
          <Route path='/Vans' element={<Vans/>}/>
          <Route path='/PickUp' element={<Pickup/>}/>
          
          <Route path='/SUV' element={<SUV/>}/>
          <Route path='/AWD' element={<AWD/>}/>
          <Route path='/Help' element={<Help/>}/>
          <Route path='/ContactUs' element={<ContactUs/>}/>
          
          <Route path='/Compact' element={<Compact/>}/>
          <Route path='/CarInfo' element={<CarInfo/>}/>
          <Route path='/StyleCars' element={<StyleCars/>}/>
          
          
        </Routes>
      </BrowserRouter>
      </CarProvider>
    </div>
    
  );
}

export default App;
