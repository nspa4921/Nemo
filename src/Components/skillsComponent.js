import React, { Component } from 'react';
import { Container, Row, Col, CardTitle, CardText, } from 'reactstrap';
import Icon from '@material-ui/core/Icon';


export default function SimpleAccordion() {

      return (     
        <Container>  
          <CardTitle align="left" className="occupation">
            <h2>SKILLS</h2>
            <br></br>
            </CardTitle>
            <CardTitle align="left" className="occupation">
                <h6>TECHNICAL SKILLS</h6>
            </CardTitle>
              <Row>
                <Col xs="12" sm="9"  align="left" className="occupation">
                <CardText style={{ fontSize: 12.5}}>▷ HTML, XHTML, CSS, PHP, MySQL</CardText> 
                </Col>
                
              </Row>
              <Row>
                <Col xs="12" sm="10" align="left" className="occupation">
                <CardText style={{ fontSize: 12.5 }}>▷ JS, React and React-Native, Redux, NodeJs, Git, Github </CardText> 
                </Col>
                
              </Row>
              <Row>
                <Col xs="12" sm="9"  align="left" className="occupation">
                <CardText style={{ fontSize: 12.5 }}>▷ CMS systems: Wordpress, Joomla </CardText> 
                </Col>
                
              </Row>
              <Row>
                <Col xs="12" sm="9"  align="left" className="occupation">
                <CardText style={{ fontSize: 12.5}}>▷ Good knowledge of Bootstrap 4 & Grid System</CardText> 
                </Col>
                
              </Row>
              <Row>
                <Col xs="12" sm="9"  md="12" align="left" className="occupation">
                <CardText style={{ fontSize: 12.5 }}>▷ Visual Studio Code, Dreamviewer </CardText> 
                </Col>
                
              </Row>
              <Row>
                <Col xs="12" sm="9"  align="left" className="occupation">
                <CardText style={{ fontSize: 12.5 }}>▷ MsOffice packages (Word, Excel, Powerpoint, Outlook) </CardText> 
                </Col>
                
              </Row>
              <Row>
                <Col xs="12" sm="9"  align="left" className="occupation">
                <CardText style={{ fontSize: 12.5 }}>▷ Sharepoint  </CardText> 
                </Col>
                
              </Row>
              <Row>
                <Col xs="12" sm="9"  align="left" className="occupation">
                <CardText style={{ fontSize: 12.5 }}>▷ Amadeus GDS booking systems  </CardText> 
                </Col>
              </Row>

                <hr/>
                <br></br>
            <CardTitle align="left" className="occupation">
                <h6>LANGUAGUES</h6>
            </CardTitle>
              <Row>
                <Col xs="12" sm="9" md="4" align="left" className="occupation">
                <CardText style={{ fontSize: 12.5 }} >▷ Danish (Advanced) </CardText> 
                </Col>
                <Col xs="12" sm="3" md="8" align="left">
                <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star unchecked" style={{ fontSize: 13}} />
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="9" md="4" align="left" className="occupation">
                <CardText style={{ fontSize: 12.5 }} >▷ English (Advanced) </CardText> 
                </Col>
                <Col xs="12" sm="3" md="8" align="left">
                <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star unchecked" style={{ fontSize: 13}} />
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="9" md="4" align="left" className="occupation">
                <CardText style={{ fontSize: 12.5 }} >▷ Hungarian (Native) </CardText> 
                </Col>
                <Col xs="12" sm="3" md="8" align="left">
                <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13}} />
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="9" md="4"align="left" className="occupation">
                <CardText style={{ fontSize: 12.5 }}>▷ Serbian (Native)</CardText> 
                </Col>
                <Col xs="12" sm="3" md="8" align="left">
                <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 13}} />
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="9" md="4" align="left" className="occupation">
                <CardText style={{ fontSize: 12.5 }}>▷ Swedish (Beginner)</CardText> 
                </Col>
                <Col xs="12" sm="3" md="8"align="left">
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
