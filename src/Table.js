import React from 'react';
import Table from 'react-bootstrap/Table'
import { Button} from "react-bootstrap";

  
  
  
export default function TableExample() {
  return (
    <>
  

  
<h3>Student Education Table</h3>
  
<Table striped bordered hover variant="dark" size="sm">
  <thead>
    <tr>
      <th width="170">Student Name</th>
      <th width="170">Reg.no</th>
      <th width="170">School</th>
      <th width="870">City Name</th>
      <th width="1950">10th Percentage</th>
       <th width="1950">12th Percentage</th>
  
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Rakesh</td>
      <td>1123</td>
      <td>pragathi school</td>
      <td>Mumbai</td>
      <td>86.9%</td>
      <td>72.4%</td>
  
    </tr>
    <tr>
      <td>Srinivas</td>
      <td>1124</td>
      <td>z.p.h.s</td>
      <td>Hyderabad</td>
      <td>72.4%</td>
      <td>96.9%</td>
  
  
    </tr>
    <tr>
      <td>Ram Reddy</td>
      <td>1124</td>
      <td>Nalanda school</td>
      <td>Chennai</td>
      <td>88%</td>
      <td>96.9%</td>
  
  
    </tr>
    <tr>
      <td>Kishan Reddy</td>
      <td>1125</td>
      <td>Nagarjuna school</td>
      <td>ooty</td>
      <td>66.9%</td>
      <td>88%</td>
  
    </tr>
    <tr>
      <td>Chndra shekar Rao</td>
      <td>1126</td>
      <td>narayan school</td>
      <td>pune</td>
      <td>96.5%</td>
       <td>66.9%</td>
  
    </tr>
    <tr>
      <td>Akbaruddin</td>
      <td>1127</td>
      <td>MCA school</td>
      <td>Delhi</td>
      <td>96.9%</td>
      <td>96.9%</td>
  
    </tr>
  
  </tbody>
</Table>
 <Button variant="primary" type="submit">
    Continue Button
  </Button>
    </>
   

  );
}