import express from 'express';
import data from './data.js';
import dotenv from 'dotenv';
 import config from './config.js';
 import mongoose from 'mongoose';
 import path from 'path';
 import userRoute from './routes/userRoute.js';
 import productRoute from './routes/productRoute.js';
 import uploadRouter from './routes/uploadRouter.js';
import bodyParser from 'body-parser';
import orderRouter from './routes/orderRouter.js';

//import {Payouts}   from 'cashfree-sdk';
// const { Payouts } = require('./cashfree-sdk');

 
dotenv.config();

// Instantiate Cashfree Payouts
/* const payoutsInstance = new Payouts({
	env: 'TEST',
	clientId: '3021804476e41d8422a2cb5f681203',
	clientSecret: '64b9b4cbf93b5dbb6b12cd1e59a28436634804bd',
  });


  async function addBeneficiary() {
	try {
	  const response = await payoutsInstance.beneficiary.add({
		beneId: 'JOHN18012',
		name: 'john doe',
		email: 'johndoe@cashfree.com',
		phone: '9876543210',
		bankAccount: '00001111222233',
		ifsc: 'HDFC0000001',
		address1: 'ABC Street',
		city: 'Bangalore',
		state: 'Karnataka',
		pincode: '560001',
	  });
  
	  console.log(response);
	} catch (e) {
	  console.error(e);
	}
  }
*/
//console.log("dddddddddddd",payoutsInstance);


const mongodbUrl= config.MONGODB_URL;

mongoose.connect(mongodbUrl, {
	useNewUrlParser:true,
	useUnifiedTopology: true,
	useCreateIndex:true
}).catch(error => console.log(error.reason));

const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/uploads', uploadRouter);
app.use("/api/users/",userRoute);
app.use("/api/products", productRoute)
app.use('/api/orders', orderRouter);

//app.use('/api/getaddress', getaddress);


app.get('/api/config/paypal', (req, res) => {
	res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
  });

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

/* app.get('/', (req, res)=>{
	res.send('server is ready')
}) */

app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

const port= process.env.PORT ||  5000;



// app.get("/api/products/:id", (req, res)=>{
// 	//res.send(data.products);
// 		const productId= req.params.id;
// 		const product= data.products.find(x => x._id === productId);
// 		if(product){
// 			res.send(product)
// 		}else{
// 			res.status(404).send({ msg: "Product Not Found"})
// 		}
// });

///////////////////////////

// app.get("/api/products", (req, res)=>{
// 	res.send(data.products);
// });

app.use((err, req, res, next) => {
	res.status(500).send({ message: err.message });
  });

app.listen(port, ()=> { console.log("server started at port ",port)})
