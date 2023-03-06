import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import Logo from '../images/Barber/barber.jpg';
import white from '../images/Barber/whitecart.png'
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  //const log = JSON.parse(window.localStorage.getItem("userlog"));
  const log = JSON.parse(window.sessionStorage.getItem("userlog"));

  const logout = () => {
    toast.success("Logout Successfully!!!!");
    sessionStorage.clear();
    window.location.href = "/home";
  };

  return (
    <nav
      style={{ backgroundColor: "black" }}
      className="navbar navbar-expand-lg navbar-dark"
    >
      <div className="container-fluid p-0 m-0">
        <Link className="navbar-brand" to="/home">
        
         <img style={{ width: 140, height: 110 }} src={Logo}  />
      <br></br>&nbsp;&nbsp;
        </Link>

      

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="dropdown"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/search"
              >
                <FaSearch />
                &nbsp;&nbsp; <input type="search" placeholder="Search here" />
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/available-services"
              >
                {/* Available Services */}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/upcoming-services"
              >
                Upcoming Services
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/about-us"
              >
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/contact-us"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <Link className="navbar-brand2" to="/cart">
        
        <img style={{ width: 100, height: 150 }} src={white}  />
     <br></br>&nbsp;&nbsp;
       </Link>

          <ul className="navbar-nav navbar-right">

            {sessionStorage.getItem("role") === "User" ? (
              <Link
              className="nav-link active"
              aria-current="page"
              to="/myorders"
            >
              My Booking
            </Link>
            ) : null}

           {sessionStorage.getItem("role") === "ServiceProvider" ? (
              <Link
              className="nav-link active"
              aria-current="page"
              to="/myorders"
            >
              My Booking
            </Link>
            ) : null}



            {sessionStorage.getItem("userid") === null ? (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/signup"
                  >
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/selection"
                  >
                    Sign in
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <span
                    style={{ cursor: "pointer" }}
                    className="nav-link active"
                    aria-current="page"
                    onClick={(e) => logout()}
                  >
                    Sign Out
                  </span>
                </li>
              </>




            )}
          </ul>
          {/* <ul className='nav-item'>
                     {navItems.map((item) => {
            if (item.title === "Signin") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link  className='nav-link active'
                  aria-current='page'
                   to={item.path}>Sign in</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link  className='nav-link active'
                  aria-current='page'
                  to={item.path}>{item.title}</Link>
              </li>
            );
             })}
            </ul>  */}

          {/* <ul className='nav-item'>    
           <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown">Dropdown</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/adminlogin">Link</a></li>
            <li><a class="dropdown-item" href="/siginin">Another link</a></li>
            <li><a class="dropdown-item" href="/ServiceProviderlogin">A third link</a></li>
          </ul>
        </li>
         </ul> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
