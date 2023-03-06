import { Link, useNavigate } from "react-router-dom";
import Images from "../../images/Barber/signupback.webp";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
const Signup = () => {
  const [role, setRole] = useState("USER");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const  [confirmpassword, setconfirmPassword]= useState('')
  const [hobby, setHobby] = useState("");
  const [houseno, setHouseno] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  const navigate = useNavigate();

  const signup = () => {
    if (firstname.length === 0) {
      toast.error("please enter First name");
    } else if (lastname.length === 0) {
      toast.error("please enter Last name");
    } else if (phonenumber.length === 0) {
      toast.error("please enter Phone number");
    } else if (email.length === 0) {
      toast.error("please enter email");
    } else if (password.length === 0) {
      toast.error("please enter password");
    } else if (hobby.length === 0) {
      toast.error("please enter hobby");
    } else if (houseno.length === 0) {
      toast.error("please enter house number");
    } else if (street.length === 0) {
      toast.error("please enter street");
    } else if (city.length === 0) {
      toast.error("please enter city");
    } else if (state.length === 0) {
      toast.error("please enter state");
    } else if (pincode.length === 0) {
      toast.error("please enter pincode");
    } else {
      const body = {
        firstname,
        lastname,
        phonenumber,
        email,
        password,
        hobby,
        houseno,
        street,
        city,
        state,
        pincode,
        role,
      };

      console.log(body);

      const address = {
        hobby,
        houseno,
        street,
        city,
        state,
        pincode,
      };

      const data = { objects: [body, address] };

      console.log(data);

      axios
        .post("http://localhost:8080/signup", body)
        .then((Response) => {
          console.log(Response);
          toast.success(" Successfully Registered!!!!!!");
          navigate("/selection");
        })
        .catch((error) => {
          alert("password in between 6 && 10 char");
          console.log("error");
          console.log(error);
        });
    }
  };
  return (
    <div style={styles.container1}>
      <div style={{ marginTop: 0 }}>
        <div style={styles.container}>
          <div className="mb-3">
            <div className="mb-3">
              <label>Select Role</label>
              <select
                id="role"
                name="role"
                onChange={(e) => {
                  setRole(e.target.value);
                }}
                className="form-control"
                placeholder="Select Role"
              >
                <option value="select">--Select--</option>
                <option value="User">USER</option>
                <option value="Service-Provider">SERVICE-PROVIDER</option>
              </select>
            </div>

            <label>First Name </label>
            <input
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className="form-control"
              type="text"
              placeholder="Your first name"
            />
          </div>

          <div className="mb-3">
            <label>Last Name</label>
            <input
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              className="form-control"
              type="text"
              placeholder="Your last name"
            />
          </div>

          <div className="mb-3">
            <label>Phone Number</label>
            <input
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              className="form-control"
              type="tel"
              placeholder="Your mobile number"
            />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="form-control"
              type="email"
              placeholder="Your email"
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="form-control"
              type="password"
              placeholder="Your password"
            />
          </div>

          {/* <div className="mb-3">
            <label>Confirm Password</label>
            <input
              onChange={(e) => {
                setconfirmPassword(e.target.value);
              }}
              className="form-control"
              type="password"
              placeholder="Repeat above password"
            />
          </div> */}
          {/* <div className="mb-3">
            <label>Security Question (Your Hobby)?</label>
            <input
              onChange={(e) => {
                setHobby(e.target.value);
              }}
              className="form-control"
              type="password"
              placeholder="WARNING: password recovery code "
            />
          </div> */}

          <div className="mb-3">
            <label>House No</label>
            <input
              onChange={(e) => {
                setHouseno(e.target.value);
              }}
              className="form-control"
              type="text"
              placeholder="Your House no"
            />
          </div>

          <div className="mb-3">
            <label>Street</label>
            <input
              onChange={(e) => {
                setStreet(e.target.value);
              }}
              className="form-control"
              type="text"
              placeholder="Street/Landmark"
            />
          </div>

          <div className="mb-3">
            <label>City</label>
            <input
              onChange={(e) => {
                setCity(e.target.value);
              }}
              className="form-control"
              type="text"
              placeholder="City Name"
            />
          </div>

          <div className="mb-3">
            <label>State</label>
            <input
              onChange={(e) => {
                setState(e.target.value);
              }}
              className="form-control"
              type="text"
              placeholder="your state"
            />
          </div>

          <div className="mb-3">
            <label>Pincode</label>
            <input
              onChange={(e) => {
                setPincode(e.target.value);
              }}
              className="form-control"
              type="number"
              placeholder="Pincode"
            />
          </div>
          <div className="mb3" style={{ marginTop: 30 }}></div>
          <div className="mb-3">
            <div>
              Already have an account?
              <Link to="/signin">Signin here</Link>
            </div>
            <button style={styles.Button} onClick={signup} className="">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: 400,
    height: 1075,
    padding: 20,
    position: "relative",
    backgroundColor: "white",
    top: 50,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    borderColor: "grey",
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    boxShadow: "1px 1px 10px 1px white",
  },

  container1: {
    backgroundImage: `url(${Images})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "200vh",
  },

  Button: {
    position: "relative",
    width: "100%",
    height: 40,
    backgroundColor: "black",
    color: "white",
    borderRadius: 5,
    border: "none",
    marginTop: 10,
  },
};

export default Signup;
