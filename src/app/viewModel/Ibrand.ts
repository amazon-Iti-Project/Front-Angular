import { Iproduct } from './IProduct';

export interface Ibrand{
    id:number;
    name:string;
    ar:IBrandArabic;
    en:IBrandEnglish;
    image?:string|ArrayBuffer;
  }

  export interface ITranslatedBrand{
    id:number;
    image?:string|ArrayBuffer;
    ar:IBrandArabic;
    en:IBrandEnglish;
  }

  export interface IBrandArabic{
    name:string;
  }

  export interface IBrandEnglish{
    name:string;
  }

  export interface IadminBrand{
    brand:Ibrand;
    products:Iproduct[];
  }