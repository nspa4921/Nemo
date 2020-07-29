import React from 'react';
import { CardTitle, CardText, CardBody } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Picture from './pictureComponent';

    const Aboutme = (props) => {
      return (
        <Container className="wrapper-right">  
            <Row>
              <Col sm="6" className="wrapper">           
                <Picture />  
              </Col>
              <Col className="wrapper">  
                <CardBody>
                  <CardTitle align="left"><h2>ABOUT ME</h2></CardTitle>
                    <CardText align="justify" className="occupation">
                      Passionate hard-working web developer with over 2 years of front end experience for implementing and maintaining responsive websites and mobile applications. Highly skilled in HTML, CSS, jQuery, JavaScript, React and React-Native. Open-minded and a quick learner, able to pick up on new processes, systems, and technologies quickly.  Strong operational skills, professional trained in business management and administration.
                    </CardText>
                </CardBody>
                  <Row>
                    <Col sm="6">
                      <CardTitle>
                        <h5>CONTACT DETAILS</h5>
                      </CardTitle>
                      <CardText>
                        <ul align="left">
                      <li>Address: Evanstonevej 4</li>
                      <li>2900 Hellerup </li>
                      <li>Phone: +45 71663966</li>
                      <li>E-mail: nemo.spaske@live.com</li>
                      </ul>
                      </CardText>
                    </Col>
                    <Col sm="6">
                      <CardTitle>
                        <h5>SOCIAL</h5>
                      </CardTitle>
                      <Row>
                      <CardBody>
                      <div>
                        <Col>
                        <a className="btn btn-social-icon" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin fa-5x"></i></a>
                        <a className="btn btn-social-icon" href="#"><i className="fa fa-facebook fa-5x"></i></a>
                        </Col>
                        <Col>
                        <a className="btn btn-social-icon" href="#"><i className="fa fa-github fa-5x"></i>&nbsp;</a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-whatsapp fa-5x"></i></a>
                        </Col>
                        </div>
                </CardBody>
                </Row>
                    </Col>
                  </Row>
              </Col>
            </Row>
        </Container>

      );
    }
    
    export default Aboutme;