import { AllComponents } from "./AllComponents";
import { ready } from "./ready";
import { updateStore } from "./store";

let root: HTMLElement | null;

let getElt = (id: string) => document.getElementById(id);

function attachComponents() {
  AllComponents.forEach((comp) => root && root.append(comp));
}

function startApp(): void {
  root = getElt("app");
  if (root) {
    attachComponents();
    updateStore({ appStarted: true });
  }
}

function testStore () {
  console.log("update code")
  updateStore({code : Math.floor(Math.random()*100) +1})
  return ;
}

Object.defineProperty(window, "testStore", { value: testStore });

ready(startApp);
 