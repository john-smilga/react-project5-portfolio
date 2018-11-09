import React, { Component } from "react";
import Section from "../GlobalSections/Section";
import icons from "../../Data/footer-data";

export default class Footer extends Component {
  state = {
    icons
  };
  render() {
    return (
      <div>
        <Section name="social media" color="var(--darkGray)">
          <div className="footer-icons">
            {this.state.icons.map(icon => {
              return (
                <span key={icon.id} className="footer-icon">
                  <i className={icon.name} />
                </span>
              );
            })}
          </div>
        </Section>
      </div>
    );
  }
}
