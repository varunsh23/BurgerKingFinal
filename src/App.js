import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/Owner.scss";
import "./styles/Menu.scss";
import "./styles/Footer.scss";
import "./styles/Contact.scss";
import "./styles/Cart.scss";
import "./styles/Shipping.scss";
import "./styles/ConfirmOrder.scss";
import "./styles/PaymentSuccess.scss";
import "./styles/Login.scss";
import "./styles/Profile.scss";
import "./styles/MyOrders.scss";
import "./styles/OrderDetails.scss";
import "./styles/Dashboard.scss";
import "./styles/About.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import PaymentSuccess from "./components/cart/PaymentSuccess";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import MyOrders from "./components/myorders/MyOrders";
import OrderDetails from "./components/myorders/OrderDetails";
import Dashboard from "./components/admin/Dashboard";
import Users from "./components/admin/Users";
import Orders from "./components/admin/Orders";
import About from "./components/about/About";
import NotFound from "./components/layout/NotFound";

const App = () => {
  return (
    <Router>
      <Header isAuthenticated={true}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping/>} />
        <Route path="/confirmorder" element={<ConfirmOrder/>} />
        <Route path="/paymentsuccess" element={<PaymentSuccess/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/me" element={<Profile />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/order/:id" element={<OrderDetails />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
