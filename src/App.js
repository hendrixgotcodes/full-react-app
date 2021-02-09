import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/layout/Header.js';
import Index from "./components/pages/index.js";
import Products from './components/pages/products';
import Services from './components/pages/services';
import SignUp from './components/pages/signup';

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

          </Switch>

      </Router>
     
    </>
  );
}

export default App;
