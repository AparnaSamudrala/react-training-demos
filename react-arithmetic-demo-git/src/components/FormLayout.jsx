import { useState } from "react";
import { evaluate } from "mathjs";
function FormLayout(props) {

  const [name, setName] = useState('0');

  const [lname, setLName] = useState('0');

  const [op,setOp] = useState('+');

  const [result,setResult] = useState(0);
  const [memory,setMemory] = useState([]);

  

  const submitHandler = (e) => {

    e.preventDefault();
    console.log(`${name}`);
    console.log(`${lname}`);
    console.log(`${op}`);
    const myArray = [parseInt(`${name}`), `${op}`, parseInt(`${lname}`)];
    console.log(myArray.join(" "))
    
    

   console.log(evaluate(myArray.join(" ")));
   const results = evaluate(myArray.join(" "));
   setResult(evaluate(myArray.join(" ")));
   setMemory(memory => [{
        name,
        lname,
        op,
        res: results,
        time: new Date().toLocaleTimeString()
    },
      ...memory
    ]
       ); 
    
    

  };
  return (
    <div className="container text-white font-weight-bold">
      <form onSubmit={submitHandler}>
        <h2 className="text-center text-white">Super Calculator</h2>
        <div className="form-group row">
          <div className="col-md-4 p-0">
            <label htmlFor="fname"></label>
            <input type="text" id="fname" name="firstname" value={name}
              onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="col-md-4">
            <select className="w-100" name="operator" id="operator" onChange={(e) => setOp(e.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="%">%</option>          
            </select>

          </div>

          <div className="col-md-4 p-0">
            <label htmlFor="lname"></label>
            <input type="text" id="lname" name="lastname"
              value={lname} onChange={(e) => setLName(e.target.value)}
            />
          </div>

        </div>
        
        <h2>{`${name}${op}${lname} :`}{result}</h2>

        <div className="center">
          <input type="submit" value="GO!" />
        </div>
      </form>
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
            <span>{mem.name}</span>
              <span>{mem.op}</span>
              <span>{mem.lname}</span>
            </td>
            <td>{mem.res}</td>
          </tr>
        ))}   
        </tbody>   
      </table>
    </div>

  )

}

export default FormLayout;