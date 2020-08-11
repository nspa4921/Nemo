import React, { Component} from 'react'
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, Modal, ModalHeader, ModalBody, Form, 
FormGroup, Label, Input } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props); 

        this.toggle = this.toggle.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            isOpen: false,
            showNavbar: false,
            isModalOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        
        return (
            <div className="wrapper-right container"> 
                <Navbar className="wrapper" color="transparent" expand="md" dark>
                    <NavbarBrand href="#" className="mr-auto occupation" align="left"><h2>NEMANJA SPASIC</h2>CV</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto occupation" navbar>
                            <NavItem>
                            <NavLink className="nav-link" href="/"><span className="fa fa-print fa-lg"></span>PRINT</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink className="nav-link" href="http://ns-app.com/cv1/nemanja_spasic-cv_en.pdf"><span className="fa fa-download fa-lg"></span>DOWNLOAD </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink onClick={this.toggleModal} className="nav-link" style={{cursor: 'pointer'}}><span className="fa fa-envelope fa-lg"></span>CONTACT</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
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
            </div>
        )
    }
}

export default Header