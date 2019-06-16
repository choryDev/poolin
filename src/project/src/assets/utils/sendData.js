import axios from 'axios';
import {ELW_TOKEN} from './KEY';

const sendData = (url, method = 'get',params = {}, data = '{}', config, func, efunc) => {
  params.access_tp = 'W';
  params.lang = 'kr';

  let headers = {};
  if(localStorage.auto_login !== undefined && localStorage.auto_login){
    headers[ELW_TOKEN] = 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJlbHdfaXNzdXJlIiwic3ViIjoiZWx3X3Rva2VuIiwiX19lbWFpbF9fIjoiaWp1bmMyQGdtYWlsLmNvbSIsIl9fdXNlcm5hbWVfXyI6ImlqdW5jMiIsImlhdCI6MTU2MDA1MjAzOH0.cuKW3_OqTR9Xkdd3-5l1COyvEKJYYcUYJ7V6iWgaIY4'
  }else{
    headers[ELW_TOKEN] = 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJlbHdfaXNzdXJlIiwic3ViIjoiZWx3X3Rva2VuIiwiX19lbWFpbF9fIjoiaWp1bmMyQGdtYWlsLmNvbSIsIl9fdXNlcm5hbWVfXyI6ImlqdW5jMiIsImlhdCI6MTU2MDA1MjAzOH0.cuKW3_OqTR9Xkdd3-5l1COyvEKJYYcUYJ7V6iWgaIY4'
  }
  return axios({
    method,
    headers,
    url,
    params,
    data,
    ...config
  }).then(
    response => {
      if(func !== undefined) func(response);
    }
  ).catch(
    error => {
      if(efunc !== undefined) efunc(error);
    }
  );
};

export default sendData;