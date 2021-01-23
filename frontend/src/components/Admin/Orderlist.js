import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listOrders } from '../../actions/orderActions';
 import LoadingBox from '../LoadingBox';
 import MessageBox from '../MessageBox';
import img1 from "../../../src/images/img1.jpg"
import '../../../node_modules/aos/dist/aos.css';


var createReactClass = require('create-react-class');

export default function Orderlist(props) { 

  let i=1;

   const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listOrders());
  }, [dispatch]);
  const deleteHandler = (order) => {
    // TODO: delete handler
  };
  
 
  return (  
    <>
    <style jsx>{`
      .front-nav{
        display:none;
      }
      .section-footer{
        display:none;
      }
      .admin-nav{
        display:block!important;
      }
      .booklist img{
          height:80px;
          width:80px;
          border-radius:50%;
      }
      .viewbookimage{
        height:200px;
      }
      .viewbookimage img{
        height:100%;
      }
	  .navTop{
        display:none;
      }
	  
	  
    `}</style>
    <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Order List</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Order List</li>
                </ol>
              </div>
            </div>
          </div>{/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Order List</h3>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">

      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table id="example1" class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            {/* <th>Book</th> */}
            <th>Book Details</th>
            <th>Total MRP</th>
            <th>Address</th>
            <th>Date/Time</th>
            <th>Action</th>
          </tr>
          
        </thead>
        <tbody className="booklist">
        {orders.map((order) => (
        
       
          <tr  key={order._id}>
            {/* <td>{console.log("the data is ",order)}</td> */}
            <td>{order._id}</td>
            <td>{order.user.name} 
            {/* <img alt="Avatar" class="table-avatar" src="../../dist/img/avatar2.png"/> */}
            </td>
            {/* <td><img src={order.orderItems[0].image}/></td> */}
            <td>
                  <b>Title - </b> {order.orderItems.map((o, i)=>(<>{++i}.{o.name}<br/></>))}

                 
           </td>
            {/* <td>{order.shippingAddress.city} Uttar Pradesh, 226022</td> */}
            <td>{order.totalPrice}</td>
            <td>{order.shippingAddress.city}</td>
            <td>{order.createdAt.substring(0, 10)}</td>
            <td class="text-center py-0 align-middle">
              <span class="badge badge-warning text-white">Ordered</span>
            </td>
          </tr>
          ))}
        </tbody>
      </table>

                   )}
                  </div>
                  {/* /.card-body */}
                </div>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    </>
  );
 
};


