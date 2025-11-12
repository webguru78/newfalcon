import React from 'react'

const Gallery = () => {
  return (
    <div>
       <div className="gallery-area py-100">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 mx-auto">
        <div className="site-heading text-center wow fadeInDown" data-wow-delay=".25s">
          <span className="site-title-tagline"><i className="far fa-helmet-safety" />our Gallery</span>
          <h2 className="site-title">Let's Check Our Photo <span>Gallery</span></h2>
          <div className="heading-divider" />
        </div>
      </div>
    </div>
    <div className="row g-4 popup-gallery">
      <div className="col-md-3">
        <div className="gallery-item wow fadeInUp" data-wow-delay=".25s">
          <div className="gallery-img">
            <img src="assets/img/gallery/01.jpg" alt />
          </div>
          <div className="gallery-content">
            <a className="popup-img gallery-link" href="assets/img/gallery/01.jpg"><i className="fal fa-plus" /></a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="gallery-item wow fadeInDown" data-wow-delay=".25s">
          <div className="gallery-img">
            <img src="assets/img/gallery/02.jpg" alt />
          </div>
          <div className="gallery-content">
            <a className="popup-img gallery-link" href="assets/img/gallery/02.jpg"><i className="fal fa-plus" /></a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="gallery-item wow fadeInUp" data-wow-delay=".25s">
          <div className="gallery-img">
            <img src="assets/img/gallery/03.jpg" alt />
          </div>
          <div className="gallery-content">
            <a className="popup-img gallery-link" href="assets/img/gallery/03.jpg"><i className="fal fa-plus" /></a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="gallery-item wow fadeInDown" data-wow-delay=".25s">
          <div className="gallery-img">
            <img src="assets/img/gallery/04.jpg" alt />
          </div>
          <div className="gallery-content">
            <a className="popup-img gallery-link" href="assets/img/gallery/04.jpg"><i className="fal fa-plus" /></a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="gallery-item wow fadeInUp" data-wow-delay=".25s">
          <div className="gallery-img">
            <img src="assets/img/gallery/05.jpg" alt />
          </div>
          <div className="gallery-content">
            <a className="popup-img gallery-link" href="assets/img/gallery/05.jpg"><i className="fal fa-plus" /></a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="gallery-item wow fadeInDown" data-wow-delay=".25s">
          <div className="gallery-img">
            <img src="assets/img/gallery/06.jpg" alt />
          </div>
          <div className="gallery-content">
            <a className="popup-img gallery-link" href="assets/img/gallery/06.jpg"><i className="fal fa-plus" /></a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="gallery-item wow fadeInUp" data-wow-delay=".25s">
          <div className="gallery-img">
            <img src="assets/img/gallery/07.jpg" alt />
          </div>
          <div className="gallery-content">
            <a className="popup-img gallery-link" href="assets/img/gallery/07.jpg"><i className="fal fa-plus" /></a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="gallery-item wow fadeInDown" data-wow-delay=".25s">
          <div className="gallery-img">
            <img src="assets/img/gallery/08.jpg" alt />
          </div>
          <div className="gallery-content">
            <a className="popup-img gallery-link" href="assets/img/gallery/08.jpg"><i className="fal fa-plus" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
  )
}

export default Gallery