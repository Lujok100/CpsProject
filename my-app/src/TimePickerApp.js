import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

export default class TimePickerApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleChangeTimePicker24 = this.handleChangeTimePicker24.bind(this);
    }

    handleChangeTimePicker24(event, date) {
        this.props.onChange(date);
    };

    render() {

        return (
          <form noValidate>
            <TextField
              id="time"
              label="Time Picker"
              type="time"
              onChange={this.handleChangeTimePicker24}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
          </form>
        );
    }
}
