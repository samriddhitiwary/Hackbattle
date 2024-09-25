// src/components/Header.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import './Header.css';


const Header = () => {
  return (
    <header>
      <div className='header' >

        <p className='wordsInHeader'>
          <img src='images/Header/img1.png'></img>
          Privacy Policy | Disclaimer | Contact
        </p>
      </div>


      <div className='headerFlexBox'>
        <div>
          <img className='img' src='images/Header/logo.jpeg' alt='Testing'></img>
        </div>

        <div className='search'>
          <InputGroup>
            <Form.Control
              placeholder="Explore Doctor Options... "
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              🔎
            </Button>
          </InputGroup>
          <br></br>
        </div>

        <div>
          <p>Emergency : <Button className='header_but' variant="light"> ☎ 108</Button></p>
          <p>CHAT WITH US: 
  <Button className='header_but' variant="light" onClick={() => window.location.href='https://builder.corover.ai/params/?appid=598c570d-ba04-43ed-83c9-4f2e780e381a&partnerKey=4b6cd178-3c9d-45bb-be33-15b9538fd055&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImthdmlzaGEiLCJlbWFpbElkIjoia2F2aXNoYS5oYXN3YW5pQGdtYWlsLmNvbSIsImNvbXBhbnlJZCI6bnVsbCwiaWF0IjoxNzI3MjQwOTA1LCJleHAiOjE3MjczMjczMDV9.cgoQTyoTNi0YKFl_7j1JSQBnPcT8-n1t_yzpncLAovE#/'}>
    ☎ 
  </Button> 
</p>

        </div>
        <br></br>
      </div>


      <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        
            <NavDropdown title="Patient Care" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Find A Doctor</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Apollo Surgery-Assured Price
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Service Excellence</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Pay Online
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Patient Testimonial
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Medical Feed
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Health And Lifestyle</NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="Centres of Excellence" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cardiology</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Orthopedics
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Spine</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Neuology And Neuosurgery</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Gastroenterology
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Oncology</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Transplants</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">ICU</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Emergency</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Preventive Health</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Robotics</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bariatric Surgery</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Nephrology And Urology</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Colorectal Surgery</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Obstetrics and Gynaecology</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pulmonology</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Ear, Nose and Throat</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Vascular Surgery</NavDropdown.Item>

            </NavDropdown>


            <NavDropdown title="Health Information" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Disesases and Condition</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Test & Procedures
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Medical Glossary Decoded</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.4">
               Understanding Investigation
              </NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="International patient" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Plan Your Trip</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Online Consultaion
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Visa</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.4">
                Apollo Inurance
              </NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="Academics & Reasearch" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Courses</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Academics
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Clinical Reasearch</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Apollo Torch:Alumini Network</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
               Honors List
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">The Apollo University, Chittoor</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Apollo Knowledge Series</NavDropdown.Item>
              
            </NavDropdown>




            <NavDropdown title="Contact Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Post A Query</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Consult Doctors Online
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Book Phyical Appointment</NavDropdown.Item>
             
            </NavDropdown>


            <NavDropdown title="Corporate" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Company Overview</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Corporate Policies
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Management</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Corporate Governance</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Corporate Actions</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sustainability</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Investor Relations
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Awards & Accolades</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Careers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">News And Media</NavDropdown.Item>
            </NavDropdown>



          
      </Container>
    </Navbar>

      </div>
      <br></br>
    </header>
  );
};

export default Header;
