import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const AdminEmpList = () => {
  const [employee, setEmployee] = useState([]);

  // const [emp, setEmp] = useState('')
  const location = useLocation();
  const navigate = useNavigate();
  const service = location.state;
  console.log("service", service);
  useEffect(() => {
    // load all the services created by user
    AdminEmpList();
  }, []);

  //get all services
  const AdminEmpList = () => {
    //create axios api to send data to server

    axios
      .get("http://localhost:8080/getservice")
      .then(function (response) {
        console.log(response.data);
        const resp = response.data;
        setEmployee(resp);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //delete any services
  const deleteemployee = (id, e) => {
    console.log("in delete function");
    console.log(id);
    console.log(e);

    axios
      .delete("http://localhost:8080/deleteservice/" + id)
      .then(function (response) {
        console.log(response.data);
        toast.success("employee deleted");
        AdminEmpList();
        
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  //edit any services
  //const editemployee = (id) => {};

  const back = () => {
    navigate("/employees");
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", color: "navy", marginTop: 20 }}>
        Service Providers
      </h1>
      {/* {sessionStorage.getItem("role") === "Admin" ? (
        <Link
          className="btn btn-primary btn-sm ms-1"
          aria-current="page"
          onClick={back}
        >
          back
        </Link>
      ) : null} */}
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
            <th>Service Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone No</th>
            <th>Email</th>
            <th>Service</th>
            <th>Package</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((employees) => {
            return (
              <tr>
                <td>{employees.serviceid}</td>
                <td>{employees.employee.firstname}</td>
                <td>{employees.employee.lastname}</td>
                <td>{employees.employee.phonenumber}</td>
                <td>{employees.employee.email}</td>
                <td>{employees.servicename}</td>
                <td>{employees.packages}</td>
                <td>
                  {/*
                      <button
                        onClick={() => editemployee(employees.serviceid)}
                        style={styles.button}
                        className='btn btn-sm btn-success'>
                        Edit
                      </button>  */}
                  {sessionStorage.getItem("role") === "Admin" ? (
                    <Link
                      className="btn btn-success btn-sm"
                      aria-current="page"
                      to={`/putservice/newedit/${employees.serviceid}`}
                    >
                      Edit
                    </Link>
                  ) : null}
                  {sessionStorage.getItem("role") !== null ? (
                    <Link
                      className="btn btn-primary btn-sm ms-1"
                      aria-current="page"
                      to={"/booking/" + employees.serviceid}
                    >
                      Book Service
                    </Link>
                  ) : (
                    <Link
                      className="btn btn-primary btn-sm ms-1"
                      aria-current="page"
                      to={"/selection"}
                    >
                      Book Service
                    </Link>
                  )}

                  {sessionStorage.getItem("role") === "Admin" ? (
                    <Link
                      className="btn btn-primary btn-sm btn-danger"
                      aria-current="page"
                      onClick={() => deleteemployee(employees.serviceid)}
                    >
                      Delete
                      
                    </Link>
                  ) : null}

                  {/* <button
                    onClick={() => deleteemployee(employees.serviceid)}
                    style={styles.button}
                    className="btn btn-sm btn-danger ms-2"
                  >
                    Delete
                  </button> */}
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
export default AdminEmpList;
