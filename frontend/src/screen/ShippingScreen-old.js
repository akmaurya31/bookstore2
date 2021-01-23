import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToCart, savePaymentMethod} from '../actions/cartActions';
import {useSelector, useDispatch } from 'react-redux';  
import { saveShippingAddress } from '../actions/cartActions';
import { createOrder } from '../actions/orderActions';

import { ORDER_CREATE_RESET } from '../constants/orderConstants';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

function ShippingScreen(props){

    const userSignin = useSelector((state) => state.userSignin);
     const { userInfo } = userSignin;

     if (!userInfo) {
        props.history.push('/signin');
      }

      const cart = useSelector(state => state.cart);  
      const { cartItems } = cart;
      const { shippingAddress } = cart;

      const orderCreate = useSelector((state) => state.orderCreate);
      const { loading, success, error, order } = orderCreate;


    const [fname, setFname]=useState(shippingAddress.fname);
    const [lname, setLname]=useState(shippingAddress.lname);
    const [email, setEmail]=useState(shippingAddress.email);
    const [mobile, setMobile]=useState(shippingAddress.mobile);
    const [address, setAddress]=useState(shippingAddress.address);
    const [pincode, setPinCode]=useState(shippingAddress.pincode);
    const [landmark, setLandmark]=useState(shippingAddress.landmark);
    const [city, setCity]=useState(shippingAddress.city);
    const [country, setCountry]=useState(shippingAddress.country);
    const [paymentMethod, setPaymentMethod]=useState('paypal');
    
   // const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12

    const itemsPrice = cartItems.reduce((a, c) => a + c.mrp * c.qty, 0);
    const shippingPrice = itemsPrice > 100 ? 0 : 10;
    const taxPrice = 0.15 * itemsPrice;
    const totalPrice = itemsPrice + shippingPrice + taxPrice;


    const dispatch=useDispatch();
   

    const submitHandler=(e)=>{
        window.alert('hiii handle1')
        console.log("handler 1")
        e.preventDefault();
dispatch(saveShippingAddress({fname, lname, email, mobile, address, pincode, landmark, city, country, paymentMethod}));
props.history.push('/booklist');

    }

    const submitHandler2 = (e) => {
        window.alert('hiii handle2')
        console.log("hi agam")
        e.preventDefault();
       dispatch(savePaymentMethod(paymentMethod));
          props.history.push('/placeorder');
      };

      const placeOrderHandler = () => {
        
        dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
        // TODO: dispatch place order action

      };

      useEffect(() => {
        if (success) {
          props.history.push(`/order/${order._id}`);
          dispatch({ type: ORDER_CREATE_RESET });
        }
      }, [dispatch, order, props.history, success]);


return (
    <>
    <style jsx>{`
    .admin-nav{
      display:none;
    }
    .main-sidebar{
      display:none;
    }


    
.new {
padding: 50px;
}

.new .form-group {
display: block;
margin-bottom: 15px;
}

.new .form-group input {
padding: 0;
height: initial;
width: initial;
margin-bottom: 0;
display: none;
cursor: pointer;
}

.new .form-group label {
position: relative;
cursor: pointer;
}

.new .form-group label:before {
content:'';
-webkit-appearance: none;
background-color: transparent;
border: 2px solid #0079bf;
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
padding: 6px;
display: inline-block;
position: relative;
vertical-align: middle;
cursor: pointer;
margin-right: 5px;
border-radius:50%;
}

.new .form-group input:checked + label:after {
content: '';
display: block;
position: absolute;
top: 2px;
left: 9px;
width: 6px;
height: 14px;
border: solid #0079bf;
border-width: 0 2px 2px 0;
transform: rotate(45deg);
}
.exist_add{
  display: contents;
}
    `}</style>
    <section className="main_section checkout">
            <div className="container">
            <div className="row d-flex">
                <div className="col-md-7">
                <div className="form_block Yorder w-100">
                    <h3 className="text-center">BILLING DETAILS</h3>

                    <div className="accordion accordion_course_details" id="accordionExample">
                        <div className="card">
                            <div className="card-header" id="headingOne41">
                            <h6 className="mb-0 d-flex">
                                <button className="btn btn-block text-left d-flex" type="button" data-toggle="collapse" data-target="#collapseOne165" aria-expanded="true" aria-controls="collapseOne">
                                Add New Address
                                <span className="ml-auto">
                                    <p className="mb-0"><small>
                                        <i className="fa fa-arrow-down text-muted ml-3" /></small>
                                    </p>
                                </span>
                                </button>
                            </h6>
                            </div>
                            <div id="collapseOne165" className="collapse" aria-labelledby="headingOne41" data-parent="#accordionExample">
                            <div className="card-body">
                                <form id="add-form">
                                    <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="fname">Address</label>
                                        <input type="text" className="form-control input-sm" name="fname" placeholder="Address (Area and Street)" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="fname">City/Disrict/Town</label>
                                        <input type="text" className="form-control" name="fname" placeholder="City/Disrict/Town" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="lname">State</label>
                                        <input type="text" className="form-control" name="lname" placeholder="Enter State" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="lname">Pincode</label>
                                        <input type="text" className="form-control" name="lname" placeholder="Enter Pincode" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="lname">Landmrk</label>
                                        <input type="text" className="form-control" name="lname" placeholder="Enter Landmrk" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="lname">Name this address</label>
                                        <input type="text" className="form-control" name="lname" placeholder="Name this address :- (Home, Work, Other...)" />
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12 pull-right mb-5">
                                        <button type="button" className="btn btn-success" data-dismiss="modal">Save</button>
                                        </div>
                                    </div>
                                    </div>
                                </form>
                            </div>
                            </div>
                            

                            <div className="new">
                                <form>
                                <div className="form-group">
                                    <input type="checkbox" id="html" />
                                    <label htmlFor="html">
                                        <div className="exist_add">
                                            <small>Home</small><br />
                                            <p className="mt-3"><b className="mr-4 mt-2">Shivani Saini</b> <b className="mt-2">707191779</b></p>
                                            <p>A-44 rajiv nagar, kalyanpur, Lucknow, Uttar Pradesh -<strong>226022</strong></p>
                                        </div>
                                    </label>
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" id="css" />
                                    <label htmlFor="css">
                                        <div className="exist_add">
                                            <small>Work</small><br />
                                            <p className="mt-3"><b className="mr-4 mt-2">Shivani Saini</b> <b className="mt-2">707191779</b></p>
                                            <p>BFC Infoech, Lucknow, Uttar Pradesh -<strong>226022</strong></p>
                                        </div>
                                    </label>
                                </div>
                                </form>
                            </div>
                            
                           
                        </div>
                    </div>
                    {/* <form id="register-form" onSubmit={submitHandler}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" className="form-control" id="fname" name="fname"  value={fname} onChange={(e) =>setFname(e.target.value)} required />
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="fname">Last Name</label>
                        <input type="text" className="form-control" id="lname" name="lname"  value={lname} required onChange={(e) =>setLname(e.target.value)} />
                        </div>
                        <div className="form-group col-md-12">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e) =>setEmail(e.target.value)} required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-1 p-0">
                        <label htmlFor="inputCity">Mobile</label>
                        <input type="text" className="form-control"  id="inputPhoneCode" placeholder={+91} defaultValue={+91} name="code" required  />
                        </div>
                        <div className="form-group col-md-5">
                        <label htmlFor="mnumber">&nbsp;</label>
                        <input type="text" className="form-control" id="mobile" name="mobile"  value={mobile}  onChange={(e) =>setMobile(e.target.value)}/>
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="email">Address</label>
                        <input type="text" className="form-control" id="address" name="address" onChange={(e) =>setAddress(e.target.value)}  value={address} required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="fname"> Pincode</label>
                        <input type="text" className="form-control" id="pincode" name="pincode" onChange={(e) =>setPinCode(e.target.value)}  value={pincode} required />
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="fname">Landmark</label>
                        <input type="text" className="form-control" id="landmark" name="landmark"  value={landmark}  onChange={(e) =>setLandmark(e.target.value)}defaultValue />
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="fname"> City</label>
                        <input type="text" className="form-control" name="city" id="city"  value={city}  onChange={(e) =>setCity(e.target.value)} required />
                        </div>
                        <div className="form-group  col-md-6">
                        <label htmlFor="email">Country</label>
                        <select className="form-control" name="country" id="country" required   value={country} onChange={(e) =>setCountry(e.target.value)}>
                            <option>Select</option>
                            <option>India</option>
                            <option>Pakistan</option>
                            <option>Pakistan</option>
                        </select>
                        </div>
                    </div>
                    <button type="submit" className="mt-2 btn btn-register btn-loader" id="submit_button">
                        Submit</button>
                    </form> */}
                </div>
                </div>
                <div className="col-md-5">
                <div className="Yorder">
                    <h3 className="text-center">YOUR ORDER</h3>
                    <table className="table">
                        
                    <tbody>
                    {
              cartItems.length === 0 ?
                <div>
                  Cart is empty
          </div>
                :
                cartItems.map(item =>  <tr>
                    <td>{item.name} x {item.qty}(Qty)</td>
                    <td>INR {item.mrp}</td>
                    </tr> 
                    )}
                        <tr>
                        <td>Item Price</td>
                        <td>INR {itemsPrice}</td>
                        </tr>
                        <tr>
                        <td>Tax Price</td>
                        <td>INR {taxPrice}</td>
                        </tr>
                        <tr>
                        <td>Subtotal</td>
                        <td>INR {totalPrice}</td>
                        </tr>
                        <tr>
                        <td>Shipping</td>
                        <td>INR {shippingPrice}</td>
                        </tr>
                    </tbody>
                    </table><br />
                    <form onSubmit={submitHandler2}>  
                    {/* <div>
                    <input type="radio" name="paymentMethod" id="dbt" value="dbt" onChange={(e) =>setPaymentMethod(e.target.value)} /> Direct Bank Transfer
                    </div> */}
                    <p>
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                    </p>
                    {/* <div>
                    <input type="radio" id="cod"  value="cod" name="paymentMethod"  onChange={(e) =>setPaymentMethod(e.target.value)} /> Cash on Delivery
                    </div> */}
                    <div>
                    <input type="radio" name="paymentMethod"  id="paymentMethod" onChange={(e) =>setPaymentMethod(e.target.value)} value="paypal" checked /> Cashfree <span>
                        <img src="https://www.logolynx.com/images/logolynx/c3/c36093ca9fb6c250f74d319550acac4d.jpeg" alt="" width={50} />
                    </span>
                    </div>
                    <button type="submit" type="button">Payment</button>
                    </form>
                </div>{/* Yorder */}
                <button
                  type="button"
                  onClick={placeOrderHandler}
                  className="primary block"
                  disabled={cartItems.length === 0}
                >
                  Place Order
                </button>
                </div>
            </div>
            </div>
        </section>
    </>
  );
}
export default ShippingScreen;