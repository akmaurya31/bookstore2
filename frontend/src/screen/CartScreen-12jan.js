// import React, { useState } from "react";
import React,  { useState,useEffect} from 'react';
import { addToCart} from '../actions/cartActions';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../actions/cartActions'
import MessageBox from '../components/MessageBox';
import img1 from "../../src/images/img1.jpg";


const CartScreen = (props) => {

  const [qcount, setQcount]=useState(1);
  const [count, setCount] = useState(0);

  const productId=props.match.params.id;	
	const qty= props.location.search? Number(props.location.search.split("=")[1]):1;
	const cart = useSelector(state => state.cart);
    console.log(cart);
    const { cartItems } = cart;
  const dispatch= useDispatch();

  const removeFromCartHandler=(productId)=>{
    dispatch(removeFromCart(productId))
	}

  
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  
  const checkoutHandler=()=>{
    props.history.push("/signin?redirect=shipping");
  }

 

  const mycountm=()=>{
    setQcount(qcount-1)   
   }


  const mycountp=()=>{
   setQcount(qcount+1)
  }

  
    return (
      <>
      <style jsx>{`
      .admin-nav{
        display:none;
      }
      .main-sidebar{
        display:none;
      }

      .product-image {
  float: left;
  width: 20%;
}

.product-details {
  float: left;
  width: 37%;
}

.product-price {
  float: left;
  width: 12%;
}

.product-quantity {
  float: left;
  width: 10%;
}

.product-removal {
  float: left;
  width: 9%;
}

.product-line-price {
  float: left;
  width: 12%;
  text-align: right;
}

/* This is used as the traditional .clearfix class */
.group:before, .shopping-cart:before, .column-labels:before, .product:before, .totals-item:before,
.group:after,
.shopping-cart:after,
.column-labels:after,
.product:after,
.totals-item:after {
  content: '';
  display: table;
}

.group:after, .shopping-cart:after, .column-labels:after, .product:after, .totals-item:after {
  clear: both;
}

.group, .shopping-cart, .column-labels, .product, .totals-item {
  zoom: 1;
}

/* Apply clearfix in a few places */
/* Apply dollar signs */
.product .product-price:before, .product .product-line-price:before, .totals-value:before {
  content: '₹';
}

/* Body/Header stuff */

.shopping-cart {
  margin-top: -45px;
}

/* Column headers */
.column-labels label {
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #eee;
}
.column-labels .product-image, .column-labels .product-details, .column-labels .product-removal {
  text-indent: -9999px;
}

/* Product entries */
.product {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}
.product .product-image {
  text-align: center;
}
.product .product-image img {
  width: 100px;
}
.product .product-details .product-title {
  margin-right: 20px;
  font-family: "HelveticaNeue-Medium", "Helvetica Neue Medium";
}
.product .product-details .product-description {
  margin: 5px 20px 5px 0;
  line-height: 1.4em;
}
.product .product-quantity input {
  width: 40px;
}
.product .remove-product {
  border: 0;
  padding: 4px 8px;
  background-color: #c66;
  color: #fff;
  font-family: "HelveticaNeue-Medium", "Helvetica Neue Medium";
  font-size: 12px;
  border-radius: 3px;
}
.product .remove-product:hover {
  background-color: #a44;
}

/* Totals section */
.totals .totals-item {
  float: right;
  clear: both;
  width: 100%;
  margin-bottom: 10px;
}
.totals .totals-item label {
  float: left;
  clear: both;
  width: 79%;
  text-align: right;
}
.totals .totals-item .totals-value {
  float: right;
  width: 21%;
  text-align: right;
}
.totals .totals-item-total {
  font-family: "HelveticaNeue-Medium", "Helvetica Neue Medium";
}

.checkout {
  float: right;
    border: 0;
    margin-top: 20px;
    padding: 4px 11px;
    background-color: #f05c5c;
    color: #fff;
    font-size: 19px;
    border-radius: 3px;
}

.checkout:hover {
  background-color: #494;
}

/* Make adjustments for tablet */
@media screen and (max-width: 650px) {
  .shopping-cart {
    margin: 0;
    padding-top: 20px;
    border-top: 1px solid #eee;
  }

  .column-labels {
    display: none;
  }

  .product-image {
    float: right;
    width: auto;
  }
  .product-image img {
    margin: 0 0 10px 10px;
  }

  .product-details {
    float: none;
    margin-bottom: 10px;
    width: auto;
  }

  .product-price {
    clear: both;
    width: 70px;
  }

  .product-quantity {
    width: 100px;
  }
  .product-quantity input {
    margin-left: 20px;
  }

  .product-quantity:before {
    content: 'x';
  }

  .product-removal {
    width: auto;
  }

  .product-line-price {
    float: right;
    width: 70px;
  }
}
/* Make more adjustments for phone */
@media screen and (max-width: 350px) {
  .product-removal {
    float: right;
  }

  .product-line-price {
    float: right;
    clear: left;
    width: auto;
    margin-top: 10px;
  }

  .product .product-line-price:before {
    content: 'Item Total: $';
  }

  .totals .totals-item label {
    width: 60%;
  }
  .totals .totals-item .totals-value {
    width: 40%;
  }
}
.ssss h3{
  box-shadow: 0 0 7px #ececec;
    border-radius: 6px;
    background: #fff;
    padding: 10px;
}
.quantity-control {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  margin: 0 auto;
  background: #eaeaea;
  border-radius: 10px;
  padding: 3px;
}

.quantity-btn {
  background: transparent;
  border: none;
  outline: none;
  margin: 0;
  padding: 0px 8px;
  cursor: pointer;
}
.quantity-btn svg {
  width: 15px;
  height: 15px;
}
.quantity-input {
  outline: none;
  user-select: none;
  text-align: center;
  width: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
}
.quantity-input::-webkit-inner-spin-button,
.quantity-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

    `}</style>
      <section className="main_section cart">
        <div className="container">

        <div className="row">
          <div className="col-md-12 ssss">
          <h3>Shopping Cart</h3>

          {/* <div>

  { console.log("fffffffffffffff",cartItems)}  
  
  { cartItems.map((item) =>( <div> 
    
    <img className="img-responsive" src={item.image} alt={item.name} width={120} height={80} />
    <Link to={"/product/"+item.product} >
				 <h5 className="product-name"><strong>{item.name}</strong></h5>
				 </Link>
         <p>By: {item.author_name}</p>
    
     Hi Hanuman</div>))
  
  }
    
    </div> */}

        <div className="shopping-cart">
          <div className="column-labels">
            <label className="product-image">Image</label>
            <label className="product-details">Product</label>
            <label className="product-price">Price</label>
            <label className="product-quantity">Quantity</label>
            <label className="product-removal">Remove</label>
            <label className="product-line-price">Total</label>
          </div>

          {console.log("my personal ata ",cartItems)}
            { cartItems.length === 0 ? (
          <MessageBox>
            Cart is empty. <Link to="/">Go Shopping</Link>
          </MessageBox>
        ):
        
        cartItems.map((item) =>(

        <div className="product" key={item.product}>
            <div className="product-image">
              <img src={item.image} alt={item.name} width={120} height={80} />
            </div>
            <div className="product-details">
            <Link to={"/product/"+item.product} >
              <div className="product-title">{item.name}</div></Link>
              <p className="product-description">By :{item.author_name}</p>
            </div>
            <div className="product-price">{item.mrp}</div>
            <div className="product-quantity">
            <div className="quantity-control" data-quantity>
              <button className="quantity-btn"   onClick={mycountm} data-quantity-minus><svg viewBox="0 0 409.6 409.6">
                  <g>
                    <g>
                      <path d="M392.533,187.733H17.067C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h375.467 c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z" />
                    </g>
                  </g>
                </svg></button>
              <input type="number" className="quantity-input" data-quantity-target defaultValue={1} step={1} min={1} value={qcount} max name="quantity" />
  <button   onClick={mycountp} className="quantity-btn" data-quantity-plus><svg viewBox="0 0 426.66667 426.66667">
      <path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0" /></svg>
  </button>
            </div>
        
              {/* <input type="number" defaultValue={2} min={1} /> */}
            </div>
            <div className="product-removal">
              <button className="remove-product" onClick={() => removeFromCartHandler(item.product )}>
                Removes
              </button> 
            </div>
            <div className="product-line-price">25.98</div>
          </div>
        
        
        )
      
        )

            }
          {/* <div className="product">
            <div className="product-image">
              <img src={img1} />
            </div>
            <div className="product-details">
              <div className="product-title">Book Name</div>
              <p className="product-description">By : John Doe</p>
            </div>
            <div className="product-price">45.99</div>
            <div className="product-quantity">
              <div className="quantity-control" data-quantity>
                <button className="quantity-btn" data-quantity-minus><svg viewBox="0 0 409.6 409.6">
                    <g>
                      <g>
                        <path d="M392.533,187.733H17.067C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h375.467 c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z" />
                      </g>
                    </g>
                  </svg></button>
                <input type="number" className="quantity-input" data-quantity-target defaultValue={1} step={1} min={1} max name="quantity" />
                <button className="quantity-btn" data-quantity-plus><svg viewBox="0 0 426.66667 426.66667">
                    <path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0" /></svg>
                </button>
              </div>
              </div>
            <div className="product-removal">
              <button className="remove-product">
                Remove
              </button>
            </div>
            <div className="product-line-price">45.99</div>
          </div> */}
          <div className="totals">
            <div className="totals-item">
              <label>Subtotal</label>
              <div className="totals-value" id="cart-subtotal">71.97</div>
            </div>
            <div className="totals-item">
              <label>Tax (5%)</label>
              <div className="totals-value" id="cart-tax">3.60</div>
            </div>
            <div className="totals-item">
              <label>Shipping</label>
              <div className="totals-value" id="cart-shipping">15.00</div>
            </div>
            <div className="totals-item totals-item-total">
              <label>Grand Total</label>
              <div className="totals-value" id="cart-total">90.57</div>
            </div>
          </div>
          <button className="checkout" onClick={checkoutHandler} disabled={cartItems.length===0}>Checkout</button>
        </div>
          </div>
        </div>

        
          {/* <div className="card shopping-cart">
            <div className="card-header bg-danger text-light">
              <i className="fa fa-shopping-cart mr-2" aria-hidden="true" />
              Shipping cart
              <a href="home" className="btn btn-outline-warning btn-sm pull-right">Continue shopping</a>
              <div className="clearfix" />
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-6 col-sm-12 col-md-2 text-center">
                  <img className="img-responsive" src={img1} alt="prewiew" width={120} height={80} />
                </div>
                <div className="col-6 text-sm-center col-sm-12 text-md-left col-md-4">
                  <h5 className="product-name"><strong>Product Name</strong></h5>
                  <p>By: John Doe</p>
                </div>
                <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right mt-3 row">
                  <div className="col-4 col-sm-6 col-md-6 text-md-right" style={{paddingTop: '5px'}}>
                    <h6><strong>25.00 <span className="text-muted">x</span></strong></h6>
                  </div>
                  <div className="col-4 col-sm-6 col-md-4">
                    <div className="quantity">
                      <input type="button" defaultValue="+" className="plus" />
                      <input type="number" step={1} max={99} min={1} defaultValue={1} title="Qty" className="qty" size={4} />
                      <input type="button" defaultValue="-" className="minus" />
                    </div>
                  </div>
                  <div className="col-4 col-sm-2 col-md-2 text-right">
                    <button type="button" className="btn btn-outline-danger btn-xs">
                      Remove from Cart
                    </button>
                  </div>
                </div>
              </div>
              <hr />
              
            </div>
            <div className="card-footer">
              <div className="pull-right" style={{margin: '10px'}}>
                <a href="checkout" className="btn btn-danger ml-5 pull-right">Checkout</a>
                <div className="pull-right" style={{margin: '5px'}}>
                  Total price: <b>₹500.00</b>
                </div>
              </div>
            </div>
          </div> */}
        
        </div>
      </section>
      </>
    );
};
export default CartScreen;
