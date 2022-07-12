/* @jsx h */

import { h } from "sinuous";
import { MenuBar } from "./layout/toolbar";

function Titre(): HTMLElement {
  let title = (<h1>Mon Titre</h1>) as HTMLElement;
  title.style.color = 'orange';
  return title;
}

console.log(Titre());

export const App = function () {
  return (
    <div>
      <MenuBar />
      <div>
        <Titre />
        <div id="app"></div>
      </div>
    </div>
  );
};
