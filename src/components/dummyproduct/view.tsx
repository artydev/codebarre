/* @jsx h */
import { h } from "sinuous";
import { ModelProducts } from "./model";

function _View(state: ModelProducts) {
    return (
        <div>
            <h3>DummyProduct : </h3>
            {state.products[Math.floor(Math.random()*30)].brand}
        </div>
    )
}

function View(state: ModelProducts | null) {
    return (
        <div id="dummyproduct">
            <div>
                {state && _View(state)}
            </div>
        </div>
    )
}

const ViewProduct = View;

export {  ViewProduct };
