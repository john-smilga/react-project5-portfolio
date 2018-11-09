import React, { Component } from "react";
import Section from "../GlobalSections/Section";
import Service from "./Service";
import services from "../../Data/services-data";

export default class Services extends Component {
  state = {
    services
  };
  render() {
    return (
      <Section name="services" color="var(--mainDark)">
        <div className="services-center">
          {this.state.services.map(service => {
            return (
              <Service
                key={service.id}
                icon={service.icon}
                title={service.title}
              />
            );
          })}
        </div>
      </Section>
    );
  }
}
