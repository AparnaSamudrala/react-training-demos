//create a basic arithmetic calc like in https://juliemr.github.io/protractor-demo/
// used two ways to create this app the other one is in FormLayout.jsx uses mathjs evaluate
import React, { useState } from 'react';
import "./App.css"
export default function App(props) {
  const intial = {
    first: 0,
    second: 0,
    operator: '+',
    value: 0,
    time: '',
  };
  const [data, setData] = useState(intial);
  const [memory, setMemory] = useState([]);
  const [result, setResult] = useState(0);
  const operators = ['+','-','*','/','%'];
  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const doCalculation = (e) => {
    e.preventDefault();
    let results;
    switch (data.operator) {
      case '+':
        results = parseInt(data.first) + parseInt(data.second);
        break;
      case '-':
        results = parseInt(data.first) - parseInt(data.second);
        break;
      case '*':
        results = parseInt(data.first) * parseInt(data.second);
        break;
      case '/':
        results = parseInt(data.first) / parseInt(data.second);
        break;
      case '%':
        results = parseInt(data.first) % parseInt(data.second);
        break;
    }   
    setResult(results); 
    setMemory(memory => [{...data,
      value: results,
         time: new Date().toLocaleTimeString(),
         
        },
        ...memory
      ]
         );    
  };
  
  return (
    <div className="container">
      <h3>Super Calculator</h3>
      <form className="form-inline" onSubmit={doCalculation}>
      <div className="form-group row">
      <div className="col-md-4 p-0">
        <input
          name="first"
          type="text"
          onChange={onChange}
          value={data.first}
          className="input-small"
        />
        </div>
        <div className="col-md-4">
        <select
          name="operator"
          onChange={onChange}
          className="span1"
          value={data.operator}
        >
          {operators.map((operator, i) => (
            <option key={i} value={operator}>
              {operator}
            </option>
          ))}
        </select>
        </div>
        <div className="col-md-4 p-0">
        <input
          name="second"
          type="text"
          onChange={onChange}
          value={data.second}
          className="input-small"
        />
        </div>
        </div>
        
         <button id="gobutton" className="btn btn-primary mb-2 ml-3">
            Go!
          </button>
        <br/>
        
      </form>
      <h2>{result}</h2>
      <h4>History</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Expression</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
        {memory.map((mem) => (
          <tr key={mem.time}>
            <td>{mem.time}</td>
            <td>
            <span>{mem.first}</span>
              <span>{mem.operator}</span>
              <span>{mem.second}</span>
            </td>
            <td>{mem.value}</td>
          </tr>
        ))}  
        </tbody>    
      </table>
    </div>
  );
}
