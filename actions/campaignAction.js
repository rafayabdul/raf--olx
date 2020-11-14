import { CAMPAIGN } from './constant';

export const ADDCAMPAIGN = (payload ) => ({
  type: CAMPAIGN.ADDCAMPAIGN,
  payload
});

export const CAMPAIGNVALUE = ( payload ) => ({
  type: CAMPAIGN.CAMPAIGN_VALUE,
  payload
});

export const CAMPAIGNRESET = ( ) => ({
  type: CAMPAIGN.CAMPAIGNRESET
});

export const CREATEBANNER = (payload ) => ({
  type: CAMPAIGN.CREATEBANNER,
  payload
});
export const COMPLETECOMPAIGN = (payload ) => ({
  type: CAMPAIGN.COMPLETECOMPAIGN,
  payload
});






