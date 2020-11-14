

const API_CONTS = {
  LOGIN: 'login',
  LOGINVALID: "loginvalid",
  SIGNUP : "signup",
  GETCITY : "getcity",
  EMAILCHECK : "emailcheck",
  ADDPASSENGER : "passenger/add",
  GETBOOKIG   : "booking",
  GETPAYMENT : "payment",
  ADDBOOKING  : "addbooking",
  GETPASSENGER : "passenger",
  GETDOCTOR   : "doctor",
  ADDDOCTOR    : "adddoctor",
  ADDCARDDETAIL : "addpayment/add",
  GETEARNING : "booking/earning",
  BOOKINGSTAR : "booking/start",
  BOOKINGPICKEDUP : "booking/pickedup",
  BOOKINGDROPOF : "booking/dropof",
  BOOKINGEND : "booking/end",
  CATEGORY3 : "category/3",
  CATEGORY : "subcategory/1",
  JOBROLE : "jobrole",
}

const RESTHELPER = "RESTHELPER";
const RESTHELPER_VALUE = "SET_RESTHELPERVALUE";
const RESTHELPER_RESET = "RESTHELPER_RESET";


// Auth
const AUTH = {
  SET_STATUS: 'SET_AUTH_STATUS',
  REGISTER_USER: 'AUTH_REGISTER_USER',
  LOGIN_VALID: "SET_VALIDATELOGIN",
  LOGIN_USER: 'AUTH_LOGIN_USER',
  LOGOUT_USER: 'AUTH_LOGOUT_USER',
  USER: 'AUTH_USER_AUTH',
  USER_DATA: 'AUTH_USER_DATA',
  UPDATE_USER: "AUTH_USER_UPDATE"
};


// Auth
const CAMPAIGN = {
  ADDCAMPAIGN: 'SET_ADDCAMPAIGN',
  CAMPAIGN_VALUE: 'SET_CAMPAIGN_VALUE',
  CREATEBANNER : "SET_CREATEBANNER",
  COMPLETECOMPAIGN : "SET_COMPLETECOMPAIGN",
  CAMPAIGNRESET : "SET_CAMPAIGNRESET"
};



const GOOGLE = {
  KEY : "AIzaSyDB1ujwvkFEo87xhHyHhHP52iJ6zMlbB_w"
  }
  
  const COUNTRYCITY = {
   CITY: 'SET_CITY',
   CITY_VALUE: 'SET_CITYVALUE',
  }
  
  const BOOKING = {
    GETBOOKING: 'SET_GETBOOKING',
    GETEARNING: 'SET_GETEARNING',
    GETBOOKING_VALUE: 'SET_GETBOOKINGVALUE',
   }
  
   const USERS = {
     GETPASSENGER : "SET_GETPASSENGER",
     GETDOCTOR : "SET_GETDOCTOR",
     GETPAYMENT : "SET_GETPAYMENT",
     SETUSERS_VALUE : "SET_SETUSERS_VALUE"
  
   }

export {  
  API_CONTS , 
  RESTHELPER_VALUE , 
  RESTHELPER , 
  RESTHELPER_RESET,
  AUTH,
  CAMPAIGN,
  COUNTRYCITY, 
  BOOKING, 
  USERS, 
  GOOGLE , 
  
};

export const restAction = payload => ({
  type: RESTHELPER,
  payload
});

export const restActionValue = payload => ({
  type: RESTHELPER_VALUE,
  payload
});

export const RESTHELPERRESET = () => ({
  type: RESTHELPER_RESET
});




