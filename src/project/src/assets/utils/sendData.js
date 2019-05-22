import axios from 'axios';
import {MRMENTION_TOKEN} from './KEY';

const sendData = (url, method = 'get',params = {}, data = '{}', config, func, efunc) => {
  params.acc_tp = '001-004';
  params.lang = 'kr';

  let headers = {};
  if(localStorage.auto_login !== undefined && localStorage.auto_login){
    headers[MRMENTION_TOKEN] = localStorage.getItem(MRMENTION_TOKEN)
    localStorage.setItem('key', 'value');
  }else{
    headers[MRMENTION_TOKEN] = sessionStorage.getItem(MRMENTION_TOKEN)
  }
  console.log(headers);
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