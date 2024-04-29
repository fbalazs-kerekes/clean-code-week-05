import { Discount } from "../src/discount";

describe('Discount tests', () => {
    let discount: Discount;

    beforeEach(() => {
        discount = new Discount();
    })

    it.each([
        ['gold', 20],
        ['standard', 5],
        ['silver', 10],
        ['', 0],
    ])('should discount level is %s then get %s percent discount ', (level: string, discountPercentage: number) => {
        expect(discount.calculateDiscountPercentage(level)).toBe(discountPercentage);
    })

});