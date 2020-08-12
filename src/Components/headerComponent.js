import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import {NavLink, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, CardBody, Container} from "reactstrap";

class Header extends Component {

toggleModal = this.toggleModal.bind(this);
state = {
  isOpen: false
};

toggleModal() {
    this.setState({
        isModalOpen: !this.state.isModalOpen
    });
}

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Container className="wrapper-header">
      <MDBNavbar color="indigo" dark expand="md" className="wrapper-right">
        <MDBNavbarBrand align="left" className="occupation">
          <CardBody className="header-logo">
            <h2>NEMANJA SPASIC</h2>
            <h3>CV</h3>
          </CardBody>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem >
              <NavLink href="#" ><span className="fa fa-print fa-lg"></span>PRINT</NavLink>
            </MDBNavItem>
            <MDBNavItem>
              <NavLink href="http://ns-app.com/cv1/nemanja_spasic-cv_en.pdf"><span className="fa fa-download fa-lg"></span>DOWNLOAD </NavLink>
            </MDBNavItem>
            <MDBNavItem>
              <NavLink  onClick={this.toggleModal} style={{cursor: 'pointer'}}><span className="fa fa-envelope fa-lg"></span>CONTACT</NavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>

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
      </MDBNavbar>
      </Container>
    );
  }
}

export default Header;