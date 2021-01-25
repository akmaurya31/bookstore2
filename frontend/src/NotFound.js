import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {

  return(
    <>
  <style jsx>{`
        .navbar{
          display:none;
        }
        .admin-nav{
          display:none;
        }.main-sidebar{
          display:none;
        }
        #footer{
          display:none;
        }
       
      `}</style>
    <div>
      <h1>404 - Not Found!</h1>
      <Link to="/">
        Go Home
      </Link>
    </div>
    </>
  )


};

export default NotFound;