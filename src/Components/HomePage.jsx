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
                    logistics site in  transport <br />
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
                    we use state of the act techs to give up smoot and easy exprience
                </p>
            </div>
            <div className="Qualities-boxes">
                <div className="Qualities-wrap-box">
                    <div className="Qualities-box-subs">
                        <div className="Qualities-sub-box">
                            <span
                                className="iconify"
                                data-icon="icon-park-outline:speed-one"
                                id="i-eeon"
                            ></span>
                        </div>
                        <p className="title-Qualities-box">Quick Delivery</p>
                    </div>
                    <div className="Qualities-box-subs">
                        <div className="Qualities-sub-box">
                            <span
                                className="iconify"
                                data-icon="mdi:cash-lock"
                                id="i-eeon"
                            ></span>
                        </div>
                        <p className="title-Qualities-box">Secure Payments</p>
                    </div>
                    <div className="Qualities-box-subs">
                        <div className="Qualities-sub-box">
                            <span
                                className="iconify"
                                data-icon="fluent:eye-tracking-24-filled"
                                id="i-eeon"
                            ></span>
                        </div>
                        <p className="title-Qualities-box">Easy Tracking</p>
                    </div>
                    <div className="Qualities-box-subs">
                        <div className="Qualities-sub-box">
                            <span className="iconify" data-icon="carbon:van" id="i-eeon"></span>
                        </div>
                        <p className="title-Qualities-box">
                            Fast Transportaton
                        </p>
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
                <div className="aleft">
                    <div className="cans">
                        <h1 className="mainHeader">
                        Why Should You <br />{" "}
                        <span className="blue-mainHeader">Pick Us</span>
                    </h1>
                    <p className="subHeader">
                        
                        <br />
                        Technology and its application are fundamental at ADCL.
                        We understand the role of technology in providing an
                        exceptional customer experience. For this reason, our
                        processes, products and services are built around modern
                        technology to help us deliver your shipments cheaper,
                        safely and at the speed of light.
                    </p>
                    </div>
                </div>
                <div className="right">

                </div>
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
                    here are some of the services we offer to 
                    give the best comfort during your transactions with 
                    us
                
                </p>
                <div className="ServicePoints">
                    <div className="Service-point-wrap">
                        <div className="absParent">
                            <div className="Service-box">
                                <div className="Service-box-wrap">
                                    <div className="foricon">
                                        <span
                                            className="iconify"
                                            data-icon="fa-solid:shipping-fast"
                                            id="i-eeone"
                                        ></span>
                                    </div>
                                    <p className="box-service-header">
                                        {" "}
                                        Flash Shipping{" "}
                                    </p>
                                    <p className="extra-text">
                                        Technology and its application are
                                        fundamental at ADC. We understand the
                                        role of technology in providing an
                                        exceptional customer experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="absParent">
                            <div className="Service-box">
                                <div className="Service-box-wrap">
                                    <div className="foricon">
                                        <span
                                            className="iconify"
                                            data-icon="grommet-icons:shop"
                                            id="i-eeone"
                                        ></span>
                                    </div>
                                    <p className="box-service-header">
                                        {" "}
                                        E-commerce{" "}
                                    </p>
                                    <p className="extra-text">
                                        Technology and its application are
                                        fundamental at GIGL. We understand the
                                        role of technology in providing an
                                        exceptional customer experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="absParent">
                            <div className="Service-box">
                                <div className="Service-box-wrap">
                                    <div className="foricon">
                                        <span
                                            className="iconify"
                                            data-icon="ic:outline-airplane-ticket"
                                            id="i-eeone"
                                        ></span>
                                    </div>
                                    <p className="box-service-header">
                                        {" "}
                                        Overseas Shipping{" "}
                                    </p>
                                    <p className="extra-text">
                                        Technology and its application are
                                        fundamental at GIGL. We understand the
                                        role of technology in providing an
                                        exceptional customer experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="absParent">
                            <div className="Service-box">
                                <div className="Service-box-wrap">
                                    <div className="foricon">
                                        <span className="iconify" data-icon="ph:package-bold"
                                        id="i-eeone"></span>
                                    </div>
                                    <p className="box-service-header">
                                        {" "}
                                        Quick Quote{" "}
                                    </p>
                                    <p className="extra-text">
                                        Technology and its application are
                                        fundamental at GIGL. We understand the
                                        role of technology in providing an
                                        exceptional customer experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
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
                    <p style={{color: 'white'}}>Main branch:  277 Park Ave, New York, NY 10172. USA <br /><br />
                    +17186184151 (USA branch)<br /> 
                    +17186184151<br/>
                    +965 655525367 <br/>
                    +966 50 555 250</p>
                    <br />
                    <div className="icons" style={{display:'grid', gridTemplateColumns:'repeat(4, 50px)'}}>
                        <span className="iconify" data-icon="uil:twitter" style={{color: 'white'}} data-width="30"></span>
                        <span className="iconify" data-icon="uil:facebook" style={{color: 'white'}} data-width="30"></span>
                        <span className="iconify" data-icon="uil:instagram" style={{color: 'white'}} data-width="30"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export  {HomeMain, Qualities, AboutUS, Services, Footer} 