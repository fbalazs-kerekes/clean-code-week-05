import { Employee } from "./employee";

export class EmployeePayrollCalculator {

    public calculatePayroll(employees: Employee[]): number {
        // Simulation to calculate payroll for all employees
        let totalPayroll = 0;

        for (const employee of employees) {
            totalPayroll += employee.calculateSalary();
        }

        return totalPayroll;
    }
}
