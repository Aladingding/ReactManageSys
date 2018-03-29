import React, {Component,PropTypes} from 'react';
import {Actions} from './Actions.jsx';
import {Store} from './Store.es6';

const ComponentA = React.createClass({
    render(){
        console.log(this.props,'this.props');
        //onClick={this.props.handleEvent}
        return(
            <section >
                <h1>模块A</h1>
                {this.props._ComponentB}
            </section>
        )
    }
});

const ComponentB = React.createClass({
    render(){
        console.log('this.props.visible',this.props.visible)
        return (
            <section onClick={this.props.handleEvent}>ComponentBS</section>
        )
    }
});

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name:'Hello'
        };
        Store.listen((data)=> {this.setState(data)});
    }
    componentDidMount() {
        Actions.setNames({name: 'Andy Tom'});
    }
    selector(e){
        e=  e || window.event;//react的差异和实际原生js的差异正好相反，window.event原生js必须写在前面

        let v = e.target.value;
        //http://127.0.0.1:1080/pac?t=20170605101809626

        console.log(v,window.event)
    }
    handleEvent(){
        console.log('ComponentSecond');
        this.setState( { visible : false});
    }
    render(){
        console.log('visible',this.state.visible);
        return (
            <section>
                <aside>
                    <ComponentA _ComponentB = {<ComponentB visible ={this.state.visible} handleEvent={this.handleEvent.bind(this)}/>} />
                </aside>
                <aside>
                    <select className="het-select-short" onClick={this.selector.bind(this)}>
                        <option value="">请选择</option>
                        <option value="2">北京</option>
                        <option value="3">安徽</option>
                        <option value="4">福1建dsasdasda</option>
                        <option value="5">甘肃</option>
                    </select>
                </aside>
                {this.state.name}
            </section>
        )
    }
}
export default App;


