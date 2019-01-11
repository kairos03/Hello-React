import React, { Component } from 'react';
import PhoneForm from './PhoneForm';

class App extends Component {
  handleCreate = (date) =>  {
    console.log(date);
  }

  render() {
    return (
      <div className="App">
        <PhoneForm
          onCreate={this.handleCreate}
        ></PhoneForm>
      </div>
    );
  }
}

export default App;
