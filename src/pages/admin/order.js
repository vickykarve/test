import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const OrderList = () => {
  //const [employee, setEmployee] = useState([]);

  const [service, setService] = useState([]);
  const navigate = useNavigate();
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
    orderlist();
  }, []);

  //get all services
  const orderlist = async () => {
    try {
      const resp = await axios.get("http://localhost:8080/getorderlist");
      console.log(resp.data);
      setService(resp.data);
      console.log(service);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  const back = () => {
    navigate("/admin");
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", color: "navy", marginTop: 20 }}>
        Order List
      </h1>
      <button
        onClick={back}
        type="button"
        class="btn btn-outline-dark btn-top"
      >
        Back
      </button>
      <table className="table table-striped" style={{ marginTop: 50 }}>
        <thead>
          <tr>
            {/* <th>Id</th> */}
            {/* <th>Service Id</th> */}
            <th>Seeker Name</th>
            <th>Provider Name</th>
            <th>Category Name</th>
            <th>Service Name</th>
            <th>Service Charges</th>
          </tr>
        </thead>
        <tbody>
          {service.map((orders) => {
            return (
              <tr>
                {/* <td>{orders.serviceid}</td> */}
                <td>
                  {orders.firstname}
                  {" " + orders.lastname}
                </td>
                <td>
                  {orders.provider.firstname}
                  {" " + orders.provider.lastname}
                </td>
                <td>{orders.categoryName}</td>
                <td>{orders.servicename}</td>
                <td>{orders.servicecharge}</td>
                <td></td>
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
export default OrderList;