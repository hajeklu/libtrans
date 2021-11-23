import React, { useCallback, useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from '../data/photos';

export default function GallerySection() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };
  

    return (
    <Container style={{
        backgroundImage: `linear-gradient(to bottom, #00bf8f10, #00151010), url('assets/IMG_2814.JPEG')`
      }}  className='tm-section-gallery tm-welcome' fluid>
    <Col className='text-center tm-gallery-title-wrap'>
          <h2 className='tm-site-title'>Galerie</h2>
        </Col>
   <div className='tm-gallery'>
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
    </Container>
  );
}
