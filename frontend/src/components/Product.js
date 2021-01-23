import React from 'react'
import { Link } from "react-router-dom";
import Rating from './Rating';

export default function Product(props){
    const {product} =props;
    return (
      <>
      <style jsx>
        {`
        //  .listing-badges{
        //   position: absolute;
        //   top: 0;
        //   z-index: 999;
        //   right: 0;
        //   width: 100%;
        //   display: block;
        //   font-size: 15px;
        //   padding: 0;
        //   overflow: hidden;
        //   height: 100px;
        // }
          // .listing-badges .stock{
          //   background-color: #ff214f;
          //   float: left;
          //   -webkit-transform: rotate(-45deg);
          //   transform: rotate(-45deg);
          //   left: -39px;
          //   top: -363px;
          //   position: relative;
          //   text-align: center;
          //   width: 107px;
          //   font-size: 12px;
          //   margin: 0;
          //   padding: 7px 10px;
          //   font-weight: 600;
          //   color: #564f4f;
          //   -webkit-box-shadow: 1px 2px 3px 0 rgba(2, 0, 0, 0.2);
          //   box-shadow: 1px 2px 3px 0 rgba(2, 0, 0, 0.2);
          //   background-color: rgb(255 234 35 / 95%);
          //   z-index: 0;
          // }
         .listing-badges {
            position: absolute;
            top: 0;
            z-index: 999;
            right: 0;
            width: 100%;
            display: block;
            font-size: 15px;
            padding: 0;
            overflow: hidden;
            height: 100px;
        }
        .stock {
          background-color: #ffc60b;
          float: left;
          -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
          left: -67px;
          top: 21px;
          position: relative;
          text-align: center;
          width: 208px;
          font-size: 12px;
          margin: 0;
          padding: 7px 10px;
          font-weight: 600;
          color: #000;
          -webkit-box-shadow: 1px 2px 3px 0 rgba(2, 0, 0, 0.2);
          box-shadow: 1px 2px 3px 0 rgba(2, 0, 0, 0.2);
          // background-color: rgba(0, 0, 0, 0.5);
      }
      .outstock{
        background-color:  #ffc60b;
        float: left;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        left: -67px;
        top: 21px;
        position: relative;
        text-align: center;
        width: 208px;
        font-size: 12px;
        margin: 0;
        padding: 7px 10px;
        font-weight: 600;
        color: #000;
        -webkit-box-shadow: 1px 2px 3px 0 rgba(2, 0, 0, 0.2);
        box-shadow: 1px 2px 3px 0 rgba(2, 0, 0, 0.2);
      }
        `}
      </style>
        <div key={product._id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 list-content">
                      <div className="book-card shadow">
                        <div className="book_image FFF">
                        <Link to={'product/'+product._id}>
                          <img   src={product.image} className="img-fluid" alt={product.name} />
                             </Link>
                        </div>
                        
                          <div className="book_detail">
                          <Link to={'product/'+product._id}>
                            <h6>{product.name}</h6>
                            </Link>
                            <p>{product.category} </p>
                            <p><strong>By : </strong> {product.author_name}</p>
                            {product.countInStock > 5 ? (
                             <div></div>

                          // <div className="listing-badges">
                          // <span className="featured">In Stock</span>
                          // </div>
                            //   <div className="listing-badges">
                            //   <span className="stock">In Stock</span>
                            // </div>
                      // <span className="success">In Stock</span>
                    ) : (
                        <div className="listing-badges">
                          <span className="stock">Low Stock ({product.countInStock})</span>
                        </div>
                      // <span className="danger">Low Stock ( {product.countInStock})</span>
                    )}
                            <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
                            <strong>₹ {product.mrp}</strong>
                            <br/>
                            <small><b>Price :</b> <del>₹ {product.selling_price}</del> <span className="off">(0% OFF)</span></small>
                          </div>
                       
                      </div>
                    </div>
                    </>
    )
}