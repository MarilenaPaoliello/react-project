import logo from './logo.svg';
import './App.css';
import ExportItem from './components/ExpenseItem';

function App() {
    return ( 
        <div className = "App" >
            <header className = "App-header" >
                <img src = { logo } className = "App-logo"alt = "logo" />
                <div><h1>This is my FIRST React App</h1></div>
                <p>this is a visible paragraph</p>
                <ExportItem></ExportItem>
                <a className = "App-link" href = "https://reactjs.org" target = "_blank" rel = "noopener noreferrer" >Learn React </a> 
            </header> 
           
        </div>
    );
}

export default App;