import { subscribe } from "sinuous/observable";
import { Store } from "../../store";
import { ModelProducts } from "../dummyproduct/model";
import { ViewProduct } from "./view";
import { fetchApi } from "../../services/getData";

const url = "https://dummyjson.com/products";
const targetId = "dummyproduct";

function updateView(data: ModelProducts) {
  let target = document.getElementById(targetId);
  if (target != null && target.parentNode != null) {
    target.parentNode.replaceChild(ViewProduct(data), target);
  }
}

subscribe(() => {
  if (Store().appStarted && Store().code > 0) {
    fetchApi({ url }).then(updateView);
  }
});

export { ViewProduct };
