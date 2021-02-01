import { Ifee } from "./Ifee";
import { Ishipping } from 'src/app/viewModel/Ishipping';

export interface Iproduct{
  id:number;
  name:string;
  image:string|ArrayBuffer;
  description?:string;
  tags:string[];
  colors:string[];
  size:string;
  price:number;
  shipping:Ishipping; // shipping id 
  fee:Ifee; // fee id 
  discount:number;
  quantity:number;
  brand:number;
  category:number;
  rate:number;  // rate id
}

// export

// export interface adminIproduct{
//   id:number;
//   name:string;
//   image:string|ArrayBuffer;
//   price:number;
//   shipping:number;
//   fee:number;
//   discount:number;
//   quantity:number;
//   brand:number;
//   category:number;
//   rate:number;
// }


// export interface IproductSeller{
//   id:number;
//   name:string;
  
// }


  // var  product = {name:"DellLaptop",images:["path1","path2"],description:"corei7",price:100,
  // tags:["computer","laptop","electronics"],discount:"20%",color:"red",size:"large",productFee:50,shippingFee:20,
  // stockNumber:200,soldNumber:50,brand:"brandId",Category:"cat.Id"}// salma

  // var category = {name:"electronics",image:"path",timestamp: firebase.firestore.FieldValue.serverTimestamp()}//abanoub
  // var brand = {name:"samsung",image:"path",timestamp: firebase.firestore.FieldValue.serverTimestamp()}//abanoub
  // var seller = {name:"register Name",address:"adress",creditNumber:"string",phone:[011,012]  
  //             ,balance:1000} // habiba
  // var customer  = {name:"register Name",balance:1000,adress:"adress",creditNumber:"stringNumber",
  // phone:[011,012]}// habiba

  // var shipping ={status:"received",date:"2020",order:"orderId"}//salma
  // var payment = {type:"cash",date:"2020",price:200,shippingFee:20,order:"6GQxcJHffYmKOYHovJih",shipping:"36EWaTxYDHGlcZI2xRZb"}//abnoub
  // var admin =  {name:"admin"}// rule can read all tables and write fees if not ordered
  // var order={date:"2020",status:"received",customer:"MXir9HsbH8Qo0RGFFHrxT1r0caj2",seller:"MXir9HsbH8Qo0RGFFHrxT1r0caj2",products:"productId1"}//kamal