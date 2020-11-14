import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { CAMPAIGN  } from "../actions/constant";

const initialState = {
    CurrentCampaign :null,
    currentBanner : []
};

export const campaignReducer = persistReducer(
    { storage, key: "aimad-campaign", whitelist: [] },
    (state = initialState, action) => {
    switch (action.type) {
        case CAMPAIGN.ADDCAMPAIGN:
            return initialState ;
        case CAMPAIGN.CAMPAIGN_VALUE:
            return {
                CurrentCampaign : (action.payload.campaign)?  action.payload.campaign : state.CurrentCampaign,
                currentBanner   : ( action.payload.banner ) ? [...state.currentBanner , action.payload.banner] : state.currentBanner ,
            } ;
        case  CAMPAIGN.CAMPAIGNRESET:
            return {
                CurrentCampaign : null,
                currentBanner : []
            } ;
        default:
            return state;
    }
});

