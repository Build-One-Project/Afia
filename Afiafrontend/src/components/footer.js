import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
     
      <Container>
        <Row>
          <Column>
            <Heading>Usefull Information</Heading>
            <FooterLink href="#">Contact</FooterLink>
            <FooterLink href="#">FAQs</FooterLink>
            <FooterLink href="#">Site map</FooterLink>
          </Column>
          <Column>
            <Heading>Terms of service</Heading>
            <FooterLink href="#">Privacy policy</FooterLink>
            <FooterLink href="#">Terms and conditions</FooterLink>
            <FooterLink href="#"></FooterLink>
            <FooterLink href="#">
            <i className="fal fa-search-location">
                <span style={{ marginLeft: "10px" }}>
                    Store Finder
                </span>    
            </i>
            </FooterLink>
          </Column>
          <Column>
            <Heading>More...</Heading>
            <FooterLink href="#">Plus Card</FooterLink>
            <FooterLink href="#">Gift Card</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">Email news service</FooterLink>
          </Column>
        </Row>
      </Container>
      <h5 style={{ color: "white", 
                   textAlign: "center", 
                   marginTop: "4px" }}>
        Afia Stores Ltd. - All rights reserved © 2021
      </h5>
    </Box>
  );
};
export default Footer;