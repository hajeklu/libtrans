import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function WelcomeSection({offsetY}) {
  return (
    <Container style={{
      backgroundImage: `url('assets/IMG_0798.jpeg')`
    }} className='tm-section-welcome tm-welcome' fluid>
      <Row>
        <Col className='text-center tm-site-title-wrap'>
          <h1 style={{transform: `translateY(${offsetY*0.25}px)`}} className='tm-site-title'>LibTrans Express s.r.o.</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <div style={{transform: `translateY(${-offsetY*0.05}px)`}} className='tm-textbox tm-white-bg'>
            <h2 style={{transform: `translateY(${-offsetY*0.05}px)`}} className='tm-green-text tm-section-title'>Vítejte!</h2>
            <p style={{transform: `translateY(${-offsetY*0.05}px)`}}>
              Firma LibTrans Express s.r.o. se zabývá mezinárodní kamionovou
              dopravou již řadu let.
            </p>
            <p>
              Spolehlivost, udržitelnost, rentabilita a férové jednání jsou
              hodnoty které vyznáváme.
            </p>
            <a href='#contact' className='tm-btn'>
              Dejte nám vědět
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
