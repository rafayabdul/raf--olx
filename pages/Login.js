import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import swal from 'sweetalert'
import BG from "../assets/bg.jpeg";


import { login } from "../actions/authAction";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isAuthorized: (localStorage.getItem("userAuthenticates") === "true") ? true : false
    };
  }

  componentDidMount() {
    if (this.state.isAuthorized === true) {
      this.props.history.push("/");
    }
  }



  handleClick(event) {
    event.preventDefault();
    if (this.state.email === "") {
      document.getElementById("email-span").style.display = "block";
    }
    if (this.state.password === "") {
      document.getElementById("password-span").style.display = "block";
    }
    // form validation end

    if (this.state.email !== "" && this.state.password !== "") {
      document.getElementById("email-span").style.display = "none";
      document.getElementById("password-span").style.display = "none";

      this.props.login({
        username: this.state.email,
        password: this.state.password
      });
      setTimeout(() => {
        if (this.props.rest.IS_RETURN === true && this.props.rest.RETURN === false) {
          swal({
            title: 'Oh Snap!',
            icon: 'error',
            text: this.props.rest.RETURN_MESSAGE
          })
        } else if (this.props.rest.IS_RETURN === true && this.props.rest.RETURN === true)  {
          this.props.history.push("/")
        }
      }, 1700);
    }
  }

  render() {
    return (
      <div
        style={{
          display: ( this.props.islogin === true ) ? "block" : "none"
        }}
      >
        <div class="loginModel modal is-visible" 
        style={{
          display: "block" ,
          position: "fixed",
          zIndex : 999999
          }}
          >
                    <div class="modal-overlay modal-toggle"></div>
                    <div class="modal-wrapper modal-transition">
                        <div class="modal-body">
                            <div class="modal-content">
                                <div class="weapper">
                                    <div class="container">
                                        <div class="close btn">
                                            <button class="modal-close loginModel modal-toggle" onClick={this.props.closebtn}>
                                                <img src="/assets/images/login/close.png" alt="close" />
                                            </button>
                                        </div>
                                        <div class="pageStrengt login_page">
                                            <div class="image">
                                                <a href="/">
                                                    <img src="/assets/images/logo-min.png" alt="logo" />
                                                </a>
                                            </div>
                                            <div class="text">
                                                <p class="welc">Welcome back!</p>
                                                <h3>Sign in to your account</h3>
                                                <span>Don’t have on account? <a href="signup.html">Signup</a></span>
                                            </div>
                                            <form method="get">
                                                <div class="form-group">
                                                    <input type="email" placeholder="Email" id="email" name="email" required="" />
                                                </div>
                                                <div class="form-group">
                                                    <input type="password" placeholder="Password" id="password" name="password" required="" />
                                                </div>
                                                <div class="forget_pass">
                                                    <a href="#">Forgot Password?</a>
                                                </div>
                                                <div class="form-group">
                                                    <input type="submit" value="SIGN IN" id="submit" class="sobmitForm" />
                                                </div>
                                                <p>or sign in with</p>
                                                <div class="form-share">
                                                    <input type="submit" value="Google+" id="submit" class="sharebtn google" />
                                                    <input type="submit" value="facebook" id="submit" class="sharebtn facebook" />
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
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  rest: state.rest
});


const mapDispatchToProps = dispatch => ({
  login: payload => dispatch(login(payload))
});

export default
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);

