import { Component } from "./framework.js";

export class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return `<div>Hello, ${this.props.name}!</div>`;
  }
}
