import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { connect } from "react-redux";

import ErrorPage from './ErrorPage';
import 'bootstrap/dist/css/bootstrap.min.css';

import Index from './Index';
import TestPage from './TestPage';
import MotorsIndex from './motors/MotorsIndex';



import PostYourAd from './PostYourAd';
import PostYourAdStep2 from './PostYourAdStep2';

import LoginModel from '../components/Loginmodel/Loginmodel';
import Signup from './Signup';


import CategoryMotors from './motors/CategoryMotors';
import CategoryMobAccesories from "./categories/CategoryMobAccesories";
import CategoryMusic from "./categories/CategoryMusic";
import CategoryProperty from "./property/CategoryProperty";




class HomePage extends React.Component {
  componentDidMount() {
   
  }
  resetAction = () => {
    this.props.restAction( {
      IS_LOADING: false,
      IS_RETURN: false,
      RETURN: false,
      RETURN_MESSAGE: "done"
    });
  }

  render() {
    return (
      <Suspense>
        <Switch>
          {/* CATEGORIES PAGE ROUTER */}
          
          <Route  path="/loginmodel" component={LoginModel} />
          {/* <Route  path="/signup" component={Signup} /> */}
          <Route  path="/category-motors-car" component={CategoryMotors} />
          <Route  path="/motors" component={MotorsIndex} />
          <Route  path="/category-mobile-accesories" component={CategoryMobAccesories} />
          <Route  path="/category-mobiles-tablets" component={CategoryMobAccesories} />
          <Route  path="/CategoryMusic" component={CategoryMusic} />
          <Route  path="/category-property" component={CategoryProperty} />

          
          <Route exact path="/postyourad" component={PostYourAd} />
          <Route path="/postyouradstep2" component={PostYourAdStep2} />
         


          <Route exact path="/test" component={TestPage} />
          <Route path="/404page" component={ErrorPage} />
          <Route path="/" component={Index} />
          <Redirect to="/404page" />

        </Switch>
      </Suspense>
    );
  }

}

const mapStateToProps = state => ({
  
});


const mapDispatchToProps = dispatch => ({
});

export default
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage);

