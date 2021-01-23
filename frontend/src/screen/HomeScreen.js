import React, { useEffect,useState} from 'react';
//import data from '../data';
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../actions/productActions'
import { userSigninReducer } from '../reducers/userReducers';
// import { useParams } from 'react-router-dom';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Link, useParams } from 'react-router-dom';
// let blCateArr='';
let blCateArr=[''];
let blLangArr=[''];
let blBindArr=[''];




const myFil=( mArry,mIndex,arVal)=>{ 




//checkedOnecfc  =mIndex

//arVal  ==fiction

//mArry =blCateArr

  if(mIndex===false ){
    //alert(0);
    mArry.push(arVal);
  }else{
    var filteredAry =mArry= mArry.filter(function(e) { return e !== arVal })
   // alert("sdfsf"+filteredAry);      
  } 
  return mArry;


}

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
  const dispatch = useDispatch();
  console.log("fffffffffffffffffffffffssssssssssssssssssssssssssssssssssssss",useParams());
   const { textname } = useParams();

   

  // alert(key)

  //console.log("ffffvvvvvvvvvvvvvvvffffffffff",textname);

// const [nfiction, setNfiction]= useState();
// const [nfiction, setNfiction] = useState(false);
// const updateOne = () => setCheckedOne(!checkedOne);
//let blCateArr=['agam'];
const [checkedOnefc, setCheckedOnefc] = useState(false);
//const [checkedOnerm, setCheckedOnerm] = useState(false);

  const [checkedOne, setCheckedOne] = useState(false);
  const updateOne = () => setCheckedOne(!checkedOne);

  const [checkedOnecrm, setCheckedOnecrm] = useState(false);
  const [checkedOnecnf, setCheckedOnecnf] = useState(false);
  const [checkedOnemot, setCheckedOnemot] = useState(false);
  const [checkedOnecfc, setCheckedOnecfc] = useState(false);
  const [checkedOneclt, setCheckedOneclt] = useState(false);
  const [checkedOneaca, setCheckedOneaca] = useState(false);
  const [checkedOnelhi, setCheckedOnelhi] = useState(false);
  const [checkedOnelen, setCheckedOnelen] = useState(false);

  const [checkedOnebhd, setCheckedOnebhd] = useState(false);
  const [checkedOnebpb, setCheckedOnebpb] = useState(false);
  
  


  const updateOnecm = (eee) => {      
     
   

    if(eee=='fiction'){   
    setCheckedOnecfc(!checkedOnecfc);    
    blCateArr= myFil(blCateArr,checkedOnecfc,eee);    
  }


  if(eee=='romance'){ 
    setCheckedOnecrm(!checkedOnecrm);    
    blCateArr= myFil(blCateArr,checkedOnecrm,eee);    
  }
  if(eee=='non fiction'){ 
    setCheckedOnecnf(!checkedOnecnf);    
    blCateArr= myFil(blCateArr,checkedOnecnf,eee);    
  }

  if(eee=='motivational'){ 
    setCheckedOnemot(!checkedOnemot);    
    blCateArr= myFil(blCateArr,checkedOnemot,eee);    
  }

  if(eee=='literature'){ 
     setCheckedOneclt(!checkedOneclt);    
     blCateArr= myFil(blCateArr,checkedOneclt,eee);    
   }

   if(eee=='academic'){   
     setCheckedOneaca(!checkedOneaca);    
     blCateArr= myFil(blCateArr,checkedOneaca,eee);    
   }

   if(eee=='Hindi'){        
     setCheckedOnelhi(!checkedOnelhi);    
     blLangArr= myFil(blLangArr,checkedOnelhi,eee);    
   }

   if(eee=='English'){        
    setCheckedOnelen(!checkedOnelen);    
    blLangArr= myFil(blLangArr,checkedOnelen,eee);    
  }

  if(eee=='Paperback'){        
    setCheckedOnebpb(!checkedOnebpb);    
    blBindArr= myFil(blBindArr,checkedOnebpb,eee);    
  }

  if(eee=='Hardbound'){        
   setCheckedOnebhd(!checkedOnebhd);    
   blBindArr= myFil(blBindArr,checkedOnebhd,eee);    
 }
  
 let kname='';
 if(eee=='ook'){   
 // setCheckedOnecfc(!checkedOnecfc);    
  //blCateArr= myFil(blCateArr,checkedOnecfc,eee);    
  let kname='book';
}



if(blCateArr.length==0){
  blCateArr="";
}


if(blLangArr.length==0){
  blLangArr="";
}


if(blBindArr.length==0){
  blBindArr="";
}

// if(textname!=''){
//   name=textname;
// }
 
// alert("sdfsdfsdfsdfsdfsdf");

    // dispatch(listProducts({ name: name !== 'all' ? name : '',category:blCateArr,blanguage:blLangArr,bBind:blBindArr,  }));

    dispatch(listProducts({ name: kname,category:blCateArr,blanguage:blLangArr,bBind:blBindArr,  }));
  
    if(eee=='fiction---research'){
      // setCheckedOnefc(!checkedOnefc);
       setCheckedOnecfc(!checkedOnecfc);
       blCateArr.push('fiction');
       //alert("ddddee"+blCateArr);
      // blCateArr = [...blCateArr,eee]; 
   
     /*  if(checkedOnecfc===false ){
         alert(0);
       }else{
         var filteredAry =blCateArr= blCateArr.filter(function(e) { return e !== 'fiction' })
        // alert("sdfsf"+filteredAry);      
       } */
   
      // gggggggggggggggggggggggggggg
   
      blCateArr= myFil(blCateArr,checkedOnecfc,'fiction');
     //alert("fff90"+blCateArr);
   
     }
  
  
  }


  //updateOnecm('ook');

  // const updateOnerm = (eee) => { 
  //   let categorye='';
  // //alert(eee);

  //   setCheckedOnerm(!checkedOnerm);

  //   if(checkedOnerm===false){
  //     categorye=eee

  //   }else{
  //     categorye=''

  //   }
  //   dispatch(listProducts({ name: name !== 'all' ? name : '',category:categorye }));
  //   }




 
  const updateOnefc = (eee) => { 
    let categorye='';
  //alert(eee);

    setCheckedOnefc(!checkedOnefc);

    if(checkedOnefc===false){
      categorye=eee

    }else{
      categorye=''

    }
    dispatch(listProducts({ name: name !== 'all' ? name : '',category:categorye }));
    }
  
  


 
    
     


  const [checkedTwo, setCheckedTwo] = useState(true);
  const updateTwo = () => setCheckedTwo(!checkedTwo);

  const [checkedOnef, setCheckedOnef] = useState(false);
  const updateOnef = () => setCheckedOnef(!checkedOnef);

