import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card, Container, Row, Col, CardTitle, CardText, } from 'reactstrap';
import Icon from '@material-ui/core/Icon';


export default function SimpleAccordion() {

      return (     
        <Container>  
          <CardTitle align="left">
            <h2>SKILLS</h2>
            </CardTitle>
                <hr/>
                <br></br>
            <CardTitle align="left">
                <h5>TECHNICAL SKILLS</h5>
            </CardTitle>
              <Row>
                <Col xs="9" sm="9"  align="left">
                <CardText>▷ HTML, XHTML, CSS, PHP, MySQL</CardText> 
                </Col>
                <Col xs="3" sm="3" align="left">
                <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13}} />
                </Col>
              </Row>
              <Row>
                <Col xs="9" sm="9"  align="left">
                <CardText>▷ JS, React and React-Native, Redux, NodeJs, Git, Github </CardText> 
                </Col>
                <Col xs="3" sm="3" align="left">
                <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13}} />
                </Col>
              </Row>
              <Row>
                <Col xs="9" sm="9"  align="left">
                <CardText>▷ CMS systems: Wordpress, Joomla </CardText> 
                </Col>
                <Col xs="3" sm="3" align="left">
                <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13}} />
                </Col>
              </Row>
              <Row>
                <Col xs="9" sm="9"  align="left">
                <CardText>▷ Good knowledge of Bootstrap 4 & Grid System</CardText> 
                </Col>
                <Col xs="3" sm="3" align="left">
                <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13}} />
                </Col>
              </Row>
              <Row>
                <Col xs="9" sm="9"  align="left">
                <CardText>▷ Visual Studio Code, Dreamviewer </CardText> 
                </Col>
                <Col xs="3" sm="3" align="left">
                <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13}} />
                </Col>
              </Row>
              <Row>
                <Col xs="9" sm="9"  align="left">
                <CardText>▷ MsOffice packages (Word, Excel, Powerpoint, Outlook) </CardText> 
                </Col>
                <Col xs="3" sm="3" align="left" >
                <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13}} />
                </Col>
              </Row>
              <Row>
                <Col xs="9" sm="9"  align="left">
                <CardText>▷ Sharepoint  </CardText> 
                </Col>
                <Col xs="3" sm="3" align="left">
                <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star unchecked" style={{ fontSize: 13}} />
                </Col>
              </Row>
              <Row>
                <Col xs="9" sm="9"  align="left">
                <CardText>▷ Amadeus GDS booking systems  </CardText> 
                </Col>
                <Col xs="3" sm="3" align="left">
                <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star unchecked" style={{ fontSize: 13}} />
                </Col>
              </Row>

                <hr/>
                <br></br>
            <CardTitle align="left">
                <h5>LANGUAGUES</h5>
            </CardTitle>
              <Row>
                <Col xs="9" sm="9"  align="left">
                <CardText>▷ Danish (Advanced) </CardText> 
                </Col>
                <Col xs="3" sm="3" align="left">
                <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star unchecked" style={{ fontSize: 13}} />
                </Col>
              </Row>
              <Row>
                <Col xs="9" sm="9"  align="left">
                <CardText>▷ English (Advanced) </CardText> 
                </Col>
                <Col xs="3" sm="3" align="left">
                <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star unchecked" style={{ fontSize: 13}} />
                </Col>
              </Row>
              <Row>
                <Col xs="9" sm="9"  align="left">
                <CardText>▷ Hungarian (Native) </CardText> 
                </Col>
                <Col xs="3" sm="3" align="left">
                <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13}} />
                </Col>
              </Row>
              <Row>
                <Col xs="9" sm="9"  align="left">
                <CardText>▷ Serbian (Native)</CardText> 
                </Col>
                <Col xs="3" sm="3" align="left">
                <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13}} />
                </Col>
              </Row>
              <Row>
                <Col xs="9" sm="9"  align="left">
                <CardText>▷ Swedish (Beginner)</CardText> 
                </Col>
                <Col xs="3" sm="3" align="left">
                <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star unchecked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star unchecked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star unchecked" style={{ fontSize: 13}} />
                </Col>
              </Row>
        </Container>
      );
    }
