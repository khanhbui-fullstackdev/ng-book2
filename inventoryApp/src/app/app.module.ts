
//Module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Component
import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory.component';
import { ProductsListComponent } from './products-list.component';
import { ProductRowComponent } from './product-row.component';
import { ProductImageComponent } from './product-image.component';
import { PriceDisplayComponent } from './price-display.component';
import { ProductDepartmentComponent } from './product-department.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        InventoryComponent,
        ProductsListComponent,
        ProductRowComponent,
        ProductImageComponent,
        PriceDisplayComponent,
        ProductDepartmentComponent
    ],
    bootstrap: [AppComponent]//call root component
})

export class AppModule { }