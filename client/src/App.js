import "./App.css";
import Box from "./components/Box";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Article from "./pages/Article";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/test">
          <Article />
        </Route>
        <Route path='/' exact>
          <Modal />
          <Box />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
