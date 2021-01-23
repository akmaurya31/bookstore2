import React from "react";
import img1 from "../../src/images/img1.jpg"
import img2 from "../../src/images/img2.jpeg"
import amazon from "../../src/images/icon/amazon.png"
import flipkart from "../../src/images/icon/flipkart.png"
import kindle from "../../src/images/icon/kindle.png"
import playstore from "../../src/images/icon/playstore.png"
import InputRange from 'react-input-range';

const Singlebook = () => {
  return (
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
                              <img src={img1} id="myimage" className="d-block w-100 about-img-1 magnifiedImg" alt="..." data-remote={img1} data-type="image" data-toggle="lightbox" data-gallery="example-gallery" />
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
                      <h2>The Last Sigh</h2>
                      <p><b>By : Swapnil</b></p>
                      <h5>4.8
                        <span>
                          <i className="fa fa-star icon" />
                          <i className="fa fa-star icon" />
                          <i className="fa fa-star icon" />
                          <i className="fa fa-star icon" />
                          <i className="fa fa-star-half icon" />
                          <span className="ml-3">
                            <i className="fa fa-user icon text-primary" />
                            <small className="text-muted">12 Reviews</small>
                          </span>
                        </span>		
                      </h5>
                      <h3>₹849</h3>
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
                        <p><b>Description : </b>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                      <hr />
                      <div className="cartbtn">
                        <a href="cart"><button className="btn btn-success"><i className="fa fa-plus" /> Add to Cart</button></a>
                      </div>
                      <hr />
                      <div className="check">
                        <h5 className="mb-4 text-danger">Also Avaliable</h5>
                        <span><img src={amazon} /></span>
                        <span><img src={kindle} /></span>
                        <span><img src={playstore} /></span>
                        <span><img src={flipkart} /></span>
                      </div>
                      <hr />
                      <div className="ratings">
                        <div className="row">
                          <div className="col-md-5 text-xs-center">
                            <h5>Rate Here</h5>
                            <fieldset className="rate">
                              <input type="radio" id="rating10" name="rating" defaultValue={10} /><label htmlFor="rating10" title="5 stars" />
                              <input type="radio" id="rating9" name="rating" defaultValue={9} /><label className="half" htmlFor="rating9" title="4 1/2 stars" />
                              <input type="radio" id="rating8" name="rating" defaultValue={8} /><label htmlFor="rating8" title="4 stars" />
                              <input type="radio" id="rating7" name="rating" defaultValue={7} /><label className="half" htmlFor="rating7" title="3 1/2 stars" />
                              <input type="radio" id="rating6" name="rating" defaultValue={6} /><label htmlFor="rating6" title="3 stars" />
                              <input type="radio" id="rating5" name="rating" defaultValue={5} /><label className="half" htmlFor="rating5" title="2 1/2 stars" />
                              <input type="radio" id="rating4" name="rating" defaultValue={4} /><label htmlFor="rating4" title="2 stars" />
                              <input type="radio" id="rating3" name="rating" defaultValue={3} /><label className="half" htmlFor="rating3" title="1 1/2 stars" />
                              <input type="radio" id="rating2" name="rating" defaultValue={2} /><label htmlFor="rating2" title="1 star" />
                              <input type="radio" id="rating1" name="rating" defaultValue={1} /><label className="half" htmlFor="rating1" title="1/2 star" />
                            </fieldset>
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
                        <form>
                          <div className="form-row">
                            <div className="col-6">
                              <label>Name</label>
                              <input type="text" name className="form-control" placeholder="Name" />
                            </div>
                            <div className="col-6">
                              <label>Email</label>
                              <input type="text" name className="form-control" placeholder="Email" />
                            </div>
                            <div className="col-12 mt-2">
                              <textarea className="form-control" placeholder="Comments here" defaultValue={""} />
                            </div>
                            <div className="col-12 mt-2 text-right">
                              <button className="btn btn-sm btn-danger">Post</button>
                            </div>
                          </div>
                        </form>
                        <div className="row mt-3">
                          <div className="col-md-12">
                            <div className="dreview">
                              <div className="row">
                                <div className="col-md-6">
                                  <p><span>5 <i className="fa fa-star" /></span> <b>Excellent</b>
                                  </p></div>
                                <div className="col-md-6 text-right">
                                  <p className="text-danger"> - John Doe</p>
                                </div>
                                <div className="col-md-12">
                                  <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                                </div>
                              </div>
                              <hr />
                              <div className="row">
                                <div className="col-md-6">
                                  <p><span>5 <i className="fa fa-star" /></span> <b>Excellent</b>
                                  </p></div>
                                <div className="col-md-6 text-right">
                                  <p className="text-danger"> - John Doe</p>
                                </div>
                                <div className="col-md-12">
                                  <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                                </div>
                              </div>
                              <hr />
                              <div className="row">
                                <div className="col-md-6">
                                  <p><span>5 <i className="fa fa-star" /></span> <b>Excellent</b>
                                  </p></div>
                                <div className="col-md-6 text-right">
                                  <p className="text-danger"> - John Doe</p>
                                </div>
                                <div className="col-md-12">
                                  <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                                </div>
                              </div>
                              <hr />
                            </div>
                          </div>
                        </div>
                      </div>
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
  );
};
export default Singlebook;