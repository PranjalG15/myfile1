/* import logo from './static/scss/pep-logo.png';
import './static/scss/app.css';

function App() {
 /*  return (
    <div className="App">
      <header className="App-header">
        <nav>
        <ul>
          <li><img src={logo} alt="Logo" /></li>
  <li>Resume Templates</li>
  <li>About Us</li>
  <li><button classname="btn">Register</button></li>
  <li>  <a href={"#"}>Sign In</a></li>
      </ul>    
        </nav>
        <hr></hr>
       <h1 classname="heading">Create a resume that stands out</h1>
       <h3 classname="sub-heading">Create a Resume that perfectally describes your skills and match job profile.</h3>
       <button classname="btn blue">Get started for free</button>
      </header>
    </div>
  ); */
 /*  return (
    <div className="App">
      <header className="App-header">
        <nav className="logo">
        <img  src={logo} alt="Logo" />
        </nav>
        <nav>
        <ul>
  <li className="nav-item">Resume Templates</li>
  <li className="nav-item">About Us</li>
  <li className="nav-item"><button classname="btn">Register</button></li>
  <li className="nav-item">  <a href={"#"}>Sign In</a></li>
      </ul>    
        </nav>
        <hr></hr>
       <h1 classname="heading">Select a resume template to get started</h1>
       <h3 classname="sub-heading">You'll be able to edit and change this template later!</h3>
       </header>
    </div>
  ); */
  /* return (
    <div className="App">
      <header className="App-header">
        <nav className="logo">
        <img  src={logo} alt="Logo" />
        </nav>
        <nav>
        <ul>
  <li className="nav-item">Resume Templates</li>
  <li className="nav-item">About Us</li>
  <li className="nav-item"><button classname="btn">Register</button></li>
  <li className="nav-item">  <a href={"#"}>Sign In</a></li>
      </ul>    
        </nav>
        <hr></hr>

       </header>
       <div classname="details">
         <nav classname="form">
         <form >
          <h1> Personal Details</h1>
          <label >
               First Name<br></br>
              <input type="text" name="name" />
          </label>
          <label >
               Last Name<br></br>
              <input type="text" name="name" />
          </label>
          <br></br>
          <label>
               Professional Summary<br></br>
              <input type="text" name="name" />
          </label>
          <br></br>
          <label>
               Email<br></br>
              <input type="text" name="name" />
          </label>
          
          <label>
               Phone<br></br>
              <input type="text" name="name" />
          </label>
          <br></br>
          <label>
               Profession<br></br>
              <input type="text" name="name" />
          </label>
          
          <label>
               Street<br></br>
              <input type="text" name="name" />
          </label>
          <br></br>
          <label>
               City<br></br>
              <input type="text" name="name" />
          </label>          
          <label>
               State<br></br>
              <input type="text" name="name" />
          </label>
          <br></br>
          <label>
               Country<br></br>
              <input type="text" name="name" />
          </label>         
          <label>
               Pin Code<br></br>
              <input type="text" name="name" />
          </label>
         </form>

         </nav>
         <nav classname="format">
           
         </nav>
       </div>
    </div>
  );
}

export default App; */
import React from 'react';

import './static/scss/app.scss';
import 'react-router-dom';
import { Route,Switch } from 'react-router-dom';
import Header from './components/presentation/header';
import Footer from './components/presentation/footer';
import LandingPage from './components/presentation/landingPage';
import GettingStarted from './components/presentation/gettingStarted';
import Login from './components/presentation/login';
import Register from './components/presentation/login';
import AboutUs from './components/presentation/aboutUs';
import Contacts from './components/presentation/contact';
import Education from './components/presentation/education';
import Finalize from  './components/presentation/finalizePage';


function App() {
  return (
    <div>
     <Header></Header>
     <Switch>
          <Route path="/education" component={Education}></Route>
          <Route path="/contact" component={Contacts}></Route>
          <Route path="/getting-started" component={GettingStarted}></Route>
          <Route path="/resume-templates" component={GettingStarted}></Route>
          <Route path="/about-us"     component={AboutUs}></Route>
          <Route path="/finalize"     component={Finalize}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>             
          <Route path="/" component={LandingPage}></Route>
      </Switch>
      <Footer></Footer>   
    </div>
   
  );
}

export default App;