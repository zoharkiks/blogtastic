import "./App.css";
import { useEffect } from "react";
import Box from "./components/Box";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Article from "./components/pages/Article";
// Redux
import { useDispatch} from "react-redux";
import { fetchData } from "./redux/actions/dataActions";

function App() {

// Getting all the articles
 const dispatch = useDispatch()

 useEffect(() => {
   
  dispatch(fetchData())
 })


  

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/articles/:id">
          <Article />
        </Route>
        <Route path="/" exact>
          <Modal />
          <Box />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
