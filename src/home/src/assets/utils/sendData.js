import axios from 'axios';
import {ELW_TOKEN} from "./KEY";

const sendData = (url, method = 'get', params = {}, data = '{}', config, func, efunc) => {
  params.acc_tp = 'W';
  params.lang = 'en';
  let headers = {};
  headers[ELW_TOKEN] = sessionStorage.getItem(ELW_TOKEN);
  return axios({
    method,
    headers,
    url,
    params,
    data,
    ...config
  }).then(
    response => {
      if(func !== undefined) func(response.data);
    }
  ).catch(({...result}) => {
    const {response} = result;
    if(response !== undefined && response.data !== undefined && response.data.error !== undefined && efunc !== undefined){
      efunc(response.data.error);
    }else efunc();
  });
};

export default sendData;