// const [loading, setLoading]= useState(false);
// const [error, setError] = useState(false);


const productList=useSelector(state => state.productList)


const { loading, error, products } =productList;


 const { name = 'all', category = 'all' } = useParams();

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



  // const getFilterUrl = (filter) => {
  //   const filterCategory = filter.category || category;
  //   const filterName = filter.name || name;
  //   return `/search/category/${filterCategory}/name/${filterName}`;
  // };

  const getFilterUrl = (filter) => {
    const filterCategory = filter.category || category;
    const filterName = filter.name || name;
    return `/booklist/${filterCategory}/name/${filterName}`;
  };


  // radioHandler = (status) => {
  //   this.setState({status});
  // }



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
                 
                 
                    {/* <input type="checkbox" name="a"
        label="Checkbox"
        checked={checkedOne}
        onChange={updateOne} /> 
                   
                   <input type="checkbox" name="b"
        label="Checkbox"
        checked={checkedTwo}
        onChange={updateTwo}  disabled={true} />  */}



                     
      


                    {/* <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for Category.." title="Type in a name" 
                    autoComplete="off" /> */}

                    <ul id="myUL" className="list-unstyled">
      {/* <li key="fiction"> <Link   to={getFilterUrl({ category:'fiction' })}> Fiction</Link>
 <input type="checkbox" name="afc"
        label="Checkbox"
        checked={checkedOnefc}
        onChange={(e) => updateOnefc('fiction')} /></li> */}



  {/* <li key="Romance">
   

<input type="checkbox" name="arm"
        label="Checkbox"
        checked={checkedOnerm}
        onChange={(e) => updateOnerm('Romance')} /> Romans</li> */}
       
      

 <li key="Romance">  <a> 
