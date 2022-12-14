import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import NewPropertyForm from './properties/NewPropertyForm';
import PropertyIndex from './properties/PropertyIndex';

function App() {
  return (
    <div className="App">
      <NewPropertyForm />

    </div>
  );
}
export default App;
