import React, { Component } from 'react';
import { Navbar, Nav, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, Col, CardBody, Container, Row, NavLink } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

      toggleModal() {
          this.setState({
              isModalOpen: !this.state.isModalOpen
          });
      }
      
    render() {
        return(
            <Container className="wrapper-right">  
              <Row className="wrapper-header">
                <Col md="6" xs="6">
                  <CardBody className="occupation">
                            <div className="header-logo">
                                <h1 align="left">NEMANJA SPASIC</h1>
                                <h4 align="left">CV</h4>
                            </div>
                  </CardBody>
                </Col>
              <Col md="6" xs="6">
                  <CardBody className="occupation" style={{padding:"-1px"}}>
                <Navbar dark expand="md" >
                    <div className="header">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar >
                          
                            <Nav vertical align="left">
                            <NavItem>
                                <NavLink className="nav-link" href="/" ><span className="fa fa-print fa-lg"></span> PRINT</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" href="http://ns-app.com/cv1/nemanja_spasic-cv_en.pdf"><span className="fa fa-download fa-lg"></span> DOWNLOAD </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.toggleModal} className="link" style={{cursor: 'pointer'}}><span className="fa fa-envelope fa-lg"></span> CONTACT</NavLink>
                            </NavItem>
                            </Nav> 
                            
                        </Collapse>
                    </div>
                </Navbar>
                </CardBody>
                </Col>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} className="contact">
                <ModalHeader toggle={this.toggleModal} className="contact_header">CONTACT ME</ModalHeader>
                    <ModalBody className="contactBody">
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="name">Name</Label>
                                <Input type="text" id="name" name="name"
                                    innerRef={(input) => this.name = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="Companyname">Company Name</Label>
                                <Input type="text" id="companyname" name="companyname" className="contact_form"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="TEXTAREA">Message</Label>
                                <Input type="textarea" name="text" id="exampleText" />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary" a href="mailto:nemo.spaske@live.com">Send</Button>
                        </Form>
                    </ModalBody>
                </Modal>
              </Row>
            </Container>
        );
    }
}

export default Header;