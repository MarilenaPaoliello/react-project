import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear]= useState('2020');
    
    const yearChangeHandler = selectedYear =>{
       const yearChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear);
       };
    };

    return(
        <div>
            <ExpensesFilter selected={filteredYear} onChangeFilter={yearChangeHandler}/>
            <Card className='expenses'>
                <ExpenseItem 
                    date={props.items[0].date}
                    title={props.items[0].title} 
                    amount={props.items[0].amount}>
                </ExpenseItem>
                <ExpenseItem 
                    date={props.items[1].date}
                    title={props.items[1].title} 
                    amount={props.items[1].amount}>
                </ExpenseItem>
                <ExpenseItem 
                    date={props.items[2].date}
                    title={props.items[2].title} 
                    amount={props.items[2].amount}>
                </ExpenseItem>
            </Card>
        </div>
        
        

    );
}
export default Expenses;