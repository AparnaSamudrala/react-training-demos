import React from "react";
import { EmpContext } from "../App";
class ComponentD extends React.Component {
  render() {
    return (
      <EmpContext.Consumer>
       
        {(username) => {
          return <div>Another Component using Context value : {username}</div>;
        }}
        
      </EmpContext.Consumer>
    );
  }
}
export default ComponentD;
