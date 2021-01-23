import axios from "axios";
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL,PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS, PRODUCT_SAVE_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAIL, PRODUCT_REVIEW_CREATE_REQUEST,
  PRODUCT_REVIEW_CREATE_SUCCESS,
  PRODUCT_REVIEW_CREATE_FAIL } from "../constants/productConstants"

 const listProducts = ({ name = '', category = [], blanguage = [], bBind=[],}) => async (
  dispatch
) => {

 // alert(name);
 
    try{
        dispatch({type:PRODUCT_LIST_REQUEST});
        const { data } = await axios.get(
          `/api/products?name=${name}&category=${category}&bblanguage=${blanguage}&bbind=${bBind}&bsearch=${name}`
        ); 

        console.log("ffffffff",data,category);

        dispatch({ type: PRODUCT_LIST_SUCCESS, payload:data});
    }
    catch(error){
        dispatch({ type: PRODUCT_LIST_FAIL, payload:error.message});
    }

}

// const saveProduct= (product) =>async (dispatch, getState)=>{
//     try {
//         dispatch({ type:PRODUCT_SAVE_REQUEST, payload: product});
//         const {userSignin:{ userInfo}}=getState(); 
//         const {data} = await axios.post('/api/products', product, {
//             headers:{
//                 'Authorization':'Bearer '+ userInfo.token
//             }
//         });
//         dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data});
//     } catch (error) {
//         dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message});
//     }
// }


const saveProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });
    const {
      userSignin: { userInfo },
    } = getState();
    if (!product._id) {
      const { data } = await axios.post('/api/products', product, {
        headers: {
          Authorization: 'Bearer ' + userInfo.token,
        },
      });
      dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
    } else {
      const { data } = await axios.put(
        '/api/products/' + product._id,
        product,
        {
          headers: {
            Authorization: 'Bearer ' + userInfo.token,
          },
        }
      );
      dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message });
  }
};


const detailsProduct=(productId)=>async(dispatch)=>{
	try{
		dispatch({type: PRODUCT_DETAILS_REQUEST, payload:productId});
		const {data} = await axios.get("/api/products/"+productId);
		dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload:data});
	}catch(error){
		dispatch( dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          }));
	}
}


const deleteProdcut = (productId) => async (dispatch, getState) => {
    try {
      const {
        userSignin: { userInfo },
      } = getState();
      dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
      const { data } = await axios.delete('/api/products/' + productId, {
        headers: {
          Authorization: 'Bearer ' + userInfo.token,
        },
      });
      dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
      dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });
    }
  };


  export const createReview = (productId, review) => async (
    dispatch,
    getState
  ) => {
    dispatch({ type: PRODUCT_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await axios.post(
        `/api/products/${productId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: PRODUCT_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: PRODUCT_REVIEW_CREATE_FAIL, payload: message });
    }
  };

export {listProducts, detailsProduct, saveProduct, deleteProdcut}