import React from 'react';
import { CardTitle, CardText, CardBody } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Picture from './pictureComponent';
import LightSpeed from 'react-reveal/LightSpeed';
import Swing from 'react-reveal/Swing';



    const Aboutme = (props) => {
      return (
        <div>
        <Container className="wrapper-right">  
            <Row>
              <Col xs={12} md={6} className="wrapper">  
                <CardBody>         
                    <Picture/>  
                </CardBody>
              </Col>
              <Col xs={12} md={6} className="wrapper">  
                <CardBody>
                <Swing>
                  <CardTitle align="left" className="occupation"><h3>ABOUT ME</h3></CardTitle>
                  </Swing>
                    <CardText align="justify" className="occupation">
                    I’m a passionate Frontend developer, with more than 10 years experience in designing and implementing user-facing features for websites and mobile applications using React.js. Highly skilled in React, Typerscript, React redux, React-Native, Express, MongoDB..
                    Open-minded and a quick learner, able to pick up on new processes, systems, and technologies quickly. Experienced with Microsoft ASP.NET MVC Architecture.
                    Strong operational skills, professional trained in business management and administration.
                    </CardText>
                </CardBody>
                <br></br>
                <CardBody>
                  <Row>
                    <Col className="occupation" xs={7} md={7}>
                      <CardTitle align="left">CONTACT DETAILS</CardTitle>
                      <CardText> 
                        <ul className="no-bullets" align="left" style={{ fontSize: 11}}>
                          <li> Address: Kong Eriks Have 22</li>
                          <li> 2765 Smørum </li>
                          <li> Phone: +45 71663966</li>
                          <li>E-mail: <a href="mailto:nemo.spaske@live.com">nemo.spaske@live.com</a></li>
                      </ul>
                      </CardText>
                    </Col>
                    <Col className="occupation" xs={5} md={5}>
                      <CardTitle align="center">SOCIAL</CardTitle>  
          
                    <Row>
                      <Col>
                        <a target="_blank" rel="noopener noreferrer" className="btn btn-social-icon" href="https://www.linkedin.com/in/nemanja-spasic-68993930/"><i className="fa fa-linkedin fa-5x occupation"></i></a>
                        <a target="_blank" rel="noopener noreferrer" className="btn btn-social-icon" href="https://www.facebook.com/spasic.n/" ><i className="fa fa-facebook fa-5x occupation"></i></a>
                      </Col> 
                      </Row>
                      <Row> 
                      <Col align="center">
                        <a target="_blank" rel="noopener noreferrer" className="btn btn-social-icon" href="http://github.com/nspa4921" ><i className="fa fa-github fa-5x occupation"></i>&nbsp;</a>
                        <a target="_blank" rel="noopener noreferrer" className="btn btn-social-icon" href="https://api.whatsapp.com/send?phone=71663966" ><i className="fa fa-whatsapp fa-5x occupation"></i></a>
                      </Col>  
                        </Row>   
        
                    </Col>
                  </Row>
                  </CardBody>
              </Col>
            </Row>
        </Container>
        </div>
      );
    }
    
    export default Aboutme;