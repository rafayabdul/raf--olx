import React from "react";
import { useEffect } from "react";

const CategorySidebar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
        <>
        <div className="left_sidebar">
            <div className="cat_dearch">
                <h2>Search</h2>
                <button id="savesearch">
                    <img src="assets/images/header/notification.png" />
                    Save Search
                </button>
            </div>
            <div className="selectbox">
                <div className="form-group">
                    <select id="mechanical_con" name="mechanical_con">
                        <option value="hide" hidden="">Dubai</option>
                        <option value="Dubai">Dubai</option>
                        <option value="Dubai">Dubai</option>
                    </select>
                </div>
                <div className="form-group">
                    <select id="mechanical_con" name="mechanical_con">
                        <option value="hide" hidden="">Three-Wheelers</option>
                        <option value="motor">motor</option>
                        <option value="Property for sale">Property for Sale</option>
                        <option value="Property for rent">Motors for rent</option>
                    </select>
                </div>
                <div className="form-group">
                    <select id="mechanical_con" name="mechanical_con">
                        <option value="hide" hidden="">Used Three-Wheelers for Sale</option>
                        <option value="Used cars for Sale">Used Cars for Sale</option>
                        <option value="Used bikes for Sale">Used bikes for Sale</option>
                        <option value="Used heavycar for Sale">Used heavyCars for Sale</option>
                    </select>
                </div>
                <div className="form-group">
                    <select id="mechanical_con" name="mechanical_con">
                        <option value="hide" hidden="">All Makes</option>
                        <option value="All Makes">All Makes</option>
                        <option value="All Makes">All Makes</option>
                    </select>
                </div>
            </div>
            <div className="sidebar_widgets">
                <div className="sidebar_heading">
                    <h2>Price (ETB)</h2>
                </div>
                <div className="flex_row">
                    <div className="form-group">
                        <input type="text" name="price_from" id="price_from" placeholder="Price From" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="price_from" id="price_to" placeholder="Price From" />
                    </div>
                </div>
            </div>
            <div className="sidebar_widgets">
                <div className="sidebar_heading">
                    <h2>Years</h2>
                </div>
                <div className="flex_row">
                    <div className="form-group">
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
                    <div className="form-group">
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
            <div className="sidebar_widgets">
                <div className="sidebar_heading">
                    <h2>Kilometers</h2>
                </div>
                <div className="flex_row">
                    <div className="form-group">
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
                    <div className="form-group">
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
            <div className="sidebar_widgets">
                <div className="sidebar_heading">
                    <h2>Seller Type</h2>
                </div>
                <div className="form-group">
                    <select id="mechanical_con" name="mechanical_con">
                        <option value="hide" hidden="">All Types</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                    </select>
                </div>
            </div>
            <div className="sidebar_widgets">
                <div className="sidebar_heading">
                    <h2>Badges</h2>
                </div>
                <div className="form-group">
                    <input type="radio" id="cat_s1" name="cat_s" />
                    <label for="cat_s1">Full Service History</label>
                </div>
                <div className="form-group">
                    <input type="radio" id="cat_s2" name="cat_s" />
                    <label for="cat_s2">Negotiable</label>
                </div>
                <div className="form-group">
                    <input type="radio" id="cat_s3" name="cat_s" />
                    <label for="cat_s3">Under Warranty</label>
                </div>
                <div className="form-group">
                    <input type="radio" id="cat_s4" name="cat_s"  />
                    <label for="cat_s4">Urgent</label>
                </div>
            </div>
            <div className="sidebar_widgets">
                <div className="sidebar_heading">
                    <h2>BikeReport</h2>
                </div>
                <div className="form-group">
                    <input type="radio" id="cat_s5" name="cat_sr" />
                    <label for="cat_s5">Show ads with  Bikes Report only</label>
                </div>
            </div>
            <div className="sidebar_widgets">
                <div className="sidebar_heading">
                    <h2>Keywords</h2>
                </div>
                <div className="form-group">
                    <input type="text" name="keyword" id="keywords" />
                </div>
                <div className="form-group">
                    <button id="serach_cat" name="serach_cat"><i className="fas fa-search"></i> SEARCH</button>
                </div>
                <div className="form-group">
                    <button id="advanceoption" name="advanceoption">Advanced Options <i className="fas fa-plus"></i></button>
                </div>
            </div>
        </div>
    </>
  );
};

export default CategorySidebar;
