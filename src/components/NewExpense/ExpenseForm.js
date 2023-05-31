import React , {useState}from 'react';
import './ExpenseForm.css'
const ExpenseForm = (props) => {

   // const [userInput, setUserInput] = useState({
   //     enteredTitle: '',
   //     enteredAmount: '',
   //     enteredDate: ''
   // })

   // const titleChangeHandler = (event) => {
   //     setUserInput((prevState) => {
   //         return {...prevState, enteredTitle: event.target.value};
   //     })
   // }

   // const amountChangeHandler = (event) => {
   //     setUserInput((prevState) => {
   //         return {...prevState, enteredAmount: event.target.value};
   //     })
   // }

   // const dateChangeHandler = (event) => {
   //     setUserInput((prevState) => {
   //         return {...prevState,enteredDate: event.target.value};
   //     })
   // }

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setDate(event.target.value);

    };


    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date),
        };
        props.onSaveExpenseData(expenseData);
        setDate("");
        setAmount("");
        setTitle("");

    };
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={title} onChange={titleChangeHandler}></input>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={amount} min='0.01' step='0.01' onChange={amountChangeHandler}></input>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' value={date} min='2019-01-01' max='2025-12-31' onChange={dateChangeHandler}></input>
            </div>
            </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={props.onEndEditing}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
        </form>
    );
};

export default ExpenseForm;
