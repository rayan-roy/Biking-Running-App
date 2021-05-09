import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/pages/Login';
import Session from './components/pages/Session';

require('dotenv').config()

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <br />
        <Route path="/" exact component={Login} />
        <Route path="/session" exact component={Session} />
      </Router>
    </>
  );
}

export default App;
