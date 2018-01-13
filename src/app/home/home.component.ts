import { Component } from "@angular/core";


@Component({
    selector:'app-home',
    templateUrl:'./home.component.html'

})
//ES6 Module
export class homeComponent{
    home:string ="calling from home";
    title:any = "Akhil";
    cls = ["red","green"];
    fg = {
        red:true,
        green:false
    }
    style={'background-color': 'green', 'border':'3px solid black'};
    getString(){
        return this.home;
    }
    onClick(a){
        alert(a);
    }
    onChange(){
        console.log("helloe");
    }
    show:boolean=false;
    arr:number[]=[1,2,3,4];
    
}