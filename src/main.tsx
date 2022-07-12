/* @jsx h */
import { ready } from "../src/utils";
import { startApp } from "./startApp";
import { App } from "./App";
import "./tests/testStore.ts";

ready(startApp(App()));
