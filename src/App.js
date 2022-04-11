import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {
  return (
    <>

      <div className="container my-3">
        
        <Router>
        <Navbar title="TEXTUTILS" about="ABOUT" />
          <Routes>

            <Route exact path="/" element={<TextForm heading="ENTER THE TEXT TO PROCESS..." />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>


      </div>

    </>
  );
}

export default App;
