function JsxDemoSamples(){
    let count = 5;
    let name = {
        firstName: "John",
        lastName: "Doe",
      };
      let highlight = {
        color: "blue",
        backgroundColor: "grey",
      };
      var x=25, y=30;
      var employees = [
        { empId: 1234, name: "John", designation: "SE" },
        { empId: 4567, name: "Tom", designation: "SSE" },
        { empId: 8910, name: "Kevin", designation: "TA" },
      ];
    
  
    return (
      <>
        <h1>{"Multiply a value Demo:"}{<br/>}{" count = "}{count}</h1>
        <h2>{"count * count = "}{count * count}</h2>

        <h1>
          {"Using Object Name Demo: "}{name.firstName} {name.lastName}
        </h1>

        <h1 style={highlight}>Welcome to React</h1>

        <h2> Evaluating expression using terenary operator</h2>
        <h3> {x} {">"}{y} {":"} {x>y ? 'True' : 'False'} </h3>

        <table className="table table-striped table-bordered">
            <thead>
            <tr>
            <th>EmpID</th>
            <th>Name</th>
            <th>Designation</th>
            </tr>
            </thead>
            <tbody>
                {
                employees.map(employee => {
                    return (<tr key={employee.empId}>
            <td>{employee.empId}</td>
            <td>{employee.name}</td>
            <td>{employee.designation}</td>
            </tr>)
                })
                }
            </tbody>
            </table>

        


      </>
    );
  
}

export default JsxDemoSamples;