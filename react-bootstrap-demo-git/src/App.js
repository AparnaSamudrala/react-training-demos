//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccordionDemo from './components/AccordionDemo'; 
import ModalExample from './components/ModalExample';
import FormLayout3 from './components/FormLayout3';
/* import FormLayout3 from './components/FormLayout3'; */
/* import { Button } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import FormCheckExample from './components/FormCheckExample';
import FormDisabled from './components/FormDisabled';
import LoginLayout from './components/LoginLayout'; 
import ToastDemo from './components/ToastDemo';

import DropDownDemo from './components/DropDownDemo';
import NumberedExample from './components/NumberedExample';
import PaginationDemo from './components/PaginationDemo';
import PillDemo from './components/PillDemo';
import ResponsiveExample from './components/ResponsiveExample';
import ModalExample from './components/ModalExample';
import FillExample from './components/FillExample';*/


function App() {
  const arr = [
    {id:1,name:"John",address:"HYDERABAD",email:"john.con@gmail.com",phone: 4234423,color: "grey",eventKey: '0'},
    {id:2,name:"Foo",address:"GUNTUR",email:"Foo.con@gmail.com",phone: 6666777,color: "pink",eventKey: '1'},
    {id:3,name:"Bar",address:"VIJAYAWADA",email:"Bar.con@gmail.com",phone: 5555,color: 'skyblue',eventKey: '2'}
  ];
  
  return (
    <div className="m-4 ">
      
      
      <ModalExample EmpArr={arr}/>
      <AccordionDemo EmpArr={arr}/>
      <FormLayout3/>
      {/* 
      <FormLayout3/>
      <AccordionDemo EmpArr={arr}/>
  <Button as="a" variant="primary">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button>
  <ProgressBar now={60} />
  <LoginLayout/>
  <FormDisabled/>
  <FormCheckExample/> 
  <ToastDemo/>
<AccordionDemo/>
<DropDownDemo/>
<NumberedExample/>
<PaginationDemo/>
<PillDemo/>
<ResponsiveExample/>
<ModalExample/>
<FillExample/>
  */}
  
    </div>
  )
}

export default App;
