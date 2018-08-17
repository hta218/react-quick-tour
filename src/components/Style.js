import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import Container from '../container/container';

export default class Style extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <Subscribe to={[Container]}>
        {
          (style) => {
          let ele = style.state.elements[style.state.currentEleIndex];
          let text = ele ? ele.text : "";
          let className = ele ? ele.className : "";

          return (
            <div className={'h-100 ' + this.props.className}>
              <form>
                <label>Text</label>
                <br/>
                <input type='text' value={text} name='text' onChange={style.updateStyle}/>
                <label>Class name:</label>
                <input type='text' value={className} name='className' onChange={style.updateStyle}/>
              </form>
            </div>
          )}
        }
      </Subscribe>
    );
  }
}
