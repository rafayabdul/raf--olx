import React, { useState } from "react";
import { useEffect } from "react";
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
// import Navigations from './Navigations';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loginmodel from '../Loginmodel/Loginmodel';




const Header = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [isShowHeader, setIsShowHeader] = useState(false);
    const [isShowNav, setIsShowNav] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const showLogin = () => {
        setIsLogin(true);
        setIsSignup(false);
    }

    const showHeader = () => {
      console.log( isShowHeader )
      setIsShowHeader(!isShowHeader);
  }

  const showNav = () => {
    console.log( isShowNav )
    setIsShowNav(!isShowNav);
    
}
    const showSignup = () => {
        setIsLogin(false);
        setIsSignup(true);
    }

    const closeAll = () => {
        setIsLogin(false);
        setIsSignup(false);
    }

    return (
      <>
      <div>
      <div className="main">
        <div className="logo">
          <a href="/">
          <img src="assets/images/olx logo.png" alt="" width="60px" />
          </a>
        </div>
        <div className="dropdown">
        <div className="location" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img src="assets/images/magnifying-search-lenses-tool.png" alt="" />
          <input type="text" defaultValue="Pakistan" className="bar" />
          <img src="assets/images/expand-arrow.png" alt="" width="20px" />
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <p className="dropdown-item bl"><img src="assets/images/google-maps-current-location-icon-15.jpg" alt="" width="25px" /> Use current location</p>
          <p className="dropdown-item"><img src="assets/images/google-maps-current-location-icon-3.jpg" alt="" width="25px" /> Sindh</p>
          <a className="dropdown-item" href="#"><img src="assets/images/google-maps-current-location-icon-3.jpg" alt="" width="25px" /> Punjab</a>
          <a className="dropdown-item" href="#"><img src="assets/images/google-maps-current-location-icon-3.jpg" alt="" width="25px" /> Balochistan</a>
          <a className="dropdown-item" href="#"><img src="assets/images/google-maps-current-location-icon-3.jpg" alt="" width="25px" /> Khyber Pakhtun Khwa</a>
        </div>
        </div>
       
      </div>
        <div className="search">
          <input type="text" placeholder="Find Cars, Mobile Phones and more.." id="searchbar" width={100} />
          <button className="btnsear"><img src="assets/images/search-3-24.png" alt="" /></button>
        </div>
        <div className="buttons">
          <a href="/loginmodel" className="login"><u>Login</u></a>
          <a href="/postyourad"><img src="assets/images/sell logo.PNG" alt="" className="sell" /></a>
        </div>
      </div>
      <div className="sec-main">
        <ul className="cate">
          <li className="drop" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <a href> All categories <img src="assets/images/expand-arrow.png" alt="" width="25px" /></a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Vehicles</a>
              <a className="dropdown-item" href="#">Mobiles</a>
              <a className="dropdown-item" href="#">Electronic and home appliances</a>
              <a className="dropdown-item" href="#">Property For Sale</a>
              <a className="dropdown-item" href="#">Animals</a>
              <a className="dropdown-item" href="#">Furniture and home decor</a>
              <a className="dropdown-item" href="#">Bussiness, Culture &amp; Agriculture</a>
              <a className="dropdown-item" href="#">Mobiles</a>
              <a className="dropdown-item" href="#">jobs</a>
            </div>
          </li>
          <li className="list"><a href="/category-mobile-accesories">Mobile phones</a> </li>
          <li className="list"><a href="/motors">cars</a></li>
          <li className="list"><a href="/category-motors-car">Motorcycles</a></li>
          <li className="list"><a href="/category-property">Houses</a></li>
          <li className="list"><a href="/CategoryMusic">TV-Video-Audio</a></li>
          <li className="list"><a href="/category-mobiles-tablets">Tablets</a></li>
          <li className="list"><a href="/category-property">Land &amp; Plots</a></li>
        </ul>
      </div>
      <div className="poster">
        <img src="assets/images/poster.PNG" alt="" />
      </div>
    </div>
        {/* // <Navigations isshownav={isShowNav} /> */}
      {/* // </header> */}
               

           
            {/* <Login islogin={isLogin} closebtn={closeAll} /> */}
            {/* <Signup isSignup={isSignup} closebtn={closeAll} /> */}
            // {/* <Header isShowHeader={(isShowHeader === true )? "block" : "none"} /> */}
        </>

    );


};

