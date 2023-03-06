//import { useState } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import TextArea from "../../components/textArea";
import { toast } from "react-toastify";
import React, { useState } from "react";
import Select from "react-select";
import data from "../../components/data.json";
import axios from "axios";
// import axios from 'axios'
// import config from '../../config'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const AddNewService = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [experience, setExperience] = useState("");

  const [categoryname1, setCategory1] = useState("");
  const [servicename1, setService1] = useState("");
  const [serviceList, setServiceList] = useState([]);
  //const [tagLine, setTagLine] = useState("");
  const [shortdescription, setShortDescription] = useState("");
  // const [longdescription, setLongDescription] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [servicecharge, setserviceCharge] = useState("");
  const [packages, setPackage] = useState("");
  const [servicename, setService] = useState("");
  const [categoryName, setCategory] = useState("");

  // const [category, setCategory] = useState(null);
  // const [service, setService] = useState(null);
  // const [serviceList, setServiceList] = useState([]);

  // handle change event of the country dropdown
  const handleCountryChange = (obj) => {
    setCategory(obj.catergory);
    setCategory1(obj);
    setServiceList(obj.services);
    setService1(null);
  };

  // handle change event of the language dropdown
  const handleLanguageChange = (obj) => {
    setService(obj.name);
    setService1(obj);
  };

  // generate the link when both dropdowns are selected
  // useEffect(() => {
  //   if (categoryName && serviceName) {
  //     setLink(`https://www.${country.url}/search?q=Clue+Mediator&gl=${country.country_code}&hl=${lang.code}`);
  //   }
  // }, [categoryName, serviceName]);

  //const [tax, setTax] = useState(0)

  // used to go to home screen
  const navigate = useNavigate();
  const putservices = () => {
    if (categoryname1.length === 0) {
      toast.error("Enter Category Name");
    } else if (servicename1.length === 0) {
      toast.error("Enter Service Name");
      // } else if (tagLine.length === 0) {
      //   toast.error("enter tagline");
    } else if (shortdescription.length === 0) {
      toast.error("enter short description");
    } else {
      const body = {
        firstname,
        lastname,
        email,
        phonenumber,
        experience,
        servicename,
        //tagLine,
        shortdescription,
        //longdescription,
        city,
        state,
        pincode,
        servicecharge,
        packages,
        categoryName,
      };

      console.log(body);

      const data = { objects: [body] };

      console.log(data);

      axios
        .post("http://localhost:8080/addservice", body)
        .then((Response) => {
          console.log(Response);

          navigate("/employees");
        })
        .catch((error) => {
          console.log("error");
          console.log(error);
        });
      // axios
      //   .post(config.serverURL + '/home/host', body, {
      //     headers: { token: sessionStorage['token'] },
      //   })
      //   .then((response) => {
      //     const result = response.data
      //     if (result['status'] === 'success') {
      //       toast.success('successfully adde a new home')
      //       navigate('/home-page')
      //     } else {
      //       toast.error(result['error'])
      //     }
      //   })
      //   .catch((error) => {
      //     console.log(error)
      //   })
    }
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
        Add Service Provider
      </h3>

      <div className="row">
        <div
          className="col"
          style={{ borderRightStyle: "solid", borderRightColor: "lightgray" }}
        >
          <div style={{ width: 400, marginBottom: 20 }}>
            <label>Category</label>
            <Select
              placeholder="Select Category"
              value={categoryname1}
              options={data}
              onChange={handleCountryChange}
              getOptionLabel={(x) => x.catergory}
              // getOptionValue={(x) => x.country_code}
            />
            <br />
            Service
            <Select
              placeholder="Select Service"
              value={servicename1}
              options={serviceList}
              onChange={handleLanguageChange}
              getOptionLabel={(x) => x.name}
              // getOptionValue={(x) => x.code}
            />
          </div>

          <Input
            title="First Name"
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
          />
          <Input
            title="Last Name"
            onChange={(e) => {
              setLastname(e.target.value);
            }}
          />
          <Input
            title="Email id:"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            title="Phone Number."
            maxlength="10"
            onChange={(e) => {
              setPhonenumber(e.target.value);
            }}
          />
          <Input
            title="Experience"
            onChange={(e) => {
              setExperience(e.target.value);
            }}
          />

          {/* <TextArea
            lines="6"
            title="Long Desription"
            onChange={(e) => {
              setLongDescription(e.target.value);
            }}
          /> */}
        </div>

        <div className="col">
          <TextArea
            lines="3"
            title="Short Description"
            onChange={(e) => {
              setShortDescription(e.target.value);
            }}
          />
          <Input
            title="City"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <Input
            title="State"
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
          <Input
            title="Pincode"
            onChange={(e) => {
              setPincode(e.target.value);
            }}
          />
          <label>Select package</label>
          <select
            id="package"
            name="package"
            onChange={(e) => {
              setPackage(e.target.value);
            }}
            className="form-control"
          >
            <option value="select">Select Package</option>
            <option value="1">1 Day</option>
            <option value="10">10 Days</option>
            <option value="30">30 Days</option>
            <option value="90">90 Days</option>
          </select>
          <br></br>
          <Input
            type="number"
            title="Service Charge"
            onChange={(e) => {
              setserviceCharge(e.target.value);
            }}
          />
          {/* <Input
            type='number'
            title='Tax'
            onChange={(e) => {
              setTax(e.target.value)
            }}
          /> */}
        </div>
      </div>

      <div className="row">
        {
          sessionStorage.getItem("role") === "ServiceProvider" ? (
            <Link
              onClick={putservices}
              className="btn btn-primary btn-sm btn-dark"
              aria-current="page"
              to={"/servicepage"}
            >
              Add Service
            </Link>
          ) : null
          //(
          //   <Link
          //     onClick={putservices}
          //     className="btn btn-primary btn-sm btn-dark"
          //     aria-current="page"
          //     to={"/employees"}
          //   >
          //     Add Service
          //   </Link>
          // )
        }
        {sessionStorage.getItem("role") === "Admin" ? (
          <Link
            onClick={putservices}
            className="btn btn-primary btn-sm btn-dark"
            aria-current="page"
            to={"/employees"}
          >
            Add Service
          </Link>
        ) : null}
        {/* <Button onClick={putservices} title="Add Service" name="Add Service" /> */}
      </div>
    </div>
  );
};

export default AddNewService;
