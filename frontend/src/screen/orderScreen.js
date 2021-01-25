import React, { useEffect , useState} from 'react';
import Axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsOrder } from '../actions/orderActions';
import { detailsUser } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { userDetailsReducer } from '../reducers/userReducers';

export default function OrderScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const orderId = props.match.params.id;
  const [sdkReady, setSdkReady] = useState(false);
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    const addPayPalScript = async () => {
      const { data } = await Axios.get('/api/config/paypal');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (!order) {
      dispatch(detailsOrder(orderId));
    } else {
      if (!order.isPaid) {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    }
  }, [dispatch, order, orderId, sdkReady]);

  const successPaymentHnadler = () => {
    // TODO: dispatch pay order
  };
  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <h1>Order {order._id}</h1>

{console.log("vvvvvvvvv",order)}
      
      <div className="row top">
        <div className="col-6">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Shipping</h2>
                <p>
                  {/* <strong>Name:</strong> {order.shippingAddress.fullName} <br /> */}
                  <strong>Address: </strong> {order.shippingAddress.address},
                  {order.shippingAddress.city},{' '}
                  {order.shippingAddress.postalCode},
                  {order.shippingAddress.state}
                </p>
                {order.isDelivered ? (
                  <MessageBox variant="success">
                    Delivered at {order.deliveredAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">Not Delivered</MessageBox>
                )}
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {order.paymentMethod}
                </p>
                {order.isPaid ? (
                  <MessageBox variant="success">
                    Paid at {order.paidAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">Not Paid</MessageBox>
                )}
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Order Items</h2>
                <ul>
                  {order.orderItems.map((item) => (
                    <li key={item.product}>
                      <div className="row">
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>

                        <div>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="card card-body">
            <ul>
              <li>
                <h2>Order Summary</h2>
              </li>
              <li>
                <div className="row">
                  <div>Items</div>
                  <div>Rs {order.itemsPrice}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Shipping</div>
                  <div>Rs {order.shippingPrice}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Tax</div>
                  <div>Rs {order.taxPrice}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    <strong> Order Total</strong>
                  </div>
                  <div>
                    <strong>Rs {order.totalPrice}</strong>
                  </div>
                </div>
              </li>
              {!order.isPaid && (
                <li>
                  {!sdkReady ? (
                    <LoadingBox></LoadingBox>
                  ) : (
                  
                    <>
{/* <PayPalButton amount={order.totalPrice} onSuccess={successPaymentHnadler}   ></PayPalButton> */}
                    </>
                  )}


                </li>


              )}
            </ul>

           

      <form method="get" action="https://bfcpublications.com/paymentRequestnode" id="contact_form" acceptCharset="UTF-8" className="contact-form">
        <input type="text" name="_token" defaultValue="2kMw2kanaq5bwDlsHBE3nrpycBkcS0J4iYJ5y7EB" />            <div className="form-group">
          {/*<label>App ID:</label><br>*/}
          {/*<input type="hidden" class="form-control" name="appId" placeholder="Enter App ID here (Ex. 123456a7890bc123defg4567)" value="29787295c06f7f0b7dab18a0678792"/>*/}
          <input type="hidden" className="form-control" name="appId" placeholder defaultValue="733936538bd77bb9b19ec42f039337" />
        </div>
        {/* <div className="form-group">
          <span style={{backgroundColor: '#c1c1c1', color: 'black', fontSize: '18px'}}>You have selected <b> ebook Superior </b>Package.</span> 
          <br /> 
          <span style={{backgroundColor: '#c1c1c1', color: 'black', fontSize: '18px'}}>Total Amt: INR 6000 + 18% GST added</span>
          <br />
          <span style={{backgroundColor: '#c1c1c1', color: 'black', fontSize: '18px'}}>Final Amt: INR 7080 </span>
          <br />
        </div> */}
        <div className="form-group">
          {/*<label>Order ID:</label><br>*/}
           <input type="text" className="form-control" name="packageName" placeholder defaultValue="ebook" />
          <input type="text" className="form-control" name="subPackageName" placeholder defaultValue="Superior" />
    <input type="text" className="form-control" name="orderId" id="orderId" defaultValue={order._id} />
        </div> 
        <div className="form-group">
          {/*<label>Order Amount:</label><br>*/}
          <input type="text" className="form-control" name="orderAmount" placeholder="Enter Order Amount here (Ex. 100)" value={order.totalPrice} />
        </div>
        <div className="form-group">
          {/*<label>Order Currency:</label><br>*/}
  <input type="text" className="form-control" name="orderCurrency" defaultValue="INR" value={order.user} />
        </div>
        <div className="form-group">
          {/*<label>Order Note:</label><br>*/}
          <input type="text" className="form-control" name="orderNote" placeholder="Enter Order Note here (Ex. Test order)" />
        </div>
        <div className="form-group">
          <label><b>Name:</b></label><br />
          <input className="form-control" name="customerName" placeholder="Enter your name here" title="Name with a-z and A-Z" 
          value="agam"
          required />
        </div>
        <div className="form-group">
          <label><b>Email:</b></label><br />
          <input className="form-control" name="customerEmail" type="text" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Enter your email address here" title="Email Id with a-z,A-Z,any No and remaing @gmail.com,@yahoo.com etc" required />
        </div>
        <div className="form-group">
          <label><b>Phone:</b></label><br />
          <input type="text" className="form-control" name="customerPhone" placeholder="Enter your phone number here" pattern="[789][0-9]{9}" maxLength={10} required />
          {/*<input type="text" name="Phone Number" pattern="[7-9]{1}[0-9]{9}" 
                  title="Phone number with 7-9 and remaing 9 digit with 0-9" placeholder="Enter your phone no here" required>*/}
        </div>
        {/*<div class="form-group">
               <label>Return URL:</label><br>
               <input class="form-control" name="returnUrl" placeholder="Enter the URL to which customer will be redirected (Ex. www.example.com)"/>
               </div>        
               <div class="form-group">
               <label>Notify URL:</label><br>
               <input class="form-control" name="notifyUrl" placeholder="Enter the URL to get server notificaitons (Ex. www.example.com)"/>
               </div>*/}
        <div className="row">
          <div className="col-md-6"><div className="col-md-6"><button className="btn btn-primary btn-block" onclick="goBack()">Go Back</button></div></div>
    <div className="col-md-6"><button type="submit" className="btn btn-primary btn-block" value="Pay">Place Your Order</button></div>
        </div>
        <br /> 
        <br />
      </form>
 
          
          </div>
        </div>
      </div>
    </div>
  );
}
