import React from "react";
import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


const MobileIndex = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
        <div className="wrapper">
            <Header />
            




            <div class="homeMain_body">
                <div class="container">
                    <div class="categories_page">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="left_sidebar">
                                    <div class="cat_dearch">
                                        <h2>Search</h2>
                                        <button id="savesearch">
                                            <img src="/assets/images/header/notification.png" />
                                            Save Search
                                        </button>
                                    </div>
                                    <div class="selectbox">
                                        <div class="form-group">
                                            <select id="mechanical_con" name="mechanical_con">
                                                <option value="hide" hidden="">Dubai</option>
                                                <option value="Dubai">Dubai</option>
                                                <option value="Dubai">Dubai</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <select id="mechanical_con" name="mechanical_con">
                                                <option value="hide" hidden="">Boats</option>
                                                <option value="motor">motor</option>
                                                <option value="Property for sale">Property for Sale</option>
                                                <option value="Property for rent">Motors for rent</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <select id="mechanical_con" name="mechanical_con">
                                                <option value="hide" hidden="">Used Boats for Sale</option>
                                                <option value="Used cars for Sale">Used Cars for Sale</option>
                                                <option value="Used bikes for Sale">Used bikes for Sale</option>
                                                <option value="Used heavycar for Sale">Used heavyCars for Sale</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <select id="mechanical_con" name="mechanical_con">
                                                <option value="hide" hidden="">All Makes</option>
                                                <option value="All Makes">All Makes</option>
                                                <option value="All Makes">All Makes</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="sidebar_widgets">
                                        <div class="sidebar_heading">
                                            <h2>Price (ETB)</h2>
                                        </div>
                                        <div class="flex_row">
                                            <div class="form-group">
                                                <input type="text" name="price_from" id="price_from" placeholder="Price From" />
                                            </div>
                                            <div class="form-group">
                                                <input type="text" name="price_from" id="price_to" placeholder="Price From" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sidebar_widgets">
                                        <div class="sidebar_heading">
                                            <h2>Years</h2>
                                        </div>
                                        <div class="flex_row">
                                            <div class="form-group">
                                                <select id="mechanical_con" name="mechanical_con">
                                                    <option value="hide" hidden="">Year From</option>
                                                    <option value="2010">2010</option>
                                                    <option value="2011">2011</option>
                                                    <option value="2012">2012</option>
                                                    <option value="2013">2013</option>
                                                    <option value="2014">2014</option>
                                                    <option value="2016">2016</option>
                                                    <option value="2017">2017</option>
                                                    <option value="2018">2018</option>
                                                    <option value="2019">2019</option>
                                                    <option value="2020">2020</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <select id="mechanical_con" name="mechanical_con">
                                                    <option value="hide" hidden="">Year From</option>
                                                    <option value="2010">2010</option>
                                                    <option value="2011">2011</option>
                                                    <option value="2012">2012</option>
                                                    <option value="2013">2013</option>
                                                    <option value="2014">2014</option>
                                                    <option value="2016">2016</option>
                                                    <option value="2017">2017</option>
                                                    <option value="2018">2018</option>
                                                    <option value="2019">2019</option>
                                                    <option value="2020">2020</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sidebar_widgets">
                                        <div class="sidebar_heading">
                                            <h2>Kilometers</h2>
                                        </div>
                                        <div class="flex_row">
                                            <div class="form-group">
                                                <select id="mechanical_con" name="mechanical_con">
                                                    <option value="hide" hidden="">Year From</option>
                                                    <option value="2010">2010</option>
                                                    <option value="2011">2011</option>
                                                    <option value="2012">2012</option>
                                                    <option value="2013">2013</option>
                                                    <option value="2014">2014</option>
                                                    <option value="2016">2016</option>
                                                    <option value="2017">2017</option>
                                                    <option value="2018">2018</option>
                                                    <option value="2019">2019</option>
                                                    <option value="2020">2020</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <select id="mechanical_con" name="mechanical_con">
                                                    <option value="hide" hidden="">Year From</option>
                                                    <option value="2010">2010</option>
                                                    <option value="2011">2011</option>
                                                    <option value="2012">2012</option>
                                                    <option value="2013">2013</option>
                                                    <option value="2014">2014</option>
                                                    <option value="2016">2016</option>
                                                    <option value="2017">2017</option>
                                                    <option value="2018">2018</option>
                                                    <option value="2019">2019</option>
                                                    <option value="2020">2020</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sidebar_widgets">
                                        <div class="sidebar_heading">
                                            <h2>Seller Type</h2>
                                        </div>
                                        <div class="form-group">
                                            <select id="mechanical_con" name="mechanical_con">
                                                <option value="hide" hidden="">All Types</option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="sidebar_widgets">
                                        <div class="sidebar_heading">
                                            <h2>Badges</h2>
                                        </div>
                                        <div class="form-group">
                                            <input type="radio" id="cat_s1" name="cat_s" />
                                            <label for="cat_s1">Full Service History</label>
                                        </div>
                                        <div class="form-group">
                                            <input type="radio" id="cat_s2" name="cat_s" />
                                            <label for="cat_s2">Negotiable</label>
                                        </div>
                                        <div class="form-group">
                                            <input type="radio" id="cat_s3" name="cat_s" />
                                            <label for="cat_s3">Under Warranty</label>
                                        </div>
                                        <div class="form-group">
                                            <input type="radio" id="cat_s4" name="cat_s" />
                                            <label for="cat_s4">Urgent</label>
                                        </div>
                                    </div>
                                    <div class="sidebar_widgets">
                                        <div class="sidebar_heading">
                                            <h2>BikeReport</h2>
                                        </div>
                                        <div class="form-group">
                                            <input type="radio" id="cat_s5" name="cat_sr" />
                                            <label for="cat_s5">Show ads with  Boats Report only</label>
                                        </div>
                                    </div>
                                    <div class="sidebar_widgets">
                                        <div class="sidebar_heading">
                                            <h2>Keywords</h2>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" name="keyword" id="keywords" />
                                        </div>
                                        <div class="form-group">
                                            <button id="serach_cat" name="serach_cat"><i class="fas fa-search"></i> SEARCH</button>
                                        </div>
                                        <div class="form-group">
                                            <button id="advanceoption" name="advanceoption">Advanced Options <i class="fas fa-plus"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-9">
                                <div class="catmain_content">
                                    <div class="heading">
                                        <h2>5147 Mobile Phones for sale online in Dubai, UAE
                                            · 5147 ads</h2>
                                        <p>Get the latest Smartphone deals at cheap prices.</p>
                                    </div>
                                    <div class="brand_box">
                                        <div class="breadcrumbs">
                                            <p>Browse results in: <a href="#">Dubai</a>  <a href="citiyana-motorcycles-category.html"> Mobiles and Tablets</a>  Used Mobile & tablets for Sale</p>
                                        </div>
                                        <div class="brandsAmount">
                                            <div class="row">
                                                <div class="col-md-3 col-sm-4">
                                                    <div class="brandtag">
                                                        <a href="#">
                                                            <p>Apple iPhone <span>(350)</span></p>
                                                        </a>
                                                    </div>
                                                </div>    
                                                <div class="col-md-3 col-sm-4">    
                                                    <div class="brandtag">
                                                        <a href="#">
                                                            <p>Asus <span>(1400)</span></p>
                                                        </a>
                                                    </div>
                                                </div>    


                                                <div class="col-md-3 col-sm-4">    
                                                    <div class="brandtag">
                                                        <a href="#">
                                                            <p>Samsung ‬ <span>(1400)</span></p>
                                                        </a>
                                                    </div>
                                                </div>   



                                                <div class="col-md-3 col-sm-4">    
                                                    <div class="brandtag">
                                                        <a href="#">
                                                            <p>HP/Compaq ‬<span>(1400)</span></p>
                                                        </a>
                                                    </div>
                                                </div>   



                                                <div class="col-md-3 col-sm-4">    
                                                    <div class="brandtag">
                                                        <a href="#">
                                                            <p>Blackberry<span>(634)</span></p>
                                                        </a>
                                                    </div>
                                                </div>
                                                
                                                    
                                                
                                                  
                                           
                                               
                                                  
                                                <div class="col-md-3 col-sm-4">    
                                                    <div class="brandtag">
                                                        <a href="#">
                                                            <p>other<span>(62)</span></p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="showAll brand">
                                                <p>Show All Brands <i class="fas fa-chevron-down"></i></p>
                                            </div>
                                            <div class="brand hidden_farmat">
                                                <div class="row">
                                                    <div class="col-md-3 col-sm-4">
                                                        <div class="brandtag">
                                                            <a href="#">
                                                                <p>Audi <span>(826)</span></p>
                                                            </a>
                                                        </div>
                                                    </div>    
                                                    <div class="col-md-3 col-sm-4">    
                                                        <div class="brandtag">
                                                            <a href="#">
                                                                <p>BMW <span>(1062)</span></p>
                                                            </a>
                                                        </div>
                                                    </div>    
                                                    <div class="col-md-3 col-sm-4">    
                                                        <div class="brandtag">
                                                            <a href="#">
                                                                <p>Chevrolet <span>(734)</span></p>
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-3 col-sm-4">
                                                        <div class="brandtag">
                                                            <a href="#">
                                                                <p>Hyundai <span>(712) </span></p>
                                                            </a>
                                                        </div>
                                                    </div>    
                                                    <div class="col-md-3 col-sm-4">    
                                                        <div class="brandtag">
                                                            <a href="#">
                                                                <p>Mercedez Benz <span>(2897)</span></p>
                                                            </a>
                                                        </div>
                                                    </div>    
                                                    <div class="col-md-3 col-sm-4">    
                                                        <div class="brandtag">
                                                            <a href="#">
                                                                <p>Mitsubishi <span>(826)</span></p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 col-sm-4">
                                                        <div class="brandtag">
                                                            <a href="#">
                                                                <p>Ford <span>(734)</span></p>
                                                            </a>
                                                        </div>
                                                    </div>    
                                                    <div class="col-md-3 col-sm-4">    
                                                        <div class="brandtag">
                                                            <a href="#">
                                                                <p>and Rover <span>(1062)</span></p>
                                                            </a>
                                                        </div>
                                                    </div>    
                                                    <div class="col-md-3 col-sm-4">    
                                                        <div class="brandtag">
                                                            <a href="#">
                                                                <p>Hyundai <span>(712)</span></p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 col-sm-4">
                                                        <div class="brandtag">
                                                            <a href="#">
                                                                <p>HPorshe <span>(2897)</span> </p>
                                                            </a>
                                                        </div>
                                                    </div>    
                                                    <div class="col-md-3 col-sm-4">    
                                                        <div class="brandtag">
                                                            <a href="#">
                                                                <p>Toyota <span>(712)</span></p>
                                                            </a>
                                                        </div>
                                                    </div>    
                                                    <div class="col-md-3 col-sm-4">    
                                                        <div class="brandtag">
                                                            <a href="#">
                                                                <p>Nissan <span>(1062)</span></p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="categoryHeading">
                                        <div class="left">
                                            <p>57,713 Ads in Dubai</p>
                                        </div>
                                        <div class="right">
                                            <p>SORT:
                                                <select id="filtercar">
                                                    <option value="" hidden="">Newest First</option>
                                                    <option value="DESC">DESC</option>
                                                    <option value="ASC">ASC</option>
                                                </select>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="cateList Box">
                                        <div class="image">
                                            <a href="#">
                                                <img src="/assets/images/mobilestab/img.webp" alt="" class="" />
                                            </a>
                                        </div>
                                        <div class="catDetail">
                                            <div class="heartFavour">
                                                <a href="#" id="favourite"><i class="far fa-heart"></i></a>
                                            </div>
                                            <div class="heading">
                                                <a href="#">
                                                <h2>FourWinns 175 hours only used like ...</h2>
                                                </a>
                                            </div>
                                            <div class="breadcrum">
                                                <ul>
                                                    <li><a href="#">Used boats for Sale</a></li>
                                                    <li><a href="#">FourWinns 175 hours only used like ...</a></li>
                                                    <li><a href="#">FourWinns 175 hours only used like ... S-Class</a></li>
                                                </ul>
                                            </div>
                                            <div class="date">
                                                <p>25 June 2020</p>
                                            </div>
                                            <div class="brabdPrice">
                                                <h2>ETB 85,000</h2>
                                                <span>Selling Price</span>
                                            </div>
                                            <div class="brandProperty">
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <div class="proprty_box">
                                                            <p>Selling Price</p>
                                                            <span>2019</span>
                                                        </div>
                                                        <div class="proprty_box">
                                                            <p>Kilometers:</p>
                                                            <span>0</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="proprty_box">
                                                            <p>Usage:</p>
                                                            <span>used onces</span>
                                                        </div>
                                                        <div class="proprty_box">
                                                            <p>Color:</p>
                                                            <span>white</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="brandAddress">
                                            <p><i class="fas fa-map-marker-alt"></i> &nbsp; Located:  
                                                <a href="#">UAE</a> <i class="fas fa-chevron-right"></i> 
                                                <a href="#">Dubai</a> <i class="fas fa-chevron-right"></i> 
                                                <a href="#">Business Bay</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="cateList Box">
                                        <div class="image">
                                            <a href="#">
                                            <img src="/assets/images/mobilestab/img1.webp"  alt="" class="" />
                                            </a>
                                        </div>
                                        <div class="catDetail">
                                            <div class="heartFavour">
                                                <a href="#" id="favourite"><i class="far fa-heart"></i></a>
                                            </div>
                                            <div class="heading">
                                                <a href="#">
                                                    <h2>2018 SUPERSPORT S 939
                                                    </h2>
                                                </a>
                                            </div>
                                            <div class="breadcrum">
                                                <ul>
                                                    <li><a href="#">Used Boats for Sale</a></li>
                                                    <li><a href="#">2018 SUPERSPORT S 939
                                                    </a></li>
                                                    <li><a href="#">2018 SUPERSPORT S 939
                                                        S-Class</a></li>
                                                </ul>
                                            </div>
                                            <div class="date">
                                                <p>15 June 2020</p>
                                            </div>
                                            <div class="brabdPrice">
                                                <h2>ETB 55,000</h2>
                                                <span>Selling Price</span>
                                            </div>
                                            <div class="brandProperty">
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <div class="proprty_box">
                                                            <p>Selling Price</p>
                                                            <span>2017</span>
                                                        </div>
                                                        <div class="proprty_box">
                                                            <p>Kilometers:</p>
                                                            <span>6,000</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="proprty_box">
                                                            <p>Wheel</p>
                                                            <span>2</span>
                                                        </div>
                                                        <div class="proprty_box">
                                                            <p>Color:</p>
                                                            <span>red</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="brandAddress">
                                            <p><i class="fas fa-map-marker-alt"></i> &nbsp; Located:  
                                                <a href="#">UAE</a> <i class="fas fa-chevron-right"></i> 
                                                <a href="#">Dubai</a> <i class="fas fa-chevron-right"></i> 
                                                <a href="#">Business Bay</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="cateList Box">
                                        <div class="image">
                                            <a href="#">
                                            <img src="/assets/images/mobilestab/img3.webp"  alt="" class="" />
                                            </a>
                                        </div>
                                        <div class="catDetail">
                                            <div class="heartFavour">
                                                <a href="#" id="favourite"><i class="far fa-heart"></i></a>
                                            </div>
                                            <div class="heading">
                                                <a href="#">
                                                    <h2>2019 MONSTER 821 </h2>
                                                </a>
                                            </div>
                                            <div class="breadcrum">
                                                <ul>
                                                    <li><a href="#">Used boats for Sale</a></li>
                                                    <li><a href="#">2019 MONSTER 821</a></li>
                                                    <li><a href="#">2019 MONSTER 821 S-Class</a></li>
                                                </ul>
                                            </div>
                                            <div class="date">
                                                <p>20 June 2020</p>
                                            </div>
                                            <div class="brabdPrice">
                                                <h2>ETB 65,000</h2>
                                                <span>Selling Price</span>
                                            </div>
                                            <div class="brandProperty">
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <div class="proprty_box">
                                                            <p>Selling Price</p>
                                                            <span>2016</span>
                                                        </div>
                                                        <div class="proprty_box">
                                                            <p>Kilometers:</p>
                                                            <span>15,000</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="proprty_box">
                                                            <p>Wheel</p>
                                                            <span>2 wheel</span>
                                                        </div>
                                                        <div class="proprty_box">
                                                            <p>Color:</p>
                                                            <span>yellow</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="brandAddress">
                                            <p><i class="fas fa-map-marker-alt"></i> &nbsp; Located:  
                                                <a href="#">UAE</a> <i class="fas fa-chevron-right"></i> 
                                                <a href="#">Dubai</a> <i class="fas fa-chevron-right"></i> 
                                                <a href="#">Business Bay</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="cateList Box">
                                        <div class="image">
                                            <a href="#">
                                                <img src="/assets/images/mobilestab/img2.webp"  alt="" class="" />
                                            </a>
                                        </div>
                                        <div class="catDetail">
                                            <div class="heartFavour">
                                                <a href="#" id="favourite"><i class="far fa-heart"></i></a>
                                            </div>
                                            <div class="heading">
                                                <a href="#"> 
                                                    <h2>Ducati Monster 821</h2>
                                                </a>
                                            </div>
                                            <div class="breadcrum">
                                                <ul>
                                                    <li><a href="#">Used boats for Sale</a></li>
                                                    <li><a href="#">Ducati Monster 821</a></li>
                                                    <li><a href="#">Ducati Monster 821 S-Class</a></li>
                                                </ul>
                                            </div>
                                            <div class="date">
                                                <p>2 July 2020</p>
                                            </div>
                                            <div class="brabdPrice">
                                                <h2>ETB 315,000</h2>
                                                <span>Selling Price</span>
                                            </div>
                                            <div class="brandProperty">
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <div class="proprty_box">
                                                            <p>Selling Price</p>
                                                            <span>2020</span>
                                                        </div>
                                                        <div class="proprty_box">
                                                            <p>Kilometers:</p>
                                                            <span>000</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="proprty_box">
                                                            <p>Wheel</p>
                                                            <span>2</span>
                                                        </div>
                                                        <div class="proprty_box">
                                                            <p>Color:</p>
                                                            <span>BLACK</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="brandAddress">
                                            <p><i class="fas fa-map-marker-alt"></i> &nbsp; Located:  
                                                <a href="#">UAE</a> <i class="fas fa-chevron-right"></i> 
                                                <a href="#">Dubai</a> <i class="fas fa-chevron-right"></i> 
                                                <a href="#">Business Bay</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="cateList Box">
                                        <div class="image">
                                            <a href="#">
                                                <img src="/assets/images/mobilestab/img1.webp"  alt="" class="" />
                                            </a>
                                        </div>
                                        <div class="catDetail">
                                            <div class="heartFavour">
                                                <a href="#" id="favourite"><i class="far fa-heart"></i></a>
                                            </div>
                                            <div class="heading">
                                                <a href="#">
                                                    <h2>Ducati 1199 S panigale </h2>
                                                </a>
                                            </div>
                                            <div class="breadcrum">
                                                <ul>
                                                    <li><a href="#">Used boats for Sale</a></li>
                                                    <li><a href="#">Ducati 1199 S panigale</a></li>
                                                    <li><a href="#">Ducati 1199 S panigale S-Class</a></li>
                                                </ul>
                                            </div>
                                            <div class="date">
                                                <p>19 June 2020</p>
                                            </div>
                                            <div class="brabdPrice">
                                                <h2>ETB 50,000</h2>
                                                <span>Selling Price</span>
                                            </div>
                                            <div class="brandProperty">
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <div class="proprty_box">
                                                            <p>Selling Price</p>
                                                            <span>2017</span>
                                                        </div>
                                                        <div class="proprty_box">
                                                            <p>Kilometers:</p>
                                                            <span>11,000</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="proprty_box">
                                                            <p>wheel</p>
                                                            <span>2</span>
                                                        </div>
                                                        <div class="proprty_box">
                                                            <p>Color:</p>
                                                            <span>red</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="brandAddress">
                                            <p><i class="fas fa-map-marker-alt"></i> &nbsp; Located:  
                                                <a href="#">UAE</a> <i class="fas fa-chevron-right"></i> 
                                                <a href="#">Dubai</a> <i class="fas fa-chevron-right"></i> 
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
export default MobileIndex;
