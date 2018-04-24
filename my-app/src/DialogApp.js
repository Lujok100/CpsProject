import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ButtonApp from './ButtonApp';
import TimePickerApp from './TimePickerApp';
import CheckboxApp1 from './CheckboxApp1';
import Entries from "./Entries";


/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
class DialogApp extends React.Component {
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

  onDeleteClick = () => {
    let entries = this.state.entries;
    entries.pop();
    this.setState({
        entries
    });
  };

  onDayChange = (day) => {
      this.setState({
          day
      });
  };

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handlePrint = () => {
    this.setState({open: false});
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handlePrint}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Dialog" onClick={this.handleOpen} />
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}

        >
        <Entries entries={this.state.entries}/>
        <ButtonApp onAddClick={this.onAddClick} onDeleteClick={this.onDeleteClick}/>
        <tr>
          <td>
            <CheckboxApp1 onChange={this.onDayChange}/>
          </td>
          <td>
            <TimePickerApp onChange={this.onDateChanged} />
          </td>
        </tr>


        </Dialog>
      </div>
    );
  }
}

export default DialogApp;
