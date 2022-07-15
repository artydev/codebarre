/* @jsx h */
import { ready } from "../src/utils";
import { startApp } from "./startApp";
import { App } from "./App";
import "./tests/testStore.ts";
import   "@materializecss/materialize" // exports M as global variable

ready(startApp(App()));
