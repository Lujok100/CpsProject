import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DialogApp from './DialogApp';
import ButtonApp from './ButtonApp';
import TimePickerApp from './TimePickerApp';
import CheckboxApp1 from './CheckboxApp1';
import TextFieldApp from './TextFieldApp';
import Entries from "./Entries";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {date: null, day: null, entries: []};
        this.onDateChanged = this.onDateChanged.bind(this);
    }

    onDateChanged = (date) => {
        this.setState({
            date
        });
    };

    onAddClick = () => {
        let entries = this.state.entries;
        if(this.state.date && this.state.day){
        entries.push({date: this.state.date, day: this.state.day});
        this.setState({
            entries
        });
        }else{
            alert("Please select a date and day");
        }
    };

    onDayChange = (day) => {
        this.setState({
            day
        });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                   
                    <h1 className="App-title">Edit Office Hours Here</h1>
                </header>
                <p className="App-intro">
                    
                    <br/>
                    Click Submit button in EditBox to submite the hours.
                </p>
                <MuiThemeProvider>
                    <div>
                        {/*<Checkbox/>*/}
                        <DialogApp/>
                        <Entries entries={this.state.entries}/>
                        <ButtonApp onAddClick={this.onAddClick}/>
                        <TimePickerApp onChange={this.onDateChanged} />
                        <CheckboxApp1 onChange={this.onDayChange}/>
                        <TextFieldApp/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
