import React from 'react';
import { CardBody, Container, Row, Col, CardTitle, CardText, } from 'reactstrap';
import Skills from '../Components/skillsComponent';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiPaper-root": {
      color: "white",
      background: "transparent",
      boxShadow: "0px 1px 0px 0px rgba(117,117,117,1)",
    }
  }
}));

export default function SimpleAccordion() {
  const classes = useStyles();
      return (
        <div className={classes.root}>
          <Container className="wrapper-right">  
            <Row >
                <Col xs={12} md={6} className="wrapper"> 
                <CardTitle align="left" className="occupation"><h2>WORKING EXPERIENCE</h2></CardTitle>
                    <br></br>
          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>   
                    <CardText align="left" >      
                    <h7><span className="fa fa-align-justify fa-lg"></span> CONCENTRIX INTERNATIONAL NORDIC AB</h7><br></br>        
                    <small className="text-muted"> Apr. 2016 – Oct. 2020, Helsingborg, Sweden</small>
                    <p className="occupation">Role: Travel consultant for Hotels.com and Expedia.dk </p>
                    </CardText>
                    </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p className="occupation" align="justify" >Conentrix offers customer support in the Nordic market, for both private and corporate customers. 
                    My position in the company was a travel consultant and I work in a hotel / flight support team where my primary task was to handle incoming calls regarding hotel / flight bookings, as well as various activity bookings and transport to / from airport / hotel. I also helped customers to plan, choose and arrange their holiday, in case with rebooking and changing flights, hotels, transfers etc, and also selling travel insurance. 
                    </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>   
                    <CardText align="left" >      
                    <h7><span className="fa fa-align-justify fa-lg"></span> MUNKEBJERG HOTEL</h7>  
                    <br></br>
                    <small className="text-muted">Maj 2014 – March 2016, Vejle, Danmark </small>
                    <p className="occupation">Role: Facility assistant </p>
                    </CardText>
                    </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p className="occupation" align="justify">In Munkebjerg hotel I worked for while I was studying the Danish language. My tasks were to help facilitating the hotel events. </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
                
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>   
                    <CardText align="left" >      
                    <h7><span className="fa fa-align-justify fa-lg"></span> TOURIS AGENCY "MOLNAR GABOR"</h7>
                    <br></br>
                    <small className="text-muted">Maj 2010 – Sept. 2012, Island Krk, Croatia  </small>
                    <p className="occupation">Role: Front End web developer / Sales and marketing manager / Travel guide </p>
                    </CardText>
                    </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <CardBody>
                    <CardText align="left" className="occupation">
          <p  align="justify">In this company, my primary task was focused on the marketing of agency, website development and promotion on social networks. I worked also as a tourist guide and translator. In short, my responsibilities was:  </p> 
                    <ul>
                        <li>Developing and maintaining  www.krktourist.com, using HTML, XHTML, CSS, PHP, MySQL </li>
                        <li>Using open CMS systems, such as WordPress, Joomla etc.. </li>
                        <li>SEO and Promoting on social networks </li>
                        <li>Serving the tourists (guests),</li>
                        <li>Administrative tasks (Bookkeeping list, Answering emails) </li>
                        <li>Planning and organizing tourist arrangements </li>
                    </ul>
                    </CardText>
                    </CardBody>
          </Typography>
        </AccordionDetails>
      </Accordion>
               
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>   
                    <CardText align="left" >      
                    <h7><span className="fa fa-align-justify fa-lg"></span> HOSTEL "LAZIN HOSTEL” </h7>
                    <br></br>
                    <small className="text-muted">Sept. 2008 – Oct. 2009, Novi Sad, Serbia </small>
                    <p className="occupation">Role: Web designer / Sales and marketing manager / Travel guide / Service assistant </p>
                    </CardText>
                    </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <CardBody>
                    <CardText align="left" className="occupation" >
                    
                    <p align="justify">In this company, my primary task was focused on the marketing of agency, website development and promotion on social networks. I worked also as a tourist guide and translator.</p> 
                    <p>In short, my responsibilities was:  </p>
                    <ul>
                        <li>Building and maintenance website (HTML / CSS / JS), including taking pictures of rooms and apartments, price update and manage bookings  </li>
                        <li>Promoting on social networks,</li>
                        <li>Administrative tasks (Accounting list, Reply to emails) ,</li>
                        <li>Guiding guests through the city, </li>
                        <li>Receptionist,</li>
                        <li>Technical maintenance of hostel</li>
                    </ul>
                    </CardText>
                </CardBody>
          </Typography>
        </AccordionDetails>
      </Accordion>       
                
              </Col>
              <Col className="wrapper">
                  <Skills />
                </Col>
            </Row>
        </Container>
        </div>
      );
    }
