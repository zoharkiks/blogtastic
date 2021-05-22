  import './App.css';
import Box from './components/Box';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Navbar from './components/Navbar';

function App() {

 return (
    <div className="App">
     <Navbar/>
     <Modal/>
     <Box />
     <Footer/>
    </div>
  );
}

export default App;
