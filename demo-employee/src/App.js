import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeList from './components/employee-list.js';
import EmployeeForm from './components/employee-form.js';
import EditEmployee from './components/edit-employee.js';
import Header from './components/header.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App(props) {
  //const navigate = useNavigate();
  return (
    <div className="App">
       <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <EmployeeForm/>
            </Route>
            
            <Route path="/list">
              <EmployeeList />
            </Route>

            <Route path="/1">
              <EditEmployee />
            </Route>
            
          </Switch>
        </div>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
