import React from "react";
import { Popup, Icon } from "semantic-ui-react"; // On utilise Semantic UI ici, toute autre lib conviendrait

class OverPopup extends React.Component {
  initialState = { opacity: this.props.opacity };
  state = this.initialState;
  static defaultProps = {
    content: "",
    opacity: 0.3
  };
  onHover = () => {
    this.setState({ opacity: 1 });
  };
  onOut = () => {
    this.setState(this.initialState);
  };
  render() {
    const { content, icon, opacity } = this.props;
    return (
      <Popup
        trigger={
          <Icon
            size="large"
            name={icon}
            style={{
              marginLeft: 5,
              marginTop: -2,
              opacity: opacity,
              transition: "opacity 0.2s ease"
            }}
            onMouseOver={this.onHover}
            onMouseOut={this.onOut}
          />
        }
        content={content}
        verticalOffset={-7}
        horizontalOffset={5}
        position="right center"
      />
    );
  }
}

export default OverPopup;
