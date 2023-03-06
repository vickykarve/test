import { Link, useNavigate } from "react-router-dom";
import Images from "../../images/Barber/blankshop.jpg";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
const Adminlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const adminlogin = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length === 0) {
      toast.error("please enter email");
    } else if (password.length === 0) {
      toast.error("please enter password");
    } else {
      axios
        .post("http://localhost:8080/api/admin/validate", {
          userid: email,
          pwd: password,
        })
        .then((resp) => {
          console.log(resp.data);
          sessionStorage.setItem("role", "Admin");
          sessionStorage.setItem("userid", resp.data.id);
          sessionStorage.setItem("uname", resp.data.name);
          window.location.href = "/admin";
        })
        .catch((err) => {
          toast.error("Invalid username or password");
        });
    }
  };

  return (
    <div style={styles.container1}>
      <div style={{ marginTop: 0 }}>
        <form onSubmit={handleSubmit} style={styles.container}>
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
            <button style={styles.Button} onClick={adminlogin} className="">
              Signin
            </button>
          </div>
          <div>
            <Link to="/forgot-password">Forgot password ?</Link>
          </div>
          <div>
            <Link to="/reset-password">Reset password </Link>
          </div>
        </form>
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
    borderColor: "#663399",
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
    backgroundColor: "navy",
    color: "white",
    borderRadius: 5,
    border: "none",
    marginTop: 10,
  },
};
export default Adminlogin;
