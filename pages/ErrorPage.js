import React, { Component } from "react";
import { Link } from "react-router-dom";
import swal from 'sweetalert'
import BG from "../assets/bg.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';

class ErrorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    swal({
        title: 'Oh Snap!',
        icon: 'error',
        text: 'Page not found'
      }).then((value) => {
        this.props.history.push("/")
      });
  }
  render() {
    return (
      <div
        style={{
          backgroundImage: `url("${BG}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: '100%',
          height: window.innerHeight
        }}
      >
      </div>
    );
  }
}

export default ErrorPage;
