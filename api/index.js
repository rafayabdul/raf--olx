import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api/';
//const BASE_URL = "http://aimad.services4digital.com/api/";

let config = {
   authToken   : ( localStorage.getItem("authToken") ) ?  localStorage.getItem("authToken") : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYwMjU5MTc1NywiZXhwIjoxNjAyNTk1MzU3LCJuYmYiOjE2MDI1OTE3NTcsImp0aSI6IllRNHNhZDZBUVhpbFFrbXAiLCJzdWIiOjEsInBydiI6ImY2NGQ0OGE2Y2VjN2JkZmE3ZmJmODk5NDU0YjQ4OGIzZTQ2MjUyMGEifQ.w0qTAeEkpd8PuSkVXpiwj47GwbSOIxHWSg7d3IfkISY'
};

export const getAPIConfig = () => ({ ...config });
export const updateAPIConfig = access_token => {
   localStorage.removeItem("authToken");
   localStorage.setItem("authToken", access_token.authToken );
   config = {
      ...config,
      access_token
   };
};

export const callLogin = (endpoint,   method = 'get', data) => {
   return new Promise((resolve, reject) => {
      axios({
         method,
         url: `${BASE_URL}${endpoint}`,
         headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
         data
      })
         .then(res => resolve(res.data))
         .catch(err => {
            reject({
               status: (err.response && err.response.status) || '',
               message: err.message || ''
            });
         });
   });
};
export const callAPI = (endpoint, method = 'get', data ) => {
   const headerOptions = {
      method: method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization' : getAPIConfig().access_token
      }
   }
   if ( data !== null ){
      headerOptions.body = JSON.stringify(data)
   }


   return fetch( `${BASE_URL}${endpoint}` , headerOptions )
   .then((response) => response.json())
   .then((json) => {
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
};
