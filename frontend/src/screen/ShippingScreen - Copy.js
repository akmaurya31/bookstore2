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
      }.main-sidebar{
        display:none;
      }
    `}</style>
    <section className="main_section checkout">
            <div className="container">
            <div className="row d-flex">
                <div className="col-md-7">
                <div className="form_block Yorder w-100">
                    <h3 className="text-center">BILLING DETAILS</h3>
                    <form id="register-form" onSubmit={submitHandler}>
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
                    </form>
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
                    <div>
                    <input type="radio" name="paymentMethod" id="dbt" value="dbt" onChange={(e) =>setPaymentMethod(e.target.value)} /> Direct Bank Transfer
                    </div>
                    <p>
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                    </p>
                    <div>
                    <input type="radio" id="cod"  value="cod" name="paymentMethod"  onChange={(e) =>setPaymentMethod(e.target.value)} /> Cash on Delivery
                    </div>
                    <div>
                    <input type="radio" name="paymentMethod"  id="paymentMethod" onChange={(e) =>setPaymentMethod(e.target.value)} value="paypal" checked /> Paypal <span>
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