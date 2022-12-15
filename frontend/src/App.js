import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import AddPropertyForm from './Routes/AddPropertyForm';
import LoginForm from './Routes/LoginForm';
import SignUpForm from './Routes/SignUpForm';
import Homepage from './Routes/Homepage';
import Error404 from './Routes/Error404'
import CurrentUser from './contexts/CurrentUser';
<<<<<<< HEAD
import Listings from './Routes/Listings';
=======
>>>>>>> 049ab755918aa0d9f01b8d5de0c429818e5144c0

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Property" element={<AddPropertyForm />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/Error404" element={<Error404 />} />
            <Route path='/CurrentUser' element={<CurrentUser />} />
<<<<<<< HEAD
            <Route path='/Listings' element={<Listings/>}/>
=======
>>>>>>> 049ab755918aa0d9f01b8d5de0c429818e5144c0
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
