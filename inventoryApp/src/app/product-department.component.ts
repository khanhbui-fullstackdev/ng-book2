import { Component } from '@angular/core';

@Component({
    selector: 'product-department',
    templateUrl: './product-department.component.html',
    inputs: ['productDepartment']
})
export class ProductDepartmentComponent {
    productDepartment: string[];
}