import { Injectable } from "@angular/core";

@Injectable()
export class ProductService{
get(){
    return [{
        id:"1",
        brand:"Apple 6s",
        price:"27000",
        inStock:true,
        lastUpdated: Date.now()
    },
    {
        id:"2",
        brand:"Samsung J7",
        price:"27000",
        inStock:false,
        lastUpdated: Date.now()
    },
    {
        id:"3",
        brand:"Xiomi Redmi Note 5",
        price:"8000",
        inStock:false,
        lastUpdated: Date.now()
    },
    {
        id:"4",
        brand:"HTC Desire",
        price:"16000",
        inStock:true,
        lastUpdated: Date.now()
        
    }
]
}
}