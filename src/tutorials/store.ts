import { observable } from "sinuous";

type Store = {
  appStarted: boolean;
  code: number;
};

type StoreValue = number | boolean;

export function updateStore(patch: Partial<Store>): number {
  //console.log("Updating Store - " + Object.keys(patch).join("") + " : " +  patch[Object.keys(patch).join("")]);
  Store({ ...Store(), ...patch });
  return 0
}

export function getStoreValue(key: keyof Store): StoreValue {
  return Store()[key];
}

export const Store = observable({
  appStarted: false,
  code: 0,
});
