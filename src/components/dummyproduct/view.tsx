/* @jsx h */
import { h } from "sinuous";
import { Card } from "../../layout/card";
import { ModelProducts } from "./model";

function _View(state: ModelProducts) {
  return (
    <div>
      <div>{Card("Dummy Product", state.products[Math.floor(Math.random() * 30)].brand, )}</div>
    </div>
  );
}

function View(state: ModelProducts | null) {
  return <div id="dummyproduct">{state && _View(state)}</div>;
}

const ViewProduct = View;

export { ViewProduct };
