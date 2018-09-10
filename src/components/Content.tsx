import * as React from 'react'
import { Subscribe } from 'unstated'
import ContainerState from '../container/container'
import CommonProps from '../constants/interfaces';

export default class Content extends React.Component<CommonProps> {
  render() {
    return (
      <Subscribe to={[ContainerState]}>
      {(content: ContainerState) => {
          return (
            <div className={'h-100 ' + this.props.className}>
              { 
                content.state.elements.map((ele: any, index: number) => 
                  <div key={index} className='mb-3'>
                    <div 
                      id={index.toString()} 
                      onClick={(e: React.MouseEvent<HTMLDivElement>) => content.setCurrentElement(e)} 
                      className={ele.className}>{ele.text}
                    </div> 
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
