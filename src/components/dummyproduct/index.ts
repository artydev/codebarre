import { subscribe } from "sinuous/observable"
import { Store } from "../../store"
import  { ModelProducts }from  "../dummyproduct/model"
import  { ViewProduct } from "./view";
import {fetchApi} from "../../services/getData"


function updateView(data:ModelProducts) {
    let parent = document.getElementById("dummyproduct")
    parent?.replaceChild(ViewProduct(data),parent.childNodes[0] )
}



subscribe(async () =>  {
    if(Store().appStarted) {
        const data = await fetchApi<ModelProducts>("https://dummyjson.com/products")
        updateView(data);
    }
})

export  { ViewProduct }
