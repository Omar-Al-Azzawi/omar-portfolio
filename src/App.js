import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header />
    <Navbar />
    <About />
    <Footer />
    </div>
  );
}

export default App;
