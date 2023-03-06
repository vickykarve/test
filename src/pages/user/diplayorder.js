import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const DisplayOrderList = () => {
const {serviceid}=useParams()
const [service, setService] = useState([]);

  // const [emp, setEmp] = useState('')
  // const location = useLocation();
  // const navigate = useNavigate();
  // const service = location.state;
  //console.log("service", service);
  useEffect(() => {
    // load all the services created by user
    orderlist();
  }, []);

  //get all services
  const orderlist = (id, e) => {
    //create axios api to send data to server
    console.log(serviceid);
    console.log(e);
    axios
      .get("http://localhost:8080/getorderlist/" +serviceid)
      .then(function (response) {
        console.log(response.data);
        const resp = response.data;
        setService(resp);
        console.log("Service: "+service)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", color: "navy", marginTop: 20 }}>
        Order List
      </h1>
      <table className="table table-striped" style={{ marginTop: 50 }}>
        <thead>
          <tr>
            {/* <th>Id</th> */}
            {/* <th>Service Id</th> */}
            <th>First Name</th>
            <th>Last Name</th>
            <th>Category Name</th>
            <th>Service Name</th>
            <th>Service Charge</th>
          </tr>
        </thead>
        <tbody>
          {service.map((orders) => {
            return (
              <tr>
                {/* <td>{orders.serviceid}</td> */}
                <td>{orders.employee.firstname}</td>
                <td>{orders.employee.lastname}</td>
                <td>{orders.categoryName}</td>
                <td>{orders.servicename}</td>
                <td>{orders.servicecharge}</td>
           
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
export default DisplayOrderList;
