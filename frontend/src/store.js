import { createStore, combineReducers , applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer, productReviewCreateReducer } from './reducers/productReducers';
import { cartReducer} from './reducers/cartReducers';
import {   userDetailsReducer,	userListReducer,	userRegisterReducer,	userSigninReducer,	userUpdateProfileReducer} from './reducers/userReducers';
import { orderCreateReducer,orderListReducer, orderDetailsReducer, orderMineListReducer,} from './reducers/orderReducers';


// const cartItems= Cookie.getJSON("cartItems")|| [];
// const userInfo= Cookie.getJSON("userInfo")|| null;



const initialState = {
	userSignin: {
		userInfo: localStorage.getItem('userInfo')
		  ? JSON.parse(localStorage.getItem('userInfo'))
		  : null,
	  },
	cart: {
	  cartItems: localStorage.getItem('cartItems')
		? JSON.parse(localStorage.getItem('cartItems'))
		: [],
		shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
	  : {},
	  paymentMethod: 'PayPal',
	},
  };

//const initialState={ cart: {cartItems}, userSignin: { userInfo }};


const reducer= combineReducers({
	productList:productListReducer,
	productDetails:productDetailsReducer,
	cart: cartReducer,
	userSignin:userSigninReducer,
	userRegister:userRegisterReducer,
	productSave: productSaveReducer,
	userDetails: userDetailsReducer,
	userUpdateProfile: userUpdateProfileReducer,
	productDelete: productDeleteReducer,
	userList: userListReducer,
	orderCreate: orderCreateReducer,
	orderList: orderListReducer,
	productReviewCreate: productReviewCreateReducer,
	orderDetails: orderDetailsReducer,
	orderMineList: orderMineListReducer,
})

const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store= createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;