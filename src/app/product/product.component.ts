import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { HttpService } from "../shared/services/http-data.service";

@Component({
    selector : 'app-product',
    templateUrl : './product.component.html',
    styleUrls : ['./product.component.scss']
})

export class ProductComponent implements OnInit {

    allProduArr : any[] = [];
    totalPrice : number = 0;
    listArr : any[] = [];
    currentProductId : any

    @ViewChild('myInputValue') myInputEleObj : ElementRef | undefined;

    constructor(private httpServ : HttpService){}
    ngOnInit(): void {
        this.getAllProductsData();
      }
  
    getAllProductsData(){
      this.httpServ.getProducts().subscribe({
        next : (param : any)=>{
          console.log(param);
          this.allProduArr = param;
        }
      })
    }

    increment( product : any): void {
      if(product.productQuantity != 3){
        product.productQuantity++
      }
    }

  
    decrement(product : any): void {
      if(product.productQuantity != 0){
        product.productQuantity -= 1
      }
    }

    
    onClick(products : any) {
      const orderPrice = products.productPrice * products.productQuantity;
      this.listArr.push({tPrice : orderPrice , ...products});
      this.totalPrice = this.listArr.reduce((total,pro) => total + pro.tPrice,0)
      this.httpServ.updateData(this.currentProductId, products.productPrice)
      products.productQuantity = 0;
    }
    
    onDeleteProducts(productsRemove : any){
      const remove = this.listArr.findIndex(product => product === productsRemove);
      const deletRecipe = this.listArr[remove].tPrice;
      this.listArr.splice(remove, 1)
      this.totalPrice = deletRecipe;
    }
}
