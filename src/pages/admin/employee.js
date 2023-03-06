import { useNavigate } from "react-router-dom";

const Employee = () => {
  const navigate = useNavigate();

  const addEmployee = () => {
    //will transfer to add employee page to add employee details by the admon
    navigate("/addnewservice");
  };
  const listEmployee = () => {
    //will transfer to add employee page to add employee details by the admon
    navigate("/admin-list-employee");
  };
  const AdminHome = () => {
    navigate("/admin");
  };

  return (
    <div className="container">
      {/* <button
        onClick={AdminHome}
        type="button"
        class="btn btn-outline-danger btn-top"
      >
        Admin Page
      </button> */}
      <h1 style={{ textAlign: "center", color: "navy" }}>Service Providers</h1>
      <button
        onClick={AdminHome}
        type="button"
        class="btn btn-outline-dark btn-top"
      >
        Admin Page
      </button>
      <div className="row">
        <div
          className="card col mb-4"
          style={{
            margin: 20,
            display: "inline-block",
            cursor: "pointer",
            border: 0,
            marginTop: 70,
          }}
        >
          <img
            src="https://freepikpsd.com/file/2019/10/add-employee-icon-png-7-Transparent-Images-Free.png"
            alt="employee image"
            className="rounded mx-auto d-block"
            style={{ height: 300, width: 300, display: "block" }}
          />
          <div className="card-body">
            <button onClick={addEmployee} style={styles.Button}>
              Add Service Provider
            </button>
          </div>
        </div>
        <div
          className="card col mb-4  "
          style={{
            margin: 20,
            display: "inline-block",
            cursor: "pointer",
            border: 0,
            marginTop: 70,
          }}
        >
          <img
            src="https://icon-library.com/images/employee-icon-png/employee-icon-png-1.jpg"
            alt="list of employee image"
            className="rounded mx-auto d-block"
            style={{ height: 300, width: 300, display: "block" }}
          />
          <div className="card-body" width="300">
            <button onClick={listEmployee} style={styles.Button}>
              Service Provider List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  Button: {
    position: "relative",
    width: "100%",
    height: 40,
    backgroundColor: "Red",
    color: "white",
    borderRadius: 5,
    border: "none",
    marginTop: 10,
  },
};

export default Employee;
