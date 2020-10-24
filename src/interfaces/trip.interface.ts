import IExpense from "./expense.interface";
import IStudent from "./student.interface";

export interface ITrip {
    title: string;
    total: number;
    average: number;
    students: IStudent[];
    expenses: IExpense[];
}