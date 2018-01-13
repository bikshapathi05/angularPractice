import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { homeComponent } from 'app/home/home.component';
import { Products } from 'app/products/product.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from 'app/shared/product.service';

@NgModule({
  declarations: [
    AppComponent,homeComponent,Products, ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
