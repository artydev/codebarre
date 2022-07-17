import { subscribe } from "sinuous/observable";
import { Store } from "../../store";
import { ModelOPenFood } from "./model";
import { ViewOpenFood } from "./view";
import { fetchApi } from "../../services/getData";

const url = (code: Number) =>
  `https://world.openfoodfacts.org/api/v0/product/${code}.json`;

const targetId = "openfood";

function updateView(data: ModelOPenFood) {
  const target = document.getElementById(targetId);
  if (target != null && target.parentNode != null) {
    target.parentNode.replaceChild(ViewOpenFood(data.product), target);
  }
}

subscribe(() => {
  if (Store().appStarted && Store().code > 0) {
    fetchApi({ url: url(Store().code) }).then((data: any) => {
      updateView(data);
    });
  }
});

export { ViewOpenFood };
