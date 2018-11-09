import React, { Component } from "react";
import Header from "../GlobalSections/Header";
import Footer from "../GlobalSections/Footer";
import YouTube from "./YouTube";
import Udemy from "./Udemy";
export default class ContentPage extends Component {
  render() {
    const url =
      "https://images.pexels.com/photos/34407/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=350";
    return (
      <React.Fragment>
        <Header title="created content" url={url} />
        <YouTube />
        <Udemy />
        <Footer />
      </React.Fragment>
    );
  }
}
