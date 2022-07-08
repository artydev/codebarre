/* @jsx h */
import "./tutorials.css"
import { h, observable } from "sinuous";

let value = observable(0);

let inc = () => value(value() + 1);

const Counter = () => {
    return (
        <div class="counter">
            <h1>My Counter : {value}</h1>
            <button onClick={inc}>CLICK</button>
        </div>
    );
};

export default Counter;