// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
import {
  Card,
  CardGroup,
  Button,
  ButtonGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

import Pic1 from "../images/new maid.jpeg";
import Pic2 from "../images/new maint.jpg";
import Pic3 from "../images/repair.jpg";
import Pic4 from "../images/interior.jpg";

import { Link, useNavigate } from "react-router-dom";
// import Cart from "./user/cart";
function AvailableServices() {
const navigate=useNavigate()
const getDetails=()=>{
  console.log("inside the function")
}

  return (
    <>
      <center>
        <h3
          style={{
            color: "black",
            fontFamily: "sans-serif",
            fontWeight: 600,
            marginTop: 15,
            fontStyle: "italic",
          }}
        >
          🤹🏼‍♂️ Your Comfort ...Our Servicess 🤹🏼‍♂️
        </h3>
      </center>
      <br></br>
     <center>
      <div>
      <CardGroup>
      <Card border="dark" style={{ width: '25rem' }}>
        <Card.Img variant="top" src={Pic1} />
        <Card.Body>
          <Card.Title>Maid Services</Card.Title>
          <Card.Text>
          We provide maids who are able to do all the household chores, including cooking, cleaning, dusting, mopping the floor and washing dishes.
   We also hire maids for specific tasks as well; these specific tasks include Babysitting, older person care, cooking, cleaning etc. 
   There are maids who also does all the above for people on full time and part-time basis.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button onClick={e=>navigate('/list-employee',{state:'Maid Services'})} variant="success">Click Here To Select Service</Button>
        </Card.Footer>
      </Card>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Card border="dark" style={{ width: '25rem' }}>
        <Card.Img variant="top" src={Pic2}/>
        <Card.Body>
          <Card.Title>Cleaning and Maintenance Services</Card.Title>
          <Card.Text>
          We have trained workers for all services. Whatever our customers need from us, 
       we can provide it at a very affordable price. The best part of our service is that it is easy to use
       and not time-consuming.There are many contractors and workers available. We have a great team who continuously work 
       finding best service men of Mumbai.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button onClick={e=>navigate('/list-employee',{state:'Pest Control Services'})} variant="success">Click Here To Select Service</Button>
        </Card.Footer>
      </Card>
      
    
    </CardGroup>

    <br></br>
    <br></br>
    <CardGroup>
      <Card border="dark" style={{ width: '25rem' }}>
        <Card.Img variant="top" src={Pic3} />
        <Card.Body>
          <Card.Title>Repairing Services</Card.Title>
          <Card.Text>
          We will help you to get back at full speed with adequately working machine. 
       Our practically trained technicians will diagnose and repair the  machine anywhere in Mumbai. 
       If the problem is needed some detailing analysis and fixing, then the device can also be taken to the service center.
        We are specialized in all kinds of repair services in Mumbai.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button onClick={e=>navigate('/list-employee',{state:'Repair Services'})} variant="success">Click Here To Select Service</Button>
        </Card.Footer>
      </Card>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Card border="dark" style={{ width: '25rem' }}>
        <Card.Img variant="top" src={Pic4}/>
        <Card.Body>
          <Card.Title>Interior and Electrical Contractors</Card.Title>
          <Card.Text>
          We provide the best solution to all those people who are busy in their day to day life. 
      We offer our services for flooring, renovations, AC, Computer, or washing machine repairing, and lots more. 
      Specifically talking about the flooring, Premend has many registered flooring contractors in the list. 
      We have created a team of sincere technicians who are masters of their respective fields. 
      They take their jobs very seriously and know how to fix things.

          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button onClick={e=>navigate('/list-employee',{state:'Home Services'})} variant="success">Click Here To Select Service</Button>
        </Card.Footer>
      </Card>
      
    
    </CardGroup>
      </div>
     </center>
    </>
  );
}

export default AvailableServices;
