import * as React from 'react';
import { Subscribe } from 'unstated';
import Container from '../container/container';
import ContainerState from '../container/container';
import CommonProps from '../constants/interfaces';

interface StyleState {
  text: string;
}

export default class Style extends React.Component<CommonProps, StyleState> {
  state: StyleState = {
    text: ''
  }

  render() {
    return (
      <Subscribe to={[Container]}>
        {
          (styleStore: ContainerState) => {
          let ele = styleStore.state.elements[styleStore.state.currentEleIndex];
          let text = ele ? ele.text : "";
          let className = ele ? ele.className : "";

          return (
            <div className={'h-100 ' + this.props.className}>
              <form>
                <label>Text</label>
                <br/>
                <input type='text' value={text} name='text' onChange={styleStore.updateStyle}/>
                <label>Class name:</label>
                <input type='text' value={className} name='className' onChange={styleStore.updateStyle}/>
              </form>
            </div>
          )}
        }
      </Subscribe>
    );
  }
}
