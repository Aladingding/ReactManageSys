
// React全家桶
import React,{ Component } from 'react';
import { render as Render } from 'react-dom';
import { Router, Route, hashHistory, browserHistory, useRouterHistory } from 'react-router';

// 入口组件模块
import App from './components/App';  //文件路径需要加一个./表示当前目录下查找，不然会到node_modules里查找
import Login from './components/login/Login';
const Main = require('./routes/main');
const NoMatch = require('./routes/nomatch');

// 根路由树
const rootRoute = {
    path: '/',
    component: App,
    indexRoute: { component: Login },
    childRoutes:[ Main, NoMatch ]
};

// 渲染容器
Render(<Router routes={rootRoute} history={hashHistory} />, document.getElementById('root'));







