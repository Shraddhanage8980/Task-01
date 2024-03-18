import { Component, Inject } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpService } from "../shared/services/http-data.service";

@Component({
    selector : 'app-dialog',
    templateUrl : './dialog.component.html',
    styleUrls : ['./dialog.component.scss']
})
export class DialogComponent{
      
    myProForm : FormGroup | any;
    allProArr : any[] = [];
    submitted : any
    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private httpServ : HttpService,private fb : FormBuilder,) {}
    ngOnInit(): void {
        this.myProForm = this.fb.group ({
            productName : this.fb.control('',Validators.required),
            productPrice : this.fb.control('',Validators.required),
            productImg : this.fb.control('',Validators.required),
            productQuantity : this.fb.control('0')
        });
        this.httpServ.getProducts();
    }
    onSubmit(){
        console.log(this.myProForm.value);
        this.httpServ.postProduct(this.myProForm.value);
        this.myProForm.reset();
    }
    onFileSelected(event: Event) {
        const fileInput = event.target as HTMLInputElement;
        if (fileInput && fileInput.files) {
            const file: File | null = fileInput.files[0];
            if (file?.size <= 100000) {
                this.myProForm.productImg = file;
            }else{
                alert('Image size should be less than 100 KB');
            }
          }
      }
}


