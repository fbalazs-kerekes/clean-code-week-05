export class Employee {
    constructor(private name: string, private salary: number) { }

    calculateSalary(): number {
        return this.salary;
    }
}