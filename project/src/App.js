
import './App.css';
import Footer from './components/footer/Footer';
import Home from './components/Home/Home';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
