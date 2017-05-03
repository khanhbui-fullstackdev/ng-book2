import { Component, EventEmitter } from '@angular/core';


import { Product } from './product';

@Component({
    selector: 'products-list',
    templateUrl: './products-list.component.html',
    inputs: ['productsList'],
    outputs: ['onSelectedProduct']//specify outputs
})
export class ProductsListComponent {
    //variable of inputs:['product']
    onSelectedProduct: EventEmitter<Product>;//create an EventEmitter that attached to output property

    productsList: Product[];

    constructor() {
        this.onSelectedProduct = new EventEmitter();
    }

    selectedProduct: Product;

    clicked(product: Product): void {
        this.selectedProduct = product;
        this.onSelectedProduct.emit(product);
    }

    isSelected(product: Product): boolean {
        if (!product || !this.selectedProduct) {
            return false;
        }
        return product.sku === this.selectedProduct.sku;
    }
}