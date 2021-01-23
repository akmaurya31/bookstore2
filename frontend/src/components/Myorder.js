import { render } from '@testing-library/react';
import React from 'react';
import img1 from "../../src/images/img1.jpg"

const Order = ()=>{
    return(
        <>
        <section className="main_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12  my_order user_form">
              <div className="row">
                <div className="col-md-12">
                  <div className="order_heading mb-3">
                    <h4>My Order</h4>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 col-6">
                  <div className="order_image">
                    <img src={img1} alt="order_image" className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 col-6">
                  <div className="order_book">
                    <h4>The Last Sigh</h4>
                    <p><b>By : John Doe</b></p>
                    <p>Category : Fiction</p>
                    <p>Cover : Paperback</p>
                    <p>Language : English</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-6">
                  <div className="order_center text-center">
                    <h5><b>Price : ₹500</b></h5>
                    <p>Order on : 12/12/2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    );
};
export default Order;