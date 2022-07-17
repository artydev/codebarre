/* @jsx h */
import { h } from "sinuous";
import { Product } from "./model";
import { Card } from "../../layout/card";

function _View(product: Product) {
  const view = 
    <div style="display:flex;align-items:center;padding:10px">
        <div><img src={product.image_front_small_url} /></div>
        {product.brands}
    </div>
  return (
    <div>
        {Card("OpenFood", view)}
    </div>
  );
}

function View(product: Product | null) {
  return <div id="openfood">{product && _View(product)}</div>;
}

const ViewOpenFood = View;

export { ViewOpenFood };
