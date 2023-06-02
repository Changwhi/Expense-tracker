import React, {useState} from "react";
import "./Expenses.css"
import Card from '../UI/Card'
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";


function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChangeHandler = selectedYear => {
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    //True and False function should be returned
    return (
        <div>
        <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
        </Card>
        </div>
    )
}

export default Expenses;
