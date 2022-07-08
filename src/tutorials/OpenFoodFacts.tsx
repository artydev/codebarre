/* @jsx h */
import { h } from "sinuous";
import { Store } from "./store.js";
import { subscribe } from "sinuous/observable";
import { pipe, tap } from "rubico";
import ModelOpenFoodFacts from "./models";
import adze from "adze";

const toTodosUrl = (code: Number) =>
  `https://jsonplaceholder.typicode.com/todos/${code}`;

type JSX = h.JSX.Element;

const appStarted = () => Store().appStarted;
const targetId = "openfoodfacts";

function updateState(data: ModelOpenFoodFacts): void {
  let target = document.getElementById(targetId);
  target?.parentNode?.replaceChild(OpenFoodFacts(data), target);
}

const logTodoByID = pipe([
  toTodosUrl,
  fetch,
  (r: any): any => r.json(),
  tap((c: any) => adze().info(c)),
  updateState,
]);

function queryAPI(code: number): void {
  if (code == 0) return;
  let t = document.getElementById("data");
  if (t) t.innerHTML = "searching....";
  logTodoByID(code);
}

export function OpenFoodFacts(data: ModelOpenFoodFacts | null): JSX {
  return (
    <div id={targetId}>
      <h1>OPen</h1>
      <h2 id="data">{data?.title}</h2>
    </div>
  );
}

function initComp(): void {
  subscribe(() => {
    appStarted() && queryAPI(Store().code);
  });
}

initComp();
