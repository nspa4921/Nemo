import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { CardTitle, Row, Col, Container } from 'reactstrap';
import { MDBListGroup, MDBListGroupItem } from "mdbreact";

class Education extends Component {

  

  render() {
      const courses = this.props.courses.map((cours) => {
          return (       
            
              <Row>
                <Col sm="4">
                  <Media className='my_image'>
                    <Media left middle href="#">
                      <Media right width="100%" src={cours.image} alt={cours.name}  />
                    </Media>
                  </Media>
                </Col> 
                <Col sm="8" align="justify">
                        <h6 align="left">{cours.name}</h6>
                        <h7>{cours.description}</h7>
                        <hr/>
                    <br></br>
                </Col>
              </Row>   
          );
      });
        
      return (      
          <Container className="wrapper-right">
            <Row>
              <Col className="wrapper">   
                                    
                <CardTitle align="left"><h2>EDUCATION</h2></CardTitle>      
          <MDBListGroup >
            <MDBListGroupItem>
              <div className="d-flex w-100 justify-content-between">
                <h6 className="mb-1" align="left">Bachelor in economics, business administration and service management</h6>
                <small className="text-muted">2010-2014</small>
              </div>
              <p className="mb-1" align="left">Educons University, Sremska Kamenica, Serbia</p>
            </MDBListGroupItem>
            <MDBListGroupItem>
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Economic high school </h5>
                <small className="text-muted">Sept. 2002 - July 2006</small>
              </div>
              <p className="mb-1" align="left">Senta, Serbia </p>
            </MDBListGroupItem>
            <MDBListGroupItem>
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
                blandit.</p>
              <small className="text-muted">Donec id elit non mi porta.</small>
            </MDBListGroupItem>
          </MDBListGroup>
          
              </Col>
              <Col className="wrapper">         
                <CardTitle align="left"><h2>COURSES</h2></CardTitle> 
                {courses}
              </Col>
          </Row>
        </Container>
      );
  }
}

export default Education;