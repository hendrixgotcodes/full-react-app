import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Header from './components/layout/Header.js';
import Index from "./components/pages/index.js";
import Products from './components/pages/products';
import Services from './components/pages/services';
import SignUp from './components/pages/signup';
import Footer from './components/layout/footer';
import ErrorPage from './components/pages/404page';

function App() {
  return (
    <>

      
      <Router>

        <Header/>

          <Switch>

          <Route path="/" exact component={Index}/>
          <Route path="/services" component={Services}/>
          <Route path="/products" component={Products}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/404" component={ErrorPage}/>
          <Redirect from="" to="/404"/>


          </Switch>
        
        <Footer/>

      </Router>
     
    </>
  );
}

export default App;
