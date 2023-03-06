import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const MyOrderList = () => {
  //const [employee, setEmployee] = useState([]);
  //const obj = JSON.parse(window.localStorage.getItem("userlog"));
  const email = sessionStorage.getItem("email")
  const [service, setService] = useState([]);
  const navigate = useNavigate();
  //const [email, setEmail] = useState("");
  console.log(email);
  // const [sfirstname, setSFirstname] = useState("");
  // const [slastname, setSLastname] = useState("");

  // const [pfirstname, setPFirstname] = useState("");
  // const [plastname, setPLastname] = useState("");

  // const [categoryname, setCategiryName] = useState("");
  // const [servicename, setServiceName] = useState("");

  // const [emp, setEmp] = useState('')
  // const location = useLocation();
  // const navigate = useNavigate();
  // const service = location.state;
  //console.log("service", service);
  useEffect(() => {
    //getorders();
  }, []);

  //deletemyorder
  const deletmyorder = (id, e) => {
    console.log("in delete function");
    console.log(id);
    console.log(e);

    axios
      .delete("http://localhost:8080/deletbooking/" + id)
      .then(function (response) {
        console.log(response.data);
        toast.success("Booking cancelled ");
        getorders();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  //get all services
  //   const myorderlist = async () => {
  //     try {
  //       const resp = await axios.get("http://localhost:8080/getorderlist");
  //       console.log(resp.data);
  //       setService(resp.data);
  //       console.log(service);
  //     } catch (err) {
  //       // Handle Error Here
  //       console.error(err);
  //     }
  //   };

  const back = () => {
    navigate("/available-services");
  };

  const getorders = async () => {
    try {
      const resp = await axios.get(
        "http://localhost:8080/getmybooking/" + email
      );
      console.log(resp.data);
      setService(resp.data);
      console.log(service);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  return (
    <div className="container">
      
      <h1 style={{ textAlign: "center", color: "navy", marginTop: 20 }}>
        My Bookings
      </h1>
      <button onClick={back} type="button" class="btn btn-outline-dark btn-top">
        Back
      </button>
      <div><br></br></div>
      <div>
        <input
        value={sessionStorage.getItem("email")}
        placeholder="Enter your email"
          // onChange={(e) => {
          //   setEmail(e.target.value);
          // }}
        />
        <span></span>
        <button
          onClick={getorders}
          style={styles.button}
          className="btn btn-sm btn-dark"
        >
          See booking
        </button>
      </div>

      <table className="table table-striped" style={{ marginTop: 50 }}>
        <thead>
          <tr>
            {/* <th>Id</th> */}
            {/* <th>Service Id</th> */}
            {/* <th>Seeker Name</th> */}
            <th>Provider Name</th>
            <th>Category Name</th>
            <th>Service Name</th>
            <th>Service Charges</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {service.map((orders) => {
            return (
              <tr>
                {/* <td>{orders.serviceid}</td> */}
                {/* <td>
                  {orders.firstname}
                  {" " + orders.lastname}
                </td> */}
                <td>
                  {orders.provider.firstname}
                  {" " + orders.provider.lastname}
                </td>
                <td>{orders.categoryName}</td>
                <td>{orders.servicename}</td>
                <td>{orders.servicecharge}</td>
                <td>
                  <Link
                    className="btn btn-danger btn-sm ms-1"
                    aria-current="page"
                    onClick={() => deletmyorder(orders.id)}
                  >
                    Cancel Booking
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  h3: {
    textAlign: "center",
    margin: 20,
  },
  button: {
    marginRight: 10,
  },
};
export default MyOrderList;
