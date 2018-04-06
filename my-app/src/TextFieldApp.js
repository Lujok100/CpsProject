import React from 'react';
import TextField from 'material-ui/TextField';


class TextFieldApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {value: null};
  }

render () {
  return(
    <div>
      <br/>
        <TextField
          id="textfield_1"
          value = {this.state.value}
        />
      <br/>
    </div>
  );
}
}
export default TextFieldApp;
