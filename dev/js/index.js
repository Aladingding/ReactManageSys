import React,{Component} from 'react';
import {render} from 'react-dom';
import App from './App.jsx';//文件路径需要加一个./表示当前目录下查找，不然会到node_modules里查找


render(<App name = 'Tomy' />,document.getElementById('root'));

