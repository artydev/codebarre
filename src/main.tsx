
import { updateStore } from "./store";
import { AllComponents } from "../src/components/allcomponents"
import  { ready } from "../src/utils"

let root: HTMLElement | null;

function attachComponent() {
  AllComponents.map((comp) => root?.appendChild(comp(null)))
}

function testStore (patch:any) {
  console.log("update code")
  updateStore(patch)
  return 1;
}
// Permet de lancer la commande 'testStore' dans la console.
Object.defineProperty(window, "testStore", { value: testStore });


function startApp(): void {
  root = document.getElementById("app");
  if (root) {
    attachComponent();
    updateStore({
      appStarted: true
    })
  }
}

ready(startApp())
