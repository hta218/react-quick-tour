import React, { Component } from 'react';
import Elements from './components/Elements';
import Content from './components/Content';
import Style from './components/Style';
import Header from './components/Header'; 

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="h-500px d-flex p-3">
          <Elements className="col-2"/>
          <Content className="col-8"/>
          <Style className="col-2"/>
        </div>
      </div>
    );
  }
}

export default App;
