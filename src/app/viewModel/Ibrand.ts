import { Iproduct } from './IProduct';

export interface Ibrand{
    id:number;
    name:string;
    image?:string|ArrayBuffer;
  }

  export interface IadminBrand{
    brand:Ibrand;
    products:Iproduct[];
  }