
import React from "react";
import { useEffect } from "react";

const Signupmodel = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div class="signupModel modal">
        <div class="modal-overlay modal-toggle"></div>
            <div class="modal-wrapper modal-transition">
                <div class="modal-body">
                    <div class="modal-content">
                        <div class="wrapper">
                            <div class="container">
                                <div class="close btn">
                                    <button class="modal-close signupModel modal-toggle">
                                        <img src="assets/images/login/close.png" alt="close"/>
                                    </button>
                                </div>
                                <div class="pageStrengt signup_page">
                                    <div class="signup_heading">
                                        <div class="logo">
                                            <a href="/">
                                                <img src="assets/images/logo-min.png" alt="logo"/>
                                            </a>
                                        </div>
                                        <h3>Create a account</h3>
                                        <span>Already have an account? <a href="login.html">Sign In</a></span>
                                    </div>
                                    <div class="signupForm">
                                        <form method="post">
                                            <div class="form-group">
                                                <input type="text" name="f_name" placeholder="First Name" id="f_name" class="f_name" required=""/>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" name="l_name" placeholder="Last Name" id="l_name" class="l_name" required=""/>
                                            </div>
                                            <div class="form-group">
                                                <input type="email" name="s_email" placeholder="Email" id="s_email" class="s_email" required=""/>
                                            </div>
                                            <div class="form-group">
                                                <input type="password" name="s_pass" placeholder="Password" id="s_pass" class="s_pass" required=""/>
                                            </div>
                                            <div class="form-group">
                                                <input type="submit" value="SIGN UP" id="submit" class="sobmitForm"/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  );
};

export default Signupmodel;