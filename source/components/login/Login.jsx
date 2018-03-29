/*
*  登录模块
*/
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import './style/login.less';

class Login extends Component{
    static contextTypes = {
      router: PropTypes.object.isRequired
    };
	goIndex(){
        this.context.router.push({ pathname: '/main' });
        console.log(this.props,'url')
	}
	render () {
		console.log(this.props,'this.props');
		return (
			<div className='ms-wrapper-login'>
				<div className='ms-wrapper-login-inner'>
					<div className='ms-title'>
						<div className='ms-logo'></div>
						<h1>后台管理系统</h1>
					</div>
					<div className="ms-login-panel">
						<div className='ms-form-login'>

							<input className="username" value="" placeholder="请输入用户名" />
							<input className="password" value="" placeholder="请输入账户密码" />
							<ul>
								<li><Link to={{pathname:'admin'}} activeClassName="active">登录</Link></li>
							</ul>
							<div className='ms-form-items'>
								<Link to='/main/' activeClassName="active">IndexPage</Link>
							</div>
						</div>
					</div>

				</div>
			</div>
		);
	}
}

export default Login;