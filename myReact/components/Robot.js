import React, { Component } from "react";
import { Image } from "react-native";

export default class Robot extends Component {
  render() {
    const imageSource = {
      uri:
        "https://www.publicengagement.ac.uk/sites/default/files/styles/content_width/public/hero/7842221242_40deabf89d_o.jpg?itok=NJw1VKrw"
    };
    return (
      <Image
        source={imageSource}
        style={{
          width: 300,
          height: 300
        }}
      />
    );
  }
}
