import React, { Component } from 'react';
import ContainerState from '../container/container';
import { Subscribe } from 'unstated';

export default class Elements extends Component {
  render() {
    return (
      <Subscribe to={[ContainerState]}>
        {element => (
        <div className={'h-100 ' + this.props.className}>
          <button className="btn btn-primary" onClick={element.getElement}>Button</button>
        </div>
        )}
      </Subscribe>
    );
  }
}
