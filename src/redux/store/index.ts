import { rootReducer } from "../reducers"
import { createStore } from "redux"
import { defaultState } from "./defaultState";

export const createMyStore = () => createStore(rootReducer, defaultState);