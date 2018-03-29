
import React, {PropTypes,PureComponent} from 'react';

module.exports = class List extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pager:{},
            list:[],
            loadingTable: true, // 表格loading动画
            loadFail: false, // 表格加载失败
            productList: [], // 产品设备型号列表
        };
    }
    jump(pathname){
        this.context.router.push({pathname});
    }
    componentWillReceiveProps(nextProps,nextState) {
        if(nextProps.location.search !== this.props.location.search){}
    }
    componentWillMount() {

    }
    componentDidMount(){
    }
    render (){
        return (
            <section className={'list'}>
                {`MessagePage`}
            </section>
        );
    }
};