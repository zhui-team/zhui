import React, { Component } from 'react';
import { Button } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button 
          value='Hello My Btn'
          width={200}
          height={200}
        ></Button>
      </div>
    );
  }
}

export default App;
