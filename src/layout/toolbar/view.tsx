/* @jsx h */
import { h } from "sinuous";
import b from "bss";

let cssMenuBar = b`
    color: red;
`;


let style = ["menubar", cssMenuBar].join(" ");

const View = function () {
  return (
    <div class={style}>
      <h1>MEnuBar</h1>
    </div>
  );
};

const MenuBar = View;

export { MenuBar };
