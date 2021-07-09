import React from 'react';
import { InputGroup , Button,FormControl} from "react-bootstrap";




class TextArea extends React.Component {


render()
{



	return(


     <div>
     <h3> Student Text Area </h3>
        <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text>With textarea</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl as="textarea" aria-label="With textarea" />
  </InputGroup>
  <Button variant="primary" type="submit">
    Continue Button
  </Button>
     </div>



		)
}






}
export default TextArea;