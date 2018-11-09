import React, { Component } from "react";
import Header from "../GlobalSections/Header";
import Section from "../GlobalSections/Section";
import Footer from "../GlobalSections/Footer";
import PortBtn from "./PortfolioBtn";
import Project from "./Project";
import { projectData } from "../../Data/projects-data";
import Modal from "./Modal";
export default class Portfolio extends Component {
  state = {
    projects: projectData,
    sortedProjects: projectData,
    showModal: false,
    modal: {
      img: "",
      title: "",
      technlogy: "",
      description: "",
      stack: []
    }
  };
  handleSort = event => {
    const name = event.target.name;
    if (name === "all") {
      this.setState({
        sortedProjects: projectData
      });
    } else {
      const sortedData = projectData.filter(item => {
        return item.technology === name;
      });
      this.setState({
        sortedProjects: sortedData
      });
    }
  };
  openModal = id => {
    const item = this.state.projects.find(project => project.id === id);

    const { img, title, technology, description, stack } = item;

    this.setState({
      showModal: !this.state.showModal,
      modal: {
        img,
        title,
        technology,
        description,
        stack
      }
    });
  };
  closeModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };
  render() {
    const { projects } = this.state;
    const { sortedProjects } = this.state;
    const url =
      "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350";
    let tech = projects.map(project => project.technology);
    tech = new Set(tech);
    tech = ["all", ...tech];

    return (
      <React.Fragment>
        <Header title="portfolio" url={url} />
        <Section name="my work">
          {/* buttons */}
          <div className="portfolio-buttons">
            {tech.map((tech, index) => {
              return (
                <PortBtn key={index} name={tech} handleSort={this.handleSort} />
              );
            })}
          </div>
          {/* porfolio grid */}
          <div className="portfolio-center">
            {sortedProjects.map(project => {
              return (
                <Project
                  key={project.id}
                  project={project}
                  openModal={this.openModal}
                />
              );
            })}
          </div>
        </Section>
        <Footer />
        {this.state.showModal && (
          <Modal modal={this.state.modal} closeModal={this.closeModal} />
        )}
      </React.Fragment>
    );
  }
}
