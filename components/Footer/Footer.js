import React, { useState } from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
    <div className="footpost">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9">
            <img src="assets/images/poster2.PNG" alt="" className="ps2" />
          </div>
          <div className="col-md-3">
            <p className="titl">Get Your App Today<br />
              <a target="blank" href="https://play.google.com/store/apps/details?id=com.olx.pk&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home"><img src="assets/images/google.png" alt="" className="store1" /></a>
              <a target="blank" className="pl-2" href="https://apps.apple.com/pk/app/olx-pakistan/id1119081665?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home"><img src="assets/images/256x256.png" alt="" className="store2" /></a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="footer">
      <span className="hr" />
      <div className="container">
        <div className="row">
          <div className="ulli">
            <ul className="footul">
              <li><h6>Popular Categories</h6></li>
              <li><a href>Cars</a></li>
              <li> <a href> Flats for Rent</a></li>
              <li> <a href>Jobs</a> </li>
              <li> <a href> Mobile Phones</a></li>
            </ul>
          </div>
          <div className="ulli">
            <ul className="footul footulone">
              <li><h6>Trending Searches</h6></li>
              <li><a href>Bikes</a></li>
              <li> <a href> Watches</a></li>
              <li> <a href>Books</a> </li>
              <li> <a href> Dogs</a></li>
            </ul>
          </div>
          <div className="ulli">
            <ul className="footul footultwo">
              <li><h6>About Us</h6></li>
              <li><a href="https://www.olxgroup.com/" target="blank">About OLX Group</a></li>
              <li> <a href="https://blog.olx.com.pk/" target="blank"> OLX Blog</a></li>
              <li> <a href="https://help.olx.com.pk/hc/en-us/requests/new?ticket_form_id=29191" target="blank">Contact Us</a> </li>
              <li> <a href="https://www.surveygizmo.com/s3/4910980/WP-Business-Form?source=Website" target="blank"> OLX for Bussiness</a></li>
            </ul>
          </div>
          <div className="ulli">
            <ul className="footul footulthree">
              <li><h6>OLX</h6></li>
              <li><a href>Help</a></li>
              <li> <a href> Sitemap</a></li>
              <li> <a href>Legal $ Privacy Informatio</a> </li>
            </ul>
          </div>
          <div className="fol">
            <h6 className="folhead">FOLLOW US</h6>
            <a href="https://www.facebook.com/"><img src="assets/images/facebook.png" alt="" /></a>
            <a href="https://twitter.com/login?lang=en"><img src="assets/images/twitter.png" alt="" /></a>
            <a href="https://www.youtube.com/"><img src="assets/images/youtube.png" alt="" /></a>
            <a href="https://www.instagram.com/accounts/login/"><img src="assets/images/instagram.png" alt="" /></a><br />
            <a target="blank"  href="https://play.google.com/store/apps/details?id=com.olx.pk&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home"><img src="assets/images/google.png" alt="" width="100px" /></a>
            <a target="blank" className="pl-2" href="https://apps.apple.com/pk/app/olx-pakistan/id1119081665?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home"><img src="assets/images/256x256.png" alt="" width="100px" /></a>
          </div>
        </div>
      </div>
    </div>
    <div className="lastmain">
      <p className="para"><b>Other Counties</b> India-SouthAfrica-Indonasia <span className="sp2"><b>Free Classifieds in Pakistan </b>.@ 2006-2020 OLX</span> </p>
    </div>
    
  </div>


  );
};

export default Footer;
