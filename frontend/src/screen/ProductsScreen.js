import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';
import { listProducts, saveProduct } from '../actions/productActions';

function ProductsScreen(props){
    const [modalVisible, setModalVisible]= useState(false)

    const [name, setName]=useState('');
    const [id, setId]=useState('')
    const [price, setPrice]=useState('');
    const [image, setImage]=useState('');
    const [brand, setBrand]=useState('');
    const [category, setCategory]=useState('');
    const [countInstock, setCountInStock]=useState('');
    const [description, setDescription]=useState('');

    const productList= useSelector(state => state.productList);
    const {loading, products, error}= productList;
    const productSave= useSelector(state =>state.productSave);
    const {loading:loadingSave, success:successSave, error:errorSave}=productSave;


    const dispatch=useDispatch();

  
useEffect(() => {
        dispatch(listProducts());
        return()=>{
                //
    };
}, []);

const openModal=(product) =>{
  setModalVisible(true)
  setId(product._id);
  setName(product.name)
  setPrice(product.price)
  setImage(product.image)
  setBrand(product.brand)
  setCategory(product.category)
  setCountInStock(product.countInstock);
  setDescription(product.description)

}

const submitHandler=(e)=>{
  e.preventDefault();
  console.log("hi agam")
  dispatch(saveProduct({name, price, image, brand, category, countInstock, description}));
}


return (
    <>
    <div className="product">
        <h3>Products</h3>
        <button onClick={()=> openModal({})}>Create Product</button>
    </div>
    
{modalVisible &&(
    <div className="form">
    <form onSubmit={submitHandler} >
      <ul className="form-container">
        <li>
          <h2>Create a Product</h2>
          <h2>Create a Product</h2>
          <h2>Create a Product</h2>
          <h2>Create a Product</h2>
          <h2>Create a Product</h2>
          <h2>Create a Product</h2>
          <h2>Create a Product</h2>
          <h2>Create a Product</h2>
          <h2>Create a Product</h2>
        </li>
        <li>
          {loadingSave && <div>Loading...</div>}
          {errorSave && <div>{errorSave}</div>}
        </li>
        <li>
          <label htmlFor="name">
            Name
          </label>
          <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="price">
            Price
          </label>
          <input type="text" name="price" id="price" onChange={(e) => setPrice(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="image">
            Image
          </label>
          <input type="text" name="image" id="image" onChange={(e) => setImage(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="brand">
            Brand
          </label>
          <input type="text" name="brand" id="brand" onChange={(e) => setBrand(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="countInstock">
            count In stock
          </label>
          <input type="text" name="countInstock" id="countInstock" onChange={(e) => setCountInStock(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="name">
            Category
          </label>
          <input type="text" name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" onChange={(e) => setDescription(e.target.value)}></textarea>
         
          
        </li>
        <li>
          <button type="submit" className="button primary">Create</button>
        </li>

        <li>
          <button type="submit" className="button primary" onClick={()=> setModalVisible(false)}>Back</button>
        </li>
       
      </ul>
    </form>
  </div>

)}



   

  <div className="product-list">
      <table border="1"> 
        <thead>
          <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Brand</th>
          <th>Action</th>
          </tr></thead>
          <tbody>  
      {products.map(product =>(<tr>
            <td>{product._id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
            <td>{product.brand}</td>
            <td>
                  <button onClick={()=> openModal(product)}>Edit</button>
                  <button>Delete</button>
            </td>
          </tr> ) )}

          

          </tbody>
          
        
      </table>
    </div>
    </>
  );
}
export default ProductsScreen;