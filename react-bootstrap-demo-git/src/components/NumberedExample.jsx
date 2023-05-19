import ListGroup from 'react-bootstrap/ListGroup';

function NumberedExample() {
  return (
    <ListGroup as="ol" numbered variant="flush">
      <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
      <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
      <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
    </ListGroup>
  );
}

export default NumberedExample;