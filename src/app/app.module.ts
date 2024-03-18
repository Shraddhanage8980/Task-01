import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { HttpService } from "./shared/services/http-data.service";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogContent, MatDialogModule, MatDialogTitle} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogComponent } from "./dialog/dialog.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavbarComponent } from "./navbar/navbar.component";
import { ProductComponent } from "./product/product.component";

@NgModule({
    declarations : [
        AppComponent,
        DialogComponent,
        NavbarComponent,
        ProductComponent,
    ],
    imports : [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatButtonModule,
        MatDialogModule,
        MatDialogContent,
        MatDialogTitle,
        FormsModule
    ],
    providers : [
        HttpService,
        provideAnimationsAsync()
    ],
    bootstrap : [AppComponent]
})
export class AppModule{

}