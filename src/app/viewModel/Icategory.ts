import { Iproduct } from './IProduct';


export interface Icategory{
    id:number;
    name:string;
    image?:string|ArrayBuffer;
  }

  export interface IadminCategory{
    categoty:Icategory;
    products:Iproduct[];
  }
  