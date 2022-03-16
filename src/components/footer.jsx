import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function FooterSection({offsetY}) {
  return (
    <Container style={{
      backgroundColor: `url('assets/IMG_0790.JPEG')`
    }} fluid>
      <Row>
        <Col>
          <div className='tm-textbox tm-textbox-full-height tm-white-bg'>
        </div>
        </Col>
      </Row>
    </Container>
  );
}
