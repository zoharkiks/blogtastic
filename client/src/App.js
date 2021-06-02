import "./App.css";
import { useEffect } from "react";
// Components and Pages
import Box from "./components/Box";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import AllArticles from "./pages/AllArticles";
import Article from "./pages/Article";
import Category from "./pages/Category";
import AboutMe from "./pages/AboutMe";

// Routing
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/actions/dataActions";

function App() {
  // Getting all the articles
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop/>
          <Switch>
            <Route path="/articles/:id" component={Article} />

            <Route path="/allArticles/" component={AllArticles} />

            <Route path='/categories/:id' component={Category} />

            <Route path='/about-me' component={AboutMe} />


            <Route path="/" exact >
              <Modal/>
              <Box/>
              </Route>
          </Switch>
        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
