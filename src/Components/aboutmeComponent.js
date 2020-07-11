import React from 'react';
import { Card, CardTitle, CardText, CardBody } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';


    const Aboutme = (props) => {
      return (
            

        <Container className="wrapper-right">  
            <Row xs="2">
              <Col className="wrapper">
                <CardBody>
                    Picture
                  </CardBody>
              </Col>

                <Col className="wrapper">  
                <CardBody>
                    <CardTitle align="left"><h2>ABOUT ME</h2></CardTitle>
                    <CardText align="justify" className="occupation">
                    Passionate hard-working web developer with over 2 years of front end experience for implementing and maintaining responsive websites and mobile applications. Highly skilled in HTML, CSS, jQuery, JavaScript, React and React-Native. Open-minded and a quick learner, able to pick up on new processes, systems, and technologies quickly.  Strong operational skills, professional trained in business management and administration.
                    </CardText>
                </CardBody>
              </Col>
            </Row>
        </Container>

      );
    }
    
    export default Aboutme;