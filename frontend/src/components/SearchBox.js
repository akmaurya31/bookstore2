import React, { useState } from 'react';

export default function SearchBox(props) {
  const [name, setName] = useState('');

  // console.log("ddddddddddddddddddddd",props)

  // const pii=277;
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   props.history.push(`/booklist/key/${textname}`);
  //  // dispatch(listProducts({ name: name !== 'all' ? name : '',category:blCateArr,blanguage:blLangArr,bBind:blBindArr,  }));


  //   //console.log("the search box vale is ",name)
  // };


  const submitHandler = (e) => {
    e.preventDefault();
    console.log("the search box vale is ",name)
    props.history.push(`/search/name/${name}`);
  };
  return (
    <form className="search" onSubmit={submitHandler}>
      <div className="row">

      {/* <form action="#" method="post" id="post">            */}
{/* <input type="text" className="form-control" name="q" id="q" placeholder="Search by Book Title or Author Name"   onChange={(e) => props.onChange(e.target.value)} required /> */}
      
<input type="text" className="form-control" name="q" id="q" placeholder="Search by Book Title or Author Name"   onChange={(e) => setName(e.target.value)}  required  /> 
      
              {/* </form> */}
        {/* <input
          type="text"
          name="q"
          id="q"
          onChange={(e) => setName(e.target.value)}
        ></input> */}
        {/* <button className="primary" type="submit">
          <i className="fa fa-search"></i>
        </button> */}
      </div>
    </form>
  );
}