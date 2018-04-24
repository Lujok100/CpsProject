import React from 'react';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';


/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
class Entries extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            entries: [],
        };
    }

    static formatAMPM(date, hoursIncrements) {
        let hours = Number(date.split(":")[0]) + hoursIncrements;
        let minutes = Number(date.split(":")[1]);
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return hours + ':' + minutes + ' ' + ampm;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({entries: nextProps.entries});
    }

    state = {
        fixedHeader: true,
        fixedFooter: true,
        stripedRows: false,
        showRowHover: false,
        showCheckboxes: true
    };

    render() {
        return (
            <div>
                <Table
                    fixedHeader={this.state.fixedHeader}
                    fixedFooter={this.state.fixedFooter}
                >
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn tooltip="Day">Day</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Date">Date</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        deselectOnClickaway={this.state.deselectOnClickaway}
                        showRowHover={this.state.showRowHover}
                        stripedRows={this.state.stripedRows}
                    >
                        {this.state.entries.map(row => (
                            <TableRow>
                                <TableRowColumn>{Entries.formatAMPM(row.date,0)}
- {Entries.formatAMPM(row.date,1)}
                                </TableRowColumn>
                                <TableRowColumn>{row.day}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>);
    }
}

export default Entries;
