import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Contact from './components/Contact';
import Aos from "aos";
import "aos/dist/aos";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Contact />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
