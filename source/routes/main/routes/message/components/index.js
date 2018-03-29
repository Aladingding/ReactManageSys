
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StoreDemo } from 'flux/StoreDemo.es6';
import { Actions } from 'flux/Actions.es6';

import*as Login from 'flux/common/logIn.es6';

import axios from 'axios';
import Qs from 'qs';
import Reflux from 'reflux';

import TodoActions from './TodoActions.js';
import TodoStores from './TodoStores.js';

class Message extends PureComponent {
    static contextTypes = {
        router: PropTypes.object.isRequired
    };
    constructor(props) {
        super(props);
        // Actions.login();
        //this.unsubscribe = TodoStores.listen(this.onChangeModel.bind(this));
        //TodoActions.changeModel();

        // 监听消息
        this.unlisten = [];
        this.unlisten.push(Login.Stores.listen(this.onLogin.bind(this)));
    }
    componentDidMount(){
        // 订阅消息
        Login.Actions.logIn({
            username: 'firmAdmin',
            password: '123456'
        });
    }
    componentWillMount(){
        const pathname = this.props.location.pathname;
        if(pathname === '/main/message' || pathname === '/main/message/'){
            this.context.router.push({ pathname: '/main/message/list'});
        }
    }
    onChangeModel(model){
        console.log(model,'-------------model-------------');
    }
    onStatusChange(){
        console.log(11111111);
        this.setState({ list: TodoStore.items });
    }
    onLogin(data){
        console.log(data,'---login data---');
    }
    componentWillUnmount(){
        //this.unlisten();
        this.unlisten.map((ele)=>{
            typeof ele === 'function' && ele();
        })
    }
    render (){
        let props = {};
        let children = this.props.children ? React.cloneElement(this.props.children, props) : null;
        return (
            <section>
                <div className="main">
                    {`Message List Page`}
                    {children}
                </div>
            </section>
        );
    }
}

module.exports = Message;