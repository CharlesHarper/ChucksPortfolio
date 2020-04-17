import React from "react";
import AboutMe from "../components /About.jsx"


// import ProjectsChucks from "../components/ProjectsChucks.jsx";
// import FooterChucks from "./FooterChucks.jsx"  


export default class About extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    //This is getting the categories from the state & if there are categories
    // //then subscribe
    // let categories = store.getState('category');
    // if(categories) this.setState({categories});
    // this.subscribe(store, 'category', (categories) => {
    //     this.setState({ categories });
    // });
  }

  render() {
    return (
      <div>
      <div className="text-center notranslate">
        
      <AboutMe />
   
      </div>
      </div>
    );
  }
}
