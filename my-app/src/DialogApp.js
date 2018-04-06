import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
class DialogApp extends React.Component {
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
    var vTextToPrint;

    var time12h = document.getElementById("timepicker_12h");
    var time12h = document.getElementById("timepicker_12h");
    var time12hVal = time12h.value;
    var time24hVal = time12h.value;

    vTextToPrint = "MONDAY - " + time12hVal + " (" + time12hVal + ")";
	vTextToPrint = "TUESDAY - " + time12hVal + " (" + time12hVal + ")";

    var txtField = document.getElementById("textfield_1");
    txtField.value = vTextToPrint;
    //TextFieldApp.TextFieldApp.setValue(vTextToPrint);

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
        <RaisedButton label="Edit" onClick={this.handleOpen} />
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}

        >
          The actions in this window were passed in as an array of React objects.

        </Dialog>
      </div>
    );
  }
}

export default DialogApp;
