import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Footer(props) {
    return(
        <Container className="wrapper-right">
            <Row>
              <Col sm="6">  
                    <div className="footer" align="left">
                        <p>@ Nemo 2020</p>
                    </div>
                </Col>
                <Col sm="6">
                    <div className="footer" align="right">
                        <a href="#" class="top">SCROLL TO TOP</a> / <a class="contact_link" href="#contact">CONTACT</a>
                    </div>
                </Col>
        </Row>
    </Container>
    )
}

export default Footer;