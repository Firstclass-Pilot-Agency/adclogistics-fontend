import logo from "./images/Logo.png";
import './App.css';
import './Components/Responsive.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {HomeMain, Qualities, AboutUS, Services} from './Components/HomePage';
import { SignIn, SignOTP, SignUpFirst ,SignUpSecond } from './Components/SignAccount';
import { UserIconNavs } from "./Components/UserIcon";
import { LogisticsUser } from "./Components/LogisticsUser";

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
              <Route path="/Logistics" element={<LogisticsUser />} exact>
                  <LogisticsUser />
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
                  <img src={logo} alt="" className="logo-main" />
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
                  <UserIconNavs />
                  <div className="HamMenu">
                      <span
                          className="iconify-inline"
                          data-icon="bx:bx-menu"
                      ></span>
                  </div>
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
      <Services />
    </div>
  )
}

// Sign in or sign up accounts
// for SignMangement navto Components/SignAccount.jsx 😀

export {App} ;
