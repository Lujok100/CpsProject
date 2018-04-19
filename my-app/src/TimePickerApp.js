import React from 'react';
import TimePicker from 'material-ui/TimePicker';

const styles = {
    block: {
        maxWidth: 300,
    },
    checkbox: {
        marginBottom: 16,
    },
};

export default class TimePickerApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleChangeTimePicker24 = this.handleChangeTimePicker24.bind(this);
        this.handleChangeTimePicker12 = this.handleChangeTimePicker12.bind(this);
    }

    handleChangeTimePicker24(event, date) {
        this.props.onChange(date);
    };

    handleChangeTimePicker12(event, date) {
        this.props.onChange(date);
    };

    render() {
        return (
            <div style={styles.block}>
                <TimePicker
                    format="ampm"
                    id="timepicker_12h"
                    hintText="Start Time"
                    onChange={this.handleChangeTimePicker12}
                />
                <TimePicker
                    format="ampm"
                    id="timepicker_24h"
                    hintText="End Time"
                    onChange={this.handleChangeTimePicker24}
                />
            </div>
        );
    }
}
