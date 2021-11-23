import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function ContactSection({offsetY}) {
  console.log(offsetY)
  return (
    <Container style={{
      backgroundImage: `url('assets/IMG_0790.JPEG')`
    }}  id='contact' className='tm-section-contact tm-welcome' fluid>
      <Row>
        <Col>
          <div className='tm-textbox tm-textbox-full-height tm-white-bg'>
            <h2 className='tm-green-text tm-section-title'>Kontaktujte nás</h2>
            <Row>
              <Col sm>
                <h3>Adresa: </h3>
              </Col>
              <Col sm>
                <address>
                <p>
                  LibTrans Express s.r.o.<br></br>
                  Krásný Les 254<br></br>
                  46401 Frýdlant
                </p>
                </address>
              </Col>
              <Col sm>
                <h3>Mobil: </h3>
              </Col>
            </Row>
            <Row>
              <Col sm>
                <p>
                  Luboš Hájek:<br></br>
                  <a href='tel:+420602129636'>+420 602 129 636</a>
                  <br></br>
                  <br></br>
                  Luboš Hájek ml.:<br></br>
                  <a href='tel:+420725776260'>+420 725 776 260</a>
                  <br></br>
                  <br></br>
                  Jaroslav Šírek:
                  <br></br>
                  <a href='tel:+420605700246'>+420 605 700 246</a>
                  <br></br>
                  <br></br>
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm>
                <h3>Email: </h3>
              </Col>
              <Col sm>
                <p>
                  <a href='mailto:info@libtrans-express.cz'>
                    info@libtrans-express.cz
                  </a>
                  <br></br>
                  <a href='mailto:info@libtrans-express.cz'>
                    ucetni@libtrans-express.cz
                  </a>
                  <br></br>
                  <a href='mailto:info@libtrans-express.cz'>
                    lubos.hajek@libtrans-express.cz
                  </a>
                  <br></br>
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm>
                <h3>Identifikace: </h3>
              </Col>
              <Col sm>
                IČO:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                08175039
              </Col>
              <Col sm>
                DIČ:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                CZ08175039
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}