import React from 'react';
import { Container, Row, Col, CardTitle, CardText } from 'reactstrap';
import Icon from '@material-ui/core/Icon';


export default function SimpleAccordion() {

      return (     
        <Container>  
          <br></br>
          <CardTitle align="left" className="occupation">
            <h3>MY SKILLS</h3>
            <br></br>
            </CardTitle>
            <CardTitle align="left" className="occupation">
                <h6>TECHNICAL SKILLS & TOOLS </h6>
            </CardTitle>
              <Row>
                <Col xs="12" sm="9"  align="left" className="occupation">
                <CardText style={{ fontSize: 12.3}}>▷ HTML, XHTML, CSS, PHP, MySQL</CardText> 
                </Col>
                
              </Row>
              <Row>
                <Col xs="12" sm="10" align="left" className="occupation">
                <CardText style={{ fontSize: 12.3 }}>▷ JS, React and React-Native, Redux, NodeJs, Git, Github </CardText> 
                </Col>
                
              </Row>
              <Row>
                <Col xs="12" sm="9"  align="left" className="occupation">
                <CardText style={{ fontSize: 12.3 }}>▷ CMS systems: Wordpress, Joomla </CardText> 
                </Col>
                
              </Row>
              <Row>
                <Col xs="12" sm="9"  align="left" className="occupation">
                <CardText style={{ fontSize: 12.3}}>▷ Good knowledge of Bootstrap 4 & Grid System</CardText> 
                </Col>
                
              </Row>
              <Row>
                <Col xs="12" sm="9"  md="12" align="left" className="occupation">
                <CardText style={{ fontSize: 12.3 }}>▷ Visual Studio Code, Dreamviewer </CardText> 
                </Col>
                
              </Row>
              <Row>
                <Col xs="12" sm="9"  align="left" className="occupation">
                <CardText style={{ fontSize: 12.3 }}>▷ MsOffice packages (Word, Excel, Powerpoint, Outlook) </CardText> 
                </Col>
                
              </Row>
              <Row>
                <Col xs="12" sm="9"  align="left" className="occupation">
                <CardText style={{ fontSize: 12.3 }}>▷ Sharepoint  </CardText> 
                </Col>
                
              </Row>
              <Row>
                <Col xs="12" sm="9"  align="left" className="occupation">
                <CardText style={{ fontSize: 12.3 }}>▷ Amadeus GDS booking systems  </CardText> 
                </Col>
              </Row>

                <hr/>
                <br></br>
              <CardTitle align="left" className="occupation">
                <h6>LANGUAGUES</h6>
              </CardTitle>
              <Row>
                <Col xs="7"  md="5" align="left" className="occupation">
                <CardText style={{ fontSize: 12.3 }} >▷ Danish (Advanced) </CardText> 
                </Col>
                <Col xs="5"  md="7" align="left">
                <Icon className="fa fa-star checked" style={{ fontSize: 12.8 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 12.8 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 12.8 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 12.8 }} />
                    <Icon className="fa fa-star unchecked" style={{ fontSize: 12.8}} />
                </Col>
              </Row>
              <Row>
                <Col xs="7" md="5" align="left" className="occupation">
                <CardText style={{ fontSize: 12.3 }} >▷ English (Advanced) </CardText> 
                </Col>
                <Col xs="5"  md="7" align="left">
                <Icon className="fa fa-star checked" style={{ fontSize: 12.8 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 12.8 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 12.8 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 12.8 }} />
                    <Icon className="fa fa-star unchecked" style={{ fontSize: 12.8}} />
                </Col>
              </Row>
              <Row>
                <Col xs="7"  md="5" align="left" className="occupation">
                <CardText style={{ fontSize: 12.3 }} >▷ Hungarian (Native) </CardText> 
                </Col>
                <Col xs="5"  md="7" align="left">
                <Icon className="fa fa-star checked" style={{ fontSize: 12.8 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 12.8 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 12.8 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 12.8 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 12.8}} />
                </Col>
              </Row>
              <Row>
                <Col xs="7"  md="5" align="left" className="occupation">
                <CardText style={{ fontSize: 12.3 }}>▷ Serbian (Native)</CardText> 
                </Col>
                <Col xs="5"  md="7" align="left">
                <Icon className="fa fa-star checked" style={{ fontSize: 12.8 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 12.8 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 12.8 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 12.8 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 12.8}} />
                </Col>
              </Row>
              <Row>
                <Col xs="7"  md="5" align="left" className="occupation">
                <CardText style={{ fontSize: 12.3 }}>▷ Swedish (Beginner)</CardText> 
                </Col>
                <Col xs="5" md="7" align="left">
                <Icon className="fa fa-star checked" style={{ fontSize: 12.8 }} />
                    <Icon className="fa fa-star checked" style={{ fontSize: 12.8 }} />
                    <Icon className="fa fa-star unchecked" style={{ fontSize: 12.8 }} />
                    <Icon className="fa fa-star unchecked" style={{ fontSize: 12.8 }} />
                    <Icon className="fa fa-star unchecked" style={{ fontSize: 12.8}} />
                </Col>
              </Row>
        </Container>
      );
    }
