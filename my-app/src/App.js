import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DialogApp from './DialogApp';
import ButtonApp from './ButtonApp';
import TimePickerApp from './TimePickerApp';
import CheckboxApp1 from './CheckboxApp1';
import Entries from "./Entries";

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Edit Ofice Houre</h1>
                </header>
                <p className="App-intro">
                    
                    <br/>
                    Click Edit  button to edit ofice hours.
                </p>
                <MuiThemeProvider>
                    <div>
                        {/*<Checkbox/>*/}
                        <DialogApp/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
