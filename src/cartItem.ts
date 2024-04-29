export class CartItem {

    constructor(private product: string, private price: number) { }

    getProduct(): string {
        return this.product;
    }

    getPrice(): number {
        return this.price;
    }
}