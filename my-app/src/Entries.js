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

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.entries);
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
                        <TableRowColumn>{row.date.toString()}</TableRowColumn>
                        <TableRowColumn>{row.day}</TableRowColumn>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>);
    }
}

export default Entries;
