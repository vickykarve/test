import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Admin from "./pages/admin/admin";
import Employee from "./pages/admin/employee";
import AddEmp from "./pages/admin/addemp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmpList from "./pages/admin/emplist";
import AboutUs from "./pages/aboutus";
import ContactUs from "./pages/contactus";
import Home from "./pages/home";
import Signup from "./pages/user/signup";
import Next from "./pages/user/next";
import Signin from "./pages/user/signin";
import ForgotPassword from "./pages/user/forgotpassword";
import ResetPassword from "./pages/user/resetpassword";
import Search from "./pages/search";
import Service from "./pages/admin/services";
import AddService from "./pages/admin/addservice";
import ServiceList from "./pages/admin/servicelist";
import Cart from "./pages/user/cart";
import Adminlogin from "./pages/admin/adminlogin";
import ServiceProviderlogin from "./pages/ServiceProvider/ServiceProviderlogin";
import Selection from "./components/selection";
import Servicepage from "./pages/ServiceProvider/servicepage";
import PutService from "./pages/ServiceProvider/putservice";
import AvailableServices from "./pages/available-services";
import Upcomingservices from "./pages/upcomingservice";
import CascdedDropDown from "./components/cascadeddropdown";
import Form from "./pages/user/Form";
import TermsConditions from "./components/termsandconditions";
import Footer from "./components/footer";
import AddNewService from "./pages/ServiceProvider/addnewservice";
import Protected from "./components/protected";
import NotFound from "./components/NotFound";
import Edit from "./pages/ServiceProvider/edit";
import AdminEmpList from "./pages/admin/adminemplist";
import DisplayOrderList from "./pages/user/diplayorder";
import OrderList from "./pages/admin/order";
import SuccessPayment from "./pages/user/SuccessPayment";
import MyOrderList from "./pages/user/myorders";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* <Route path="/admin" element={<Protected Component={Admin} />} /> */}

        <Route path="/admin" element={<Admin />} />
        <Route path="/employees" element={<Employee />} />
        <Route path="/add-employee" element={<AddEmp />} />
        <Route path="/list-employee" element={<EmpList />} />
        <Route path="/about-us" element={<Protected Component={AboutUs} />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/next" element={<Next />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/search" element={<Search />} />
        <Route path="/services" element={<Service />} />
        <Route path="add-services" element={<AddService />} />
        <Route path="/services-list" element={<ServiceList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route
          path="/ServiceProviderlogin"
          element={<ServiceProviderlogin />}
        />
        <Route path="/selection" element={<Selection />} />
        <Route path="/servicepage" element={<Servicepage />} />
        <Route path="/putservice/newedit/:id" element={<Edit />} />
        <Route path="/available-services" element={<AvailableServices />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cascade" element={<CascdedDropDown />} />
        {/* //<Route path='/availaibleservices'element={<Availbleservices/>}/> */}
        <Route path="/upcoming-services" element={<Upcomingservices />} />
        <Route path="/booking/:providerid" element={<Form />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/addnewservice" element={<AddNewService />} />
        <Route path="/admin-list-employee" element={<AdminEmpList />} />
        <Route path="/order-list/:serviceid" element={<DisplayOrderList />} />
        <Route path="/admin-order-list" element={<OrderList />} />
        <Route path="/payment" element={<SuccessPayment />} />
        <Route path="/myorders" element={<MyOrderList />} />
        <Route Component={NotFound} />
      </Routes>
      <Footer />

      <ToastContainer position="top-right" autoClose={1500} />
    </BrowserRouter>
  );
}

export default App;
