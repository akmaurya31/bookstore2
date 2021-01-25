import React, {useState} from "react";
import AOS from 'aos';

import {  Route, Switch } from 'react-router-dom';
import HomeScreen from './screen/HomeScreen';
import SigninScreen from './screen/SigninScreen';
import ProductScreen from './screen/ProductScreen';
import CartScreen from './screen/CartScreen';
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useSelector } from 'react-redux';
import Profile from "./components/Profile";
// import js from 'main.js';
import '../node_modules/aos/dist/aos.css';
import RegisterScreen from "./screen/RegisterScreen";
//import ProductsScreen from "./screen/ProductsScreen";
import ShippingScreen from "./screen/ShippingScreen";
import FrontPage from "./screen/FrontPage";
import orderScreen from './screen/orderScreen';
import Dashboard from "./components/Admin/Dashboard";
import Addbook from "./components/Admin/Addbook";
import Listbook from "./components/Admin/Listbook";
import AdminNavBar from "./Adminnav";
import Sidebar from "./Adminsidebar";
import Adminprofile from "./components/Admin/Adminprofile";
import PrivateRoute from './components/PrivateRoute';
import Userlist from "./components/Admin/Userlist";
import Viewreview from "./components/Admin/Viewreview";
import Orderlist from "./components/Admin/Orderlist";
import NotFound from './NotFound';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchScreen from "./screen/SearchScreen";
//mport SearchBox from './components/SearchBox';

let kk=429;
const Home = () => {

  const userSignin = useSelector((state) => state.userSignin);

  const [namehome, setNamehome] = useState('');

  console.log("namehome----------",namehome);

  const { userInfo } = userSignin;
  AOS.init();
  return (
    <>

<AdminNavBar />
   <NavBar /> 

   {/* <NavBar   onChange={alert("sdfadsf")}  /> */}
  <Sidebar />
  <Switch>
<Route exact path="/Admin" component={Dashboard} />
<Route exact path="/Addbook" component={Addbook} />
<Route exact path="/Listbook" component={Listbook} />
<Route path="/product/:id" component={ProductScreen} />
{/*<Route path="/products" component={ProductsScreen} /> */}
<Route path="/shipping" component={ShippingScreen} />
<Route path="/signin" component={SigninScreen} />
<Route path="/register" component={RegisterScreen} />
<Route path="/cart/:id?" component={CartScreen} />
<Route path="/order/:id" component={orderScreen}></Route>
<Route path="/booklist" component={HomeScreen} />
<Route path="/" exact={true} component={FrontPage} />
<Route exact path="/Adminprofile" component={Adminprofile} />
<Route exact path="/Userlist" component={Userlist} />
<Route exact path="/Viewreview" component={Viewreview} />
{/*<Route exact path="/Profile" component={Profile} /> */}
<Route exact path="/Orderlist" component={Orderlist} />


{/* <Route
            path="/booklist/key/:textname?"
            component={HomeScreen}
            exact
          ></Route> */}

{ <Route
            path="/search/name/:name?"
            component={SearchScreen}
            exact
          ></Route>
/*
<Route
            path="/search/category/:category"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name"
            component={SearchScreen}
            exact
          ></Route> */}
<Route component={NotFound} />
    </Switch>

<PrivateRoute
            path="/profile"
            component={Profile}
          ></PrivateRoute>
 <Footer /> 

 {/* <Route component={NotFound} /> */}
    </>
  

  );
};

export default Home;
