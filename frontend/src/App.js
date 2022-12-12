import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import NewPropertyForm from './properties/NewPropertyForm';
import PropertyIndex from './properties/PropertyIndex';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Welcome to properties!</h1>

          <div className="navBar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </div>
        </header>

        <div className="display">
          <Route path="/" component={PropertyIndex} />
          <Route path="/about" component={NewPropertyForm} />
        </div>

      </Router>

    </div>
  );
}
export default App;
