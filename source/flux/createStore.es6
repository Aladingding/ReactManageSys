
import Reflux from 'reflux';
import axios from 'axios';
import Qs from 'qs';
import {Actions} from './Actions.es6';

const createStore = (Actions, actionName, apiUrl, apiMethod, isTriggerFail)=>{
    const opts = {
        listenables: Actions,
        [`on`+actionName]:(params,other) => {
            console.log(params,'---------------params--------');
            apiUrl = `/firm/common/admin/loginCheck`;
            // 请求设置
            apiMethod = apiMethod || 'get';
            apiUrl = apiMethod === 'get' ? `v1/web${apiUrl}?${Qs.stringify(params)}`: `v1/web${apiUrl}`;

            const url = apiUrl  || `${'https://dp.clife.net//v1/web/firm/common/admin/loginCheck?'}${Qs.stringify(params)}`;

            axios.defaults.headers[`X-Requested-With`] = 'XMLHttpRequest';
            axios.defaults.timesout = 2500;

            if(apiMethod==='get'){
                axios.get(url).then((res)=>{
                    console.log(res,'---axios------get-----data---');
                    store.trigger(res);  // store.trigger是Reflux.createStore的实例方法 // this.trigger(res);
                });
                return;
            }

            axios.post(url,Qs.stringify(params)).then((res)=>{
                console.log(res,'---axios-------post----data---');
                store.trigger(res);  // store.trigger是Reflux.createStore的实例方法 // this.trigger(res);
            });
        }
    };
    const store = Reflux.createStore(opts);
    return store;
};
export default createStore