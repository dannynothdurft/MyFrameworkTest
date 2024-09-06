export class Component {
  constructor(props) {
    this.props = props;
  }

  // Methode, die von jeder Komponente überschrieben wird
  render() {
    return "";
  }
}

// Reaktiver State mit Proxy-Objekten
export function createReactive(state, onChange) {
  return new Proxy(state, {
    set(target, property, value) {
      target[property] = value;
      onChange();
      return true;
    },
  });
}

// Render-Funktion, die den virtuellen DOM ins echte DOM überträgt
export function render(vnode, container) {
  container.innerHTML = vnode;
}
