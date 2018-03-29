
const message = require('./routes/message/');  // 消息页面
//const newsManage = require('./routes/newsManage/');  // 消息页面

module.exports = {
    path: 'main',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Main'));
        });
    },
    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [
                message,
                //newsManage
            ]);
        });
    }
};