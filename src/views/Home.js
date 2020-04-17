import React from "react";
import ParallaxIntro from "../components /ParallaxIntro.jsx"
import Parallax from "../components /Parallax.jsx"
import ContactMe from "../components /ContactMe.jsx"


// import ProjectsChucks from "../components/ProjectsChucks.jsx";
// import FooterChucks from "./FooterChucks.jsx"  


export default class Home extends React.Component {
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
        
      <ParallaxIntro />
      <Parallax />
      <ContactMe />
        {/* <ParallaxChucks />
      
        {/* <CarouselExcep
          carouselLength={3}
          ImgUrl1={CarouselExcepIMG1}
          ImgUrl2={CarouselExcepIMG2}
          ImgUrl3={CarouselExcepIMG3}
          text1=""
          text2=""
        /> */}
      </div>
      </div>
    );
  }
}
