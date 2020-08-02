import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Form, FormGroup, Input, Label, Button, Modal, 
  ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import ReCAPTCHA from 'react-google-recaptcha';

class Contact extends Component {

  constructor(props) {
    super(props);  
    
    this.state = {
      modal: false,
      captchaOk: false,
      emailOk: false,
      modalTitle: '',
      modalMessage: [],
      captchaToken: '',
    }

    this.onChange = this.onChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleWithError = this.toggleWithError.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.clearForm = this.clearForm.bind(this);

  }

  onChange(value) {
    if (value) { 
      this.setState({ 
        captchaOk: true,
        captchaToken: value,
      });
    } else {
      this.setState({ captchaOk: false });
    }
  }

  toggle() {
    console.log('toggled!');
    this.setState({
      emailOk: true,
      modalMessage: [
        'Your message has been sent successfully.',
        'A representative with XXXXX will contact you shortly.'],
      modalTitle: 'Message Sent!',
      modal: !this.state.modal
    });
    this.clearForm();
  }
  
  toggleWithError() {
    this.setState({
      emailOk: false,
      modalMessage: [
        'An internal error has occurred.  Email not sent!',
        'Please call xxx-xxx-xxxx to speak with a XXXXX representative.'],
      modalTitle: 'ERROR: Message NOT Sent!',
      modal: !this.state.modal
    });
  }
  
  clearForm() {
    const arrFields = [
      "name-input",
      "phone-input",
      "email-input",
      "city-input",
      "company-input",
      "msg-input"
    ];
    arrFields.forEach(function(field) {
      document.getElementById(field).value = '';
    });
  }
  
  onSubmitClick(e) {

    if (document.forms["contact-form"].reportValidity()) {
          
          e.preventDefault();
        } else {
          // window.scrollTo(0, 0);
          return;
        }

    fetch('/api/sendmail',
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(
        {
          from: `${document.getElementById("name-input").value}<${document.getElementById("email-input").value}>`,
          subject: "XXXXX Contact Form", 
          name: document.getElementById("name-input").value,
          email: document.getElementById("email-input").value,
          phone: document.getElementById("phone-input").value,
          city: document.getElementById("city-input").value,
          company: document.getElementById("company-input").value,
          message: document.getElementById("msg-input").value,

        }
      )
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong...');
      }
    })
    .then(data => this.toggle())
    .catch(error => this.toggleWithError())
  }

  render() {
    return (
      <div className="main-container-1300-max contact-container">
        <Row>
          <Col lg='6' xs='12' className="contact-right-col">
            <Form className="contact-form" id="contact-form">   
              <FormGroup>
                <Label for="name-input">Name:</Label>
                <Input type="text" name="name"className="form-control" id="name-input" placeholder="John Smith" required></Input>
              </FormGroup>
              <FormGroup>
                <Label for="email-input">Email:</Label>
                <Input type="email" name="email" className="form-control" id="email-input" placeholder="jsmith@example.com" required></Input>
              </FormGroup>
              <FormGroup>
                <Label for="phone-input">Phone:</Label>
                <Input type="tel" name="tel" className="form-control" id="phone-input" placeholder="9991234567" maxLength="10" required pattern="^[0-9]{10}$"></Input>
              </FormGroup>
              <FormGroup>
                <Label for="city-input">City, State:</Label>
                <Input type="text" className="form-control" id="city-input" placeholder="Smithville, TX" required></Input>
              </FormGroup>
              <FormGroup>
                <Label for="company-input">Company Name:</Label>
                <Input type="text" name="company"className="form-control" id="company-input" placeholder="Smith &amp; Co." required></Input>
              </FormGroup>
              <FormGroup>
                <Label for="msg-input">Message:</Label>
                <Input type="textarea" className="form-control" id="msg-input" placeholder="type your message here..." required></Input>
              </FormGroup>
              <ReCAPTCHA id='captcha'
                ref='recaptcha'
                sitekey="xxxYOURSITEKEYxxx"
                onChange={ this.onChange }
              />
              <Button id="submit-button" color='warning' type='button' onClick={ (e) => this.onSubmitClick(e) }disabled={ !this.state.captchaOk }>Submit</Button>
            </Form>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            {/* <Modal isOpen={true} toggle={this.toggle} className={this.props.className}> */}
              <ModalHeader toggle={this.toggle}>{ this.state.modalTitle }</ModalHeader>
              <ModalBody>
                { this.state.modalMessage.map((item, index) => {
                  return(
                    <p key={`message-${index}`}>{item}</p>
                  )
                }) }
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Got it.</Button>{' '}
              </ModalFooter>
            </Modal>
          </Col>
        </Row>
      </div>
    );
  }
}
  
export default Contact;