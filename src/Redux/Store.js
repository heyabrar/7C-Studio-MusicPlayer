import { legacy_createStore } from "redux";
import MusicReducer from "./Reducer";

export const MusicStore = legacy_createStore(MusicReducer);