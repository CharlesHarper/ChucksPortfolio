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
import ContactMe from "./ContactMe.jsx"

class NavIntro extends React.Component {
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
              color='primary-color'
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
                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                <MDBCollapse isOpen={collapsed} navbar>
                  <MDBNavbarNav >
                    <MDBNavItem>
                      <MDBNavLink to='/' > Home   </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to='/AboutModel'>About</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to='/ContactMe'>Contact Me</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to='#'>Projects</MDBNavLink>
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
       
        </MDBView>

      </div>
    );
  }
}

export default NavIntro;