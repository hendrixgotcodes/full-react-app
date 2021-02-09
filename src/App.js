import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/layout/Header.js';
import Index from "./components/pages/index.js";

function App() {
  return (
    <>

      
      <Router>

      <Header/>

        <Switch>

        <Route path="/" component={Index}/>

        </Switch>

      </Router>
     
    </>
  );
}

export default App;
