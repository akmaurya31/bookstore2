import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import {useSelector, useDispatch } from 'react-redux';
import { signin } from '../../actions/userActions';
import { listProducts, saveProduct } from '../../actions/productActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
//var createReactClass = require('create-react-class');


function AddBook(Props){

  const [name, setName]=useState('');
  const [author_name, setAuthorName]=useState(''); 
  const [cat, setCat]=useState(''); 
  const [isbn, setISBN]=useState(''); 
  const [sku, setSKU]=useState('');
  const [book_format, setBookFormat]=useState('');
  const [fc, setfc]=useState('');
  const [book_language, setBookLanguage]=useState('');
  const [unit, setUnit]=useState('');
  const [mrp, setmrp]=useState('');
  const [discount, setdiscountk]=useState('');
  const [selling_price, setSp]=useState(0);

  const [book_size, setBooksize]=useState('');
  const [page_number, setPageNumber]=useState('');
  const [item_weight, setItemweight]=useState('');
  const [dimension, setDimension]=useState('');
  const [brand, setBrand]=useState('BFC Publications');
  const [image, setImage]=useState('');
  const [description, setDesc]=useState('');
  const [description2, setDesc2]=useState('');

  const productList= useSelector(state => state.productList);
    const {loading, products, error}= productList;
    const productSave= useSelector(state =>state.productSave);
    const {loading:loadingSave, success:successSave, error:errorSave}=productSave;


    const [loadingUpload, setLoadingUpload] = useState(false);
    const [errorUpload, setErrorUpload] = useState('');
  
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const uploadFileHandler = async (e) => {
      const file = e.target.files[0];
      const bodyFormData = new FormData();
      bodyFormData.append('image', file);
      setLoadingUpload(true);
      try {
        const { data } = await Axios.post('/api/uploads', bodyFormData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${userInfo.token}`,
          },
        });
        setImage(data);
        setLoadingUpload(false);
      } catch (error) {
        setErrorUpload(error.message);
        setLoadingUpload(false);
      }
    };


    const fsetDesc2 =(ee) =>{

      alert(ee);

    }


    const fdiscount =(ee) =>{

      
    //  let mrp=100;
 //let dis=10;

 setdiscountk(ee);

// let sp=mrp*1+ee*1;

  let sp=mrp-(mrp*ee)/100


 


 setSp(sp);

   //   console.log(discount)
    }


    const notify = () => { 
     // alert("My name is Agam the Boss")
      toast("Product Add Successfully");
    }

  const dispatch=useDispatch();

  useEffect(() => {
   // dispatch(listProducts());
   dispatch(listProducts({ name: name !== 'all' ? name : '' }));
    return()=>{
            //
};
}, []);

  const submitHandler=(e)=>{
    e.preventDefault();
    // console.log("hi agam "+name)
    // console.log("hi agam "+author_name)
    // console.log("hi agam "+isbn)
    // console.log("hi agam "+sku)
    // console.log("hi agam "+book_format)
    // console.log("hi agam "+book_language)
    // console.log("hi agam "+unit)
    // console.log("hi agam "+mrp)
    // console.log("hi agam "+selling_price)
    // console.log("hi agam "+book_size)
    // console.log("hi agam "+page_number)
    // console.log("hi agam "+item_weight)
    // console.log("hi agam "+dimension)
    // console.log("hi agam "+brand)
    // console.log("hi agam "+image)
    // console.log("hi agam "+description)

    dispatch(saveProduct({name, author_name, isbn, sku, fc, book_format, book_language, cat, mrp, selling_price, book_size, page_number,  item_weight, dimension, brand, image, description, unit}));
   // notify();
  
   Props.history.push(`/Listbook`)
   alert("Book Added Successfully!!")
  }
 
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
      .navTop{
        display:none;
      }
    `}</style>

    <ToastContainer/>
    <div className="content-wrapper">
     <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Book</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Book</li>
                </ol>
              </div>
            </div>
          </div>{/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              {/* left column */}
              <div className="col-md-12">
                {/* general form elements */}
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Add Book</h3>
                  </div>
                  {/* /.card-header */}
                  {/* form start */}
                  <fieldset>
                  {/* <legend>Personalia:</legend> */}
                    <form role="form" onSubmit={submitHandler}>
                    <div className="card-body">
                    <div className="row">
                      <div className="col-4">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Book Title</label>
                          <input type="text" className="form-control" name="name" id="exampleInputEmail1" placeholder="Enter Book Title" onChange={(e) => setName(e.target.value)} />
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Author Name</label>
                             {/* <button onClick={notify}>Notify 1!</button> */}
                          
                          <input type="text" className="form-control" onChange={(e) => setAuthorName(e.target.value)} name="author_name" id="exampleInputEmail1" placeholder="Enter Author Name" />
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">ISBN No.</label>
                          <input type="text" className="form-control" onChange={(e) => setISBN(e.target.value)} name="isbn" id="exampleInputPassword1" placeholder="Enter ISBN Number" />
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">SKU ID</label>
                          <input type="text" className="form-control" name="sku" onChange={(e) => setSKU(e.target.value)} id="exampleInputPassword1" placeholder="Enter SKU ID" />
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-group">
                          <label>Book Format</label>
                          <select class="form-control" name="book_format"  onChange={(e) => setBookFormat(e.target.value)}>
                            <option>Select Option</option>
                            {/* <option>Ebook</option> */}
                            <option>Paperback</option>
                            <option>Hardbound</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="col-4">
                        <div className="form-group">
                          <label>Featured Category</label>
                  <select class="form-control" name="fc"  onChange={(e) => setfc(e.target.value)}>
                            <option>Select Option</option>
                            {/* <option>Ebook</option> */}
                            <option>Most Popular</option>
                            <option>New Release</option>
                            <option>Upcoming Launches</option>
                            
                          </select>
                        </div>
                      </div>

                      <div className="col-4">
                        <div className="form-group">
                          <label>Category</label>
                  <select class="form-control" name="cat"  onChange={(e) => setCat(e.target.value)}>
                            <option>Select Option</option>
                            {/* <option>Ebook</option> */}
                            <option>fiction</option>
                            <option>non fiction</option>
                            <option>literature</option>
                            <option>academic</option>
                            <option>romance</option>
                            <option>politics</option>
                            <option>motivational</option>
                          </select>
                        </div>
                      </div>




                      <div className="col-4">
                        <div className="form-group">
                          <label>Book Language</label>
                          <select class="form-control" name="book_language" onChange={(e) => setBookLanguage(e.target.value)}>
                          <option value="" selected="">Select Option</option>
                          <option value="Hindi">Hindi</option>
                          <option value="English">English</option>
                          <option value="Bengali">Bengali</option>
                          <option value="Marathi">Marathi</option>
                          <option value="Telugu">Telugu</option>
                          <option value="Tamil">Tamil</option>
                          <option value="Gujarati">Gujarati</option>
                          <option value="Urdu">Urdu</option>
                          <option value="Kannada">Kannada</option>
                          <option value="Odia">Odia</option>
                          <option value="Malayalam">Malayalam</option>
                          <option value="Punjabi">Punjabi</option>
                          <option value="Assamese">Assamese</option>
                          <option value="Maithili">Maithili</option>
                          <option value="Sanskrit">Sanskrit</option>
                          <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Count In Stock</label>
                          <input type="text" className="form-control" onChange={(e) => setUnit(e.target.value)} id="exampleInputPassword1" name="unit" placeholder="Enter Unit" />
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">MRP</label>
                          <input type="text" className="form-control" onChange={(e) => setmrp(e.target.value)} id="exampleInputPassword1" name="mrp" placeholder="MRP" />
                        </div>
                      </div>


                      <div className="col-4">
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">% Discount</label>
                          <input type="text" className="form-control" onChange={(e) => fdiscount(e.target.value)} id="discount" name="discount" placeholder="discount" />
                        </div>
                      </div>




                      <div className="col-4">
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Selling Price</label>
                          <input type="text" className="form-control" id="exampleInputPassword1" name="selling_price" onChange={(e) => setSp(e.target.value)}   value={selling_price}   placeholder="Selling Price" />
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="form-group">
                            <label>Book Size</label>
                            <select class="form-control" name="book_size" onChange={(e) => setBooksize(e.target.value)}>
                            <option value="" selected="">Select Option</option>
                            <option value="Hindi">5" x 8"</option>
                            <option value="English">6" x 9"</option>
                            <option value="Bengali">8" x 11"</option>
                            </select>
                          </div>
                      </div>
                      <div className="col-3">
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Page Number</label>
                          <input type="text" className="form-control" id="exampleInputPassword1" 
                          onChange={(e) => setPageNumber(e.target.value)} placeholder="Page Number" name="page_number" />
                          </div>
                      </div>
                      <div className="col-3">
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Item Weight</label>
                        <div class="input-group mb-3">
                          <input type="text" class="form-control" placeholder="Item weight" name="item_weight" onChange={(e) => setItemweight(e.target.value)}/>
                          <div class="input-group-append">
                            <span class="input-group-text">gm.</span>
                          </div>
                        </div>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Dimensions</label>
                          <input type="text" className="form-control" id="exampleInputPassword1" name="dimension" 
                          onChange={(e) => setDimension(e.target.value)} placeholder="Enter Dimensions" />
                          </div>
                      </div>
                      <div className="col-4">
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Brand Name</label>
                          <input type="text" className="form-control" id="exampleInputPassword1" value="BFC Publications" name="brand"  onChange={(e) => setBrand(e.target.value)} readOnly/>
                        </div>
                      </div>

                      <div className="col-4">
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Image Path</label>  
    <input type="text" className="form-control" id="image"  value={image} name="brand"  onChange={(e) => setImage(e.target.value)} readOnly/>
                        </div>
                      </div>

  
                      <div className="col-4">
                        <div className="form-group">
                          <label for="exampleInputFile">Book Image</label>
                          <div className="input-group">
                            <div className="custom-file">
  <input type="file"  className="custom-file-input" id="imageFile" onChange={uploadFileHandler}/>
                              <label className="custom-file-label" for="exampleInputFile">Choose file</label>
                            </div>
                            <div className="input-group-append">
                              <span className="input-group-text" id="">Upload</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {loadingUpload && <LoadingBox></LoadingBox>}
              {errorUpload && (
                <MessageBox variant="danger">{errorUpload}</MessageBox>
              )}

                      {/* <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Tags</label>
                          <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Tags"/>
                        </div>
                      </div> */}
                      <div className="col-md-12">
                        <div className="card-body pad">
                          <div className="mb-3">
                            <label htmlFor="exampleInputPassword1">Book Description</label>


                            <input type="text" className="form-control" multiline={true} numberOfLines={4} id="description" name="description" 
                          onChange={(e) => setDesc(e.target.value)} placeholder="Enter Dimensions" />

                            {/* <textarea className="textarea" placeholder="Place some text here" name="description2" style={{width: '100%', height: '200px', fontSize: '14px', lineHeight: '18px', padding: '10px'}}   onChange={(e) => fsetDesc2(e.target.value)}></textarea> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                  </fieldset>
                </div>
                {/* /.card */}                
              </div>
              {/*/.col (left) */}
              
            </div>
            {/* /.row */}
          </div>{/* /.container-fluid */}
        </section>
      </div>
    </>
  );
 
                    }

export default AddBook;
