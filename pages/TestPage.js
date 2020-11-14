import React from "react";
import { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import Homebanner from "../components/Home/Homebanner";
import 'bootstrap/dist/css/bootstrap.min.css';

import Loginmodel from "../components/Loginmodel/Loginmodel";
import Signupmodel from "../components/Signupmodel/Signupmodel";


const TestPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="wrapper">
            <Header />
            <div className="container">
                <h1 className="alert alert-success">This is my first heading</h1>
            </div>
            <Footer />
        </div>
    );
};
export default TestPage;
