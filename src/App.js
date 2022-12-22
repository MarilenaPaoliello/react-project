import logo from './logo.svg';
import './App.css';
import ExportItem from './components/ExpenseItem';

function App() {
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
          },
          { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
          {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
          },
          {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
          },
    ];
    return ( 
        <div className = "App" >
            <header className = "App-header" >
                <img src = { logo } className = "App-logo"alt = "logo" />
                <div><h1>This is my FIRST React App</h1></div>
                <p>this is a visible paragraph</p>
                <ExportItem 
                date={expenses[0].date}
                title={expenses[0].title} 
                amount={expenses[0].amount}>
                </ExportItem>
                <ExportItem 
                date={expenses[1].date}
                title={expenses[1].title} 
                amount={expenses[1].amount}>
                </ExportItem>
                <ExportItem 
                date={expenses[2].date}
                title={expenses[2].title} 
                amount={expenses[2].amount}>
                </ExportItem>
            
                <a className = "App-link" href = "https://reactjs.org" target = "_blank" rel = "noopener noreferrer" >Learn React </a> 
            </header> 
           
        </div>
    );
}

export default App;