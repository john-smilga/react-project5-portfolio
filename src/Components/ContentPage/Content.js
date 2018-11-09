import React, { Component } from "react";
import Header from "../GlobalSections/Header";
import Footer from "../GlobalSections/Footer";
import YouTube from "./YouTube";
import Udemy from "./Udemy";
export default class ContentPage extends Component {
  render() {
    const url =
      "https://cdn.pixabay.com/photo/2016/03/03/10/17/interaction-1233873__480.jpg";
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
