import React from 'react';

function App() {
  return (
    <div className='test-page'>
      <header>
        <div className="swoosh position-fixed"></div>
        <div className="sticky-nav difference d-flex justify-content-between">
          <div className="logo"></div>
          <div id="nav-btn" className="menu box">
            <svg id="i1" className="icon" viewBox="20 30 60 40">
              <path id="top-line-1" d="M30,37 L70,37 Z"></path>
              <path id="middle-line-1" d="M30,50 L70,50 Z"></path>
              <path id="bottom-line-1" d="M30,63 L70,63 Z"></path>
            </svg>
          </div>
        </div>
        <div id="takeover-nav">
          <div className="container-fluid">
            <div className="row">
              <div className="nav-col nav-contact col-12 col-md-7 bg-black d-flex align-items-center justify-content-center position-relative py-5 px-3 order-1 order-md-0">
                <div className="position-absolute w-100 h-100 bg-topographic"></div>
                <div className="content position-relative">
                  <h2 className="nav-title white mb-5">
                    build your digital success with us<span className="d-inline green">.</span>
                  </h2>
                  <ul className="contact-items white list-unstyled mb-5">
                    <li className="pb-4">
                      <a href="#">+1 386-235-4062</a>
                    </li>
                    <li className="pb-4">
                      <a href="mailto:morgan@tactusmarketing.com">morgan@tactusmarketing.com</a>
                    </li>
                    <li>
                      <a href="#">Aguadilla, PR 00603</a>
                    </li>
                  </ul>
                  <div className="social">
                    <a className="text-decoration-none green" href="#">linkedin</a>
                    <span className="mx-2 white">|</span>
                    <a className="text-decoration-none green" href="#">facebook</a>
                    <span className="mx-2 white">|</span>
                    <a className="text-decoration-none green" href="#">instagram</a>
                  </div>
                </div>
              </div>
              <div className="nav-col nav-menu col-12 col-md-5 bg-green d-flex align-items-center pt-5 pb-3 pb-md-5 px-3 px-md-5 order-0 order-md-1">
                <ul className="nav-items list-unstyled">
                  <li className="pb-3">
                    <a className="text-decoration-none" href="#services">services</a>
                  </li>
                  <li className="pb-3">
                    <a className="text-decoration-none" href="#portfolio">portfolio</a>
                  </li>
                  <li className="pb-3">
                    <a className="text-decoration-none" href="#contact">contact</a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#about">about</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="hero d-flex align-items-center justify-content-center">
        <div className="video-wrap">
          <video autoPlay playsInline loop muted id="video-bg">
            <source src="https://tactusmarketing.com/wp-content/uploads/tactus-waves-hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="position-absolute w-100 gradient-overlay"></div>
        <div className="content position-relative text-center mb-5">
          <h1 className="hero-title blend">
            Where Creativity
            <br />
            &amp; Strategy Meet
          </h1>
        </div>
      </section>
      <section className="two"></section>
      <section className="three"></section>
      <section className="four"></section>
      <section className="five"></section>
      <div className="custom-cursor"></div>
    </div>
  );
}

export default App;
