import React, { Component } from 'react';
import { Button, Checkbox, Progress, Icon } from './components';

class App extends Component {
  state = {
    precent: 1
  }

  myClick = () => {
    let interval = setInterval(() => {
      let temp = this.state.precent;
      if (temp >= 99) clearInterval(interval);
      this.setState({
        precent: temp + 1
      });
    }, 60);
  }

  render() {
    return (
      <div className="App" style={{ background: '#333', height: 100 }}>
        <Button onClick={this.myClick}>aaaa</Button>
        <Checkbox />
        <Progress precent={this.state.precent} />
        <Icon type="music" />
      </div>
    );
  }
}

export default App;
