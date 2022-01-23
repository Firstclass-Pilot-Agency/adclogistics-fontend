import logo from './logo.svg';
import './App.css';
import './Components/Responsive.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {HomeMain, Qualities, AboutUS} from './Components/HomePage';
import { SignIn, SignOTP, SignUpFirst ,SignUpSecond } from './Components/SignAccount';

function App() {
  return (
      <Router>
          <NavBar />

          <Switch>
              <Route path="/" element={<Home />} exact>
                  <Home />
              </Route>

              <Route path="/Accounts/SignIn" element={<SignIn />} exact>
                  <SignIn />
              </Route>
              <Route path="/Accounts/SignUp-FirstStep" element={<SignUpFirst />} exact>
                  <SignUpFirst />
              </Route>
              <Route path="/Accounts/SignUp-SecondStep" element={<SignUpSecond />} exact>
                  <SignUpSecond />
              </Route>
              <Route path="/Accounts/Check-OTP" element={<SignOTP />} exact>
                  <SignOTP />
              </Route>
          </Switch>
      </Router>
  );
}


function NavBar() {
  return (
      <div className="NavBar">
          <div className="nav-wrapper">
              <div className="logo-section">
                  <h1>
                      ADC <br /> Logistics
                  </h1>
              </div>
              <div className="links-section">
                  <div className="links-section-wrapper">
                      <a href="#" className="link-nav">
                          About us
                      </a>
                      <a href="#" className="link-nav">
                          Services
                      </a>
                      <a href="#" className="link-nav">
                          Locations
                      </a>
                      <a href="#" className="link-nav">
                          Contacts
                      </a>
                  </div>
              </div>
              <div className="user-section">
                  <div className="button-signin">
                      <Link to="/Accounts/SignIn" className="link-nav-button">
                          Sign In
                      </Link>
                  </div>
                  <div className="HamMenu">=</div>
              </div>
          </div>
      </div>
  );
}

// Home Section
function Home() {
  return (
    <div className="routing">
      <HomeMain />
      <Qualities />
      <AboutUS />
    </div>
  )
}

// Sign in or sign up accounts
// for SignMangement navto Components/SignAccount.jsx 😀

export {App} ;
