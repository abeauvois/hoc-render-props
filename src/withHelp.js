import React from "react";

import OverPopup from "./OverPopup";

const withHelp = WrappedComponent => {
  return class extends React.Component {
    static defaultProps = {
      content: "",
      help: "",
      style: { display: "flex" } //text+icon sur la même ligne
    };

    render() {
      const { content, help, style, ...rest } = this.props;
      console.log("WrappedComponent", WrappedComponent, this.props);
      return (
        <div style={style}>
          <WrappedComponent content={content} {...rest} />
          <OverPopup icon="help circle" content={help} />
        </div>
      );
    }
  };
};

export default withHelp;
