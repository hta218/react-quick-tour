import { Container } from 'unstated';

export default class ContainerState extends Container {
  constructor(props) {
    super(props);
    this.state = { 
      elements: [],
      currentEleIndex: -1
    };
    this.setCurrentElement = this.setCurrentElement.bind(this);
    this.getElement = this.getElement.bind(this);
    this.updateStyle = this.updateStyle.bind(this);
  }

  setCurrentElement(event) {
    this.setState({currentEleIndex: event.target.id});
  }

  getElement(event) {
    let type = event.target.tagName.toLowerCase();
    let className = event.target.className;
    let text = event.target.textContent;

    this.setState({elements : [...this.state.elements, {type, className, text}]});
  }

  updateStyle(event) {
    let { value, name } = event.target;

    let updatedEle = this.state.elements[this.state.currentEleIndex];
    updatedEle[name] = value;

    let newElements = this.state.elements;
    newElements[this.state.currentEleIndex] = updatedEle;

    this.setState({elements: newElements});
  }
}
