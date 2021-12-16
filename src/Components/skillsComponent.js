import React from 'react';
import { Container, Row, Col, CardTitle, CardText } from 'reactstrap';
import Icon from '@material-ui/core/Icon';
import RubberBand from 'react-reveal/RubberBand';


export default function Skills() {

      return (     
        <Container>  
          <br></br>
          <CardTitle align="left" className="occupation">
          <RubberBand>
            <h3>MY SKILLS</h3>
          </RubberBand>
            <br></br>
            </CardTitle>
            <CardTitle align="left" className="occupation">
                <h6>TECHNICAL SKILLS & TOOLS </h6>
            </CardTitle>
              <Row>
                <Col xs="12" sm="12"  align="left" className="occupation">
                  <CardText style={{ fontSize: 13, lineHeight: 2}}>
                    🗸 Highly proficient in HTML, CSS, JavaScript, and jQuery
                  </CardText> 
                </Col>     
              </Row>

              <Row>
                <Col xs="12" sm="12" align="left" className="occupation">
                  <CardText style={{ fontSize: 13, lineHeight: 2 }}>
                    🗸 4+ years professional experience working in React.js, Typescript
                  </CardText> 
                </Col>
              </Row>

              <Row>
                <Col xs="12" sm="12"  align="left" className="occupation">
                  <CardText style={{ fontSize: 13, lineHeight: 2 }}>
                    🗸 Highly proficient using CSS frameworks Material-UI & Bootstrap
                  </CardText> 
                </Col>
              </Row>

              <Row>
                <Col xs="12" sm="12"  align="left" className="occupation">
                  <CardText style={{ fontSize: 13, lineHeight: 2}}>
                    🗸 Very experienced in Redux architecture, using Hooks, React Router, Fetch..
                  </CardText> 
                </Col>
              </Row>

              <Row>
                <Col xs="12" sm="12" align="left" className="occupation">
                  <CardText style={{ fontSize: 13, lineHeight: 2 }}>
                    🗸 Proficient in using Git & Github, Express, MongoDB, NodeJs, Webpack, ApI
                  </CardText> 
                </Col>
              </Row>

              <Row>
                <Col xs="12" sm="12"  align="left" className="occupation">
                  <CardText style={{ fontSize: 13, lineHeight: 2 }}>
                    🗸 Experience working with CMS systems
                  </CardText> 
                </Col>
              </Row>

              <Row>
                <Col xs="12" sm="12"  align="left" className="occupation">
                  <CardText style={{ fontSize: 13, lineHeight: 2 }}>
                    🗸 Familiar with OOP, C# and ASP.NET MVC 5 + Entity framework
                  </CardText> 
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
