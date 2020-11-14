import React from "react";
import { useEffect } from "react";


const PostYourAd = () => {
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
                    <div class="addBox">
                        <div class="add_heading">
                            <h2>Now choose the right category for your ad: </h2>
                        </div>
                        <ul>
                            
                            <li><a href="/postyouradstep2">Mobile/Tablet</a></li>
                            <li><a href="/postyouradstep2">Plots</a></li>
                            <li><a href="/postyouradstep2">Mobile/Computer Accesserories</a></li>
                            <li><a href="/postyouradstep2">Animals</a></li>
                            <li><a href="/postyouradstep2">Others</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            


        </div>
        </>
    );
};
export default PostYourAd ;
