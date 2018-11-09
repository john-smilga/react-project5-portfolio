import React, { Component } from "react";
import Section from "../GlobalSections/Section";
import { details } from "../../Data/info-details";
import InfoDetail from "./InfoDetail";
export default class Info extends Component {
  state = {
    details
  };
  render() {
    const url =
      "https://scontent-b-nrt.cdninstagram.com/vp/20b858bebd185b2673c0b9655b32e2d7/5C3F3585/t51.2885-15/e35/42002985_1602302939916159_8119243074670346521_n.jpg";
    return (
      <Section name="info" color="var(--mainGray)">
        <div className="info-center">
          <article className="info-img">
            <div className="info-img__container">
              <img src={url} alt="" className="info-photo" />
            </div>
          </article>
          <article className="info-text">
            <h1>a little about me :</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              voluptatibus harum ullam sapiente quia similique ab dicta, natus
              quam pariatur debitis, tempore totam sint quis cumque porro esse
              repudiandae nisi dignissimos. Necessitatibus expedita eos
              assumenda ad consectetur dolorem, aliquam culpa eveniet quas magni
              sunt sapiente fugiat ratione ipsum suscipit corrupti!
            </p>
            {this.state.details.map(detail => {
              return (
                <InfoDetail
                  key={detail.id}
                  title={detail.title}
                  name={detail.name}
                />
              );
            })}
          </article>
        </div>
      </Section>
    );
  }
}
