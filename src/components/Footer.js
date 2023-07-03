import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/navicon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/gabrieli-alencar-16197a280/"><img src={navIcon1} alt="" /></a>
                <a href="https://wa.me/556696069139" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Ícone do WhatsApp" /></a>
                <a href="https://www.instagram.com/alencargabyy2/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Ícone do Instagram" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
