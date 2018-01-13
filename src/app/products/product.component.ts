import { Component } from "@angular/core";
import { ProductService } from "app/shared/product.service";


@Component({
    selector:'product-list',
    templateUrl:'./products.html'
})
export class Products{
    products: any[];
    //dependecy injection
    constructor(svc:ProductService){
        this.products = svc.get();
    }
}