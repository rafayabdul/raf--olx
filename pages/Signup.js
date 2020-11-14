import React, { Component } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import BG from "../assets/bg.jpeg";
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      surname: "",
      email: "",
      password: "",
      companyName: "",
      numberOfEmployes: "",
    };
  }

  handleClick(event) {
    event.preventDefault();
    // // form validation start
    if (this.state.username === "") {
      document.getElementById("username-span").style.display = "block";
    }
    if (this.state.email === "") {
      document.getElementById("email-span").style.display = "block";
    }
    if (this.state.password === "") {
      document.getElementById("password-span").style.display = "block";
    }
    if (this.state.surname === "") {
      document.getElementById("surname-span").style.display = "block";
    }
    if (this.state.companyName === "") {
      document.getElementById("company-span").style.display = "block";
    }
    if (this.state.numberOfEmployes === "") {
      document.getElementById("employe-span").style.display = "block";
    }
    // form validation end

    if (
      this.state.email !== "" &&
      this.state.password !== "" &&
      this.state.username !== "" &&
      this.state.surname !== "" &&
      this.state.numberOfEmployes !== "" &&
      this.state.companyName !== ""
    ) {
      document.getElementById("username-span").style.display = "none";
      document.getElementById("email-span").style.display = "none";
      document.getElementById("password-span").style.display = "none";
      document.getElementById("surname-span").style.display = "none";
      document.getElementById("company-span").style.display = "none";
      document.getElementById("employe-span").style.display = "none";
      axios
        .post("http://127.0.0.1:8000/api/signup", {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
        })
        .then((res) => {
          // check res and show alert message if user is successfully signed up
          if ( res.data.return === true ) {
            swal({
              title: "Congrats!",
              icon: "success",
              text: "Account has been created successfully",
            });
          } else {
            swal({
              title: 'Oh Snap!',
              icon: 'error',
              text: res.data.message
            })
          }
        })
        .catch((err) => {
          swal({
            title: "Oh Snap!",
            icon: "error",
            text: err.message,
          });
        });
    }
  }

  render() {
    return (
      <div
        style={{
          // backgroundImage: `url("${BG}")`,
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: "center",
          // backgroundSize: "cover",
          // height: window.innerHeight/.7
          display: ( this.props.isSignup === true ) ? "block" : "none"

        }}
      >
            <div class="signupModel modal is-visible"
             style={{
               display: "block" , 
               position: "fixed" , 
               zIndex: 999999}}
               >

                <div class="modal-overlay modal-toggle"></div>
                <div class="modal-wrapper modal-transition">
                    <div class="modal-body">
                        <div class="modal-content">
                            <div class="wrapper">
                                <div class="container">
                                    <div class="close btn">
                                        <button class="modal-close signupModel modal-toggle" onClick={this.props.closebtn}>
                                            <img src="/assets/images/login/close.png" alt="close" />
                                        </button>
                                    </div>
                                    <div class="pageStrengt signup_page">
                                        <div class="signup_heading">
                                            <div class="logo">
                                                <a href="/">
                                                    <img src="/assets/images/logo-min.png" alt="logo" />
                                                </a>
                                            </div>
                                            <h3>Create a account</h3>
                                            <span>Already have an account? <a href="login.html">Sign In</a></span>
                                        </div>
                                        <div class="signupForm">
                                            <form method="post">
                                                <div class="form-group">
                                                    <input type="text" name="f_name" placeholder="First Name" id="f_name" class="f_name" required="" />
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" name="l_name" placeholder="Last Name" id="l_name" class="l_name" required="" />
                                                </div>
                                                <div class="form-group">
                                                    <input type="email" name="s_email" placeholder="Email" id="s_email" class="s_email" required="" />
                                                </div>
                                                <div class="form-group">
                                                    <input type="password" name="s_pass" placeholder="Password" id="s_pass" class="s_pass" required="" />
                                                </div>
                                                <div class="form-group">
                                                    <input type="submit" value="SIGN UP" id="submit" class="sobmitForm" />
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
        </div>
      
    );
  }
}

export default Signup;
