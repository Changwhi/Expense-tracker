import React, { useState }from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
    }

    const startEditing = () => {
        setIsEditing(true);
    }
    const endEditing = () => {
        setIsEditing(false);
    }

    return (<div className='new-expense'>
        {!isEditing && <button onClick={startEditing} >Add New Expense</button>}
        {isEditing && <ExpenseForm onEndEditing={endEditing} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>);
};

export default NewExpense;

