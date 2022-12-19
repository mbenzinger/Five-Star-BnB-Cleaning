import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
// import AddPropertyForm from './Routes/Property/AddPropertyForm';
// import PropertyDetails from './Routes/Property/PropertyDetails';
// import EditPropertyForm from './Routes/Property/EditPropertyForm';
import LoginForm from './Routes/LoginForm';
import SignUpForm from './Routes/SignUpForm';
import Homepage from './Routes/Homepage';
import Error404 from './Routes/Error404'
import CurrentUser from './contexts/CurrentUser';
// import Listings from './Routes/Property/Property/Listings';
import PropertyIndex from './Routes/Property/PropertyIndex'
import PlaceDetails from './Routes/Property/PlaceDetails'
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            {/* <Route exact path="/places" element={<PlaceIndex />} /> */}
            {/* <Route exact path="/places/new" element={<AddPropertyForm />} /> */}
            {/* <Route exact path="/places/:placeId" element={<PropertyDetails />} /> */}
            {/* <Route exact path="/places/:placeId/edit" element={<EditPropertyForm />} /> */}
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/Error404" element={<Error404 />} />
            <Route path='/CurrentUser' element={<CurrentUser />} />
            {/* <Route path='/Listings' element={<Listings/>}/> */}
            <Route path='/propertyindex' element={<PropertyIndex/>}/>
            <Route path='/PlaceDetails' element={<PlaceDetails/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
