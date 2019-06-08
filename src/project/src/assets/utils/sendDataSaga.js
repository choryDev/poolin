import axios from 'axios';
// import {write} from './message';
import {MRMENTION_TOKEN} from './KEY';
const sendDataSaga = (url, method = 'get',params = {}, data = '{}', config) => {
    params.acc_tp = '000-001';
    params.lang = 'kr';
    let headers = {};
    headers[MRMENTION_TOKEN] = localStorage.getItem(MRMENTION_TOKEN)
    return axios({
        method,
        headers,
        url,
        params,
        data,
        ...config
    }).then(
        response => {
            console.log(response)
            if(response.status !== 200) throw response;
            return response
        }
    )
    .catch(({...result}) => {
        const {response} = result;
        var msg;
        if(response.data.message !== undefined){
            // msg = JSON.parse(response.data.message === undefined ? '' : response.data.message);
            msg = response.data.message;
        }
        return msg
    });

};

export default sendDataSaga;