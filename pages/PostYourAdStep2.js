import React from "react";
import { useEffect } from "react";


const PostYourAdStep2 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
        <div className="wrapper">
            <div class="addHeader">
                <div class="container">
                    <div class="close btn">
                        <a href="/home">
                            <img src="/assets/images/login/close.png" alt="close" />
                        </a>
                    </div>
                <div class="logo">
                    <a href="/">
                        <img src="/assets/images/olx logo.png" width={120} height={70} alt="" />
                     </a>
                </div>
                </div>
            </div>
            <div class="add_body">
                <div class="container">

                    <div class="addBox chose">
                        <form method="get"  action="/postyouradstep3" >
                        <div class="add_heading">
                            <h2>Which Service You want?  </h2>
                        </div>
                        <div class="choseBox">
                            <div class="form-group">
                                <input type="radio" id="test1" name="radio-group" checked />
                                <label for="test1">Post your ad on olx</label>
                                <div class="selectInfo">
                                    <p>On average, 80% of cars on dubizzle are sold within the first two weeks.</p>
                                    <span>Selling more cars? <a href="Place-Ad-Step3.html">Click here for our 5 car package.</a></span>
                                </div>
                            </div>
                        </div>
                        <div class="choseBox">
                            <div class="form-group">
                                <input type="radio" id="test2" name="radio-group" />
                                <label for="test2">Get the VIP treatment!</label>
                                <div class="selectInfo">
                                    <p>We list your ad, handle the negotiations, & promote it using our channels. You will only pay once we sell your car!</p>
                                    <a href="#" class="learnmore">Learn more</a>
                                </div>
                            </div>
                        </div>
                        <div class="submission">
                           <a href="/"> <input type="button" value="Continue"  class="sobmitForm"  /> </a>
                        </div>
                       </form> 
                    </div>
                </div>
            </div>

            


        </div>
        </>
    );
};
export default PostYourAdStep2 ;
