import React from 'react';
import { Form, Button} from "react-bootstrap";




class Name extends React.Component {


render()
{



  return(


     <div>
                <h3> Student Address </h3>
                 <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Student FirstName:</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Student Last name:</Form.Label>
    <Form.Control type="text" placeholder="Password" />
  </Form.Group>
   <Form.Group controlId="formBasicPassword">
    <Form.Label>Father Name:</Form.Label>
    <Form.Control type="text" placeholder="Password" />
  </Form.Group>
   <Form.Group controlId="formBasicPassword">
    <Form.Label>Phone Number</Form.Label>
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
export default Name;