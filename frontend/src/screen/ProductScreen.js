import React, { useState, useEffect} from 'react';
import data from '../data';
import img1 from "../../src/images/img1.jpg"
import img2 from "../../src/images/img2.jpeg"

import InputRange from 'react-input-range';
import { useSelector, useDispatch } from 'react-redux';
import { createReview, detailsProduct } from '../actions/productActions'
import Rating from '../components/Rating';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Link } from 'react-router-dom';
import { PRODUCT_REVIEW_CREATE_RESET } from '../constants/productConstants';

export default function ProductScreen(props){ 
	console.log(props.match.params.id);

  //const product= data.products.find(x=> x._id === props.match.params.id);
  
  // if(!product){
  //   return <div>Product Not Foun</div>
  // }     
	
  const [qty, setQty]=useState(1);
  
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;


  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingReviewCreate,
    error: errorReviewCreate,
    success: successReviewCreate,
  } = productReviewCreate;

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

const productDetails= useSelector(state=>state.productDetails);
const productId = props.match.params.id;
console.log("the data is "+productDetails)
const {loading, error, product } =productDetails;
const dispatch = useDispatch();



	useEffect(() =>{
    if (successReviewCreate) {
      window.alert('Review Submitted Successfully');
      setRating('');
      setComment('');
      dispatch({ type: PRODUCT_REVIEW_CREATE_RESET });
    }
		dispatch(detailsProduct(productId));
		return () =>{
			//
		};
		
	}, [dispatch, productId, successReviewCreate]);
	
	const addToCartHandler=() =>{
		props.history.push("/cart/"+productId+"?qty="+qty)
  }
  
  const submitHandler = (e) => {
    e.preventDefault();
    if (comment && rating) {
      dispatch(
        createReview(productId, { rating, comment, name: userInfo.name })
      );
    } else {
      alert('Please enter comment and rating');
    }
  };





	return ( 
   
<div>
<style jsx>{`
         
         .admin-nav{
           display:none;
         }.main-sidebar{
           display:none;
         }
        .in-stock{
          font-size: 12px;
    padding: 4px 6px;
    color: #fff;
    border-radius: 6px;
    font-family: cursive;
        }
        .out-stock{
          font-size: 12px;
          padding: 4px 6px;
          color: #fff;
          border-radius: 6px;
          font-family: cursive;
        }
        .swiper-books {
          margin-left: auto;
          margin-right: auto;
          position: relative;
          overflow: hidden;
          list-style: none;
          padding: 0;
          z-index: 1;
      }
       `}</style>
{loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <>
       
			

			<section className="main_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="book_section">
                <div className="row">
                  <div className="col-md-5">
                    <div className="detail_left">
                      <div className="carousel-container position-relative row">
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                          <div className="carousel-inner">
                            <div className="carousel-item img-magnifier-container active" data-slide-number={0}>
                              <img src={ product.image } alt={product.name} id="myimage" className="d-block w-100 about-img-1 magnifiedImg" alt="..." data-remote={img1} data-type="image" data-toggle="lightbox" data-gallery="example-gallery" />
                            </div>
                            <div className="carousel-item" data-slide-number={1}>
                              <img src={img1} className="d-block w-100 about-img-1 magnifiedImg" alt="..." data-remote={img1} data-type="image" data-toggle="lightbox" data-gallery="example-gallery" />
                            </div>
                            <div className="carousel-item" data-slide-number={2}>
                              <img src={img1} className="d-block w-100 about-img-1 magnifiedImg" alt="..." data-remote={img1} data-type="image" data-toggle="lightbox" data-gallery="example-gallery" />
                            </div>
                            <div className="carousel-item" data-slide-number={3}>
                              <img src={img1} className="d-block w-100 about-img-1 magnifiedImg" alt="..." data-remote={img1} data-type="image" data-toggle="lightbox" data-gallery="example-gallery" />
                            </div>
                            <div className="carousel-item" data-slide-number={4}>
                              <img src={img1} className="d-block w-100 about-img-1 magnifiedImg" alt="..." data-remote={img1} data-type="image" data-toggle="lightbox" data-gallery="example-gallery" />
                            </div>
                            <div className="carousel-item" data-slide-number={5}>
                              <img src={img1} className="d-block w-100 about-img-1 magnifiedImg" alt="..." data-remote={img1} data-type="image" data-toggle="lightbox" data-gallery="example-gallery" />
                            </div>
                          </div>
                        </div>
                        <div id="carousel-thumbs" className="carousel slide" data-ride="carousel">
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              <div className="row mx-0">
                                <div id="carousel-selector-0" className="thumb col-4 col-sm-2 px-1 py-2 selected" data-target="#myCarousel" data-slide-to={0}>
                                  <img src={img1} className="img-fluid" alt="..." />
                                </div>
                                <div id="carousel-selector-1" className="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to={1}>
                                  <img src={img1} className="img-fluid" alt="..." />
                                </div>
                                <div id="carousel-selector-2" className="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to={2}>
                                  <img src={img1} className="img-fluid" alt="..." />
                                </div>
                                <div id="carousel-selector-3" className="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to={3}>
                                  <img src={img1} className="img-fluid" alt="..." />
                                </div>
                                <div id="carousel-selector-4" className="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to={4}>
                                  <img src={img1}className="img-fluid" alt="..." />
                                </div>
                                <div id="carousel-selector-5" className="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to={5}>
                                  <img src={img1} className="img-fluid" alt="..." />
                                </div>
                              </div>
                            </div>
                          </div>
                          <a className="carousel-control-prev" href="#carousel-thumbs" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                          </a>
                          <a className="carousel-control-next" href="#carousel-thumbs" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 list-wrapper" id="myList">
                    <div className="detail_right">
                      {console.log(product) }
                      
                      <h2>{product.name}</h2>
                      <p><b>By : {product.author_name}</b></p>
                      <h5>{product.rating}
                        <span>
                        <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
                          <span className="ml-3">
                            <i className="fa fa-user icon text-primary" />
                            <small className="text-muted">12 Reviews</small>
                          </span>
                        </span>		
                      </h5>
                      
                      <h3>₹{product.mrp}</h3>
                      <h3>
                    {product.countInStock > 0 ? (
                      <span className="bg-success in-stock">In Stock</span>
                    ) : (
                      <span className="bg-danger out-stock">Book is Unavailable</span>
                    )}
                  </h3>
                      <hr />
                      <div className="avaliable">
                        <h6><b className="text-danger">Avaliability: </b> Paperback</h6>
                      </div>
                      <hr />
                      <div className="highlight">
                        <span className="text-muted">Highlight :</span>
                        <ul>
                          <li>Category : Fiction</li>
                          <li>Cover : Paperback</li>
                          <li>Language : Hindi</li>
                        </ul>
                      </div>
                      <div className="highlight">
                        <p><b>Description : </b>{product.description}</p>
                      </div>
                      <hr />
                      {product.countInStock > 0 && (
                    <>
                      
                      
                      <div className="cartbtn">
                        <button onClick= {addToCartHandler} className="btn btn-success" value={qty}><i className="fa fa-plus" /> Add to Cart</button>
                      </div>
                      </>
                  )}
                      <hr />
                      
                      <hr />

                      {userInfo ? (
                      <form onSubmit={submitHandler}> 
                      <div className="ratings">
                        <div className="row">
                          
                          <div className="col-md-5 text-xs-center">

                            <h5>Rate Here</h5>


  <fieldset className="rate">
    <input type="radio" id="rating10" name="rating"  onChange={(e) => setRating(5)} /><label htmlFor="rating10" title="5 stars" />
    <input type="radio" id="rating9" name="rating"onChange={(e) => setRating(4.5)} /><label className="half" htmlFor="rating9" title="4 1/2 stars" />
    <input type="radio" id="rating8" name="rating" onChange={(e) => setRating(4)}  /><label htmlFor="rating8" title="4 stars" />
    <input type="radio" id="rating7" name="rating" onChange={(e) => setRating(3.5)}/><label className="half" htmlFor="rating7" title="3 1/2 stars" />
    <input type="radio" id="rating6" name="rating" onChange={(e) => setRating(3)}/><label htmlFor="rating6" title="3 stars" />
    <input type="radio" id="rating5" name="rating" onChange={(e) => setRating(2.5)} /><label className="half" htmlFor="rating5" title="2 1/2 stars" />
    <input type="radio" id="rating4" name="rating" onChange={(e) => setRating(2.0)} /><label htmlFor="rating4" title="2 stars" />
    <input type="radio" id="rating3" name="rating" onChange={(e) => setRating(1.5)} /><label className="half" htmlFor="rating3" title="1 1/2 stars" />
    <input type="radio" id="rating2" name="rating" onChange={(e) => setRating(1.0)} /><label htmlFor="rating2" title="1 star" />
    <input type="radio" id="rating1" name="rating" onChange={(e) => setRating(.5)} /><label className="half" htmlFor="rating1" title="1/2 star" />
  </fieldset>



                            {/* <select
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                      >
                        <option value="">Select...</option>
                        <option value="1">1- Poor</option>
                        <option value="2">2- Fair</option>
                        <option value="3">3- Good</option>
                        <option value="4">4- Very good</option>
                        <option value="5">5- Excelent</option>
                      </select> */}


                          </div>


                          <div className="col-md-5">
                            <ul id="skill">
                              <li><span className="bar fivestar" /><span className="sstr">5 <i className="fa fa-star" /></span></li>
                              <li><span className="bar fourstar" /><span className="sstr">4 <i className="fa fa-star" /></span></li>
                              <li><span className="bar threestar" /><span className="sstr">3 <i className="fa fa-star" /></span></li>
                              <li><span className="bar twostar" /><span className="sstr">2 <i className="fa fa-star" /></span></li>
                              <li><span className="bar onestar" /><span className="sstr">1 <i className="fa fa-star" /></span></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="comments">
                        <div className="row">
                          <div className="col-md-12">
                            <h5>Review Here</h5>
                          </div>
                        </div>
                        
                          <div className="form-row">
                            <div className="col-12 mt-2">
                              <textarea className="form-control" placeholder="Comments here" id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}  />
                            </div>
                            <div className="col-12 mt-2 text-right">
                              <button className="btn btn-sm btn-danger">Post</button>
                            </div>
                          </div>

                          <div>
                      {loadingReviewCreate && <LoadingBox></LoadingBox>}
                      {errorReviewCreate && (
                        <MessageBox variant="danger">
                          {errorReviewCreate}
                        </MessageBox>
                      )}
                    </div>



                        <div className="row mt-3">
                          <div className="col-md-12">
                            <div className="dreview">
                              <div className="row">

                              {product.reviews.length === 0 && (
              <MessageBox>There is no review</MessageBox>
            )}

{product.reviews.map((review) => (
                <div key={review._id}>
                                <div className="col-md-6">
                                  {/* <p><span>5 <i className="fa fa-star" /></span> <b>Excellent</b>
                                  </p> */}
                                  <Rating rating={review.rating} caption=" "></Rating>
                                  </div>
                                <div className="col-md-6 text-right">
                                  <p className="text-danger"> - {review.name}</p>
                                </div>
                                <div className="col-md-12">
                                  <p className="text-justify">{review.comment}.</p>
                                  <p>{review.createdAt.substring(0, 10)}</p>
                                </div>
                                </div>
 ))}

                              </div>
                              <hr />
                            </div>
                          </div>
                        </div>
                      </div>
                      </form>
 ) : (
  <MessageBox>
    Please <Link to="/signin">Sign In</Link> to write a review
  </MessageBox>
)}

                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-6 mb-2">
                    <h4>Similar Books</h4>
                  </div>
                  <div className="col-md-6 mb-2 text-right">
                    <a href className="text-danger">View More -&gt;</a>
                  </div>
                  <div className="col-md-12">
                    <div className="related-products">
                      <div className="swiper-books swiper-container-initialized swiper-container-horizontal">
                        <div className="swiper-wrapper" id="swiper-wrapper-687a9d89480717de">
                          <div className="swiper-slide swiper-slide-active">
                            <div className="featured_colm border-right-0">
                              <div className="single_book">
                                <img src={img2} className="img-fluid" alt="" />
                              </div>
                              <div className="book_detail mt-2">
                                <h6>Life After Covid-19</h6>
                                <p><strong>By : </strong> Shivani Saini</p>
                                <p>4.8 <span>
                                    <i className="fa fa-star icon" />
                                    <i className="fa fa-star icon" />
                                    <i className="fa fa-star icon" />
                                    <i className="fa fa-star icon" />
                                    <i className="fa fa-star-half icon" />
                                  </span>
                                </p>
                                <strong>₹ 500</strong>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide swiper-slide-next">
                            <div className="featured_colm border-right-0">
                              <div className="single_book">
                                <img src={img1} className="img-fluid" alt="" />
                              </div>
                              <div className="book_detail mt-2">
                                <h6>Life After Covid-19</h6>
                                <p><strong>By : </strong> Shivani Saini</p>
                                <p>4.8 <span>
                                    <i className="fa fa-star icon" />
                                    <i className="fa fa-star icon" />
                                    <i className="fa fa-star icon" />
                                    <i className="fa fa-star icon" />
                                    <i className="fa fa-star-half icon" />
                                  </span>
                                </p>
                                <strong>₹ 500</strong>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="featured_colm border-right-0">
                              <div className="single_book">
                                <img src={img2} className="img-fluid" alt="" />
                              </div>
                              <div className="book_detail mt-2">
                                <h6>Life After Covid-19</h6>
                                <p><strong>By : </strong> Shivani Saini</p>
                                <p>4.8 <span>
                                    <i className="fa fa-star icon" />
                                    <i className="fa fa-star icon" />
                                    <i className="fa fa-star icon" />
                                    <i className="fa fa-star icon" />
                                    <i className="fa fa-star-half icon" />
                                  </span>
                                </p>
                                <strong>₹ 500</strong>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="featured_colm border-right-0">
                              <div className="single_book">
                                <img src={img1} className="img-fluid" alt="" />
                              </div>
                              <div className="book_detail mt-2">
                                <h6>Life After Covid-19</h6>
                                <p><strong>By : </strong> Shivani Saini</p>
                                <p>4.8 <span>
                                    <i className="fa fa-star icon" />
                                    <i className="fa fa-star icon" />
                                    <i className="fa fa-star icon" />
                                    <i className="fa fa-star icon" />
                                    <i className="fa fa-star-half icon" />
                                  </span>
                                </p>
                                <strong>₹ 500</strong>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="featured_colm border-right-0">
                              <div className="single_book">
                                <img src={img2} className="img-fluid" alt="" />
                              </div>
                              <div className="book_detail mt-2">
                                <h6>Life After Covid-19</h6>
                                <p><strong>By : </strong> Shivani Saini</p>
                                <p>4.8 <span>
                                    <i className="fa fa-star icon" />
                                    <i className="fa fa-star icon" />
                                    <i className="fa fa-star icon" />
                                    <i className="fa fa-star icon" />
                                    <i className="fa fa-star-half icon" />
                                  </span>
                                </p>
                                <strong>₹ 500</strong>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="featured_colm border-right-0">
                              <div className="single_book">
                                <img src={img1} className="img-fluid" alt="" />
                              </div>
                              <div className="book_detail mt-2">
                                <h6>Life After Covid-19</h6>
                                <p><strong>By : </strong> Shivani Saini</p>
                                <p>4.8 <span>
                                    <i className="fa fa-star icon" />
                                    <i className="fa fa-star icon" />
                                    <i className="fa fa-star icon" />
                                    <i className="fa fa-star icon" />
                                    <i className="fa fa-star-half icon" />
                                  </span>
                                </p>
                                <strong>₹ 500</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Add Pagination */}
                        {/* <div class="swiper-pagination"></div> */}
                        {/* Add Arrows */}
                        <div className="swiper-button-next" tabIndex={0} role="button" aria-label="Next slide" aria-controls="swiper-wrapper-a6321c48bcf54a109" aria-disabled="false" />
                        <div className="swiper-button-prev swiper-button-disabled" tabIndex={-1} role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-a6321c48bcf54a109" aria-disabled="true" />
                        <span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

</>


        </div>
	 )
    
      }
		</div>
	
	
  )
    }