export default Header;
















// import React, { useState } from "react";
// import { useEffect } from "react";
// import Login from '../../pages/Login';
// import Signup from '../../pages/Signup';
// import Navigations from './Navigations';


// const Header = () => {
//     const [isLogin, setIsLogin] = useState(false);
//     const [isSignup, setIsSignup] = useState(false);
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     const showLogin = () => {
//         setIsLogin(true);
//         setIsSignup(false);
//     }
//     const showSignup = () => {
//         setIsLogin(false);
//         setIsSignup(true);
//     }

//     const closeAll = () => {
//         setIsLogin(false);
//         setIsSignup(false);
//     }

//     return (
//         <>
//             <header id="site_header">
//                 <div class="container">
//                     <div class="headerTop row">
//                         <div class="resDve col-md-3">
//                             <div class="responsive_barb">
//                                 <p><i class="fas fa-bars"></i></p>
//                             </div>
//                             <div class="logo">
//                                 <a href="/">
//                                     <img src="/assets/images/logo-min.png" alt="logo" />
//                                 </a>
//                             </div>
//                             <div class="responsive_bara">
//                                 <p><i class="fas fa-ellipsis-h"></i></p>
//                                 <p><i class="fas fa-ellipsis-h"></i></p>
//                                 <p><i class="fas fa-ellipsis-h"></i></p>
//                             </div>
//                         </div>
//                         <div class="alert_scripts col-md-12">
//                             <div className="row">

//                                 <div class="lan" style={{
//                                     display: "none"
//                                 }}>
//                                     <select name="lan" id="lang">
//                                         <option value="english">English</option>
//                                         <option value="urdu">Urdu</option>
//                                     </select>
//                                 </div>
//                                 <div class="alert_msgs col-md-6">

//                                 <div class="alert_icon">
//                                         <span><i class="fas fa-search"
//                                         style={{
//                                             color:"#cfcdc8"
//                                         }}></i></span>
//                                         <a href="#">Searches</a>
//                                     </div>
//                                     <div class="alert_icon">
//                                         <span><i class="fas fa-bell"
//                                         style={{
//                                             color:"#cfcdc8"
//                                         }}></i></span>
//                                         <a href="#">Notifications</a>
//                                     </div>
//                                     <div class="alert_icon">
//                                         <span><i class="fas fa-heart"
//                                         style={{
//                                             color:"#cfcdc8"
//                                         }}></i></span>
//                                         <a href="#">Favourites</a>
//                                     </div>
//                                     <div class="alert_icon">
//                                         <span><i class="fas fa-comment-alt"
//                                         style={{
//                                             color:"#cfcdc8"
//                                         }}></i></span>
//                                         <a href="#">My Chats</a>
//                                     </div>
//                                 </div>
//                                 <div class="login_btn col-md-4">
//                                     <button class="login loginModel modal-toggle" onClick={showLogin}>LOG IN</button>
//                                     <button class="signupModel modal-toggle signup" onClick={showSignup}>SIGN UP</button>
//                                 </div>
//                                 <div class="add_btn col-md-2">
//                                     <a href="/postyourad">Post Your Ad &nbsp;<i class="fas fa-edit"></i></a>
//                                 </div>


//                             </div>

//                         </div>
//                     </div>
//                 </div>
//                 <Navigations />

//             </header>
//             <Login islogin={isLogin} closebtn={closeAll} />
//             <Signup isSignup={isSignup} closebtn={closeAll} />
//         </>

//     );
// };

// export default Header;