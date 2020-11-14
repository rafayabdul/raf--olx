import React from "react";
import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


const MotorsIndex = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
        
        <div className="wrapper">
            <Header />
            
            {/* <div className="home_banner moters" style={{background: "url('/assets/images/motors/banner.jpg')"}}>
                <div className="container">
                    <div className="banner_heading">
                        <h1>Find Your Favourite Car</h1>
                    </div>
                    <div className="dearch_filter">
                        <form className="form-inline">
                            <div className="form-group">
                                <select className="categories" name="cat_name">
                                    <option value="Category Name 1">Cars</option>
                                    <option value="Category Name 2">Bikes</option>
                                    <option value="Category Name 3">Heavy Vehicles</option>
                                    <option value="Category Name 4">House for sale</option>
                                    <option value="Category Name 5">House for rent</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="search" id="cat_serach" name="cat_serach" placeholder="What are you looking for?" />
                            </div>
                            <div className="form-group">
                                <input type="submit" name="submit" id="cat_sumit" value="SEARCH" />
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}

            <section className="jobs_account">
                <div className="container">
                    <div className="tagjobs">
                        <div className="tagbox">
                           <a href="citiyana-motors-category.html"> 
                                <div className="left">
                                    <h3>22,600</h3>
                                    <p>Used Cars for sale</p>
                                </div>
                                <div className="right">
                                    <img src="/assets/images/motors/icon/car.png" alt="car" className="img-fluid" />
                                </div>
                            </a> 
                        </div>
                        <div className="tagbox">
                            <a href="citiyana-motorcycle-category.html">  
                                <div className="left">
                                    <h3>624</h3>
                                    <p>Motorcycles</p>
                                </div>
                                <div className="right">
                                    <img src="/assets/images/motors/icon/bike.png" alt="bike" className="img-fluid" />
                                </div>
                            </a>
                        </div>
                        <div className="tagbox">
                            <a href="citiyana-motors-category.html"> 
                                <div className="left">
                                    <h3>2,915</h3>
                                    <p>Accesories of car</p>
                                </div>
                                <div className="right">
                                    <img src="/assets/images/motors/icon/tool.png" alt="tool" className="img-fluid" />
                                </div> 
                            </a>
                        </div>
                        <div className="tagbox">
                           <a href="citiyana-heavy-vehicle.html">
                                <div className="left">
                                    <h3>541</h3>
                                    <p>Heavy Vehicles</p>
                                </div>
                                <div className="right">
                                    <img src="/assets/images/motors/icon/vihickle.png" alt="vihickle" className="img-fluid" />
                                </div>
                            </a> 
                        </div>
                        <div className="tagbox">
                          <a href="citiyana-boats-category.html">
                            <div className="left">
                                    <h3>417</h3>
                                    <p>Boats</p>
                                </div>
                                <div className="right">
                                    <img src="/assets/images/motors/icon/ship.png" alt="ship" className="img-fluid" />  
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="moterBody">
                <div className="container">
                    <div className="moterHeading">
                        <h2>Featured Brands</h2>
                    </div>
                    <div className="f_brand">
                        <div className="image">
                            <img src="/assets/images/motors/icon/brand01.png" alt="brand" className="img-fluid" />
                        </div>
                        <div className="image">
                            <img src="/assets/images/motors/icon/brand02.png" alt="brand" className="img-fluid" />
                        </div>
                        <div className="image">
                            <img src="/assets/images/motors/icon/brand03.jpg" alt="brand" className="img-fluid" />
                        </div>
                        <div className="image">
                            <img src="/assets/images/motors/icon/brand04.png" alt="brand" className="img-fluid" />
                        </div>
                        <div className="image">
                            <img src="/assets/images/motors/icon/brand05.png" alt="brand" className="img-fluid" />
                        </div>
                        <div className="image">
                            <img src="/assets/images/motors/icon/brand06.png" alt="brand" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <section className="article_slides">
                    <div className="container">
                        <div className="article_heading">
                            <h1>Featured Listings</h1>
                        </div>
                        <div className="row slides_box">
                            <div className="col-md-3">
                                <div className="article_box">
                                    <a href="citiyana-motors-detail.html">
                                        <div className="image">
                                            <img src="/assets/images/mainbody/prp_rent005-min.jpg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="detail">
                                            <h2>ETB 152,000</h2>
                                            <h3>Lorem ipsum dolor</h3>
                                            <p>Morbi imperdiet orci augue Morbi imperdiet orci augue</p>
                                            <div className="devider"></div>
                                            <div className="publisher_info">
                                                <div className="float-left">
                                                    <span>Al Waha Villas</span>
                                                </div>
                                                <div className="float-right">
                                                    <span>2mins</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                             <div className="col-md-3">
                                <div className="article_box">
                                    <a href="citiyana-motors-detail.html">
                                        <div className="image">
                                            <img src="/assets/images/mainbody/prp_rent006-min.jpg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="detail">
                                            <h2>ETB 152,000</h2>
                                            <h3>Lorem ipsum dolor</h3>
                                            <p>Morbi imperdiet orci augue Morbi imperdiet orci augue</p>
                                            <div className="devider"></div>
                                            <div className="publisher_info">
                                                <div className="float-left">
                                                    <span>Al Waha Villas</span>
                                                </div>
                                                <div className="float-right">
                                                    <span>2mins</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                             <div className="col-md-3">
                                <div className="article_box">
                                    <a href="citiyana-motors-detail.html">
                                        <div className="image">
                                            <img src="/assets/images/mainbody/prp_rent007-min.jpg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="detail">
                                            <h2>ETB 152,000</h2>
                                            <h3>Lorem ipsum dolor</h3>
                                            <p>Morbi imperdiet orci augue Morbi imperdiet orci augue</p>
                                            <div className="devider"></div>
                                            <div className="publisher_info">
                                                <div className="float-left">
                                                    <span>Al Waha Villas</span>
                                                </div>
                                                <div className="float-right">
                                                    <span>2mins</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                             <div className="col-md-3">
                                <div className="article_box">
                                    <a href="citiyana-motors-detail.html">
                                        <div className="image">
                                            <img src="/assets/images/mainbody/prp_rent008-min.jpg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="detail">
                                            <h2>ETB 152,000</h2>
                                            <h3>Lorem ipsum dolor</h3>
                                            <p>Morbi imperdiet orci augue Morbi imperdiet orci augue</p>
                                            <div className="devider"></div>
                                            <div className="publisher_info">
                                                <div className="float-left">
                                                    <span>Al Waha Villas</span>
                                                </div>
                                                <div className="float-right">
                                                    <span>2mins</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="article_box">
                                    <a href="citiyana-motors-detail.html">
                                        <div className="image">
                                            <img src="/assets/images/mainbody/prp_rent006-min.jpg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="detail">
                                            <h2>ETB 152,000</h2>
                                            <h3>Lorem ipsum dolor</h3>
                                            <p>Morbi imperdiet orci augue Morbi imperdiet orci augue</p>
                                            <div className="devider"></div>
                                            <div className="publisher_info">
                                                <div className="float-left">
                                                    <span>Al Waha Villas</span>
                                                </div>
                                                <div className="float-right">
                                                    <span>2mins</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="fetureAriticle">
                    <div className="container">
                        <div className="article_heading">
                            <h1>Featured Articles</h1>
                        </div>
                        <div className="myarticles">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="atcle_box">
                                        <div className="image">
                                            <a href="#">
                                                <img src="/assets/images/motors/article/article01.jpg" className="img-fluid" />
                                                <div className="date">Mar 15, 2017</div>
                                            </a>
                                        </div>
                                        <div className="artcle_info">
                                            <h2>Lorem ipsum dolor sit am consectetur adipiscing </h2>
                                            <p>This McLaren P1 Carbon Series consists of 5 cars worldwide that were retrofitted with a bare-carbon fiber body with specific design requests from clients...<a href="#">Read More</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="atcle_box">
                                        <div className="image">
                                            <a href="#">
                                                <img src="/assets/images/motors/article/article02.jpg" className="img-fluid" />
                                                <div className="date">Mar 15, 2017</div>
                                            </a>
                                        </div>
                                        <div className="artcle_info">
                                            <h2>Lorem ipsum dolor sit am consectetur adipiscing </h2>
                                            <p>This McLaren P1 Carbon Series consists of 5 cars worldwide that were retrofitted with a bare-carbon fiber body with specific design requests from clients...<a href="#">Read More</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="atcle_box">
                                        <div className="image">
                                            <a href="#">
                                                <img src="/assets/images/motors/article/article03.jpg" className="img-fluid" />
                                                <div className="date">Mar 15, 2017</div>
                                            </a>
                                        </div>
                                        <div className="artcle_info">
                                            <h2>Lorem ipsum dolor sit am consectetur adipiscing </h2>
                                            <p>This McLaren P1 Carbon Series consists of 5 cars worldwide that were retrofitted with a bare-carbon fiber body with specific design requests from clients...<a href="#">Read More</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="atcle_box">
                                        <div className="image">
                                            <a href="#">
                                                <img src="/assets/images/motors/article/article04.jpg" className="img-fluid" />
                                                <div className="date">Mar 15, 2017</div>
                                            </a>
                                        </div>
                                        <div className="artcle_info">
                                            <h2>Lorem ipsum dolor sit am consectetur adipiscing </h2>
                                            <p>This McLaren P1 Carbon Series consists of 5 cars worldwide that were retrofitted with a bare-carbon fiber body with specific design requests from clients...<a href="#">Read More</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <div className="diveder"></div>
                </div>
                <section className="testimonial">
                    <div className="container">
                        <div className="heading">
                            <h2>User Testimonials</h2>
                        </div>
                        <div className="testimonial_script">
                            <div className="slider-for">
                                <div className="testimonial_slides">
                                    <div className="info">
                                        <p>1Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. </p>
                                        <div className="image">
                                           <img src="/assets/images/motors/testimonial/qutation.png" className="img-fluid" />
                                        </div>
                                        
                                    </div>
                                    <div id="triangle-down"></div>
                                </div>
                                <div className="testimonial_slides">
                                    <div className="info">
                                        <p>2Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. </p>
                                        <div className="image">
                                           <img src="/assets/images/motors/testimonial/qutation.png" className="img-fluid" />
                                        </div>
                                        
                                    </div>
                                    <div id="triangle-down"></div>
                                </div>
                                <div className="testimonial_slides">
                                    <div className="info">
                                        <p>3Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. </p>
                                        <div className="image">
                                           <img src="/assets/images/motors/testimonial/qutation.png" className="img-fluid" />
                                        </div>
                                        
                                    </div>
                                    <div id="triangle-down"></div>
                                </div>
                                <div className="testimonial_slides">
                                    <div className="info">
                                        <p>4Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. </p>
                                        <div className="image">
                                           <img src="/assets/images/motors/testimonial/qutation.png" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div id="triangle-down"></div>
                                </div>
                                <div className="testimonial_slides">
                                    <div className="info">
                                        <p>5Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. </p>
                                        <div className="image">
                                           <img src="/assets/images/motors/testimonial/qutation.png" className="img-fluid" />
                                        </div>
                                        
                                    </div>
                                    <div id="triangle-down"></div>
                                </div>
                                <div className="testimonial_slides">
                                    <div className="info">
                                        <p>6Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. </p>
                                        <div className="image">
                                           <img src="/assets/images/motors/testimonial/qutation.png" className="img-fluid" />
                                        </div>
                                        
                                    </div>
                                    <div id="triangle-down"></div>
                                </div>
                            </div>
                            <div className="slider-nav">
                                <div className="nav_info">
                                    <div className="image">
                                        <img src="/assets/images/motors/testimonial/icon1.png" />    
                                    </div>
                                    <div className="user_info">
                                        <h2>1Pauline Pauley</h2>
                                        <p>Blessed Sacrament Congregation</p>
                                    </div>
                                </div>
                                <div className="nav_info">
                                    <div className="image">
                                        <img src="/assets/images/motors/testimonial/icon2.png" />    
                                    </div>
                                    <div className="user_info">
                                        <h2>2Pauline Pauley</h2>
                                        <p>Blessed Sacrament Congregation</p>
                                    </div>    
                                </div>
                                <div className="nav_info">
                                    <div className="image">
                                        <img src="/assets/images/motors/testimonial/icon3.png" />    
                                    </div>
                                    <div className="user_info">
                                        <h2>3Pauline Pauley</h2>
                                        <p>Blessed Sacrament Congregation</p>
                                    </div>
                                </div>
                                <div className="nav_info">
                                    <div className="image">
                                        <img src="/assets/images/motors/testimonial/icon4.png" />    
                                    </div>
                                    <div className="user_info">
                                        <h2>4Pauline Pauley</h2>
                                        <p>Blessed Sacrament Congregation</p>
                                    </div>
                                </div>
                                <div className="nav_info">
                                    <div className="image">
                                        <img src="/assets/images/motors/testimonial/icon6.png" />    
                                    </div>
                                    <div className="user_info">
                                        <h2>5Pauline Pauley</h2>
                                        <p>Blessed Sacrament Congregation</p>
                                    </div>
                                </div>
                                <div className="nav_info">
                                    <div className="image">
                                        <img src="/assets/images/motors/testimonial/icon2.png" />    
                                    </div>
                                    <div className="user_info">
                                        <h2>6Pauline Pauley</h2>
                                        <p>Blessed Sacrament Congregation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
        </>
    );
};
export default MotorsIndex;
