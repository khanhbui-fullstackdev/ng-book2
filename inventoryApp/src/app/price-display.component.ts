import { Component } from '@angular/core';

@Component({
    selector: 'price-display',
    templateUrl: './price-display.component.html',
    inputs:['productPrice']
})
export class PriceDisplayComponent {
    productPrice: number
}