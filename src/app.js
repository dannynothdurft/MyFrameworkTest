import { render, createReactive } from "./framework.js";
import { MyComponent } from "./component.js";

// Initialisiere den Zustand
const state = createReactive({ name: "World" }, () => {
  update();
});

// Funktion zum Neurendern der App
function update() {
  const appComponent = new MyComponent({ name: state.name });
  render(appComponent.render(), document.getElementById("app"));
}

// Initiales Rendern der App
update();

// Simuliere eine Änderung des Zustands nach 2 Sekunden
setTimeout(() => {
  state.name = "Universe";
}, 2000);
