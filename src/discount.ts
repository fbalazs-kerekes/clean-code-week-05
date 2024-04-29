export class Discount {

    public calculateDiscountPercentage(level: string): number {
        const discountTypes: Map<string, number> = new Map([['standard', 5], ['silver', 10], ['gold', 20]]);
        return discountTypes.get(level) ?? 0;
    }
}