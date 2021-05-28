import "./App.css";
import { useEffect } from "react";
// Components and Pages
import Article from "./pages/Article";
import Box from "./components/Box";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import AllArticles from "./pages/AllArticles";
// Routing
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";
// Redux
import { useDispatch } from "react-redux";
import { fetchData } from "./redux/actions/dataActions";
import SearchResults from "./pages/SearchResults";

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

            <Route path='/searchResults' component={SearchResults}/>

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
