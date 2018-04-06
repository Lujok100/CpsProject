import React, {Component} from 'react';
import Checkbox from 'material-ui/Checkbox';

const styles = {
    block: {
        maxWidth: 250,
    },
    checkbox: {
        marginBottom: 16,
    },
};

class CheckboxApp1 extends Component {
//initalise the checkboxes in the construcor 
    constructor(props) {
        super(props);

        this.handleCheck = this.handleCheck.bind(this);
        this.state = {
            checked: false,
        }
    }

    handleCheck(ev, checked) {
        if (checked){
            this.props.onChange(ev.target.value)
        }
    }

    render() {
        return (

            <div style={styles.block}>
                <Checkbox
                    label="MONDAY"
                    id="checkbox_mon"
                    type="checkbox"
                    value="Monday"
                    //checked={this.state.checked}
                    onCheck={this.handleCheck}
                    style={styles.checkbox}
                />
                <Checkbox
                    label="TUESDAY"
                    id="checkbox_tue"
                    type="checkbox"
                    value="Tuesday"
                    //checked={this.state.checked}
                    onCheck={this.handleCheck}
                    style={styles.checkbox}
                />
                <Checkbox
                    label="WEDNESDAY"
                    id="checkbox_wed"
                    type="checkbox"
                    value="Wednesday"
                    //checked={this.state.checked}
                    onCheck={this.handleCheck}
                    style={styles.checkbox}
                />
                <Checkbox
                    label="THURSDAY"
                    id="checkbox_thu"
                    type="checkbox"
                    value="Thursday"
                    //checked={this.state.checked}
                    onCheck={this.handleCheck}
                    style={styles.checkbox}
                />
                <Checkbox
                    label="FRIDAY"
                    id="checkbox_fri"
                    type="checkbox"
                    value="Friday"
                    //checked={this.state.checked}
                    onCheck={this.handleCheck}
                    //onCheck={this.updateCheck.bind(this)}
                    style={styles.checkbox}
                />
            </div>
        );
    }
}

export default CheckboxApp1;
