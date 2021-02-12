// export interface Iuser{
//     id:number;
//     username:string;
//     password:string;
//   }

  export interface Iuser{
    id?:number;
    name?:string
    username:string;
    password:string;
    token?:string;
    address?:string;
    phone?:string;
    cart:number[];
}
