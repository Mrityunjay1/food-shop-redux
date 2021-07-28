import { createStore,applyMiddleware,compose } from "redux";
import persistStore from "redux-persist/es/persistStore";
import appReducer from './appReducer'

const composerEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(appReducer,composerEnhancers(applyMiddleware()))
const persistor=persistStore(store);

export {store,persistor}