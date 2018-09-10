import * as React from 'react';
import ContainerState from '../container/container';
import { Subscribe } from 'unstated';
import CommonProps from '../constants/interfaces';

export default class Elements extends React.Component<CommonProps> {
  render() {
    return (
      <Subscribe to={[ContainerState]}>
        {(element: ContainerState) => (
          <div className={'h-100 ' + this.props.className}>
            <button className="btn btn-primary" onClick={(e) => element.getElement(e)}>Button</button>
          </div>
        )}
      </Subscribe>
    );
  }
}
