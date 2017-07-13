import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import RouterConfig from './config/routerconfig'
import 'antd/dist/antd.css'
import './index.css'


ReactDOM.render(<RouterConfig />, document.getElementById('root'));
registerServiceWorker();
