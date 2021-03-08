import { Iproduct } from './IProduct';


export interface Icategory{
    id:number;
    name:string;
    image?:string|ArrayBuffer;
  }

  export interface ITranslatedCategory{
    id:number;
    image?:string|ArrayBuffer;
    ar:IcategoryArabic;
    en:IcategoryEnglish;
  }

  export interface IcategoryArabic{
    name:string;
  }

  export interface IcategoryEnglish{
    name:string;
  }


  export interface IadminCategory{
    categoty:Icategory;
    products:Iproduct[];
  }
  