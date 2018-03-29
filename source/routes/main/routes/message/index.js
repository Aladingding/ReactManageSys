module.exports = {
    path: 'message',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./components/index'));
        });
    },
    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
          cb(null, [
              require('./routes/list'),
              // require('./routes/add'),
              // require('./routes/edit')
          ]);
        });
    }
};
