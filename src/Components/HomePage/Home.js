import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <section className="banner">
        <div className="banner-title">
          <h3>hello!</h3>
          <h1>i'm john doe</h1>
          <p>profesional web developer</p>
          <Link to="/contact" className="btn btn-orange">
            hire me
          </Link>
          <Link to="/portfolio" className="btn btn-gray">
            Portfolio
          </Link>
        </div>
        <img
          src="http://purepng.com/public/uploads/large/purepng.com-chuck-norrischuck-norrischucknorriscarlos-ray-norrisamerican-martial-artistactorproducerscreenwriter-1701528022168umwwk.png"
          // src="http://pngimg.com/uploads/chuck_norris/chuck_norris_PNG23.png"
          alt=""
          className="banner-img"
        />
      </section>
    );
  }
}
