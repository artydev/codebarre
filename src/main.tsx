/* @jsx h */
import { ready } from "../src/utils";
import { startApp } from "./startApp";
import { App } from "./App";
import { updateStore } from "./store"
import   "@materializecss/materialize" // exports M as global variable
import b from "bss";



ready(startApp(App()));

updateStore({code:737628064502});