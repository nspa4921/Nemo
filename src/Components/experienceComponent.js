import React from 'react';
import { CardBody, Container, Row, Col, CardTitle, CardText, } from 'reactstrap';
import Skills from '../Components/skillsComponent';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { PlayCircleFilledWhite } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiPaper-root": {
      color: "white",
      background: "transparent",
      boxShadow: "0px 0.5px 0px 0px rgba(117,117,117,0.3)",
    }
  }
}));

export default function SimpleAccordion() {
  const classes = useStyles();
      return (
        <div className={classes.root}>
          <Container className="wrapper-right" >  
            <Row >
                <Col xs={12} md={6} className="wrapper"> 
                <CardBody>  
                <CardTitle align="left" className="occupation"><h3>WORKING EXPERIENCE</h3></CardTitle>
                    <br></br>
          <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography className={classes.heading}>   
                    <CardText align="left" >      
                    <h7><span className="fa fa-align-justify fa-lg"></span> FRONTEND DEVELOPER</h7><br></br>        
                    <small className="text-muted"> Maj. 2021 – , Copenhagen, Denmark</small>
                    <p className="occupation">MakeImpact ApS</p>
                    </CardText>
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <CardText align="left" className="occupation">
          <p  align="justify">Make!mpact is a Nordic Impact Fintech startup with a focus on sustainability and impact 
investing. My responsibility is to redesign and launch mobile friendly website in React. </p>
                  <p  align="justify"> Technologies: </p> 
                    <ul>
                        <li>React, Typescript, Redux, Saga</li>
                        <li>JSON, jQuery, Git, Firebase, Jira, Zeplin.. </li>
                    </ul>
                    </CardText>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header" >
          <Typography className={classes.heading}>   
                    <CardText align="left" >      
                    <h7><span className="fa fa-align-justify fa-lg"></span> LODGING CONTENT ASSOSIETE FOR HOTELS.COM AND EXPEDIA.DK 
</h7>  
                    <br></br>
                    <small className="text-muted">Apr. 2016 – Mar. 2020, Helsingborg, Sweden
</small>
                    <p className="occupation">Concentrix International Nordric AB</p>
                    </CardText>
                    </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <CardText align="left" className="occupation">
          <p  align="justify">My responsibilities: </p> 
                    <ul>
                        <li>Onboarding newly acquired hotels into Expedia’s database,</li>
                        <li>Uploading and checking accuracy of content, adding property details, photos, star 
ratings, and hotel data such as name, location and on-site services,</li>
                        <li>Providing customer service support to Expedia’s hotel partners (business to 
business relationship), gathering information from them by using a checklist to 
ensure that all data is correctly advertised</li> 
                    </ul>
                    </CardText>
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
                    <h7><span className="fa fa-align-justify fa-lg"></span> WEB DEVELOPER / SALES AND MARKETING MANAGER / TRAVEL GUIDE</h7>
                    <br></br>
                    <small className="text-muted">Maj 2010 – Sept. 2012, Island Krk, Croatia  </small>
                    <p className="occupation"> Tourist agency "MOLNAR GABOR"</p>
                    </CardText>
                    </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <CardBody>
                    <CardText align="left" className="occupation">
          <p  align="justify">In this company, my primary task was focused on the marketing of agency, website development and promotion on social networks. I worked also as a tourist guide and translator. In short, my responsibilities was:  </p> 
                    <ul>
                        <li>Developing and maintaining www.krktourist.com website using HTML, XHTML, CSS, PHP, MySQL </li>
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
                    <h7><span className="fa fa-align-justify fa-lg"></span> WEB DESIGNER / SALES AND MARKETING MANAGER / TRAVEL GUIDE / SERVICE ASSISTANT  </h7>
                    <br></br>
                    <small className="text-muted">Sept. 2008 – Oct. 2009, Novi Sad, Serbia </small>
                    <p className="occupation">Hostel "LAZIN HOSTEL” </p>
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

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>   
                    <CardText align="left" >      
                    <h7><span className="fa fa-align-justify fa-lg"></span>WEB DESIGNER, ADVISOR / TOURS & HOLIDAY ORGANIZER</h7>
                    <br></br>
                    <small className="text-muted">Oct. 2007 – Oct. 2009, Novi Sad, Serbia </small>
                    <p className="occupation">PANACOMP WONDERLAND TRAVEL </p>
                    </CardText>
                    </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <CardBody>
                    <CardText align="left" className="occupation" >
                     
                    <p>Tasks & responsibilities: </p>
                    <ul>
                        <li>Website design and maintenance of www.panacomp.net </li>
                        <li>Uploading texts, photos and videos, using HTML, XHTML, CSS, PHP, MySQL</li>
                        <li>Developing of tourism programs</li>
                        <li>Creating a Promotional Flyers in Photoshop</li>
                    </ul>
                    </CardText>
                </CardBody>
          </Typography>
        </AccordionDetails>
      </Accordion>       
                </CardBody>
              </Col>
              <Col className="wrapper">
                  <Skills />
                </Col>
            </Row>
        </Container>
        </div>
      );
    }
