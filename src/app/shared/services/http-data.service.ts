import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map } from "rxjs";


@Injectable()

export class HttpService{
    private productsArr: any[] = [];
    private productsSubject = new BehaviorSubject<any[]>([]);
    updateQuantity: any;
    cartItems : any[] = [];

    constructor(private http : HttpClient ){}
    
    postProduct(prodData : any){
        this.http.post('https://task-01-7eeac-default-rtdb.firebaseio.com/products.json',
        prodData).subscribe({
            next : (param : any)=>{
                console.log(param);
            }
        })
    }

    getProducts(){
        return this.http.get('https://task-01-7eeac-default-rtdb.firebaseio.com/products.json').pipe(map((resp : any)=>{
            let myProArr = [];
        for(let product in resp){
          myProArr.push({...resp[product], id : product})
        }
        console.log(myProArr);
        return myProArr;
        }))
    }

    updateData(id : string, value : any){
        this.http.put('https://task-01-7eeac-default-rtdb.firebaseio.com/products/'+id+'.json', value).subscribe()
    }

}