import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
// Component
export default class PropDataTypesDemo extends React.Component {
  render() {
    return (
      <div>
        {/* printing all props */}
        <h5>
          {this.props.arrayProp}
          <br /> {this.props.stringProp}
          <br />
          {this.props.numberProp} <br />
          {this.props.boolProp} <br />
        </h5>
      </div>
    );
  }
} // Validating prop types
PropDataTypesDemo.propTypes = {
  arrayProp: PropTypes.array,
  stringProp: PropTypes.string,
  numberProp: PropTypes.number,
  boolProp: PropTypes.bool
};
// Creating default props
PropDataTypesDemo.defaultProps = {
  arrayProp: ["Aparna", "Chandana", "Niharika"],
  stringProp: "PropsTypes Example",
  numberProp: "10",
  boolProp: true
};

