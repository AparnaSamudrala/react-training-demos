/* Create a accordion component that will take an array as props and display the accordion.(use react bootstrap)

here the names are displayed as accordion and all the other details will be created as accordion item and when you click on the Item it should display other details like address, emailid, contact number and image.
 */
import Accordion from 'react-bootstrap/Accordion';

function AccordionDemo({EmpArr}) {
  return (
    <>
    <hr/>
    <h3 className='mt-3'>Displaying Employee Details in Accordion : </h3>
    <hr/>
    {
      EmpArr.map((i)=> (
        <Accordion defaultActiveKey="" key={i.id} className="mb-3">
        <Accordion.Item eventKey = {i.eventKey} >
          <Accordion.Header>Accordion Item {i.name}</Accordion.Header>
          <Accordion.Body style={{backgroundColor: `${i.color}`}}>
          Employee Details of Employeen{i.id}:
            <ul>
              <li> Employee ID : {i.id}</li>
              <li> Employee Name: {i.name}</li>
              <li>Employee Address: {i.address}</li>
              <li>Email :{i.email}</li>
              <li>Phone: {i.phone}</li>
            </ul>
      </Accordion.Body>
        </Accordion.Item>
        </Accordion>
  
  )
  )}
</>
)
}

export default AccordionDemo;