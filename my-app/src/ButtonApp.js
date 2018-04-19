import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class ButtonApp extends React.Component {

    style = {
        marginTop: 12,
        width: '6%',

    };

    handleClick = () => {
        this.props.onAddClick();
    };

    handleDelete = () => {
        this.props.onDeleteClick();
    };

    render() {
        return (
            <div>
			<center>
                <RaisedButton onClick={this.handleDelete} label="Delete" secondary={true} style={this.style}/>
                <RaisedButton onClick={this.handleClick} label="Add" primary={true} style={this.style}/>
                <br/>
			</center>	
                <br/>

            </div>
        );
    }
}

export default ButtonApp;
