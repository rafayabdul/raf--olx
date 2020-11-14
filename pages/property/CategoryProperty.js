import React from "react";
import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CategorySidebar from "../../components/CategorySidebar/CategorySidebar";

const CategoryProperty = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
        <div className="wrapper">
            <Header />
            
            <div className="homeMain_body">
                <div className="container">
                    <div className="categories_page">
                        <div className="row">
                            <div className="col-md-3">
                                <CategorySidebar />
                            </div>
                            <div className="col-md-9">
                                <div className="catmain_content">
                                    <div className="heading">
                                        <h2>Buy & sell any Property online in Dubai, UAE</h2>
                                        <p>Brand new & used Property for sale in Dubai - Sell your 2nd hand Property on dubizzle & reach 1.6 million buyers today.</p>
                                    </div>
                                    <div className="brand_box">
                                        <div className="breadcrumbs">
                                            <p>Browse results in: <a href="#">Dubai</a>  <a href="#">Property</a>  Used Property for Sale</p>
                                        </div>
                                        <div className="brandsAmount">
                                            <div className="row">
                                                <div className="col-md-3 col-sm-4">
                                                    <div className="brandtag">
                                                        <a href="#">
                                                            <p>Dubai Marina <span>(4,304)</span></p>
                                                        </a>
                                                    </div>
                                                </div>    
                                                <div className="col-md-3 col-sm-4">    
                                                    <div className="brandtag">
                                                        <a href="#">
                                                            <p> JVC Jumeirah Village Circle<span>(3,711)</span></p>
                                                        </a>
                                                    </div>
                                                </div>    
                                                <div className="col-md-3 col-sm-4">    
                                                    <div className="brandtag">
                                                        <a href="#">
                                                            <p>Business Bay<span>(2,343) </span></p>
                                                        </a>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-md-3 col-sm-4">
                                                    <div className="brandtag">
                                                        <a href="#">
                                                            <p>International City <span>(2,229) </span></p>
                                                        </a>
                                                    </div>
                                                </div>    
                                                <div className="col-md-3 col-sm-4">    
                                                    <div className="brandtag">
                                                        <a href="#">
                                                            <p>JLT Jumeirah Lake Towers<span>(2,054)</span></p>
                                                        </a>
                                                    </div>
                                                </div>    
                                                <div className="col-md-3 col-sm-4">    
                                                    <div className="brandtag">
                                                        <a href="#">
                                                            <p>Dubai Sports City<span>(1,550)</span></p>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-4">
                                                    <div className="brandtag">
                                                        <a href="#">
                                                            <p>The Palm Jumeirah<span>(1,458)</span></p>
                                                        </a>
                                                    </div>
                                                </div>    
                                                <div className="col-md-3 col-sm-4">    
                                                    <div className="brandtag">
                                                        <a href="#">
                                                            <p>and Rover <span>(1062)</span></p>
                                                        </a>
                                                    </div>
                                                </div>    
                                                <div className="col-md-3 col-sm-4">    
                                                    <div className="brandtag">
                                                        <a href="#">
                                                            <p>Hyundai <span>(712)</span></p>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-4">
                                                    <div className="brandtag">
                                                        <a href="#">
                                                            <p>HPorshe <span>(2897)</span> </p>
                                                        </a>
                                                    </div>
                                                </div>    
                                                <div className="col-md-3 col-sm-4">    
                                                    <div className="brandtag">
                                                        <a href="#">
                                                            <p>Toyota <span>(712)</span></p>
                                                        </a>
                                                    </div>
                                                </div>    
                                                <div className="col-md-3 col-sm-4">    
                                                    <div className="brandtag">
                                                        <a href="#">
                                                            <p>Nissan <span>(1062)</span></p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="showAll brand">
                                                <p>Show All Brands <i className="fas fa-chevron-down"></i></p>
                                            </div>
                                            <div className="brand hidden_farmat">
                                                <div className="row">
                                                    <div className="col-md-3 col-sm-4">
                                                        <div className="brandtag">
                                                            <a href="#">
                                                                <p>Audi <span>(826)</span></p>
                                                            </a>
                                                        </div>
                                                    </div>    
                                                    <div className="col-md-3 col-sm-4">    
                                                        <div className="brandtag">
                                                            <a href="#">
                                                                <p>BMW <span>(1062)</span></p>
                                                            </a>
                                                        </div>
                                                    </div>    
                                                    <div className="col-md-3 col-sm-4">    
                                                        <div className="brandtag">
                                                            <a href="#">
                                                                <p>Chevrolet <span>(734)</span></p>
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-3 col-sm-4">
                                                        <div className="brandtag">
                                                            <a href="#">
                                                                <p>Hyundai <span>(712) </span></p>
                                                            </a>
                                                        </div>
                                                    </div>    
                                                    
                                                
                                                    <div className="col-md-3 col-sm-4">    
                                                        <div className="brandtag">
                                                            <a href="#">
                                                                <p>Hyundai <span>(712)</span></p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3 col-sm-4">
                                                        <div className="brandtag">
                                                            <a href="#">
                                                                <p>HPorshe <span>(2897)</span> </p>
                                                            </a>
                                                        </div>
                                                    </div>    
                                                    <div className="col-md-3 col-sm-4">    
                                                        <div className="brandtag">
                                                            <a href="#">
                                                                <p>Toyota <span>(712)</span></p>
                                                            </a>
                                                        </div>
                                                    </div>    
                                                 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="categoryHeading">
                                        <div className="left">
                                            <p>57,713 Ads in Dubai</p>
                                        </div>
                                        <div className="right">
                                            <p>SORT:
                                                <select id="filtercar">
                                                    <option value="" hidden="">Newest First</option>
                                                    <option value="DESC">DESC</option>
                                                    <option value="ASC">ASC</option>
                                                </select>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="cateList Box">
                                        <div className="image">
                                            <a href="#">
                                                <img src="assets/images/Property/img1.jpg" alt="" className="" />
                                            </a>
                                        </div>
                                        <div className="catDetail">
                                            <div className="heartFavour">
                                                <a href="#" id="favourite"><i className="far fa-heart"></i></a>
                                            </div>
                                            <div className="heading">
                                                <a href="#">
                                                <h2>Stunning 2 BHK in Al Raffa Dotcom BLDG... </h2>
                                                </a>
                                            </div>
                                            <div className="breadcrum">
                                                <ul>
                                                    <li><a href="#">Used Property for Sale</a></li>
                                                    <li><a href="#">Dubai</a></li>
                                                    <li><a href="#">central dubai</a></li>
                                                </ul>
                                            </div>
                                            <div className="date">
                                                <p>25 June 2020</p>
                                            </div>
                                            <div className="brabdPrice">
                                                <h2>ETB 115,000</h2>
                                                <span>Selling Price</span>
                                            </div>
                                            <div className="brandProperty">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="proprty_box">
                                                            <p>Selling Price</p>
                                                            <span>2016</span>
                                                        </div>
                                                        <div className="proprty_box">
                                                            <p>Bedroom</p>
                                                            <span>4</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="proprty_box">
                                                            <p>size</p>
                                                            <span>1500 sq feet</span>
                                                        </div>
                                                        <div className="proprty_box">
                                                            <p>Color:</p>
                                                            <span>blue</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="brandAddress">
                                            <p><i className="fas fa-map-marker-alt"></i> &nbsp; Located:  
                                                <a href="#">UAE</a> <i className="fas fa-chevron-right"></i> 
                                                <a href="#">Dubai</a> <i className="fas fa-chevron-right"></i> 
                                                <a href="#">Business Bay</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="cateList Box">
                                        <div className="image">
                                            <a href="#">
                                            <img src="assets/images/Property/img2.jpg" alt="" className="" />
                                            </a>
                                        </div>
                                        <div className="catDetail">
                                            <div className="heartFavour">
                                                <a href="#" id="favourite"><i className="far fa-heart"></i></a>
                                            </div>
                                            <div className="heading">
                                                <a href="#">
                                                    <h2>Mercedes benz S 550 Model 2017 import from us... </h2>
                                                </a>
                                            </div>
                                            <div className="breadcrum">
                                                <ul>
                                                    <li><a href="#">Used Cars for Sale</a></li>
                                                    <li><a href="#">Mercedes-Benz</a></li>
                                                    <li><a href="#">Mercedes-Benz S-className</a></li>
                                                </ul>
                                            </div>
                                            <div className="date">
                                                <p>25 June 2020</p>
                                            </div>
                                            <div className="brabdPrice">
                                                <h2>ETB 115,000</h2>
                                                <span>Selling Price</span>
                                            </div>
                                            <div className="brandProperty">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="proprty_box">
                                                            <p>Selling Price</p>
                                                            <span>2016</span>
                                                        </div>
                                                        <div className="proprty_box">
                                                            <p>Kilometers:</p>
                                                            <span>56,000</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="proprty_box">
                                                            <p>Doors:</p>
                                                            <span>5+ doors</span>
                                                        </div>
                                                        <div className="proprty_box">
                                                            <p>Color:</p>
                                                            <span>blue</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="brandAddress">
                                            <p><i className="fas fa-map-marker-alt"></i> &nbsp; Located:  
                                                <a href="#">UAE</a> <i className="fas fa-chevron-right"></i> 
                                                <a href="#">Dubai</a> <i className="fas fa-chevron-right"></i> 
                                                <a href="#">Business Bay</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="cateList Box">
                                        <div className="image">
                                            <a href="#">
                                            <img src="assets/images/Property/img3.jpg"  alt="" className="" />
                                            </a>
                                        </div>
                                        <div className="catDetail">
                                            <div className="heartFavour">
                                                <a href="#" id="favourite"><i className="far fa-heart"></i></a>
                                            </div>
                                            <div className="heading">
                                                <a href="#">
                                                    <h2>Mercedes benz S 550 Model 2017 import from us... </h2>
                                                </a>
                                            </div>
                                            <div className="breadcrum">
                                                <ul>
                                                    <li><a href="#">Used Cars for Sale</a></li>
                                                    <li><a href="#">Mercedes-Benz</a></li>
                                                    <li><a href="#">Mercedes-Benz S-className</a></li>
                                                </ul>
                                            </div>
                                            <div className="date">
                                                <p>25 June 2020</p>
                                            </div>
                                            <div className="brabdPrice">
                                                <h2>ETB 115,000</h2>
                                                <span>Selling Price</span>
                                            </div>
                                            <div className="brandProperty">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="proprty_box">
                                                            <p>Selling Price</p>
                                                            <span>2016</span>
                                                        </div>
                                                        <div className="proprty_box">
                                                            <p>Kilometers:</p>
                                                            <span>56,000</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="proprty_box">
                                                            <p>Doors:</p>
                                                            <span>5+ doors</span>
                                                        </div>
                                                        <div className="proprty_box">
                                                            <p>Color:</p>
                                                            <span>blue</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="brandAddress">
                                            <p><i className="fas fa-map-marker-alt"></i> &nbsp; Located:  
                                                <a href="#">UAE</a> <i className="fas fa-chevron-right"></i> 
                                                <a href="#">Dubai</a> <i className="fas fa-chevron-right"></i> 
                                                <a href="#">Business Bay</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="cateList Box">
                                        <div className="image">
                                            <a href="#">
                                                <img src="assets/images/Property/img4.jpg" alt="" className="" />
                                            </a>
                                        </div>
                                        <div className="catDetail">
                                            <div className="heartFavour">
                                                <a href="#" id="favourite"><i className="far fa-heart"></i></a>
                                            </div>
                                            <div className="heading">
                                                <a href="#"> 
                                                    <h2>Mercedes benz S 550 Model 2017 import from us... </h2>
                                                </a>
                                            </div>
                                            <div className="breadcrum">
                                                <ul>
                                                    <li><a href="#">Used Cars for Sale</a></li>
                                                    <li><a href="#">Mercedes-Benz</a></li>
                                                    <li><a href="#">Mercedes-Benz S-className</a></li>
                                                </ul>
                                            </div>
                                            <div className="date">
                                                <p>25 June 2020</p>
                                            </div>
                                            <div className="brabdPrice">
                                                <h2>ETB 115,000</h2>
                                                <span>Selling Price</span>
                                            </div>
                                            <div className="brandProperty">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="proprty_box">
                                                            <p>Selling Price</p>
                                                            <span>2016</span>
                                                        </div>
                                                        <div className="proprty_box">
                                                            <p>Kilometers:</p>
                                                            <span>56,000</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="proprty_box">
                                                            <p>Doors:</p>
                                                            <span>5+ doors</span>
                                                        </div>
                                                        <div className="proprty_box">
                                                            <p>Color:</p>
                                                            <span>blue</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="brandAddress">
                                            <p><i className="fas fa-map-marker-alt"></i> &nbsp; Located:  
                                                <a href="#">UAE</a> <i className="fas fa-chevron-right"></i> 
                                                <a href="#">Dubai</a> <i className="fas fa-chevron-right"></i> 
                                                <a href="#">Business Bay</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="cateList Box">
                                        <div className="image">
                                            <a href="#">
                                                <img src="assets/images/Property/img1.webp" alt="" className="" />
                                            </a>
                                        </div>
                                        <div className="catDetail">
                                            <div className="heartFavour">
                                                <a href="#" id="favourite"><i className="far fa-heart"></i></a>
                                            </div>
                                            <div className="heading">
                                                <a href="#">
                                                    <h2>Mercedes benz S 550 Model 2017 import from us... </h2>
                                                </a>
                                            </div>
                                            <div className="breadcrum">
                                                <ul>
                                                    <li><a href="#">Used Cars for Sale</a></li>
                                                    <li><a href="#">Mercedes-Benz</a></li>
                                                    <li><a href="#">Mercedes-Benz S-className</a></li>
                                                </ul>
                                            </div>
                                            <div className="date">
                                                <p>25 June 2020</p>
                                            </div>
                                            <div className="brabdPrice">
                                                <h2>ETB 115,000</h2>
                                                <span>Selling Price</span>
                                            </div>
                                            <div className="brandProperty">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="proprty_box">
                                                            <p>Selling Price</p>
                                                            <span>2016</span>
                                                        </div>
                                                        <div className="proprty_box">
                                                            <p>Kilometers:</p>
                                                            <span>56,000</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="proprty_box">
                                                            <p>Doors:</p>
                                                            <span>5+ doors</span>
                                                        </div>
                                                        <div className="proprty_box">
                                                            <p>Color:</p>
                                                            <span>blue</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="brandAddress">
                                            <p><i className="fas fa-map-marker-alt"></i> &nbsp; Located:  
                                                <a href="#">UAE</a> <i className="fas fa-chevron-right"></i> 
                                                <a href="#">Dubai</a> <i className="fas fa-chevron-right"></i> 
                                                <a href="#">Business Bay</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </div>  
                   </div> 
            <Footer />
        </div>
        </>
    );
};
export default CategoryProperty;
