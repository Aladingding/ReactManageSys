import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import {Actions} from './Actions.jsx';
// import {Store} from './Store.es6';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {name:'Hello'};
    }
    static contextTypes = {
        router: PropTypes.object.isRequired
    };
    componentDidMount() {
    }
    handleSelector(e){
        e=  e || window.event; //react的差异和实际原生js的差异正好相反，window.event原生js必须写在前面
        const v = e.target.value;
    }
    handleEvent(){
        this.setState( { visible : false});
    }
    render(){
        const children = this.props.children ? React.cloneElement(this.props.children, {}):null;
        return (
            <section className="app">
                { children }
            </section>
        )
    }
}
export default App;


