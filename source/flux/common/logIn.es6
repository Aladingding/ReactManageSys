// 登录接口
import Reflux from 'reflux';
import createStore from '../createStore';

export const Actions = Reflux.createActions(['logIn']);
export const Stores = createStore(Actions, 'LogIn', '/firm/common/admin/loginCheck', 'post', true);