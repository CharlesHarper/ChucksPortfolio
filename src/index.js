import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Layout from "./Layout";
import "./styles/ParallaxIntro.css"

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <Layout /> , document.getElementById('root'));

registerServiceWorker();