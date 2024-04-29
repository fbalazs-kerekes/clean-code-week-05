import { CartItem } from "./cartItem";

export class ShoppingCart {
    private items: CartItem[] = [];

    constructor() { }

    addItem(cartItem: CartItem): void {
        this.items.push(cartItem);
    }

    calculateTotal(): number {
        let total = 0;
        for (const item of this.items) {
            total += item.getPrice();
        }
        return total;
    }
}

