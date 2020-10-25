import { IExpense, IStudent } from "..";

export interface ITrip {
    title: string;
    total: number;
    average: number;
    students: IStudent[];
    expenses: IExpense[];
}