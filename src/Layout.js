import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/Home.js";
import About from "./views/About.js"
import ContactMe from "./views/ContactMe.js"
// import Error404Chuck from "./components/Error404Chuck.js";

/**
 * Here we import to components that we will be using as "views" in our app
 * - Home: Will render when the url is /home or /index.html
 * - Product: Will render if the url is similar to /product/1,  /product/2,  /product/3... etc.
 */

/**
 * The idea is to declare a component that will take care off laying out the entire application
 * resolving all the possible URL
 */

export default class Layout extends React.Component {
  componentDidMount() {
    //This function fetches all categories from the database.
    // retrieve('product', function(){
    //     retrieve('category');
    // });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
         
          <Switch>
            <Route exact path="/index.html" component={Home} />
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/ContactMe" component={ContactMe} />
            {/* <Route exact path="/contact-us" component={ContactviewExcep} />
            <Route exact path="/TopPrice" component={PricingExcep} />
            <Route exact path="/Scheduling" component={SchedulingExcep} />
            <Route exact path="/FaqExcep" component={FaqExcep} /> */}
            {/* <Route component={Error404Chuck} /> */}

            {/* <Route render={() => <h1>Not found!</h1>} /> */}
          </Switch>
         
        </div>
      </BrowserRouter>
    );
  }
}

