import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBAnimation
} from 'mdbreact';
import "../styles/ParallaxIntro.css"
import mepic from "../images /me.jpeg"
import AboutModel from "./About"


class ParallaxIntro extends React.Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  componentDidMount() {
    document.querySelector('nav').style.height = '65px';
  }
  componentWillUnmount() {
    document.querySelector('nav').style.height = 'auto';
  }
  render() {
    const navStyle = { marginTop: '1rem' };
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.handleTogglerClick}
      />
    );

    const { collapsed } = this.state;
    return (
      <div id='parallaxintro'>
        <Router>
          <div>
            <MDBNavbar
            
              style={navStyle}
              dark
              expand='md'
              fixed='top'
              scrolling
              transparent
            >
              <MDBContainer>
                <MDBNavbarBrand>
                  {/* <MDBNavLink to='#'>
                    <strong className='white-text'>Chuck's Site </strong>
                  </MDBNavLink> */}
                </MDBNavbarBrand>
                <MDBNavbarToggler  onClick={this.handleTogglerClick} />
                <MDBCollapse isOpen={collapsed} navbar>
                  <MDBNavbarNav className="menu" >
                    <MDBNavItem className="mediacolor">
                      <MDBNavLink className="colortextmedia" to='/' > Home   </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem className="mediacolor">
                      <MDBNavLink className="colortextmedia" to='/About'>About</MDBNavLink>
                    </MDBNavItem >
                    <MDBNavItem className="mediacolor">
                      <MDBNavLink  className="colortextmedia" to='/ContactMe'>Contact Me</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem className="mediacolor">
                      <MDBNavLink  className="colortextmedia"to='#'>Projects</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      {/* <MDBFormInline waves>
                        <div className='md-form my-0'>
                          <input
                            className='form-control mr-sm-2'
                            type='text'
                            placeholder='Search'
                            aria-label='Search'
                          />
                        </div>
                      </MDBFormInline> */}
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {collapsed && overlay}
          </div>
        </Router>
        <MDBView
          src={mepic}
          fixed
        >
          <MDBMask className='rgba-white-light' />
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '100%', width: '100%', paddingTop: '15rem' }}
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 white-text text-center'>
                  
                <h1  className='display- mb-0 pt-md-5 pt-5 white-text font-weight-bold'>
                <MDBAnimation reveal type="bounceInUp"  duration="7000ms" delay=".5s">
                Charles
                
                  <span className='indigo-text font-weight-bold'> Harper</span>
                  
                  </MDBAnimation>
                </h1>
                <MDBAnimation reveal type="bounceInUp"  duration="7000ms" delay=".8s">
                <hr className='hr-light my-4' />
                </MDBAnimation>
               
                <h5 className='text-uppercase pt-md-3 pt-sm-2 pt-3 pb-md-3 pb-sm-3 pb-5 white-text font-weight-bold'>
                <MDBAnimation reveal type="bounceInUp"  duration="7000ms" delay="1s" className="pb-3">
                  Professional Web Developer
                  </MDBAnimation>
                  <MDBAnimation reveal type="bounceInUp"  duration="7000ms" delay="1.4s" className="pt-3">
                      And Entrepreneur 
                  </MDBAnimation>
                </h5>
                <MDBAnimation reveal type="bounceInUp"  duration="7000ms" delay="1.8s">
                <MDBBtn
                  className='btn-indigo'
                  size='lg'
                  href='https://github.com/CharlesHarper'
                  target='_blank'
                  
                >
                  My GitHub
                </MDBBtn>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>

      </div>
    );
  }
}

export default ParallaxIntro;