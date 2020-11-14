import React from "react";
import { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import Homebanner from "../components/Home/Homebanner";
import HomemainBody from "../components/Home/HomemainBody";
import 'bootstrap/dist/css/bootstrap.min.css';

import Loginmodel from "../components/Loginmodel/Loginmodel";
import Signupmodel from "../components/Signupmodel/Signupmodel";


const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
      <div class="wrapper">
          <Header />
          {/* <Homebanner/> */}
          <HomemainBody /> 
          <Loginmodel/>
          <Signupmodel/>
          <Footer />
      </div>        
  );
};

export default Index;
