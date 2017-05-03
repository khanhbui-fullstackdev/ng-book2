export class Product {
    //properties
    name: string;
    sku: string;
    department: string[];
    imageUrl: string;
    price: number;
    votes: number;

    //constructor
    constructor(productName: string, productSku: string, productDepartment: string[], productImage: string, price: number, votes?: number) {
        this.name = productName;
        this.sku = productSku;
        this.department = productDepartment;
        this.imageUrl = productImage;
        this.price = price;
        this.votes = votes || 0;
    }
}