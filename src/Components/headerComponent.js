import React, { Component } from 'react';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink, Container, Col, Row, CardBody } from 'reactstrap';


class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
      
  render() {
    return(
    <React.Fragment>
        <Container className="wrapper-right">  
              <Row className="wrapper-header">
                <Col sm="6" >
                  <CardBody>
                            <div className="header-logo">
                                <h1 align="left">NEMANJA SPASIC</h1>
                                <h4 align="left">CV</h4>
                            </div>
                  </CardBody>
                </Col>

                <Col>
                  <CardBody >
                  <Navbar dark expand="md" >
                    <div className="header" >
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav vertical align="left">
                            <NavItem>
                                <NavLink className="nav-link" href="/" to='/home'><span className="fa fa-print fa-lg"></span> PRINT</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" href="/" to='/menu'><span className="fa fa-download fa-lg"></span> DOWNLOAD </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  href="/"  to='#'><span className="fa fa-envelope fa-lg"></span> KONTAKT</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

                  </CardBody>
                </Col>
        </Row>
        </Container>
    </React.Fragment>
    );
  }
}

export default Header;