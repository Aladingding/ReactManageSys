
import axios from 'axios';
import Qs from 'qs';
import Reflux from 'reflux';
import {Actions} from './Actions.es6';

export const StoreDemo = ()=>{
    const opts = {
        listenables: [Actions],
        onLogin(data){
            console.log(data,'---111111---------- data---');
            const params = {
                username: 'firmAdmin',
                password: '123456'
            };
            axios.post(`${'https://dp.clife.net//v1/web/firm/common/admin/loginCheck?'}${Qs.stringify(params)}`).then((res)=>{
                console.log(res,'---res---------- data---');
            });
        }
    };
    const store = Reflux.createStore(opts);
    return store;
};


// import fetchData from './fetchData';
// import Tools from '../components/tools';
// import Safe from '../components/webFuns';
//
// let {domainName, isBoolean} = Tools;
//
// const createStore = (Actions, actionName, apiName, method, isTriggerFail, isNeedCsrf)=>{
//     //isNeedCsrf 是否需要跨站请求伪造防护
//     let store;
//     let requestMethod = method || 'get';
//     let opts = {
//         listenables: Actions
//     };
//     opts['on' + actionName] = (model, other) => {
//         let options = {};
//         model = model || {};
//         let time = new Date().getTime();
//         let body = Qs.stringify({
//             ...model,
//             '_': time
//         });
//         let url = domainName + apiName + '?' + body;
//         options.credentials = 'same-origin';
//         options.headers = {
//             'X-Requested-With': 'XMLHttpRequest'
//         };
//         if (requestMethod == 'post') {
//             url = domainName + apiName;
//             options.body = body;
//             options.method = requestMethod;
//             options.headers['content-type'] = 'application/x-www-form-urlencoded';
//         }
//
//         //如果需要跨站请求伪造防护
//         if(isNeedCsrf){
//             let hostname = location.hostname == 'localhost'? 'dp.clife.net' : location.hostname;
//
//             if (requestMethod == 'get'){
//                 url += '&csrfsign=' + Safe.calcSign('https://'+ hostname +'/v1/web'+ apiName, {...model, '_': time});
//             }else{
//                 url += '?csrfsign=' + Safe.calcSign('https://'+ hostname +'/v1/web'+ apiName, {...model, '_': time});
//             }
//
//             options.headers['csrfRouteUrl'] = location.hash.split('?')[0].substring(1);
//             options.headers['clifectoken'] = Safe.getToken('clifectoken');
//         }
//
//         fetchData(url, options).then((data) => {
//             store.trigger(data, other);
//         },(response) => {
//             if (isTriggerFail && isBoolean(isTriggerFail)) {
//                 store.trigger({
//                     code: null,
//                     msg: window.navigator.onLine ? response.status + ' ' + response.statusText : '网络异常，请检查您的网络设置！'
//                 });
//             }
//         });
//     };
//
//     store = Reflux.createStore(opts);
//     return store;
// };
//
// export default createStore;