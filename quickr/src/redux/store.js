import {legacy_createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {reducer as Post_Ad_Reducer} from './postAdsReducer/postAds.reducer'
import {reducer as category} from "./category/reducer"


const rootReducer= combineReducers({
    Post_Ad_Reducer,category
    })

const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

export { store };