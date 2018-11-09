import React, { Component } from "react";
import Section from "../GlobalSections/Section";
import videos from "../../Data/youtube-data";
export default class Youtube extends Component {
  state = {
    videos: videos
  };
  render() {
    return (
      <Section name="youtube content" color="var(--mainGray)">
        <div className="youtube-center">
          {this.state.videos.map(video => {
            return (
              <iframe
                key={video.id}
                className="youtube-video"
                width="100%"
                src={video.url}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            );
          })}
        </div>
      </Section>
    );
  }
}
