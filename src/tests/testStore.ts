import { updateStore } from "../store";

function testStore(patch: any = {code:737628064502}) {
  updateStore(patch);
}
// Permet de lancer la commande 'testStore' dans la console.
Object.defineProperty(window, "testStore", { value: testStore });


