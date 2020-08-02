import React, { Component } from 'react';
import { Row, Col, Media, Container, CardTitle } from 'reactstrap'; 
import { MDBListGroup, MDBListGroupItem } from "mdbreact";
import { SRLWrapper } from "simple-react-lightbox";

class Education extends Component {

  render() {
      const courses = this.props.courses.map((cours) => {
          return (     
              <Row>
                <Col xs="3"  md="2.5">
                  <Media className="my_image">
                    <Media href="#">
                      <Media  right width="100%" src={cours.image} alt={cours.name} />
                    </Media>
                  </Media>
                </Col> 
                <Col xs="9"  md="9.5" align="justify">
                        <h6 align="left" className="occupation">{cours.name}</h6>
                        <small className="text-muted">{cours.description}</small> 
                        <br></br>
                        <hr/>
                </Col>
              </Row>   
          );
      });
        
      return (      
          <Container className="wrapper-right">
            <Row>
              <Col xs={12} md={6} className="wrapper" >                       
                <CardTitle align="left" className="occupation"><h3>EDUCATION</h3></CardTitle>      
                <MDBListGroup >
                  <MDBListGroupItem>
                      <div className="d-flex w-100 justify-content-between">
                        <h6 className="occupation" align="left">Bachelor in economics, business administration and service management</h6>
                        <small className="text-muted">2010-2014</small>
                      </div>
                      <p className="mb-1" align="left">Educons University, Sremska Kamenica, Serbia</p>
                  </MDBListGroupItem>
                  <MDBListGroupItem>
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="occupation" align="left">Economic high school </h5>
                      <small className="text-muted">Sept. 2002 - July 2006</small>
                    </div>
                    <p className="mb-1" align="left">Senta, Serbia </p>
                  </MDBListGroupItem>
                </MDBListGroup>
              </Col>
              <Col xs={12} md={6} className="wrapper">         
                <CardTitle align="left" className="occupation"><h3>COURSES</h3></CardTitle> 
                <br></br>
                <SRLWrapper>  
                {courses}
                </SRLWrapper>
              </Col>
          </Row>
        </Container>
      );
  }
}

export default Education;