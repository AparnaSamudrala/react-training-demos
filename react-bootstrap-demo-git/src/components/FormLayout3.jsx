import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function FormLayout3() {
  return (
    <div style={{ 
                    width: 700, 
                    padding: 30,
                    backgroundColor: '#dedede',
                    border: '2px solid grey',
                    borderRadius: 6,
                    display: 'flex',
                    justifyCcontent: 'center',
                    flexDirection: 'column'}}>


      <h4>React-Bootstrap Form Component</h4>
      <Form>
      <Form.Group>
          <Form.Label>Enter your full name:</Form.Label>
          <Form.Control type="text" 
                        placeholder="Enter your full name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your email address:</Form.Label>
          <Form.Control type="email" 
                        placeholder="Enter your your email address" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your age:</Form.Label>
          <Form.Control type="number" placeholder="Enter your age" />
        </Form.Group>
        
        <Form.Group>
            <Form.Label  className="mt-3">Select Options:</Form.Label>
            <Form.Select>
            
                <option>Default select</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
                <option>Option 5</option>
            </Form.Select>
        </Form.Group>
        
        <InputGroup className="my-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
         <div className="search-icon input-group-append">
            <span className='input-group-text p-3'>
            <i className="fa fa-search" />
            </span>
          
        </div>
      </InputGroup>


      

      
        <Button className="mt-3" variant="primary" type="submit">
           Click here to submit form
        </Button>
      </Form>
    </div>
  );
}