import React from 'react';
import Name from './Name';
import Table from './Table'
import Address from './Address'

import TextArea from './TextArea'

class App extends React.Component {
  submit = (values) => {
    alert("submitted");
    console.log(values);
  }
  render() {
    return (
      <div className="container">
        <h3 className="jumbotron">Redux Form Validation</h3>
        <Name onSubmit={this.submit} />
        <Table />
        <Address />
        <TextArea />
      </div>
      
    )
  }
}

export default App;