//import { useState } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import TextArea from "../../components/textArea";
import { toast } from "react-toastify";
import React, { useState } from "react";
import Select from "react-select";
import data from "../../components/data.json";
import axios from "axios";
// import config from '../../config'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({    
    servicename: "",
    shortdescription: "",
    city: "",
    state: "",
    pincode: "",
    servicecharge: "",
    packages: "",
    categoryName: "",
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    experience: "",
    empid:"",
  });

  const onInputChange = (e) => {
    setUser({...user,[e.target.name]:e.target.value})
  };

  const putservices = () => {
    // if (user?.categoryname.length === 0) {
    //   toast.error("Enter Category Name");
    // } else if (user.servicename.length === 0) {
    //   toast.error("Enter Service Name");
    //   // } else if (tagLine.length === 0) {
    //   //   toast.error("enter tagline");
    // } else if (user.shortdescription.length === 0) {
    //   toast.error("enter short description");
    // } else {
      console.log("user",user)
      axios
        .put("http://localhost:8080/updateservice/"+id, user)
        .then((Response) => {
          console.log(Response);
          navigate("/admin-list-employee");
        })
        .catch((error) => {
          console.log("error");
          console.log(error);
        });
    //}
  };

  useEffect(() => {
    // load all the services created by user
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(
      `http://localhost:8080/getservicebyid/${id}`
    );

    console.log("result",result.data);
    setUser(result.data);
    const emp=result.data.employee
    console.log(emp)
  
    setUser({...result.data,
      firstname:emp.firstname,
      lastname:emp.lastname,
      experience:emp.experience,
      empid:emp.id,
      phonenumber:emp.phonenumber,
      email:emp.email})
    
    console.log("user",user)
  };

  return (
    <div className="container" style={{ marginTop: 20 }}>
      <h3
        style={{
          textAlign: "center",
          marginBottom: 50,
          fontFamily: "revert-layer",
        }}
      >
        Update Services
      </h3>

      <div className="row">
        <div
          className="col"
          style={{ borderRightStyle: "solid", borderRightColor: "lightgray" }}
        >
          <div style={{ width: 400, marginBottom: 20 }}>
            <label>Category :</label>
            <input
              className="form-control"
              title="Category"
              name="categoryName"
              value={user?.categoryName}
              onChange={(e) => onInputChange(e)}
            />

            <label>Service :</label>
            <input
              className="form-control"
              title="Service"
              name="servicename"
              value={user?.servicename}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <label>firstname :</label>
          <input
            className="form-control"
            title="First Name"
            name="firstname"
            value={user?.firstname}
            onChange={(e) => onInputChange(e)}
          />

          <label>Last Name:</label>
          <input
            className="form-control"
            title="Last Name"
            name="lastname"
            value={user?.lastname}
            onChange={(e) => onInputChange(e)}
          />

          <label>Email id:</label>
          <input
            className="form-control"
            title="Email id:"
            name="email"
            value={user?.email}
            onChange={(e) => onInputChange(e)}
          />

          <label>Phone No:</label>
          <input
            className="form-control"
            title="Phone No."
            name="phonenumber"
            value={user?.phonenumber}
            onChange={(e) => onInputChange(e)}
          />

          <label>Experience:</label>
          <input
            className="form-control"
            title="Experience"
            name="experience"
            value={user?.experience}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <div className="col">
          <label>Short Description:</label>
          <input
            className="form-control"
            title="Short Description"
            name="shortdescription"
            value={user?.shortdescription}
            onChange={(e) => onInputChange(e)}
          />

          <label>City:</label>
          <input
            className="form-control"
            title="City"
            name="city"
            value={user?.city}
            onChange={(e) => onInputChange(e)}
          />

          <label>State:</label>
          <input
            className="form-control"
            title="State"
            name="state"
            value={user?.state}
            onChange={(e) => onInputChange(e)}
          />

          <label>Pincode:</label>
          <input
            className="form-control"
            title="Pincode"
            name="pincode"
            value={user?.pincode}
            onChange={(e) => onInputChange(e)}
          />

          <label>Select package:</label>
          <input
            className="form-control"
            title="Select package"
            name="packages"
            value={user?.packages}
            onChange={(e) => onInputChange(e)}
          />

          <label>Service Charge:</label>
          <input
            className="form-control"
            type="number"
            title="Service Charge"
            name="servicecharge"
            value={user?.servicecharge}
            onChange={(e) => onInputChange(e)}
          />
        </div>
      </div>

      <div className="row">
        <Button
          onClick={putservices}
          title="Update Service"
          name="Update Service"
        />
      </div>
    </div>
  );
};
export default Edit;
