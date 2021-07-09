import React from 'react';
import { Form, Button } from "react-bootstrap";



class Address extends React.Component {



	render()
	{

		return(
                <div>
                <h3> Student Address </h3>
                 <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Village</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>District</Form.Label>
    <Form.Control type="text" placeholder="Password" />
  </Form.Group>
   <Form.Group controlId="formBasicPassword">
    <Form.Label>State</Form.Label>
    <Form.Control type="text" placeholder="Password" />
  </Form.Group>
   <Form.Group controlId="formBasicPassword">
    <Form.Label>land mark</Form.Label>
    <Form.Control type="text" placeholder="Password" />
  </Form.Group>
   <Form.Group controlId="formBasicPassword">
    <Form.Label>Pin</Form.Label>
    <Form.Control type="text" placeholder="Password" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Continue Button
  </Button>
</Form>
</div>




			);
	}
}

export default Address;