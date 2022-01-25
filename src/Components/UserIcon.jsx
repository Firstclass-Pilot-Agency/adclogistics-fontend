import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function UserIconNavs() {
   return (
       <div className="ep">
           <button className="userBox" id='userbutton'>
           {/* <img src={""} alt="userimage" className="profileImg" onClick={dropdown} /> */}
        </button>
           <div className="links-LogHub" id="menudrop">
               <h1 className='user-name'>Spider Man importer <br />
                <p className='email-user'>example@gmail.com</p>
               </h1>
               
               <button className="links-items">
                   <span className="iconify-inline" data-icon="uil:user"></span>
                   <p className="links-name">My Profile</p>
               </button>
               <Link to="/Logistics"><button className="links-items">
                   <span
                       className="iconify-inline"
                       data-icon="fluent:data-trending-16-filled"
                   ></span>
                   <p className="links-name">My Logistics</p>
               </button></Link>
               <button className="links-items">
                   <span
                       className="iconify-inline"
                       data-icon="iconoir:log-out"
                   ></span>
                   <p className="links-name">Log Out</p>
               </button>
           </div>
       
       </div>
       
   ); 
}

function dropdown() {
    document.getElementById('userbutton').addEventListener('click', () => {
        document.getElementById('menudrop').style.display =  'block'
        document.getElementById('menudrop').addEventListener('mouseleave', () => {
            document.getElementById('menudrop').style.display =  'none'
        })
    })
}
export {UserIconNavs}