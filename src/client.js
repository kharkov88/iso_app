import React      from 'react';
import ReactDOM   from 'react-dom';
import { browserHistory, Router } from 'react-router';
import App        from 'components/App';
import routes     from './routes'

if('serviceWorker34' in navigator){
    navigator.serviceWorker.register('/sw.js',{ scope: '/' })
    .then(reg=>{
        if(reg.installing){
            console.log('servWorker installing')
        }else if(reg.waiting){
            console.log('servWorker insalled')
        }else if(reg.active){
            console.log('servWorker active')
        }
    })
    .catch(function(error) {
        // registration failed
        console.log('Registration failed with ' + error);
      });
}

const component = (
  <Router history={browserHistory}>
    {routes}
  </Router>
);

ReactDOM.render(component, document.getElementById('react-view'));
