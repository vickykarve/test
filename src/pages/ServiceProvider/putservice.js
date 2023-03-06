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
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const PutService = () => {
  const { id } = useParams();

  console.log(id);

  const [emp, setEmp] = useState({});

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
  // const [pincode, setPincode] = useState("");
  const [servicecharge, setserviceCharge] = useState("");
  const [packages, setPackage] = useState("");
  const [servicename, setService] = useState("");
  const [categoryName, setCategory] = useState("");
  // const [category, setCategory] = useState(null);
  // const [service, setService] = useState(null);
  // const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    // load all the services created by user
    employeelist();
  }, []);

  const employeelist = async () => {
    //create axios api to send data to server
    /*
   const res= await axios.get(`http://localhost:8080/getservicebyid/${id}`)
        await .then(function (response) {
           console.log(response.data);
           setEmp(response.data)
           setFirstname(emp?.employee?.firstname)
         })
         .catch(function (error) {
           console.log(error);
         });
         */
    // try {
    //   const res = await axios.get(`http://localhost:8080/getservicebyid/${id}`);
    //   console.log(res);
    //   await setEmp(res.data);
    //   console.log(emp);
    //   setFirstname(emp?.employee?.firstname);
    //   setLastname(emp?.employee?.lastname);
    //   setEmail(emp?.employee?.email);
    //   setPhonenumber(emp?.employee?.phonenumber);
    //   setExperience(emp?.employee?.experience);
    //   setShortDescription(emp?.shortdescription);
    //   setCity(emp?.city);
    //   setState(emp?.state);
    //   setserviceCharge(emp?.servicecharge);
    //   setPackage(emp?.packages);
    //   setService(emp?.servicename);
    //   setCategory(emp?.categoryName);

    //   setService1(emp?.servicename);
    //   setCategory1(emp?.categoryName);
    // } catch (err) {
    //   console.log(err);
    // }

    try {
      const res = await axios.get(`http://localhost:8080/getservicebyid/${id}`);
      console.log(res);
      await setEmp(res.data);
      console.log(emp);
      setFirstname(emp?.employee?.firstname);
      setLastname(emp?.employee?.lastname);
    } catch (err) {
      console.log(err);
    }
  };

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
        servicecharge,
        packages,
        categoryName,
      };

      console.log(body);

      const data = { objects: [body] };

      console.log(data);

      axios
        .post("http://localhost:8080/updatesingleemployee", body)
        .then((Response) => {
          console.log(Response);

          navigate("/servicepage");
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
        Update Service
      </h3>

      <div className="row">
        <div
          className="col"
          style={{ borderRightStyle: "solid", borderRightColor: "lightgray" }}
        >
          <div style={{ width: 400, marginBottom: 20 }}>
            {/* <label>Category</label>
            <Select
              placeholder="Select Category"
              value={categoryname1}
              options={data}
              defaultValue={categoryname1}
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
              defaultValue={servicename1}
              onChange={handleLanguageChange}
              getOptionLabel={(x) => x.name}
              // getOptionValue={(x) => x.code}
            />  */}

            <Input
              title="Select Category"
              defaultValue={categoryname1}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
            />
            <Input
              title="Select Service"
              defaultValue={servicename}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
            />
          </div>

          {/* <label>Select Category</label>
          <select
            id="categoryName"
            name="categoryName"
            onChange={(e) => {
              setcategoryName(e.target.value);
            }}
            className="form-control"
          >
            <option value="select">Select</option>
            <option value="Maidservices">Maid services</option>
            <option value="Repairservices">Repair services</option>
            <option value="Pestcontrolservices">Pest control services</option>
            <option value="ElectricanPlumberCarpenter">
              Electrican, Plumber & Carpenter
            </option>
          </select>

          <label>Select Service</label>
          <select
            id="serviceName"
            name="serviceName"
            onChange={(e) => {
              setserviceName(e.target.value);
            }}
            className="form-control"
          >
            <option value="select">Select</option>
            <option value="Maidservices">Maid services: House maid</option>
            <option value="Maidservices">Maid services: Cook</option>
            <option value="Maidservices">Maid services: Baby Sitter</option>
            <option value="Maidservices">Maid services: Elder Care</option>
            <option value="Maidservices">Maid services: Nurse</option>
            <option value="Maidservices">
              Maid services: Patient Caretaker
            </option>

            <option value="Repairservices">Repair services: Ac Repair</option>
            <option value="Repairservices">
              Repair services: Refrigerator Repair
            </option>
            <option value="Repairservices">
              Repair services: Washing Machine Repair
            </option>
            <option value="Pestcontrolservices">Pest control services</option>
            <option value="ElectricanPlumberCarpenter">Electrican</option>
            <option value="ElectricanPlumberCarpenter">Plumber</option>
            <option value="ElectricanPlumberCarpenter">Carpenter</option>
          </select> */}
          <Input
            title="First Name"
            defaultValue={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
          />
          <Input
            title="Last Name"
            defaultValue={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
          />
          <Input
            title="Email id:"
            defaultValue={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            title="Phone No."
            defaultValue={phonenumber}
            onChange={(e) => {
              setPhonenumber(e.target.value);
            }}
          />
          <Input
            title="Experience"
            defaultValue={experience}
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
          {/*
        <TextArea
            lines="3"
            title="Short Description"
            defaultValue={shortdescription}
            onChange={(e) => {
              setShortDescription(e.target.value);
            }}
          />  */}
          <Input
            title="Short Description"
            defaultValue={shortdescription}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />

          <Input
            title="City"
            defaultValue={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <Input
            title="State"
            defaultValue={state}
            onChange={(e) => {
              setState(e.target.value);
            }}
          />

          <label>Select package</label>
          <select
            id="package"
            name="package"
            defaultValue={packages}
            onChange={(e) => {
              setPackage(e.target.value);
            }}
            className="form-control"
          >
            <option value="select">Select Package</option>
            <option value="1">1 Days</option>
            <option value="10">10 Days</option>
            <option value="30">30 Days</option>
            <option value="90">90 Days</option>
          </select>
          <br></br>
          <Input
            type="text"
            title="Service Charge"
            defaultValue={servicecharge}
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
        <Button
          onClick={putservices}
          title="Update Service"
          name="Update Service"
        />
      </div>
    </div>
  );
};

export default PutService;
