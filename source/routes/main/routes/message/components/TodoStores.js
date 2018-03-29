import Reflux from 'reflux';
import axios from 'axios';
import Qs from 'qs';
import TodoActions from './TodoActions.js';

export default Reflux.createStore({
	listenables: [TodoActions],
	onChangeModel(data){
        console.log(data,'---111111---------- data---');
        const params = {
            username: 'firmAdmin',
            password: '123456'
        };

        // axios.post(`${'https://dp.clife.net/v1/web/firm/common/admin/loginCheck?'}${Qs.stringify(params)}`).then((res)=>{
        //     console.log(res,'---res---------- data---');
        //     this.trigger(res);
        // });

        const method = 'post';
        // 实例化方法
        const options = {
            // url: '/firm/common/admin/loginCheck', 覆盖不了
            baseURL: 'v1/web',
            headers: { 'X-Requested-With': 'XMLHttpRequest' },

            method: method || 'get',
            params: params,
            credentials: 'same-origin',
            //withCredentials: true,
            timeout: 1000,
            proxy: {
                host: 'https://dp.clife.net/',
                port: 8080,
                // auth: {
                //     username: 'mikeymike',
                //     password: 'rapunz3l'
                // }
            }
        };

        if(method==='post') options.headers['content-type'] = 'application/x-www-form-urlencoded';

        const iAxios = axios.create(options);

        iAxios.get('/firm/common/admin/loginCheck').then((res)=>{
            this.trigger(res);
            console.log(res,'---res----------iAxios---');
        }).catch((err)=>{

        });
	},
});
