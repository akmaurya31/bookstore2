import React from "react";

const Sidebar = () => {
    return (
      <>
      <style jsx>
      {`
      .side_p{
        color:#fff;
      }
      `}
      </style>
        {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
          <img src="http://pubweb.bfcgroup.in/images/logos/bfc-publications-logo.png" alt="AdminLTE Logo" className="brand-image elevation-3"/>
          <span className="brand-text font-weight-light">Bookstore</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
         
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              {/* Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library */}
              <li className="nav-item has-treeview menu-open">
                <a href="Dashboard" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p className="side_p">
                    Dashboard
                  </p>
                </a>
              </li>

              <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                  <img src="../../dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image"/>
                </div>
                <div className="info">
                  <a href="Adminprofile" className="d-block">Admin</a>
                </div>
              </div>

              {/* book list */}
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-book" />
                  <p className="side_p">
                     Book
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="Addbook" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p className="side_p">Add New</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="Listbook" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p className="side_p">List</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <a href="Userlist" className="nav-link">
                  <i className="nav-icon fas fa-user" />
                  <p className="side_p">User List</p>
                </a>
              </li>
              <li className="nav-item has-treeview">
                <a href="Viewreview" className="nav-link">
                  <i className="nav-icon fas fa-star" />
                  <p className="side_p">Review List</p>
                </a>
              </li>
              <li className="nav-item has-treeview">
                <a href="Orderlist" className="nav-link">
                  <i className="nav-icon fas fa-shopping-cart" />
                  <p className="side_p">Order List</p>
                </a>
              </li>
{/*           
              
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-table" />
                  <p className="side_p">
                    Author
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/tables/simple.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/tables/data.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>List</p>
                    </a>
                  </li>
                </ul>
              </li>
               */}
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
      </>
    );
};
export default Sidebar;