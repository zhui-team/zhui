import React, { Component } from 'react';
import { Button } from './components';

class App extends Component {
  myClick() {
    console.log('click');
  }
  render() {
    return (
      <div className="App" style={{ background: '#333', height: 100 }}>
        <Button onClick={this.myClick}>aaaa</Button>
      </div>
    );
  }
}

export default App;
