
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyGiraffeGeo from './components/MyGiraffeGeo'
import * as serviceWorker from './serviceWorker';
import * as Points from './dsources/points';
import '../node_modules/leaflet/dist/leaflet.css';
//<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />

Points.initPoints(5);

ReactDOM.render(
    <div style={{border: 'red solid 3px'}}>
              <h3>Geo Widget</h3>
              <MyGiraffeGeo />
    </div>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
