import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import { toast } from "react-toastify";

function Form() {
  const {providerid}=useParams()
  console.log('provider',providerid)
  const [data,setdata]=useState({})
  useEffect(()=>{
    axios.get('http://localhost:8080/getservicebyid/'+providerid)
    .then(resp=>setdata(resp.data))
    .catch(err=>console.log(err));
  },[])
  
  //const obj = JSON.parse(window.localStorage.getItem("userlog"));
  const email = sessionStorage.getItem("email")

  const id=data?.employee?.id;
  const categoryName=data?.categoryName;
  const servicename=data?.servicename;
  const servicecharge = data?.servicecharge;
 // const  [id, setId] = useState('')
  const  [firstname, setFirstName] = useState('')
  const  [lastname, setLastName]= useState('')
  const  [phone, setPhoneNumber] = useState('')
  const  [altphone, setAltPhoneNumber] = useState('')
  //const  [email, setEmail]= useState('')
  const  [address, setAddress] = useState('')
  const  [country, setCountry]= useState('')
  const  [city, setCity] = useState('')
  const  [state, setState]= useState('')
  const  [pincode, setPincode] = useState('')
  const  [date, setDate] = useState('')

  const booking=()=>{
    if(firstname.length===0){
        toast.error('please enter First name')
    }else if(lastname.length===0){
        toast.error('please enter Last name')
    }else if(phone.length===0){
        toast.error('please enter Phone number')
    }
    else if(altphone.length===0){
      toast.error('please enter altPhone number')
    // }else if(email.length===0){
    //     toast.error('please enter email')
    // }
    }else if(address.length===0){
        toast.error('please enter address')
    }else if(country.length===0){
        toast.error('please enter country')
    }
    else if(city.length===0){
      toast.error('please enter city')
    }else if(state.length===0){
      toast.error('please enter state')
  }else if(pincode.length===0){
    toast.error('please enter pincode')
}else if(date.length===0){
  toast.error('please enter date')
}
    else{


        
            
         const body={
            firstname,lastname,phone,altphone,email,address,
            country,city,state,pincode,id,categoryName,servicename,servicecharge,date
         }

         console.log(body)

            axios.post('http://localhost:8080/saveseeker',body
                
            ).then(Response=>{
                console.log(Response)
                toast.success(' Successfully booked!!!!!!')
                window.location.href = "/payment";
                localStorage.setItem("userlog", JSON.stringify(Response.data));
            }).catch(error=>{
                console.log('error')
                console.log(error)
            })
    }
};




  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "45%" }}>
          Candidate Information
          <table>
            <tr>
              <td>Provider ID</td>
              <td >{data?.employee?.id}
              </td>
            </tr>
            <tr>
              <td>Service Category</td>
              <td>{data?.categoryName}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{data?.employee?.firstname} {data?.employee?.lastname}</td>
            </tr>
            <tr>
              <td>Service Name </td>
              <td>{data?.servicename}</td>
            </tr>
            <tr>
              <td>Service State</td>
              <td>{data?.state}</td>
            </tr>
            <tr>
              <td>Service City</td>
              <td>{data?.city} ({data?.pincode})</td>
            </tr>
            <tr>
              <td>Service Charges</td>
              <td>{data?.servicecharge}</td>
            </tr>
            <tr>
              <td>Service Description</td>
              <td>{data?.shortdescription}</td>
            </tr>
          </table>
        </div>
        <div style={{ width: "45%" }}>
          Service Seeker Information
          <table>
            <tr>
              <td>First Name</td>
              <td>
                <input 
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}/>
              </td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>
                <input onChange={(e) => {
                  setLastName(e.target.value);
                }}/>
              </td>
            </tr>
            <tr>
              {/* <td>Email id</td>
              <td>
                <input 
                value={sessionStorage.getItem("email")}
                onChange={(e) => {
                  setEmail(e.target.value);
                  
                }}
                readOnly
                />
              </td> */}
            </tr>
            <tr>
              <td>Contact no.</td>
              <td>
                <input 
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}/>
              </td>
            </tr>
            <tr>
              <td>Alternate no.</td>
              <td>
                <input
                onChange={(e) => {
                  setAltPhoneNumber(e.target.value);
                }} />
              </td>
            </tr>
            <tr>
              <td>Address</td>
              <td>
                <input
                onChange={(e) => {
                  setAddress(e.target.value);
                }} />
              </td>
            </tr>
            <tr>
              <td>Country</td>
              <td>
                <input
                onChange={(e) => {
                  setCountry(e.target.value);
                }} />
              </td>
            </tr>
            <tr>
              <td>State</td>
              <td>
                <input
                onChange={(e) => {
                  setState(e.target.value);
                }} />
              </td>
            </tr>
            <tr>
              <td>City</td>
              <td>
                <input 
                
                onChange={(e) => {
                  setCity(e.target.value);
                }}/>
              </td>
            </tr>            
            <tr>
              <td>Pin/zip code</td>
              <td>
                <input
                onChange={(e) => {
                  setPincode(e.target.value);
                }} />
              </td>
            </tr>
            <tr>
              <td>Booking Date</td>
              <td>
                <input 
                type="date"
                onChange={(e) => {
                  setDate(e.target.value);
                }} />
              </td>
            </tr>
          </table>
          <button onClick={booking} style={{ width: "100px", height: "40px" }}>PAY NOW</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
