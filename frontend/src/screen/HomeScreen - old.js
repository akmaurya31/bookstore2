import React, { useEffect} from 'react';
//import data from '../data';

import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../actions/productActions'
import { userSigninReducer } from '../reducers/userReducers';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Link, useParams } from 'react-router-dom';

const myFunction= ()=>{

    var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none"; 
            }
        }
}

export default function HomeScreen(props){

// const [products, setProducts]= useState([]);
// const [loading, setLoading]= useState(false);
// const [error, setError] = useState(false);


const productList=useSelector(state => state.productList)
const { loading, error, products } =productList;
 const dispatch = useDispatch();

 const { name = 'all' } = useParams();

  useEffect(() =>{
    dispatch(listProducts({ name: name !== 'all' ? name : '' }));

// const fetchData= async() =>{
//   try {
//     setLoading(true);
//     const {data} = await axios.get("/api/products");
//     setLoading(false)
//     setProducts(data);
//   } catch (error) {
//     setError(error.message)
//     setLoading(false)
//   }
 
// }
// fetchData()

  }, [])

	return (
    <>
    <style jsx>{`
     
      .admin-nav{
        display:none;
      }.main-sidebar{
        display:none;
      }
     
    `}</style>

    <section className="main_section">
      <div className="container"><div className="row">
  
          <div className="col-md-12">
            <div className="book_section">
              <div className="row">
                 
                <div className="col-md-3">
                  <div className="side_categories">
                    <h5 className="text-center">Genere</h5>
                    <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for Category.." title="Type in a name" autoComplete="off" />
                    <ul id="myUL" className="list-unstyled">
      <li key="fiction"><Link  name="fl-colour" to={getFilterUrl({ category:'fiction' })}> Fiction</Link></li>
                   
                      <li><a><input type="checkbox" name="fl-colour"/> Non Fiction</a></li>
                      <li><a><input type="checkbox" name="fl-colour"/> Literature</a></li>
                      <li><a><input type="checkbox" name="fl-colour"/> Academic</a></li>
                      <li><a><input type="checkbox" name="fl-colour"/> Romance</a></li>
                      <li><a><input type="checkbox" name="fl-colour"/> Cookery, Food & Wine</a></li>
                      <li><a><input type="checkbox" name="fl-colour"/> Politics</a></li>
                      <li><a><input type="checkbox" name="fl-colour"/> Biography </a></li>
                      <li><a><input type="checkbox" name="fl-colour"/> Motivational</a></li>
                      <li><a><input type="checkbox" name="fl-colour"/> Poetry</a></li>
                      <li><a><input type="checkbox" name="fl-colour"/> Short Stories</a></li>
                      <li><a><input type="checkbox" name="fl-colour"/> Others</a></li>
                    </ul>
                    <hr />
                    <h5 className="text-center">More Filter</h5>
                    
                    <div className="mfilter">Language</div>
                    <ul id="myULs" className="list-unstyled">
                      <li><a><input type="checkbox" name="fl-colour"/> Hindi</a></li>
                      <li><a><input type="checkbox" name="fl-colour"/> English</a></li>
                    </ul>
                    <hr/>
                    <div className="mfilter">Binding</div>
                    <ul id="myULs" className="list-unstyled">
                      <li><a><input type="checkbox" name="fl-colour"/> Hardcover</a></li>
                      <li><a><input type="checkbox" name="fl-colour"/> Paperback</a></li>
                    </ul>
                    <hr/>
                    <ul id="myULs" className="list-unstyled">
                      <li><a href="#" className="text-dark"><i className="fa fa-angle-double-right" /> Best sellers </a></li>
                      <li><a href="#" className="text-dark"><i className="fa fa-angle-double-right" /> Trending this week</a></li>
                      <li><a href="#" className="text-dark"><i className="fa fa-angle-double-right" /> Upcoming Lauches</a></li>
                    </ul>
                  </div>
                </div>
                
                <div className="col-md-9 list-wrapper" id="myList">


                {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row">
        {
          products.map((product) =>(

            <Product key={product._id} product={product}></Product>
          )
         )
        }
          
        </div>
      )}



                 
                  
                  <br />
                  <div id="pagination-container" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </section>
        </>
  )
}

