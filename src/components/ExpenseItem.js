import { wait } from '@testing-library/user-event/dist/utils';
import './ExpenseItem.css'
function ExpenseItem() {
    const expenseDate = new Date(2001, 2, 22);
    const expenseTitle = "Title";
    const expnesePrice = 44.44;

    console.log(expenseDate.toISOString());
    return (
        <div className='expense-item'>
        <div>{expenseDate.toISOString()}</div>
        <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>{expnesePrice}</div>
        </div>
        </div>
);
}
export default ExpenseItem;

