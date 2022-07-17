/* @jsx h */

import { h } from "sinuous";
import { MenuBar } from "./layout/toolbar";

export const App = function () {
  return (
    <div style="padding:0;margin:0">
      <MenuBar />
      
        <div class="container" style="width:100%">
          <div id="app"></div>
        </div>
      
    </div>
  );
};
