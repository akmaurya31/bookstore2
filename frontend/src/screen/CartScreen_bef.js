import React, {useEffect} from 'react';
import { addToCart} from '../actions/cartActions';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../actions/cartActions'
import MessageBox from '../components/MessageBox';

function CartScreen(props){
	const productId=props.match.params.id;	
	const qty= props.location.search? Number(props.location.search.split("=")[1]):1;
	const cart = useSelector(state => state.cart);
    console.log(cart);
    const { cartItems } = cart;
	const dispatch= useDispatch();
	
	
	
	const removeFromCartHandler=(productId)=>{
    dispatch(removeFromCart(productId))
	}
	// useEffect(() =>{
	// 	if(productId){
	// 		dispatch(addToCart(productId, qty));
	// 	}
  // })

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  
  const checkoutHandler=()=>{
    props.history.push("/signin?redirect=shipping");
  }
	
	return (
    <>
  <style jsx>{`
     
     .admin-nav{
       display:none;
     }.main-sidebar{
       display:none;
     }
    
   `}</style>



<div>
		 <section className="main_section cart">
        <div className="container">
          <div className="card shopping-cart">
            <div className="card-header bg-danger text-light">
              <i className="fa fa-shopping-cart mr-2" aria-hidden="true" />
              Shipping cart
              <a href="home" className="btn btn-outline-warning btn-sm pull-right">Continue shopping</a>
              <div className="clearfix" />
            </div>
            {console.log("my personal ata ",cartItems)}
            {cartItems.length === 0 ? (
          <MessageBox>
            Cart is empty. <Link to="/">Go Shopping</Link>
          </MessageBox>
        ) : 
				cartItems.map((item) =>(
       
				<div className="card-body" key={item.product}>
              {/* PRODUCT */}
              <div class="row">
                <div className="col-6 col-sm-12 col-md-2 text-center">
                  <img className="img-responsive" src={item.image} alt={item.name} width={120} height={80} />
                </div>
                <div className="col-6 text-sm-center col-sm-12 text-md-left col-md-4">
                 
			<Link to={"/product/"+item.product} >
				 <h5 className="product-name"><strong>{item.name}</strong></h5>
				 </Link>
                  <p>By: {item.author_name}</p>
                </div>
                <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right mt-3 row">
                  <div className="col-4 col-sm-6 col-md-6 text-md-right" style={{paddingTop: '5px'}}>
                    <h6><strong>{item.mrp} <span className="text-muted">x</span></strong></h6>
                  </div>
                  <div className="col-4 col-sm-6 col-md-4">  
                    <div className="quantity">
                      <select
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-4 col-sm-2 col-md-2 text-right">
                    <button type="button" onClick={() => removeFromCartHandler(item.product )} className="btn btn-outline-danger btn-xs">
                      <i className="fa fa-trash" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
              {/* END PRODUCT */}
			  </div>
				
  	)	)
			}
           
              <hr />
              {/* END PRODUCT */}
              
            </div>
            <div className="card-footer">
              <div className="pull-right" style={{margin: '10px'}}>
                <button className="btn btn-danger ml-5 pull-right" onClick={checkoutHandler} disabled={cartItems.length===0}>Proceed to Checkout</button>

                
                <div className="pull-right" style={{margin: '5px'}}>
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : Rs.
                {cartItems.reduce((a, c) => a + c.mrp * c.qty, 0)}
                </div>
              </div>
            </div>
          </div>
        
      </section>
	</div>




    </>
  )
}
export default CartScreen;