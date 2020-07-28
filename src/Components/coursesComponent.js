import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { CardBody, CardTitle, Row, Col, Container} from 'reactstrap';

class Education extends Component {


  render() {
      const courses = this.props.courses.map((cours) => {
          return (           
              <Row>
                <Col sm="2">
                  <Media className='my_image'>
                    <Media href="#">
                      <Media width="100%" src={cours.image} alt={cours.name}  />
                    </Media>
                  </Media>
                </Col> 
                <Col sm="4" align="justify">
                        <h6 align="left">{cours.name}</h6>
                        <h7>{cours.description}</h7>
                        <hr/>
                    <br></br>
                </Col>
              </Row>
            
          );
      });

      return (      
        <div>
          <Container className="wrapper-right">  
          <Col className="wrapper"> 
          <br></br>
              <CardTitle align="left" ><h2>COURSES</h2></CardTitle> 
              <CardBody>       
              {courses}
              </CardBody>    
          </Col>
        </Container>
        </div>
      );
  }
}

export default Education;