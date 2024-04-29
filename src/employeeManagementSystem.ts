import { Employee } from "./employee";
import { EmployeePayrollCalculator } from "./employeePayrollCalculator";
import { EmployeeReportGenerator } from "./employeeReportGenerator";
import { EmployeePromoter } from "./employeePromoter";

export class EmployeeManagementSystem {
    private employees: Employee[] = [];

    constructor() {

    }

    public addEmployee(employee: Employee): void {
        // Real-world code to add employee to the system
        this.employees.push(employee);
    }

    public calculatePayroll(): number {
        const employeePayrollCalculator = new EmployeePayrollCalculator();
        return employeePayrollCalculator.calculatePayroll(this.employees);
    }

    public generateReports(): string {
        const employeeReportGenerator = new EmployeeReportGenerator();
        return employeeReportGenerator.generateReports(this.employees);
    }

    public promoteEmployee(employee: Employee): void {
        const employeePromoter = new EmployeePromoter();
        employeePromoter.promoteEmployee(employee);
    }
}

