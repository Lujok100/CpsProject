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
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                    <br/>
                    Click Dialog button to begin.
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
