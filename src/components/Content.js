import React, { Component } from 'react'
import { Subscribe } from 'unstated'
import ContainerState from '../container/container'

export default class Content extends Component {
  render() {
    return (
      <Subscribe to={[ContainerState]}>
      {content => {
          return (
            <div className={'h-100 ' + this.props.className}>
              { 
                content.state.elements.map((ele, index) => 
                  <div key={index} className='mb-3'>
                    <div id={index} onClick={content.setCurrentElement} className={ele.className}>{ele.text}</div> 
                  </div>)
              }
            </div>
          )
        }
      }
      </Subscribe>
    );
  }
}
