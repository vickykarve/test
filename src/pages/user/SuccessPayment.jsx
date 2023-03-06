import React from "react";
import "./style1.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function SuccessPayment() {
  const obj = JSON.parse(window.localStorage.getItem("userlog"));
  //const [servicecharge, setServicecharge] = useState("");
  //localStorage.setItem("ServiceCharge", servicecharge);
  const navigate = useNavigate();
  useEffect(() => {
    // localStorage.setItem("userlog", JSON.stringify(log));
    // sessionStorage.setItem("servicecharge", log.servicecharge);
  }, []);

  const functionalert = () => {
    alert("Payment Done successfully");
    navigate("/home");
  };
  return (
    <>
      <div className="OuterBox">
        <div className="innerBox">
          <div className="subBox">
            <h2>Payment Gateway</h2>
            <label className="labelText">Card Holder Name</label>
            <br />
            <input type="text" className="nameInput" />
          </div>
          <div className="subBox">
            <label className="labelText">Card Number</label>
            <br />
            <input type="number" className="nameInput" />
          </div>
          <div className="subBox cvvexpBox">
            <div>
              <label className="labelText">CVV Number</label>
              <br />
              <input type="number" className="smallInput" />
            </div>
            <div>
              <label className="labelText">Expiry Date</label>
              <br />
              <input type="date" className="smallInput" />
            </div>
          </div>
          <div className="subBox">
            <label className="labelText">Amount</label>
            <br />
            <input
              type="text"
              className="amountInput"
              value={obj.servicecharge}
              disabled
            />
          </div>
           <button
            className="payButton"
            onClick={functionalert}
            
          >
            PAY
          </button> 

        

          {/* {sessionStorage.getItem("role") === "Admin" ? (
            
            <Link
              className="btn btn-dark btn-lg  ms-1"
              aria-current="page"
              to={"/admin" }
              
            >
              Pay
            </Link>
          ) : (
            <Link
              className="btn btn-dark btn-lg  ms-1"
              aria-current="page"
              to={"/available-services"}
            >
              Pay
            </Link>
            
          )} */}
        </div>
      </div>
    </>
  );
}

export default SuccessPayment;
