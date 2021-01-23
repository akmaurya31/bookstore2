import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';
import signup from "../../src/images/signup.svg";
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

function SigninScreen(props){

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const userSignin= useSelector(state =>state.userSignin);
    const {loading, userInfo, error }=userSignin;

  const redirect=props.location.search?props.location.search.split("=")[1]:'/booklist';
//const redirect=props.location.search?props.location.search.split("=")[1]:'/admin';
    const dispatch=useDispatch();

    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(signin(email, password));
    }
    

useEffect(() => {
  if(userInfo){
    props.history.push(redirect)
  }
        return()=>{
                //
    };
}, [props.history, redirect, userInfo]);

return (
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
   
        
    <section className="section_l_header login_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <a href="index"><img src="http://pubweb.bfcgroup.in/images/logos/bfc-publications-logo.png" className="img-fluid" /></a> 
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 left_side">
              <div className="left_side_content">
                <img src={signup} alt="signup" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6 right_side">
              <div className="register_block">
                <h2 className="mb-3">Login using your credential</h2>
                <div className="form_block w-100">
                
                  <form id="login-form" onSubmit={submitHandler}>
                    <div className="form-row">
                      <div className="form-group col-md-12">
                      {loading && <LoadingBox></LoadingBox>}
               {error && <MessageBox variant="danger">{error}</MessageBox>}   
                      
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" name="email" id="email" onChange={(e) =>setEmail(e.target.value)}placeholder="username@domainname.com" />
                        <label id="emaillog" />
                      </div>
                      <div className="form-group col-md-12">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" id="password" onChange={(e) =>setPassword(e.target.value)} placeholder="********" />
                        <label id="passwordlog" />
                      </div>
                    </div>
                    <div className="form-row my-2">
                      <div className="form-group">
                        <a href className="psd"><span className="float-right text-danger">Forget Password</span></a>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-register" id="login_button">
                      Sign In</button>
                    <hr /> 
                    <p className="dont_h_a mb-0 =">Don't have an account?  New customer?{' '}
            <Link to={`/register?redirect=${redirect}`}>
              Create your account
            </Link></p>

                   
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
    </>
  );
}
export default SigninScreen;