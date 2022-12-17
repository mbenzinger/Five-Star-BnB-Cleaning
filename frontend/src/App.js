import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import AddPropertyForm from './Routes/Properties/AddPropertyForm';
import PropertyDetails from './Routes/Properties/PropertyDetails';
import EditPropertyForm from './Routes/Properties/EditPropertyForm';
import LoginForm from './Routes/LoginForm';
import SignUpForm from './Routes/SignUpForm';
import Homepage from './Routes/Homepage';
import Error404 from './Routes/Error404'
import CurrentUser from './contexts/CurrentUser';
import PropertyIndex from './Routes/Properties/PropertyIndex';
import Listings from './Routes/Properties/Listings';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Listings" element={<Listings />} />
            <Route exact path="/AddPropertyForm" element={<AddPropertyForm />} />
            <Route exact path="/places/:placeId" element={<PropertyDetails />} />
            <Route exact path="/places/:placeId/edit" element={<EditPropertyForm />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/Error404" element={<Error404 />} />
            <Route path='/CurrentUser' element={<CurrentUser />} />
            <Route path='/PropertyIndex' element={<PropertyIndex />} />

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
