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

    render() {
        return (
            <div>
                <RaisedButton label="Delete" secondary={true} style={this.style}/>
                <RaisedButton onClick={this.handleClick} label="Add" primary={true} style={this.style}/>
                <br/>
                <br/>

            </div>
        );
    }
}

export default ButtonApp;
