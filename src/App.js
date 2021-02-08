import './App.css';
import './css/pages/index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header.js';
// import Index from "./components/pages/index.js";

function App() {
  return (
    <>

      <Header/>
      
      <Router>

        <Switch>

        {/* <Route path="/" component={Index}/> */}

        </Switch>

      </Router>
     
    </>
  );
}

export default App;
