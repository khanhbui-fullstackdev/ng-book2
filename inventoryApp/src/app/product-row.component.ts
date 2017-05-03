import { Component } from '@angular/core';

import { Product } from "./product";

@Component({
    selector: 'product-row',
    templateUrl: './product-row.component.html',
    inputs: ['productItem'],
    host: { 'class': 'item' }
})
export class ProductRowComponent {
    productItem: Product;
}