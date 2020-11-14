import { put, call, takeEvery, takeLatest, delay } from 'redux-saga/effects';

import { CAMPAIGN, restAction, API_CONTS } from "../actions/constant";
import { CAMPAIGNVALUE, CAMPAIGNRESET } from "../actions/campaignAction";

import { callAPI } from '../api';

export const getPage = state => state.nextPage;

export function* ADDCAMPAIGN_func(action) {
  try {
    const restInit = {
      IS_LOADING: true,
      RETURN: false,
      IS_RETURN: false,
      RETURN_MESSAGE: "Something wrong",
    }

    yield put(restAction(restInit));
    yield put( CAMPAIGNRESET() )
    const ages = [];
    const gender = [];

    if (action.payload.form.age_18_25 === true) {
      ages.push("18_25");
    }
    if (action.payload.form.age_25_35 === true) {
      ages.push("age_25_35");
    }
    if (action.payload.form.age_35_45 === true) {
      ages.push("age_35_45");
    }
    if (action.payload.form.age_45_60 === true) {
      ages.push("age_45_60");
    }
    if (action.payload.form.age_60plus === true) {
      ages.push("age_60plus");
    }

    if (action.payload.form.maleGender === true && action.payload.form.femaleGender === true) {
      gender.push("all");
    } else if (action.payload.form.maleGender === true) {
      gender.push("male");
    } else if (action.payload.form.femaleGender === true) {
      gender.push("female");
    } else {
      gender.push("all");
    }


    if (ages.length === 0) ages.push("all");

    const postData = yield call(callAPI, API_CONTS.CREATECAMPAIGN, 'post',
      {
        'locations': action.payload.form.location,
        'ages': ages,
        'gender': gender,
        'revenew': { "revenew_start": action.payload.form.revenew_start, "revenew_end": action.payload.form.revenew_end },
        'devices': { "desktop": action.payload.form.DesktopSwitch, "mobile": action.payload.form.mobileSwitch },
        'is_google': action.payload.form.googleSwitch,
        'is_facebook': action.payload.form.fbSwitch,
        'is_amazon': action.payload.form.amazonSwitch,
        'is_instagram': action.payload.form.instaSwitch,
        'budget_from': 0,
        'budget_to': 0,
      });

    restInit.IS_LOADING = false;
    restInit.IS_RETURN = true;
    restInit.RETURN = postData.return;
    restInit.RETURN_MESSAGE = postData.message;


    if (postData.return === true) {
      yield put(CAMPAIGNVALUE({
        campaign: postData.data
      }));
    }
    yield put(restAction(restInit));

  } catch (error) {
    yield put(restAction(
      {
        IS_LOADING: false,
        IS_RETURN: true,
        RETURN: false

      }));
  }
}

export function* CREATEBANNER_func(action) {
  try {
    const restInit = {
      IS_LOADING: true,
      RETURN: false,
      IS_RETURN: false,
      RETURN_MESSAGE: "Something wrong",
    }

    yield put(restAction(restInit));
    const postData = yield call(callAPI, API_CONTS.CREATEBANNER, 'post',
      action.payload);
      if ( postData.return === true ){
        const stateBanner = {
          [action.payload.key] : postData.data
        }
        yield put( CAMPAIGNVALUE({
          banner: stateBanner
        }) )
      }

    

    restInit.IS_LOADING = false;
    restInit.IS_RETURN = true;
    restInit.RETURN = postData.return;
    restInit.RETURN_MESSAGE = postData.message;
  } catch (error) {
    console.log(error)
    yield put(restAction(
      {
        IS_LOADING: false,
        IS_RETURN: true,
        RETURN: false

      }));
  }
}



export function* COMPLETECOMPAIGN_func(action) {
  try {
    const restInit = {
      IS_LOADING: true,
      RETURN: false,
      IS_RETURN: false,
      RETURN_MESSAGE: "Something wrong",
    }

    yield put(restAction(restInit));
    const postData = yield call(callAPI, API_CONTS.COMPLETECOMPAIGN, 'post',
      action.payload);

    restInit.IS_LOADING = false;
    restInit.IS_RETURN = true;
    restInit.RETURN = postData.return;
    restInit.RETURN_MESSAGE = postData.message;
    yield delay(3500);
    yield put(restAction(restInit));
  } catch (error) {
    yield put(restAction(
      {
        IS_LOADING: false,
        IS_RETURN: true,
        RETURN: false

      }));
  }
}


export default function* authSaga() {
  yield takeLatest(CAMPAIGN.ADDCAMPAIGN, ADDCAMPAIGN_func);
  yield takeEvery(CAMPAIGN.CREATEBANNER, CREATEBANNER_func);
  yield takeLatest(CAMPAIGN.COMPLETECOMPAIGN, COMPLETECOMPAIGN_func);
}
