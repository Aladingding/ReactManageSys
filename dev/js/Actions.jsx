import Reflux from 'reflux';

export const Actions = Reflux.createActions([
    'setNames'//将选中参数发送到store里处理，避免层层回调
]);


