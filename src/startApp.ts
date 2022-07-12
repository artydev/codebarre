import { updateStore } from "./store";
import { AllComponents } from "./components/allcomponents";

let root : HTMLElement | null;

function attachComponent() {
  AllComponents.map((comp) => root?.appendChild(comp(null)));
}

export function startApp(app: Node) {
  document.body.append(app);
  root = document.getElementById("app");
  if (root) {
    attachComponent();
    updateStore({
      appStarted: true,
    });
  }
}


