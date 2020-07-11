import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarText, Container, Col, Row, CardBody } from 'reactstrap';

class Skills extends Component {
  render() {
    return(
        <Container>  
                <Col>
                  <CardBody>
                  <ul>	
                          <li><a href="#" class="print_menu_link" onClick="window.print(); return false;">Print</a></li>
                          <li><a href="cv-en.pdf" class="download_menu_link">Download</a></li>
                          <li><a href="#contact" class="contact_menu_link contact_link">Contact</a></li>
                      </ul>
                  </CardBody>
                </Col>
        </Container>
    );
  }
}

export default Skills;