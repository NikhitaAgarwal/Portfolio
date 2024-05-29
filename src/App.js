import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />
        {/* <Home /> */}
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
       
      </Router>
 
      
        
    </div>
  );
}

export default App;
