import { all } from "redux-saga/effects";
import { combineReducers } from "redux";
import { restReducer }  from "../reducers/restReducer";
import { authReducer }  from "../reducers/authReducer";
//import { campaignReducer }  from "../reducers/campaignReducer";


// import authSaga from '../sagas/authSaga';
// import campaignSaga from '../sagas/campaignSaga';



export const rootReducer = combineReducers({
	 rest   : restReducer,
	 auth   : authReducer,
	//  campaign : campaignReducer
});

export function* rootSaga() {
  yield all([ 
	//   authSaga(),
	//   campaignSaga()

  	]);
}
