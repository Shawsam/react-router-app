import {render} from "react-dom";
import registerServiceWorker from './registerServiceWorker';
import RouterConfig from "router"
import './common.css';
import './index.css';

render(
  <div>
    {RouterConfig}
  </div>,
  document.getElementById('root')
);
registerServiceWorker();
