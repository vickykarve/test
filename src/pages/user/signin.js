import { Link, useNavigate } from "react-router-dom";
import Images from "../../images/Barber/signinback.jpg";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
const Signin = () => {
  const [data, setData] = useState([]);

  const log = JSON.parse(window.localStorage.getItem("userlog"));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signin = () => {
    if (email.length === 0) {
      toast.error("please enter email");
    } else if (password.length === 0) {
      toast.error("please enter password");
    } else {
      //console.log(obj);
      const body = {
        email,
        password,
      };

      axios
        .post("http://localhost:8080/login", body)
        .then(function (response) {
          console.log(response.data);

          // const user=JSON.parse(response);
          localStorage.setItem("userlog", JSON.stringify(response.data));
          toast.success("user successfully logged in !!!!!!");
          sessionStorage.setItem("role", "User");
          sessionStorage.setItem("userid", response.data.id);
          sessionStorage.setItem("uname", response.data.firstname);
          sessionStorage.setItem("email", response.data.email);
          window.location.href = "/available-services";

          // console.log(login.role)
          const user2 = response.data;

          // if (log.role === "User") {
          //   toast.success("user successfully logged in !!!!!!");
          //   navigate("/booking");
          // }
          // if (log.role === "Admin") {
          //   toast.success("user successfully logged in !!!!!!");
          //   console.log("inside this page");
          //   navigate("/admin");
          // }
          // if (log.role === "Service-Provider") {
          //   toast.success("user successfully logged in !!!!!!");
          //   navigate("/addnewservice");
          // }
        })
        .catch(function (error) {
          toast.error(error);
          navigate("/signin");
        });
    }
  };

  return (
    <div style={styles.container1}>
      <div style={{ marginTop: 0 }}>
        <div style={styles.container}>
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

          <div className="mb3" style={{ marginTop: 40 }}></div>
          <div className="mb-3">
            <div>
              Don't have an account?
              <Link to="/signup">Signup here</Link>
            </div>
            <button style={styles.Button} onClick={signin} className="">
              Signin
            </button>
          </div>
          <div>
            <Link to="/forgot-password">Forgot password ?</Link>
          </div>
          <div>
            <Link to="/reset-password">Reset password </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: 400,
    height: 350,
    padding: 20,
    position: "relative",
    backgroundColor: "white",
    top: 100,
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
    height: "100vh",
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
export default Signin;
