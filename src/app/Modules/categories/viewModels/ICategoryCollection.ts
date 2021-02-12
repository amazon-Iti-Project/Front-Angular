import { Icategory } from "src/app/viewModel/Icategory";

export interface ICategoryCollection{
    title:string,
    data : [
        Icategory
    ]
}