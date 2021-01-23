import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import img1 from "../../src/images/c1.png"
import img2 from "../../src/images/c2.png"
import { listProducts } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

function FrontPage(props){

  const productList= useSelector(state => state.productList);

  const {loading, products, error}= productList;


  const dispatch=useDispatch();

  useEffect(() => { 
   //  dispatch(listProducts());     
   dispatch(listProducts({}));
  }, [dispatch]);





return (
  <>
  <style jsx>{`
   .admin-nav{
     display:none;
   }
   .main-sidebar{
     display:none;
   }
   .bfcstore_banner{
 width: 100%;
 margin-top: 88px;
}
 .bfcstore_banner .swiper-slide{
   min-width: 100%;
 }
 .bfcstore_banner .swiper-slide img{
   min-width: 100%;
   height: 400px;
   object-fit: cover;
 }
 .bfcstore_banner .swiper-slide {
   text-align: center;
   font-size: 18px;
   background: #fff;
   width: 100%;

   /* Center slide text vertically */
   display: -webkit-box;
   display: -ms-flexbox;
   display: -webkit-flex;
   display: flex;
   -webkit-box-pack: center;
   -ms-flex-pack: center;
   -webkit-justify-content: center;
   justify-content: center;
   -webkit-box-align: center;
   -ms-flex-align: center;
   -webkit-align-items: center;
   align-items: center;
 }
 .storecategory{
   padding: 20px 0;
 }
 .storecategory .swiper-books-front {
 margin-left: auto;
 margin-right: auto;
 position: relative;
 overflow: hidden;
 list-style: none;
 padding: 0;
 z-index: 1;
}
.swiper-newrelease{
 margin-left: auto;
   margin-right: auto;
   position: relative;
   overflow: hidden;
   list-style: none;
   padding: 10px 0;
   z-index: 1;

}
.storecategory .swiper-slide .single_book img{
 height: 138px;
 /*background-image: linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.0666667) 4%, rgba(255,255,255,0) 10%, rgba(255,255,255,0) 90%, rgba(0,0,0,0.0666667) 96%, rgba(0,0,0,0.2) 100%);*/
}
.home-slider{
 padding: 60px 0;
}
.newrelease .single_book img{
 box-shadow: 0 0 12px #b2aaaa;
}
.swiper-newrelease .single_book{
 height: 350px;
}
.swiper-newrelease .single_book img{
 height: 100%;
}
.ss-heading{
 padding: 0 35px;
}
.ss-heading h2 {
   display: -webkit-box;
   display: -ms-flexbox;
   display: flex;
   -webkit-box-align: center;
   -ms-flex-align: center;
   align-items: center;
   font-weight: 500;
}
.ss-heading h2 .view_more_header {
 font-size: 16px;
 margin-left: auto;
}
.swiper-button-next, .swiper-button-prev {
 background-color: #de5966;
 padding: 20px;
 border-radius: 4%;
 color: #fff;
}
.swiper-books-front a{
 color:#000;
}
 `}</style>
 <section className="bfcstore_banner">
       <div className="container-fluid">
         <div className="row">
           <div className="swiper-container">
             <div className="swiper-wrapper">
               <div className="swiper-slide">
                 <img src="https://images.squarespace-cdn.com/content/v1/5c6fd9967a1fbd34674cb79c/1568891924609-B3LXXG1IHE7FJYEVZJ28/ke17ZwdGBToddI8pDm48kG4VaGK2BDoypcV72v3WXxkUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcQ7p8169p8qxgXVKEB23rQXgFGdd18FgKgV2HQBaPNGG3yBSUmSgz7kzVX4TWod5R/Fiction+banner.jpg?format=1500w" className="img-fluid" />
               </div>
               <div className="swiper-slide">
                 <img src="https://stacygreenauthor.com/wp-content/uploads/2014/11/StacyGreen_SliderBanner-DeltaDetective.jpg" className="img-fluid" />
               </div>
               <div className="swiper-slide">
                 <img src="https://images.squarespace-cdn.com/content/v1/5c6fd9967a1fbd34674cb79c/1568891924609-B3LXXG1IHE7FJYEVZJ28/ke17ZwdGBToddI8pDm48kG4VaGK2BDoypcV72v3WXxkUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcQ7p8169p8qxgXVKEB23rQXgFGdd18FgKgV2HQBaPNGG3yBSUmSgz7kzVX4TWod5R/Fiction+banner.jpg?format=1500w" className="img-fluid" />
               </div>
             </div>
             {/* Add Arrows */}
             <div className="swiper-button-next" />
             <div className="swiper-button-prev" />
           </div>
         </div>
       </div>
     </section>
     <section className="storecategory">
       <div className="container-fluid">
         <div className="row">
           <div className="col-md-12">
             <div className="category">
               <div className="swiper-books-front swiper-container-initialized swiper-container-horizontal">
                 <div className="swiper-wrapper" id="swiper-wrapper-687a9d89480717de">
                   <div className="swiper-slide swiper-slide-active">
                     <a href="Booklist"><div className="featured_colm border-right-0">
                       <div className="single_book text-center">
                         <img src={img1} className="img-fluid mb-3" />
                       </div>
                       <div className="book_name mt-2 text-center">
                         <h6>Fiction</h6>
                       </div>
                     </div></a>
                   </div>
                   <div className="swiper-slide swiper-slide-active">
                     <div className="featured_colm border-right-0">
                       <div className="single_book text-center">
                         <img src={img2} className="img-fluid mb-3" />
                       </div>
                       <div className="book_name mt-2 text-center">
                         <h6>Nonfiction</h6>
                       </div>
                     </div>
                   </div>
                   <div className="swiper-slide swiper-slide-active">
                     <div className="featured_colm border-right-0">
                       <div className="single_book text-center">
                         <img src={img1} className="img-fluid mb-3" />
                       </div>
                       <div className="book_name mt-2 text-center">
                         <h6>Literature</h6>
                       </div>
                     </div>
                   </div>
                   <div className="swiper-slide swiper-slide-active">
                     <div className="featured_colm border-right-0">
                       <div className="single_book text-center">
                         <img src={img2} className="img-fluid mb-3" />
                       </div>
                       <div className="book_name mt-2 text-center">
                         <h6>Academic</h6>
                       </div>
                     </div>
                   </div>
                   <div className="swiper-slide swiper-slide-active">
                     <div className="featured_colm border-right-0">
                       <div className="single_book text-center">
                         <img src={img1} className="img-fluid mb-3" />
                       </div>
                       <div className="book_name mt-2 text-center">
                         <h6>Romance</h6>
                       </div>
                     </div>
                   </div>
                   <div className="swiper-slide swiper-slide-active">
                     <div className="featured_colm border-right-0">
                       <div className="single_book text-center">
                         <img src={img2} className="img-fluid mb-3" />
                       </div>
                       <div className="book_name mt-2 text-center">
                         <h6>Cookery, Food &amp; Wine</h6>
                       </div>
                     </div>
                   </div>
                   <div className="swiper-slide swiper-slide-active">
                     <div className="featured_colm border-right-0">
                       <div className="single_book text-center">
                         <img src={img1} className="img-fluid mb-3" />
                       </div>
                       <div className="book_name mt-2 text-center">
                         <h6>Politics</h6>
                       </div>
                     </div>
                   </div>
                   <div className="swiper-slide swiper-slide-active">
                     <div className="featured_colm border-right-0">
                       <div className="single_book text-center">
                         <img src={img2} className="img-fluid mb-3" />
                       </div>
                       <div className="book_name mt-2 text-center">
                         <h6>Biography</h6>
                       </div>
                     </div>
                   </div>
                   <div className="swiper-slide swiper-slide-active">
                     <div className="featured_colm border-right-0">
                       <div className="single_book text-center">
                         <img src={img1} className="img-fluid mb-3" />
                       </div>
                       <div className="book_name mt-2 text-center">
                         <h6>Motivational</h6>
                       </div>
                     </div>
                   </div>
                   <div className="swiper-slide swiper-slide-active">
                     <div className="featured_colm border-right-0">
                       <div className="single_book text-center">
                         <img src={img2} className="img-fluid mb-3" />
                       </div>
                       <div className="book_name mt-2 text-center">
                         <h6>Poetry</h6>
                       </div>
                     </div>
                   </div>
                   <div className="swiper-slide swiper-slide-active">
                     <div className="featured_colm border-right-0">
                       <div className="single_book text-center">
                         <img src={img1} className="img-fluid mb-3" />
                       </div>
                       <div className="book_name mt-2 text-center">
                         <h6>Short Stories</h6>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="swiper-button-next" />
                 <div className="swiper-button-prev" />
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
     <section className="home-slider">
       <div className="container-fluid">
         <div className="row">
           <div className="col mb-2 ss-heading">
             <h2>Most Popular <span className="view_more_header"><a className="text-muted" href="Booklist">View More <i className="fa fa-arrow-right icon" /></a></span> </h2>
           </div>
         </div>
         <div className="row">
           <div className="col-md-12">
             <div className="newrelease">
               <div className="swiper-newrelease swiper-container-initialized swiper-container-horizontal">
                 <div className="swiper-wrapper" id="swiper-wrapper-687a9d89480717de">


                 {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : ( <>
               {products.map((product) => (


              <div className="swiper-slide swiper-slide-active"  key={product._id}>
                     <div className="featured_colm border-right-0">
                       <div className="single_book">
                       <Link to={'product/'+product._id}>
                          <img src={product.image} className="img-fluid mb-3" alt={product.name} />
                             </Link>
                         
                       </div>
                     </div>
                   </div>
                ) )};
      
       </>
      )}


                   


                   {/* <div className="swiper-slide swiper-slide-active">
                     <div className="featured_colm border-right-0">
                       <div className="single_book">
                         <img src="https://notionpress.com/thumbs/phpThumb.php?src=../coveruploads/5f4910fd1f7f4-1397122042.png&f=jpg&q=85&h=425&w=267&iar=1" className="img-fluid mb-3" />
                       </div>
                     </div>
                   </div> */}
                   {/* <div className="swiper-slide swiper-slide-active">
                     <div className="featured_colm border-right-0">
                       <div className="single_book">
                         <img src="https://notionpress.com/thumbs/phpThumb.php?src=../coveruploads/5fe9b51040fc3-4455897826.png&f=jpg&q=85&h=425&w=267&iar=1" className="img-fluid mb-3" />
                       </div>
                     </div>
                   </div>
                   <div className="swiper-slide swiper-slide-active">
                     <div className="featured_colm border-right-0">
                       <div className="single_book">
                         <img src="https://notionpress.com/thumbs/phpThumb.php?src=../coveruploads/5d0c7ee6ac861-9515240020.png&f=jpg&q=85&h=425&w=267&iar=1" className="img-fluid mb-3" />
                       </div>
                     </div>
                   </div>
                   <div className="swiper-slide swiper-slide-active">
                     <div className="featured_colm border-right-0">
                       <div className="single_book">
                         <img src="https://notionpress.com/thumbs/phpThumb.php?src=../coveruploads/5fe1acd986127-966289476.png&f=jpg&q=85&h=425&w=267&iar=1" className="img-fluid mb-3" />
                       </div>
                     </div>
                   </div>
                   <div className="swiper-slide swiper-slide-active">
                     <div className="featured_colm border-right-0">
                       <div className="single_book">
                         <img src="https://notionpress.com/thumbs/phpThumb.php?src=../coveruploads/5fe9b51040fc3-4455897826.png&f=jpg&q=85&h=425&w=267&iar=1" className="img-fluid mb-3" />
                       </div>
                     </div>
                   </div>
                   <div className="swiper-slide swiper-slide-active">
                     <div className="featured_colm border-right-0">
                       <div className="single_book">
                         <img src="https://notionpress.com/thumbs/phpThumb.php?src=../coveruploads/5fe9b51040fc3-4455897826.png&f=jpg&q=85&h=425&w=267&iar=1" className="img-fluid mb-3" />
                       </div>
                     </div>
                   </div> */}
                 </div>
                 <div className="swiper-button-next" />
                 <div className="swiper-button-prev" />
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>    
      {/* <div class="row">
   <div class="col">
     <img src="https://notionpress.com/new-rewamp/images/store_slider/read_Instantly_banner.webp" class="img-fluid"/>
   </div>
 </div> */}
     <section className="home-slider">
       <div className="container-fluid">
         <div className="row">
           <div className="col mb-2 ss-heading">
             <h2>New Release <span className="view_more_header"><a className="text-muted" href>View More <i className="fa fa-arrow-right icon" /></a></span> </h2>
           </div>
         </div>
         <div className="row">
           <div className="col-md-12">
             <div className="newrelease">
               <div className="swiper-newrelease swiper-container-initialized swiper-container-horizontal">
                 <div className="swiper-wrapper" id="swiper-wrapper-687a9d89480717de">
                   <div className="swiper-slide swiper-slide-active">
                     <div className="featured_colm border-right-0">
                       <div className="single_book">
                         <img src="https://notionpress.com/thumbs/phpThumb.php?src=../coveruploads/5fd34ddec823d-394679424.png&f=jpg&q=85&h=425&w=267&iar=1" className="img-fluid mb-3" />
                       </div>
                     </div>
                   </div>
                   <div className="swiper-slide swiper-slide-active">
                     <div className="featured_colm border-right-0">
                       <div className="single_book">
                         <img src="https://notionpress.com/thumbs/phpThumb.php?src=../coveruploads/5f4910fd1f7f4-1397122042.png&f=jpg&q=85&h=425&w=267&iar=1" className="img-fluid mb-3" />
                       </div>
                     </div>
                   </div>
                   <div className="swiper-slide swiper-slide-active">
                     <div className="featured_colm border-right-0">
                       <div className="single_book">
                         <img src="https://notionpress.com/thumbs/phpThumb.php?src=../coveruploads/5fe9b51040fc3-4455897826.png&f=jpg&q=85&h=425&w=267&iar=1" className="img-fluid mb-3" />
                       </div>
                     </div>
                   </div>
                   <div className="swiper-slide swiper-slide-active">
                     <div className="featured_colm border-right-0">
                       <div className="single_book">
                         <img src="https://notionpress.com/thumbs/phpThumb.php?src=../coveruploads/5d0c7ee6ac861-9515240020.png&f=jpg&q=85&h=425&w=267&iar=1" className="img-fluid mb-3" />
                       </div>
                     </div>
                   </div>
                   <div className="swiper-slide swiper-slide-active">
                     <div className="featured_colm border-right-0">
                       <div className="single_book">
                         <img src="https://notionpress.com/thumbs/phpThumb.php?src=../coveruploads/5fe1acd986127-966289476.png&f=jpg&q=85&h=425&w=267&iar=1" className="img-fluid mb-3" />
                       </div>
                     </div>
                   </div>
                   <div className="swiper-slide swiper-slide-active">
                     <div className="featured_colm border-right-0">
                       <div className="single_book">
                         <img src="https://notionpress.com/thumbs/phpThumb.php?src=../coveruploads/5fe9b51040fc3-4455897826.png&f=jpg&q=85&h=425&w=267&iar=1" className="img-fluid mb-3" />
                       </div>
                     </div>
                   </div>
                   <div className="swiper-slide swiper-slide-active">
                     <div className="featured_colm border-right-0">
                       <div className="single_book">
                         <img src="https://notionpress.com/thumbs/phpThumb.php?src=../coveruploads/5fe9b51040fc3-4455897826.png&f=jpg&q=85&h=425&w=267&iar=1" className="img-fluid mb-3" />
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="swiper-button-next" />
                 <div className="swiper-button-prev" />
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
     <section className="section_cta">
       <div className="container">
         <div className="row">
           <div className="col">
             <h5>SIGN UP TO START PUBLISHING NOW
               <a href="contact" target="_blank">Publish Now</a>
             </h5>
           </div>
         </div>
       </div>
     </section>
     <section className="home-slider">
       <div className="container-fluid">
         <div className="row">
           <div className="col mb-2 ss-heading">
             <h2>Upcoming Lauches <span className="view_more_header"><a className="text-muted" href>View More <i className="fa fa-arrow-right icon" /></a></span> </h2>
           </div>
         </div>
         <div className="row">
           <div className="col-md-12">
             <div className="newrelease">
               <div className="swiper-newrelease swiper-container-initialized swiper-container-horizontal">
                 <div className="swiper-wrapper" id="swiper-wrapper-687a9d89480717de">
                   <div className="swiper-slide swiper-slide-active">
                     <div className="featured_colm border-right-0">
                       <div className="single_book">
                         <img src="https://notionpress.com/thumbs/phpThumb.php?src=../coveruploads/5fd34ddec823d-394679424.png&f=jpg&q=85&h=425&w=267&iar=1" className="img-fluid mb-3" />
                       </div>
                     </div>
                   </div>
                   <div className="swiper-slide swiper-slide-active">
                     <div className="featured_colm border-right-0">
                       <div className="single_book">
                         <img src="https://notionpress.com/thumbs/phpThumb.php?src=../coveruploads/5f4910fd1f7f4-1397122042.png&f=jpg&q=85&h=425&w=267&iar=1" className="img-fluid mb-3" />
                       </div>
                     </div>
                   </div>
                   <div className="swiper-slide swiper-slide-active">
                     <div className="featured_colm border-right-0">
                       <div className="single_book">
                         <img src="https://notionpress.com/thumbs/phpThumb.php?src=../coveruploads/5fe9b51040fc3-4455897826.png&f=jpg&q=85&h=425&w=267&iar=1" className="img-fluid mb-3" />
                       </div>
                     </div>
                   </div>
                   <div className="swiper-slide swiper-slide-active">
                     <div className="featured_colm border-right-0">
                       <div className="single_book">
                         <img src="https://notionpress.com/thumbs/phpThumb.php?src=../coveruploads/5d0c7ee6ac861-9515240020.png&f=jpg&q=85&h=425&w=267&iar=1" className="img-fluid mb-3" />
                       </div>
                     </div>
                   </div>
                   <div className="swiper-slide swiper-slide-active">
                     <div className="featured_colm border-right-0">
                       <div className="single_book">
                         <img src="https://notionpress.com/thumbs/phpThumb.php?src=../coveruploads/5fe1acd986127-966289476.png&f=jpg&q=85&h=425&w=267&iar=1" className="img-fluid mb-3" />
                       </div>
                     </div>
                   </div>
                   <div className="swiper-slide swiper-slide-active">
                     <div className="featured_colm border-right-0">
                       <div className="single_book">
                         <img src="https://notionpress.com/thumbs/phpThumb.php?src=../coveruploads/5fe9b51040fc3-4455897826.png&f=jpg&q=85&h=425&w=267&iar=1" className="img-fluid mb-3" />
                       </div>
                     </div>
                   </div>
                   <div className="swiper-slide swiper-slide-active">
                     <div className="featured_colm border-right-0">
                       <div className="single_book">
                         <img src="https://notionpress.com/thumbs/phpThumb.php?src=../coveruploads/5fe9b51040fc3-4455897826.png&f=jpg&q=85&h=425&w=267&iar=1" className="img-fluid mb-3" />
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="swiper-button-next" />
                 <div className="swiper-button-prev" />
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
 </>
  );
}
export default FrontPage;