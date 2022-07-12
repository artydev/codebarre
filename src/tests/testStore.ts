import { updateStore } from "../store";

function testStore(patch: any) {
  console.log("update code");
  updateStore(patch);
  return 1;
}
// Permet de lancer la commande 'testStore' dans la console.
Object.defineProperty(window, "testStore", { value: testStore });
