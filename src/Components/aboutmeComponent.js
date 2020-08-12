import React from 'react';
import { CardTitle, CardText, CardBody } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Picture from './pictureComponent';

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
                  <CardTitle align="left" className="occupation"><h3>ABOUT ME</h3></CardTitle>
                    <CardText align="justify" className="occupation">
                      Passionate hard-working web developer with over 2 years of front end experience for implementing and maintaining responsive websites and mobile applications. Highly skilled in HTML, CSS, jQuery, JavaScript, React and React-Native. Open-minded and a quick learner, able to pick up on new processes, systems, and technologies quickly.  Strong operational skills, professional trained in business management and administration.
                    </CardText>
                </CardBody>
                <br></br>
                <CardBody>
                  <Row>
                    <Col className="occupation" >
                      <CardTitle align="left">CONTACT DETAILS</CardTitle>
                      <CardText> 
                        <ul className="no-bullets" align="left" style={{ fontSize: 11}}>
                          <li> Address: Evanstonevej 4</li>
                          <li> 2900 Hellerup </li>
                          <li> Phone: +45 71663966</li>
                          <li>E-mail: <a href="mailto:nemo.spaske@live.com">nemo.spaske(at)live.com</a></li>
                      </ul>
                      </CardText>
                    </Col>
                    <Col className="occupation">
                      <CardTitle align="center">SOCIAL</CardTitle>  
          
                    <Row>
                      <Col>
                        <a className="btn btn-social-icon" href="https://www.linkedin.com/in/nemanja-spasic-68993930/"><i className="fa fa-linkedin fa-5x"></i></a>
                        <a className="btn btn-social-icon" href="https://www.facebook.com/spasic.n/"><i className="fa fa-facebook fa-5x"></i></a>
                      </Col> 
                      </Row>
                      <Row> 
                      <Col align="center">
                        <a className="btn btn-social-icon" href="http://github.com/nspa4921"><i className="fa fa-github fa-5x"></i>&nbsp;</a>
                        <a className="btn btn-social-icon" href="https://api.whatsapp.com/send?phone=71663966"><i className="fa fa-whatsapp fa-5x"></i></a>
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