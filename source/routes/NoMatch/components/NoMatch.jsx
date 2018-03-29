/*
*  无法匹配任何路由时加载的模块
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NoMatch extends Component{
	static contextTypes = { 
      router: PropTypes.object.isRequired
    };
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate (nextProps, nextState) {
        return false;
    }
    componentWillMount () {
		this.context.router.push('/');
	}
    render() {
        return null;
  }
}

module.exports = NoMatch;
