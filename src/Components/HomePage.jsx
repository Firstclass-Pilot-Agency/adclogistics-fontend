import logo from "../images/Logo.png";
function HomeMain() {
    return (
        <div className="HomeMain">
            <div className="HomeMain-overlay">
            <div className="HomeMain-wrap">
                <h1 className="mainHeader">
                    The New <span className="blue-mainHeader">Definition</span>{" "}
                    <br /> of Logistics
                </h1>
                <p className="subHeader">
                    ADC is your number one online <br />
                    logistics site in Nigeria. transport <br />
                    items with the push of a button <br />
                    anytime anywhere
                </p>
                <div className="track-button">
                    <div className="input-tracking">
                        <input type="text" name="" id="id-inputs" placeholder='Enter Tracking ID'/>
                        <div className="button-signin">
                            <a href="#" className="link-nav-button">Search</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}


function Qualities() {
    return (
        <div className="Qualities">
            <div className="Qualities-wrap">
                <h1 className="mainHeader">
                    Get <span className="blue-mainHeader">Smooth</span>{" "}
                    Deliveries <br />
                    form Day One
                </h1>
                <p className="subHeader">
                    ADC is your number one online <br />
                    logistics site in Nigeria. transport <br />
                    items with the push of a button <br />
                    anytime anywhere
                </p>
            </div>
            <div className="Qualities-boxes">
                <div className="Qualities-wrap-box">
                    <div className="Qualities-box-subs">
                        <div className="Qualities-sub-box"></div>
                        <p className="title-Qualities-box">Quick Delivery</p>
                    </div>
                    <div className="Qualities-box-subs">
                        <div className="Qualities-sub-box"></div>
                        <p className="title-Qualities-box">Quick Delivery</p>
                    </div>
                    <div className="Qualities-box-subs">
                        <div className="Qualities-sub-box"></div>
                        <p className="title-Qualities-box">Quick Delivery</p>
                    </div>
                    <div className="Qualities-box-subs">
                        <div className="Qualities-sub-box"></div>
                        <p className="title-Qualities-box">Quick Delivery</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


function AboutUS() {
    return (
        <div className="AboutUS">
            <div className="AboutUS-wrap">
                <h1 className="mainHeader">
                    Why Should You <br />{" "}
                    <span className="blue-mainHeader">Pick Us</span>
                </h1>
                <p className="subHeader" >
                    ADC is your number one online <br />
                    logistics site in Nigeria. transport <br />
                    items with the push of a button <br />
                    anytime anywhere
                    <br />
                    <br />
                    Technology and its application are fundamental at GIGL.
                     We understand the role of technology in providing an
                    
                    exceptional customer experience. For this reason, our
                    
                    processes, products and services are built around modern
                    
                    technology to help us deliver your shipments cheaper, safely
                    
                    and at the speed of light.
                </p>
            </div>
        </div>
    );
}
function Services() {
    return (
        <div className="Services">
            <div className="Services-wrap">
                <h1 className="mainHeader">
                    Services That <br />{" "}
                    <span className="blue-mainHeader">Suits</span> You
                </h1>
                <p className="subHeader">
                    ADC is your number one online <br />
                    logistics site in Nigeria. transport <br />
                    items with the push of a button <br />
                    anytime anywhere
                </p>
                <div className="ServicePoints">
                    <div className="Service-point-wrap">
                        <div className="Service-box">
                            <div className="Service-box-wrap">
                                <p className="box-service-header">
                                    
                                </p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Faq() {
    return (
        <div className="Faqs">
            <div className="faqs-wraper">
                <h1 className="mainHeader">
                    Services That <br />{" "}
                    <span className="blue-mainHeader">Suits</span> You
                </h1>
                <p className="subHeader">
                    ADC is your number one online <br />
                    logistics site in Nigeria. transport <br />
                    items with the push of a button <br />
                    anytime anywhere
                </p>
            </div>
        </div>
    );
}

function Comments() {
    
}

function Footer(){
    return (
        <div className="Footer">
            <div className="footer-wraper">
                <div className="left">
                    <div className="FirstFooter">
                        <img src={logo} alt="" className="footerLogo" />
                        <p>© 2022 ADC Logistics</p>
                    </div>
                    <div className="SecondFooter">
                        <h1 className="fHeader">Company</h1>
                        <p className="subs-footer">About us</p>
                        <p className="subs-footer">Location</p>
                        <p className="subs-footer">Services</p>
                        <p className="subs-footer">Terms and Conditions</p>
                    </div>
                </div>
                <div className="rigth">
                    <h1 className="fHeader">Get in Touch</h1>
                    <div className="icons">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
export  {HomeMain, Qualities, AboutUS, Services, Faq, Comments,Footer} 