import { OpenFoodFacts } from "./tutorials/OpenFoodFacts";
import { updateStore } from "./tutorials/store";

let root: HTMLElement | null;

const ready = function (fn: any) {
  const completed = () => {
    document.removeEventListener("DOMContentLoaded", completed);
    window.removeEventListener("load", completed);
    fn();
  };
  if (document.readyState !== "loading") {
    setTimeout(fn);
  } else {
    document.addEventListener("DOMContentLoaded", completed);
    window.addEventListener("load", completed);
  }
};

function attachComponent() {
  if (root == null) return;
  root.append(OpenFoodFacts(null));
}

function startApp(): void {
  root = document.getElementById("app");
  if(root) {
    attachComponent();
    updateStore({ appStarted: true });
  }
  else {
    alert("Assurez-vous que l'élément d'id 'app' existe dans la page index.html")
  }

}
ready(startApp); 
