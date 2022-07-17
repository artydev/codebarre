/* @jsx h */
import { h } from "sinuous";


function Card(titre:string, content: string | h.JSX.Element, ): h.JSX.Element {
    return (
      <div style="margin-top:20px;">
        <div class="container" style="width:95%;max-width:680px;">
          <div class="card-panel center" style="padding:0">
              <div class="lime lime-text text-darken-4" style="padding:5px">{titre}</div>
              <div style="padding-top:10px;padding-bottom:10px">{content}</div>
          </div>
        </div>
      </div>
    );
  }
  

export { Card }