/*
*  内容展示模块
*/

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import './style/index.less';

import Login from 'components/login/Login.jsx';

class Main extends PureComponent{
    state = {
        userInfo: {},  // 保存用户信息
        userAppInfo: [],  // 保存平台列表信息
        regionList: [],  // 保存区域信息
        typeList: [],  // 保存产品大类列表信息
        authResourceList: [],  // 保存权限资源列表
        rightsList: []  // 遍历权限接口返回rightCode
    };
    static contextTypes = {
        router: PropTypes.object.isRequired
    };
    static defaultProps = {
    };
    constructor(props) {
        super(props);
        this._setState = this._setState.bind(this);
        this.isHasAccessRight = this.isHasAccessRight.bind(this);
    }
    componentWillUnmount() {
    }
    componentWillReceiveProps(nextProps) {
    }
    componentDidMount () {
    }
    _setState(state,fn){
        this.setState(state,fn);
    }
    isHasAccessRight(props){
    }
    render (){
        const children =  this.props.children ? React.cloneElement(this.props.children, {}) :null;

        return (
            <div className="main">
                <Login />
                <section>
                    <header>{ `header` }</header>
                    <Link to='/main/message' activeClassName="active">MessagePage</Link>
                </section>
                <div id='content' style={{height: 800,border: '1px solid #dedede'}}>
                    { `sidebar` }
                    <div id='rightSideBar'>{ children }</div>
                </div>
                <section>{ `footer` }</section>
            </div>
        );
    }
}

module.exports = Main;




	