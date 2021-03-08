import { Ifee } from "./Ifee";
import { Ishipping } from 'src/app/viewModel/Ishipping';
import { Icategory } from 'src/app/viewModel/Icategory';

export interface Iproduct{
  id:number;
  name:string;
  image:string|ArrayBuffer;
  description?:string;
  tags:string[];
  color:string;
  size:string;
  subTitle:string;

  price:number;
  shipping:Ishipping; 
  fee:Ifee; 
  discount:number;
  quantity:number;
  brand:number;
  category:number; // category id
  rate:number;  // rate id
  ///////// from IProduct //////
  categoryName? :string,
  // cents : number,
  // oldPrice : number,
  stock? : number,
  shippingLabel? : boolean
  seller:number // userId
}

export interface ITranslatedProduct{
  id:number;
  ar:IProductArabic
  en:IProductEnglish
  image:string|ArrayBuffer;
  price:number;
  shipping:Ishipping; 
  fee:Ifee; 
  discount:number;
  quantity:number;
  brand:number;
  category:number; // category id
  rate:number;  // rate id
  ///////// from IProduct //////
  categoryName? :string,
  // cents : number,
  // oldPrice : number,
  stock? : number,
  shippingLabel? : boolean
  seller:number // userId

}

export interface IProductArabic{
  name:string;
  description?:string;
  tags:string[];
  color:string;
  size:string;
  subTitle:string;
}
export interface IProductEnglish{
  name:string;
  description?:string;
  tags:string[];
  color:string;
  size:string;
  subTitle:string;

}

export interface adminIproduct{
  product:Iproduct;
  category:Icategory;

}






{
// export




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
}