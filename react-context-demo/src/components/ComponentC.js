import React from "react";
import { EmpContext } from "../App";
import ComponentD from "./ComponentD";
class ComponentC extends React.Component {
  render() {
    return (
      <>
      <EmpContext.Consumer>
       
        {(username) => {
          return <div>Hello {username}</div>;
        }}
        
        
      </EmpContext.Consumer>
      <ComponentD/>
      </>
    );
  }
}
export default ComponentC;
