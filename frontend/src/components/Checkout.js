import React from "react";

const asfCheckout = () => {
    return (
    <>
        <section className="main_section checkout">
            <div className="container">
            <div className="row d-flex">
                <div className="col-md-7">
                <div className="form_block Yorder w-100">
                    <h3 className="text-center">BILLING DETAILS11</h3>
                    <form id="register-form">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" className="form-control" name="fname" placeholder="Enter First Name" defaultValue required />
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="fname">Last Name</label>
                        <input type="text" className="form-control" name="fname" placeholder="Enter Last Name" defaultValue required />
                        </div>
                        <div className="form-group col-md-12">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" className="form-control" name="email" placeholder="username@domainname.com" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-1 p-0">
                        <label htmlFor="inputCity">Mobile</label>
                        <input type="text" className="form-control" id="inputPhoneCode" placeholder={+91} defaultValue={+91} name="code" required />
                        </div>
                        <div className="form-group col-md-5">
                        <label htmlFor="mnumber">&nbsp;</label>
                        <input type="text" className="form-control" name="mnumber" placeholder="mobile number" />
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="email">Address</label>
                        <input type="text" className="form-control" name="email" placeholder="Enter Address" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="fname"> Pincode</label>
                        <input type="text" className="form-control" name="fname" placeholder="Enter Pincode" defaultValue required />
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="fname">Landmark</label>
                        <input type="text" className="form-control" name="fname" placeholder="Enter Landmark" defaultValue />
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="fname"> City</label>
                        <input type="text" className="form-control" name="fname" placeholder="Enter City" defaultValue required />
                        </div>
                        <div className="form-group  col-md-6">
                        <label htmlFor="email">Country</label>
                        <select className="form-control" required>
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
                    <tbody><tr>
                        <td>Product Name x 2(Qty)</td>
                        <td>INR 88.00</td>
                        </tr>
                        <tr>
                        <td>Subtotal</td>
                        <td>INR 88.00</td>
                        </tr>
                        <tr>
                        <td>Shipping</td>
                        <td>Free shipping</td>
                        </tr>
                    </tbody></table><br />
                    <div>
                    <input type="radio" name="dbt" defaultValue="dbt" defaultChecked /> Direct Bank Transfer
                    </div>
                    <p>
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                    </p>
                    <div>
                    <input type="radio" name="dbt" defaultValue="cd" /> Cash on Delivery
                    </div>
                    <div>
                    <input type="radio" name="dbt" defaultValue="cd" /> Paypal <span>
                        <img src="https://www.logolynx.com/images/logolynx/c3/c36093ca9fb6c250f74d319550acac4d.jpeg" alt="" width={50} />
                    </span>
                    </div>
                    <button type="button">Place Order</button>
                </div>{/* Yorder */}
                </div>
            </div>
            </div>
        </section>
    </>
    );
};
export default Checkout;