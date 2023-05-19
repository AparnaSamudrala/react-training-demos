import React from 'react';
import { connect } from 'react-redux';
import { employeeGetAll,empDelete } from '../actions/employeeActions';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class EmployeeList extends React.Component {
  

    componentDidMount() {
        this.props.dispatch(employeeGetAll);
    }

    deleteItem(id) {
      console.log(id);
      this.props.dispatch(empDelete(id));
     // return false;
    }

    render() {
        console.log(this.props);
       
        return <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <h2>Employee List</h2>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Age</th>
                <th>Department</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
                { 
                this.props.employees && this.props.employees.map((item, index) => 
                <tr key={index}>
                  <td>{index + 1}</td><td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.department}</td>
                  <td>
                  <button type="button" className="btn btn-danger" aria-label="Left Align" onClick={() => this.deleteItem(index)}>Delete</button>
                  
                  <Link to="/1">
                    <button type="button" className="btn btn-primary" aria-label="Left Align">
                      Edit
                  </button>
                  </Link>
                </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        </main>
    }
}

function mapStateToProps(state) {
    console.log(state);
    const { employees } = state;
    return {
        employees
    }
}

export default connect(mapStateToProps)(withRouter(EmployeeList));