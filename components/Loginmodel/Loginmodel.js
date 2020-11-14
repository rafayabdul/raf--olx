import React from "react";
import { useEffect } from "react";

const LoginModel = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
 

  return (
    <div class="loginModel modal">
        <div class="modal-overlay modal-toggle"></div>
            <div class="modal-wrapper modal-transition">
                <div class="modal-body">
                    <div class="modal-content">
                        <div class="weapper">
                            <div class="container">
                                <div class="close btn">
                                    <button class="modal-close loginModel modal-toggle">
                                        <img src="assets/images/login/close.png" alt="close"/>
                                    </button>
                                </div>
                                <div class="pageStrengt login_page">
                                    <div class="image">
                                        <a href="/">
                                            <img src="assets/images/logo-min.png" alt="logo"/>
                                        </a>
                                    </div>
                                    <div class="text">
                                        <p class="welc">Welcome back!</p>
                                        <h3>Sign in to your account</h3>
                                        <span>Don’t have on account? <a href="signup.html">Signup</a></span>
                                    </div>
                                    <form method="get">
                                        <div class="form-group">
                                            <input type="email" placeholder="Email" id="email" name="email" required=""/>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" placeholder="Password" id="password" name="password" required=""/>
                                        </div>
                                        <div class="forget_pass">
                                            <a href="#">Forgot Password?</a>
                                        </div>
                                        <div class="form-group">
                                            <input type="submit" value="SIGN IN" id="submit" class="sobmitForm"/>
                                        </div>
                                        <p>or sign in with</p>
                                        <div class="form-share">
                                            <input type="submit" value="Google+" id="submit" class="sharebtn google"/>
                                            <input type="submit" value="facebook" id="submit" class="sharebtn facebook"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default LoginModel;
