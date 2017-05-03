import { Component } from '@angular/core';

import { Product } from './product';

@Component({
    selector: 'inventory-app',
    templateUrl: './inventory.component.html'
})
export class InventoryComponent {
    //properties
    //product: Product;

    products: Product[] = [];

    constructor() {
        // added constructor. WHen Angular creats new instance of this Component(InventoryComponent)
        // it calls the constructor function
        //Sample single product
        //this.product = new Product("A Nice Black Hat", "NICEHAT", ["Men", "Accessories", "Hats"], "/resources/images/products/black-hat.jpg", 29.99);

        this.products.push(
            new Product("A Nice Black Hat", "NICEHAT", ["Men", "Accessories", "Hats"], "app/resources/images/products/black-hat.jpg", 29.99),
            new Product("Blue Jacket", "NEATTOJACKET", ["Women", "Apparel", "Jackets & Vests"], "app/resources/images/products/blue-jacket.jpg", 238.99),
            new Product("Black Running Shoes", "MYSHOES", ["Men", "Shoes", "Running Shoes"], "app/resources/images/products/black-shoes.jpg", 109.99)
        );

    }

    selectedProduct(product: Product): void {
        alert("You clicked:" + product.name);
    }
}