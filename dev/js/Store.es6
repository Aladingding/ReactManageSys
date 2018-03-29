'use strict';
import {Actions } from './Actions.jsx';
import Reflux from 'reflux';
export const Store = Reflux.createStore({
    listenables: Actions,
    onSetNames(data){
        setTimeout(()=>{
            this.trigger(data);
        },3000)
    },
});