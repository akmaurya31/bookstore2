import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';
//import AOS from 'aos';
import img1 from "../../../src/images/img1.jpg"
import '../../../node_modules/aos/dist/aos.css';
import { listProducts, deleteProdcut, saveProduct} from '../../actions/productActions';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import Axios from 'axios';



var createReactClass = require('create-react-class');

function Listbook(props) {

  const [id, setId] = useState('');
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

//   var productList = [
//     ["ABC", 24, 18000],
//     ["EFG", 30, 30000],
//     ["IJK", 28, 41000],
//     ["EFG", 31, 28000],
//  ];
 // productList=['products']

 let i=1;

  {console.log(productList)}
  const {loading, products, error}= productList;

  { console.log(productList)}

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = productDelete;

  const productSave= useSelector(state =>state.productSave);
  const {loading:loadingSave, success:successSave, error:errorSave}=productSave;

  const dispatch=useDispatch();

  
    

  useEffect(() => { 
   //  dispatch(listProducts());     
   dispatch(listProducts({ name: name !== 'all' ? name : '' }));
  }, [dispatch, successDelete, successSave]);

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




  const deleteHandler = (product) => {
    /// TODO: dispatch delete action
    // dispatch(deleteProdcut(product._id));
    //window.alert(product._id)
    if (window.confirm('Are you sure to delete?')) {
      //  alert("Agam the Boss");
      dispatch(deleteProdcut(product._id));
      }
 
    //   dispatch(deleteProdcut(product._id));
  };


  // const updateHandler = (product) => {
  //   /// TODO: dispatch delete action
  //   window.alert(product._id)
  //    // dispatch(deleteProdcut(product._id));
  // };

  const openModal = (product) => {
    //setModalVisible(true);
    setId(product._id);
    setName(product.name);
    setAuthorName(product.author_name);
    setISBN(product.isbn);
    setSKU(product.sku);
    setBookFormat(product.book_format)
    setBookLanguage(product.book_language)
    setUnit(product.countInStock)
    setmrp(product.mrp)
    setfc(product.fc)
    setSp(product.selling_price)
    setBooksize(product.book_size)
    setPageNumber(product.page_number)
    setItemweight(product.item_weight)
    setDimension(product.dimension)
    setDesc(product.description)
    setImage(product.image)
    
  };

  const submitHandler=(e)=>{
    e.preventDefault();
    console.log("hi agam "+name)
    console.log("hi agam "+author_name)
    console.log("hi agam image data is "+image)

    dispatch(saveProduct({_id:id, name, author_name, isbn, sku, book_format, book_language, unit, mrp, selling_price, book_size, page_number,  item_weight, dimension, brand, image, description, fc}));

    props.history.push(`/Listbook`)
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
      .booklist img{
          height:80px;
          width:80px;
          border-radius:50%;
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
                <h1>Book List</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Book List</li>
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
                    <h3 className="card-title">Book List</h3>
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
                          <th>S.No.</th>
                          <th>Image</th>
                          <th>Title</th>
                          <th>Author</th>
                          <th>Price</th>
                          <th>Date/Time</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody className="booklist">
{console.log(products)}
                      {products.map(product =>(<tr>
                          <td>{i++}</td>
                          <td><img src={product.image}/></td>
                          <td>{product.name}</td>
                          <td>{product.author_name}</td>
                          <td>{product.mrp}</td>
                          <td>{product.createdAt.substring(0, 10)}</td>
                          <td class="text-right py-0 align-middle">
                            <div class="btn-group btn-group-sm">
                                <a href="#" class="btn btn-info" onClick={() => openModal(product)} data-toggle="modal" data-target="#view"><i class="fas fa-eye"></i></a>
                                <a href="#" class="btn btn-warning" onClick={() => openModal(product)} data-toggle="modal" data-target="#edit"><i class="fas fa-edit"></i></a>
                                <a href="#" onClick={() => deleteHandler(product)}  class="btn btn-danger"><i class="fas fa-trash"></i></a>
                            </div>
                          </td>
                        </tr>))} 
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
	  <div className="modal fade" id="view" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">View Book</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
               <div className="row">
                   <div className="col-md-6">
                       <b>Book Name : <span className="text-danger">{name}</span></b>
                       <br/>
                       <b>Author : <span className="text-danger">{author_name}</span></b>
                   </div>
                   <div className="col-md-6">
                     <div className="viewbookimage">
                       <img src={image} className="img-fluid"/>
                     </div>
                   </div>
                   <div className="col-md-12">
                       <p><b>Description :</b> {description}</p>
                       <p>{}</p>
                   </div>
               </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="edit" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit Book</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
              <form role="form" onSubmit={submitHandler}>
                    <div className="card-body">
                    <div className="row">
                      <div className="col-4">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Book Title</label>
  <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter Book Title" />
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Author Name</label>
  <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Author Name" value={author_name} onChange={(e) => setAuthorName(e.target.value)}/>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">ISBN No.</label>
  <input type="text" className="form-control" onChange={(e) => setISBN(e.target.value)} id="exampleInputPassword1" placeholder="Enter ISBN Number" value={isbn} />
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">SKU ID</label>
<input type="text" className="form-control" id="exampleInputPassword1" onChange={(e) => setSKU(e.target.value)} placeholder="Enter SKU ID" value={sku} />
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-group">
                          <label>Book Format</label>
      <select class="form-control" value={book_format} onChange={(e) => setBookFormat(e.target.value)}>
                            <option>Select Option</option>  
                            <option value="Paperback">Paperback</option>
                            <option value="Hardbound">Hardbound</option>
        </select>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-group">
                          <label>Book Language</label>
            <select class="form-control" value={book_language} onChange={(e) => setBookLanguage(e.target.value)}>
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
                          <label htmlFor="exampleInputPassword1">count In Stock</label>
<input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Unit" value={unit} onChange={(e) => setUnit(e.target.value)} />
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">MRP</label>
<input type="text" className="form-control" id="exampleInputPassword1" placeholder="MRP" value={mrp} onChange={(e) => setmrp(e.target.value)}/>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Selling Price</label>
<input type="text" className="form-control" id="exampleInputPassword1" placeholder="Selling Price" value={selling_price}
 onChange={(e) => setSp(e.target.value)} />
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="form-group">
                            <label>Book Size</label>
            <select class="form-control"  value={book_size} onChange={(e) => setBooksize(e.target.value)}>
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
  <input type="text" className="form-control" id="exampleInputPassword1" value={page_number} placeholder="Page Number" onChange={(e) => setPageNumber(e.target.value)}/>
                          </div>
                      </div>
                      <div className="col-3">
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Item Weight</label>
                        <div class="input-group mb-3">
<input type="text" class="form-control" placeholder="Item weight" value={item_weight} onChange={(e) => setItemweight(e.target.value)}/>
                          <div class="input-group-append">
                            <span class="input-group-text">gm.</span>
                          </div>
                        </div>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Dimensions</label>
  <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Dimensions" value={dimension}  onChange={(e) => setDimension(e.target.value)}/>
                          </div>
                      </div>
                      <div className="col-4">
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Image Path</label>  
    <input type="text" className="form-control" id="image"  value={image} name="image"  onChange={(e) => setImage(e.target.value)} readOnly/>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Brand Name</label>
                          <input type="text" className="form-control" id="exampleInputPassword1" value="BFC Publications" readOnly/>
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
                      {/* <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Tags</label>
                          <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Tags"/>
                        </div>
                      </div> */}

 


  <div className="col-4">
                      <div className="form-group">
                        <label>Featured Category</label>
                <select class="form-control" name="fc" value={fc} onChange={(e) => setfc(e.target.value)}>
                          <option>Select Option</option>
                            {/* <option>Ebook</option>   */}
                          <option>Most Popular</option>
                          <option>New Release</option>
                          <option>Upcoming Launches</option>
                          
                        </select>
                      </div>
                    </div>  





                      <div className="col-md-12">
                        <div className="card-body pad">
                          <div className="mb-3">
                            <label htmlFor="exampleInputPassword1">Book Description</label>
                            <textarea className="textarea" placeholder="Place some text here" style={{width: '100%', height: '200px', fontSize: '14px', lineHeight: '18px', padding: '10px'}}  value={description} />
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                   
                    <div className="card-footer">
                      <button type="submit" className="btn btn-primary">Submit</button>
                      <button type="button" className="btn btn-secondary pull-right" data-dismiss="modal">Close</button>
                    </div>
                  </form>
              </div>
              {/* <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div> */}
            </div>
          </div>
        </div>
    </>
  );
 
};

export default Listbook;
