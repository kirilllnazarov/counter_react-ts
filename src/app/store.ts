import { combineReducers, legacy_createStore as createStore } from "redux";
import { counterReducer } from "../components/counterReducer";

const rootReducer = combineReducers({
	counter: counterReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
