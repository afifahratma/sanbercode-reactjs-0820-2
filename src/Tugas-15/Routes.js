import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Tugas9 from '../Tugas-9/Form'
import Tugas10 from '../Tugas-10/DaftarBuah'
import Tugas11 from '../Tugas-11/Timer'
import Tugas12 from '../Tugas-12/FormBuah';
import Tugas13 from '../Tugas-13/FormBuah.js'
import Tugas14 from '../Tugas-14/Buah'
import Tugas15 from '../Tugas-15/Toggle'
import NavigationBar from "./NavBar";


export default function App() {
  return (
    <Router>
      <div>
        <div className="header">
         <NavigationBar/>
        </div>
     
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
            <Route exact path="/" component={Tugas9}/>
            <Route exact path="/Tugas10" component={Tugas10}/>
            <Route exact path="/Tugas11" component={Tugas11}/>
            <Route exact path="/Tugas12" component={Tugas12}/>
            <Route exact path="/Tugas13" component={Tugas13}/>
            <Route exact path="/Tugas14" component={Tugas14}/>
            <Route exact path="/Tugas15" component={Tugas15}/>
            
        </Switch>
        </div>
    </Router>
  );
}

/* function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
} */