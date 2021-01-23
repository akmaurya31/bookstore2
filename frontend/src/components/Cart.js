import React from "react";
import img1 from "../../src/images/img1.jpg"

const Cart = () => {
    return (
      <>
      <section className="main_section cart">
        <div className="container">
          <div className="card shopping-cart">
            <div className="card-header bg-danger text-light">
              <i className="fa fa-shopping-cart mr-2" aria-hidden="true" />
              Shipping cart
              <a href="home" className="btn btn-outline-warning btn-sm pull-right">Continue shopping</a>
              <div className="clearfix" />
            </div>
            <div className="card-body">
              {/* PRODUCT */}
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
                      <i className="fa fa-trash" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
              {/* END PRODUCT */}
              <hr />
              {/* END PRODUCT */}
              <div className="pull-right">
                <a href className="btn btn-outline-secondary pull-right">
                  Update shopping cart
                </a>
              </div>
            </div>
            <div className="card-footer">
              <div className="pull-right" style={{margin: '10px'}}>
                <a href="checkout" className="btn btn-danger ml-5 pull-right">Checkout</a>
                <div className="pull-right" style={{margin: '5px'}}>
                  Total price: <b>₹500.00</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    );
};
export default Cart;