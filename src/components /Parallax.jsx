
import React, { Component } from 'react';
import MDBParallaxWrapper from './MDBParallaxWrapper';
import mepic from "../images /me.jpeg"

  class Parallax extends Component {
    render() {
      return (
        <>

    <MDBParallaxWrapper
      image={mepic}
      speed={0.5}
      height='50vh'
      type='scale'
    />
    <MDBParallaxWrapper
      image='https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(18).jpg'
      speed={2}
      height='50vh'
      type='opacity'
    />


    {/* <MDBParallaxWrapper
      image='https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(20).jpg'
      speed={0.2}
      height='50vh'
      type='scroll-opacity'
    />
    <MDBParallaxWrapper
      image='https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(57).jpg'
      speed={0.2}
      height='50vh'
      type='scale-opacity'
    /> */}
    </>




    );
  }
}

export default Parallax;