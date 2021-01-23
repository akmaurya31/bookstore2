import React from "react";
import AOS from 'aos';
import img1 from "../../../src/images/img1.jpg"
import '../../../node_modules/aos/dist/aos.css';
import { Component } from "react";

var createReactClass = require('create-react-class');

class Viewreview extends Component { 
  
  render(){
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
    `}</style>
    <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Review List</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Review List</li>
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
                    <h3 className="card-title">Review List</h3>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>S.No.</th>
                          <th>User</th>
                          <th>John Doe</th>
                          <th>Review Book</th>
                          <th>Rating</th>
                          <th>Date/Time</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody className="booklist">
                        <tr>
                          <td>1</td>
                          <td><img alt="Avatar" class="table-avatar" src="../../dist/img/avatar.png"/></td>
                          <td>John Doe</td>
                          <td>Undying Love</td>
                          <td>4 Star</td>
                          <td>12/12/2020 12:30</td>
                          <td class="text-right py-0 align-middle">
                            <div class="btn-group btn-group-sm">
                                <a href="#" class="btn btn-info"  data-toggle="modal" data-target="#view"><i class="fas fa-eye"></i></a>
                                <a href="#" class="btn btn-danger"><i class="fas fa-trash"></i></a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td><img alt="Avatar" class="table-avatar" src="../../dist/img/avatar2.png"/></td>
                          <td>John Doe</td>
                          <td>Undying Love</td>
                          <td>5 Star</td>
                          <td>12/12/2020 02:25</td>
                          <td class="text-right py-0 align-middle">
                            <div class="btn-group btn-group-sm">
                                <a href="#" class="btn btn-info"  data-toggle="modal" data-target="#view"><i class="fas fa-eye"></i></a>
                                <a href="#" class="btn btn-danger"><i class="fas fa-trash"></i></a>
                            </div>
                          </td>
                        </tr>

                      </tbody>
                    </table>
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

      <div className="modal fade" id="view" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">View Review of John Doe</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
               <div className="row">
                   <div className="col-md-12">
                       <b>Book Name : <span className="text-danger">Undying Love</span></b>
                       <br/>
                       <b>Star : <span className="text-danger">5 <i className="fa fa-star"></i></span></b>
                   </div>
                   <div className="col-md-12">
                       <p><b>Review :</b></p>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                   </div>
               </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
 }
};

export default Viewreview;
