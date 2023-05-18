import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Service from "./components/Service/Service";
import Register from "./components/Register/Register";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import UserHome from "./components/UserHome/UserHome";
import AdminHome from "./components/AdminHome/AdminHome";
import Logout from "./components/Logout/Logout";
import ManageUsers from "./components/ManageUsers/ManageUsers";
import EditProile from "./components/EditProile/EditProile";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import AddCategory from "./components/AddCategory/AddCategory";
import SearchAds from "./components/SearchAds/SearchAds";
import AddProducts from "./components/AddProducts/AddProducts";
import VerifyUser from "./components/VerifyUser/VerifyUser";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/service" element={<Service />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/user" element={<UserHome/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/managerusers" element={<ManageUsers/>} />
        <Route path="/changepassword" element={<ChangePassword/>} />
        <Route path="/editprofile" element={<EditProile/>} />
        <Route path="/addcategory" element={<AddCategory/>} />
        <Route path="/searchads" element={<SearchAds/>} />
        <Route path="/addproducts" element={<AddProducts/>} />
        <Route path="/verifyuser/:email" element={<VerifyUser/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