<input type="checkbox" name="crm"
        label="Checkbox"
        checked={checkedOnecrm}
        onChange={(e) => updateOnecm('Romance')} />   Romance</a>  </li>


<li key="fiction"><a> 
<input type="checkbox" name="cfc"
        label="Checkbox"
        checked={checkedOnecfc}
        onChange={(e) => updateOnecm('fiction')} />   Fiction  </a></li>

<li key="non-fiction"><a> 
<input type="checkbox" name="cnf"
        label="Checkbox"
        checked={checkedOnecnf}
        onChange={(e) => updateOnecm('non fiction')} /> Non-Fiction  </a></li>

<li key="literature"> <a>  
<input type="checkbox" name="clt"
        label="Checkbox"
        checked={checkedOneclt}
        onChange={(e) => updateOnecm('literature')} /> Literature </a></li>


                      {/* <li><a><input type="checkbox" name="fl-colour"/> Non Fiction</a></li> */}

                      {/* <li><a><input type="checkbox" name="fl-colour"/> Literature</a></li> */}
                      {/* <li><a><input type="checkbox" name="fl-colour"/> Academic</a></li> */}

                      <li key="academic">    <a>
<input type="checkbox" name="aca"
        label="Checkbox"
        checked={checkedOneaca}
        onChange={(e) => updateOnecm('academic')} /> Academic </a> </li>




<li key="motivational">    <a>
<input type="checkbox" name="mot"
        label="Checkbox"
        checked={checkedOnemot}
        onChange={(e) => updateOnecm('motivational')} /> Motivational </a> </li>
                     
   
                      <li><a><input type="checkbox" name="fl-colour"/> Cookery, Food & Wine</a></li>
                      {/* <li><a><input type="checkbox" name="fl-colour"/> Politics</a></li> */}

                      {/* <li key="Politics">    
<input type="checkbox" name="aca"
        label="Checkbox"
        checked={checkedOneaca}
        onChange={(e) => updateOnecm('academic')} />Academic</li> */}

                      <li><a><input type="checkbox" name="fl-colour"/> Biography </a></li>
                      <li><a><input type="checkbox" name="fl-colour"/> Poetry</a></li>
                      <li><a><input type="checkbox" name="fl-colour"/> Short Stories</a></li>
                      <li><a><input type="checkbox" name="fl-colour"/> Others</a></li>
                    </ul>
                    <hr />
                    <h5 className="text-center">More Filter</h5>
                    
                    <div className="mfilter">Language</div>
                    <ul id="myULs" className="list-unstyled">
                      
                      
                      {/* <li><a><input type="checkbox" name="fl-colour"/> Hindi</a></li> */}

                      <li key="Romance">    <a> 
<input type="checkbox" 
        label="Checkbox"
        checked={checkedOnelhi}
        onChange={(e) => updateOnecm('Hindi')} />Hindi </a></li>

<li key="Romance">    <a> 
<input type="checkbox"  
        label="Checkbox"
        checked={checkedOnelen}
        onChange={(e) => updateOnecm('English')} />English </a></li>


                    </ul>
                    <hr/>
                    <div className="mfilter">Binding</div>
                    <ul id="myULs" className="list-unstyled">
                      
                    <li key="Romance">  <a>  
<input type="checkbox"  
        label="Checkbox"
        checked={checkedOnebhd}
        onChange={(e) => updateOnecm('Hardbound')} />Hardcover </a> </li>

<li key="Romance">    <a>  
<input type="checkbox"  
        label="Checkbox"
        checked={checkedOnebpb}
        onChange={(e) => updateOnecm('Paperback')} />Paperback   </a></li>

                      {/* <li><a><input type="checkbox" name="fl-colour"/> Hardcover</a></li> */}
                      {/* <li><a><input type="checkbox" name="fl-colour"/> Paperback</a></li> */}
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

            

            <Product key={product._id} product={product}>

console.log(product)

            </Product>
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

