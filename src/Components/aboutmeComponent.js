import React from 'react';
import { CardTitle, CardText, CardBody } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Picture from './pictureComponent';

    const Aboutme = (props) => {
      return (
        <Container className="wrapper-right">  
            <Row>
              <Col xs={12} md={6} xs={12} className="wrapper">           
                <Picture/>  
              </Col>
              <Col xs={12} md={6} className="wrapper">  
                <CardBody >
                  <CardTitle align="left" className="occupation"><h3>ABOUT ME</h3></CardTitle>
                    <CardText align="justify" className="occupation">
                      Passionate hard-working web developer with over 2 years of front end experience for implementing and maintaining responsive websites and mobile applications. Highly skilled in HTML, CSS, jQuery, JavaScript, React and React-Native. Open-minded and a quick learner, able to pick up on new processes, systems, and technologies quickly.  Strong operational skills, professional trained in business management and administration.
                    </CardText>
                </CardBody>
                <br></br>
                <CardBody >
                  <Row>
                    <Col className="occupation" xs={7}>
                      <CardTitle align="left"><h5>CONTACT DETAILS</h5></CardTitle>
                      <CardText> 
                        <ul className="no-bullets" align="left" >
                          <li> Address: Evanstonevej 4</li>
                          <li> 2900 Hellerup </li>
                          <li> Phone: +45 71663966</li>
                          <li> E-mail: nemo.spaske@live.com</li>
                      </ul>
                      </CardText>
                    </Col>
                    <Col className="occupation" xs={4}>
                      <CardTitle>SOCIAL</CardTitle>               
                      <CardText>                    
                        <Col>
                        <a className="btn btn-social-icon" href="https://www.linkedin.com/in/nemanja-spasic-68993930/"><i className="fa fa-linkedin fa-5x"></i></a>
                        <a className="btn btn-social-icon" href="https://www.facebook.com/spasic.n/"><i className="fa fa-facebook fa-5x"></i></a>
                        </Col>
                        <Col>
                        <a className="btn btn-social-icon" href="http://github.com/nspa4921"><i className="fa fa-github fa-5x"></i>&nbsp;</a>
                        <a className="btn btn-social-icon" href="https://api.whatsapp.com/send?phone=71663966"><i className="fa fa-whatsapp fa-5x"></i></a>
                        </Col>        
                      </CardText>
                    </Col>
                  </Row>
                  </CardBody>
              </Col>
            </Row>
        </Container>

      );
    }
    
    export default Aboutme;