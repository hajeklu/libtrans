import React, { useCallback, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from '../data/photos';

export default function GallerySection({offsetY}) {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, { index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };
  

    return (
    <Container style={{
        backgroundImage: `linear-gradient(to right, #00000050, #00000050), url('assets/main.jpg')`
      }}  className='tm-section-gallery tm-welcome' fluid>
    <Col className='text-center tm-gallery-title-wrap'>
          <h2 style={{transform: `translateY(${offsetY*0.05}px)`}}  className='tm-site-title'>Galerie</h2>
        </Col>
   <div style={{transform: `translateY(${-offsetY*0.05}px)`}}  className='tm-gallery'>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>

    <Container style={{
      backgroundColor: 'rgba(0, 0, 0, 0.63)',
      margin: '0',
      marginTop: '60px',
      paddingTop: '50px',
      paddingLeft: '50px',
      paddingRight: '50px',
      paddingBottom: '15px',
      borderTop: '2px solid #e69d65cc',
    }} fluid>
      <Row style={{
        borderBottom: '2px solid #e69d65',
      }}>
        <Row style={{
          display: 'flex',
          flexWrap: 'wrap'
        }}>
          <div style={{
            flexGrow: '1',
            flexBasis: '50%',
            textAlign: 'center',
          }}>
                <p>
                  <a href='tel:+420725776260'> +420 725 776 260</a>
                </p>
                <p>
                  <a href='mailto:hajeklu@outlook.com'> hajeklu@outlook.com</a>
                </p>
        </div>
          <div style={{
            flexGrow: '1',
            flexBasis: '50%',
            textAlign: 'center',
          }}>
          <address >
                <p>
                  LibTrans Express s.r.o.<br></br>
                  Krásný Les 254<br></br>
                  08175039
                </p>
                </address>
          </div>
        </Row>
      </Row>
      <Row>
        <p style={{
          textAlign: 'right',
          fontSize: '18px'
        }}>LibTrans Express s.r.o. | 2019 - 2022</p>
      </Row>
    </Container>
    </Container>
  );
}
