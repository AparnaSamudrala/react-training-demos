import { useState } from "react";
function EmployeesDemo() {
    let iconStyles = {
        backgroundColor: "blue",
    color: "white",
    border: "2px solid black"
    }
    const EMPLOYEES = [
        { id: 1, name: 'Andy', designation: "Associate" },
        { id: 2, name: 'Bob', designation: "Associate" },
        { id: 3, name: 'Tom Hulk', designation: "Associate" },
        { id: 4, name: 'Tom Hank', designation: "Associate" },
        { id: 5, name: 'Audra', designation: "Associate" },
        { id: 6, name: 'Anna', designation: "Senior Associate" },
        { id: 7, name: 'Tom', designation: "PA" },
        { id: 8, name: 'Tom Riddle', designation: "Manager" },
        { id: 9, name: 'Bolo', designation: "Architect" }
    ];
    const [name, setName] = useState('');
    const [designation,setDesignation] = useState("");
    // the search result
    const [foundEMPLOYEES, setFoundEMPLOYEES] = useState(EMPLOYEES);

    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = EMPLOYEES.filter((employee) => {
                return employee.name.toLowerCase().startsWith(keyword.toLowerCase());
                // Use the toLowerCase() method to make it case-insensitive
            });
            setFoundEMPLOYEES(results);
        } else {
            setFoundEMPLOYEES(EMPLOYEES);
            // If the text field is empty, show all EMPLOYEES
        }

        setName(keyword);
    };
    const filterDesg = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = EMPLOYEES.filter((employee) => {
                return employee.designation.toLowerCase().startsWith(keyword.toLowerCase());
                // Use the toLowerCase() method to make it case-insensitive
            });
            setFoundEMPLOYEES(results);
        } else {
            setFoundEMPLOYEES(EMPLOYEES);
            // If the text field is empty, show all EMPLOYEES
        }

        setDesignation(keyword);
    };

    return (
        <div className="container">
            <div className="row pt-5">
            <div className="input-group  form-group col-md-6">
            <label className="pr-3">Search By Name: </label>
                <div className="input-group-addon input-group-prepend">
                    <i className="fa fa-search input-group-text" style={iconStyles}></i>
                </div>
                <input
                type="search"
                value={name}
                onChange={filter}
                className="input"
                placeholder="Filter By Name"
            />

            </div>

            <div className="input-group  form-group col-md-6">
            <label className="pr-3">Search By Designation: </label>
                <div className="input-group-addon input-group-prepend">
                    <i className="fa fa-search input-group-text" style={iconStyles}></i>
                </div>
                <input
                type="search"
                value={designation}
                onChange={filterDesg}
                className="input"
                placeholder="Filter By Designation"
            />

            </div>

            </div>
            
            

            

            
            
            

            

            
            <table className="table responsive-table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>EmpID</th>
                        <th>Name</th>
                        <th>Designation</th>
                    </tr>
                </thead>
                <tbody>
                    {foundEMPLOYEES && foundEMPLOYEES.length > 0 ? (
                        foundEMPLOYEES.map((employee) => (
                            <tr key={employee.id} className="employee">
                                <td className="employee-id">{employee.id}</td>
                                <td className="employee-name">{employee.name}</td>
                                <td className="employee-designation">{employee.designation} </td>
                            </tr>
                        ))
                    ) : (
                        <h1>No results found!</h1>
                    )}

                </tbody>
            </table>



        </div>
    );
}


export default EmployeesDemo;