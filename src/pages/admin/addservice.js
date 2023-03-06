import { useState } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import TextArea from "../../components/textArea";
import { toast } from "react-toastify";
import axios from "axios";
// import config from '../../config'
import { useNavigate } from "react-router-dom";

const AddService = () => {
  const [title, setserviceTitle] = useState("");
  const [tagLine, setTagLine] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [branch_name, setBranchName] = useState("");
  const [branch_address, setAddress] = useState("");
  const [branch_phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  //const [tax, setTax] = useState(0)

  // used to go to home screen
  const navigate = useNavigate();
  const addservices = () => {
    if (title.length === 0) {
      toast.error("enter serviceTitle");
    } else if (tagLine.length === 0) {
      toast.error("enter tagline");
    } else if (shortDescription.length === 0) {
      toast.error("enter short description");
    } else if (branch_name.length === 0) {
      toast.error("enter long description");
    } else if (branch_address.length === 0) {
      toast.error("enter long description");
    } else if (branch_phone.length === 0) {
      toast.error("enter long description");
    } else if (city.length === 0) {
      toast.error("enter long description");
    } else {
      const body = {
        title,
        tagLine,
        shortDescription,
        branch_name,
        branch_address,
        branch_phone,
        city,
      };
      console.log(body);

      axios
        .post("http://localhost:8080/addAvailableservice", body)
        .then((Response) => {
          console.log(Response);
          toast.error("service added successfully!!!!!");
          navigate("/services");
        })
        .catch((error) => {
          console.log("error");
          toast.error("fill details incomplete!!!!!");
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
        Add Service
      </h3>

      <div className="row">
        <div
          className="col"
          style={{ borderRightStyle: "solid", borderRightColor: "lightgray" }}
        >
          <Input
            title="Service Title"
            onChange={(e) => {
              setserviceTitle(e.target.value);
            }}
          />
          <Input
            title="Tag Line"
            onChange={(e) => {
              setTagLine(e.target.value);
            }}
          />
          <TextArea
            lines="3"
            title="Short Description"
            onChange={(e) => {
              setShortDescription(e.target.value);
            }}
          />
        </div>
        <div className="col">
          <Input
            title="branch_name"
            onChange={(e) => {
              setBranchName(e.target.value);
            }}
          />
          <Input
            title="branch_address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <Input
            title="branch_phone"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <Input
            title="city"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          {/* <Input
            type='number'
            title='Tax'
            onChange={(e) => {
              setTax(e.target.value)
            }} */}
        </div>
      </div>

      <div className="row">
        <Button onClick={addservices} title="Add Service" />
      </div>
    </div>
  );
};

export default AddService;
