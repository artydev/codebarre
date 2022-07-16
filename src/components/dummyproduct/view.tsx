/* @jsx h */
import { h } from "sinuous";
import { ModelProducts } from "./model";

function ProductCard(content: string): h.JSX.Element {
  return (
    <div style="margin-top:20px;">
      <div class="lime">Dummy Product</div>
      <div class="card-panel center">{content}</div>
    </div>
  );
}

function _View(state: ModelProducts) {
  return (
    <div class="dummyproduct">
      <div>
        {ProductCard(state.products[Math.floor(Math.random() * 30)].brand)}
      </div>
    </div>
  );
}

function View(state: ModelProducts | null) {
  return <div id="dummyproduct">{state && _View(state)}</div>;
}

const ViewProduct = View;

export { ViewProduct };
