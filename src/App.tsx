/* @jsx h */

import { h } from "sinuous";
import { MenuBar } from "./layout/toolbar";

export const App = function () {
  return (
    <div>
      <MenuBar />
      <div>
        <div class="container" style="max-width:640px">
          <div id="app"></div>
        </div>
      </div>
    </div>
  );
};
