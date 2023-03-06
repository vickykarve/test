// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
import { Card,CardGroup,Button,ButtonGroup,Dropdown,DropdownButton } from 'react-bootstrap';
// import Pic1 from "../images/interior-1-800x460.jpg" ;
import Pic3 from "../images/Barber/Flooring-Contractor-800x460.jpg";
//  import Pic4 from "../images/Refrigerator-Repair-800x450.jpg";
import secc from "../images/Barber/CD.jpeg";
import spaa from "../images/Barber/Hairspa.jpeg";
import repairs from "../images/Barber/repairequipment.jpeg";
//import Pic5 from "../images/Waterproofing-Contractors-800x460.jpg";

import Upcome from '../components/upcome';


function Upcomingservices() {
  return (
    <>
<br>
        </br>
   <Upcome/>

        <br>
        </br>
      <center>
       
<CardGroup>
     
     <Card border="dark" style={{ width: '15rem' , height:'33rem'}}>
             <Card.Img variant="top" src={spaa} />
             <Card.Body>
               <Card.Title>Home services For HairSpa and Waxing </Card.Title>
               <Card.Text>
             
                           We are providing Home Service Hair spa for that customers which are not able to come in salon shops.this service is more suitable for
                           No surprise that at-home salon services became one of the popular grooming services seeing the highest demand in several metros worldwide. 
               </Card.Text>
             </Card.Body>
            
           </Card>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           
           
           <Card border="dark" style={{ width: '15rem', height:'33rem' }}>
             <Card.Img variant="top" src={Pic3} />
             <Card.Body>
               <Card.Title>Interior For Salon Shops</Card.Title>
               <Card.Text>
               Are you looking for an interior designer to help you give makeover to your place? Don't worry we have got your back.
               We provide the best solution to all those barbers who are busy in their day to day life. 
           We offer our services for Furnitures, Renovations, Attractive mirror, or  wallpapers etc. 
            
           
               </Card.Text>
             </Card.Body>
            
           </Card>
     
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           
           <Card border="dark" style={{ width: '15rem' ,height:'33rem'}}>
             <Card.Img variant="top" src={secc} />
             <Card.Body>
               <Card.Title>Second Hand Equipments  </Card.Title>
               <Card.Text>
                
              Sometimes in rural areas barbers are not able to take the expensive Equipments so we provide the used Equipments for that barbers in reasonable price.
             In that senario we provide the Equipments which are already used by other barber but the equipment is in working condition. 
            
               </Card.Text>
             </Card.Body>
            
           </Card>
     
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

           <Card border="dark" style={{ width: '15rem',height:'33rem' }}>
             <Card.Img variant="top" src={repairs} />
             <Card.Body>
               <Card.Title>Equipment Repairing Services</Card.Title>
               <Card.Text>
               It is essential to check on the Functionality of your
                           Equipments. As it keeps your Work fast and improve your
                           efficency. If you are looking out for the technicians to help you
                           with repairing your salon Equipments, then you are at the
                           perfect place.
               </Card.Text>
             </Card.Body>
            
           </Card>
     
     
     </CardGroup>
    
      </center>
    </>
  );
}

export default Upcomingservices;
