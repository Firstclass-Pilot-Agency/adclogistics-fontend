import logo from './logo.svg';
import './App.css';
import './Components/Responsive.css';
import {HomeMain, Qualities, AboutUS} from './Components/HeroMain';
import { SignIn, SignUpFirst ,SignUpSecond } from './Components/SignAccount';

function App() {
  return (
      <div className="Layout">
          <SignManger />
          <NavBar />
          <Home />
      </div>
  );
}


function NavBar() {
  return (
      <div className="NavBar">
          <div className="nav-wrapper">
              <div className="logo-section">
                <h1>ADC <br/> Logistics</h1>
              </div>
              <div className="links-section">
                <div className="links-section-wrapper">
                  <a href="#" className="link-nav">About us</a>
                  <a href="#" className="link-nav">Services</a>
                  <a href="#" className="link-nav">Locations</a>
                  <a href="#" className="link-nav">Contacts</a>
                </div>
              </div>
              <div className="user-section">
                <div className="button-signin">
                  <a href="#" className="link-nav-button">Sign up</a>
                </div>
                <div className="HamMenu">
                  =
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
    </div>
  )
}

// Sign in or sign up accounts
// for SignMangement navto Components/SignAccount.jsx 😀
function SignManger() {
  return(
    <div className="SignManger">
      <SignIn />
      <SignUpFirst />
      <SignUpSecond />
    </div>
  )
}
export {App} ;
