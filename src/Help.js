import React from "react";

import Text from "./Text";
import OverPopup from "./OverPopup";

class Help extends React.Component {
  static defaultProps = {
    content: "",
    help: "",
    style: { display: "flex" } //text+icon sur la même ligne
  };

  render() {
    const { content, help, style } = this.props;
    return (
      <div style={style}>
        <Text content={content} />
        <OverPopup icon="help circle" content={help} />
      </div>
    );
  }
}

export default Help;
