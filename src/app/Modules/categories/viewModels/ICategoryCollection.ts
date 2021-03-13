import { Icategory, ITranslatedCategory } from "src/app/viewModel/Icategory";

export interface ICategoryCollection{
    title:ItranslatedTitle,
    parsedTitle:string
    data : Icategory[]
}

export interface ITranslatedCategoryCollection{
    title:ItranslatedTitle,
    data : ITranslatedCategory[]
}


export  interface  ItranslatedTitle{
    en:  string;
    ar:  string;
}