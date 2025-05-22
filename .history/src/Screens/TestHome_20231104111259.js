import React from 'react';
import { useEffect } from 'react';

function App() {
    useEffect(() => {

        $( "#nav-btn" ).on( "click", function() {
            $('#takeover-nav').toggleClass("shown");
            $('.sticky-nav').toggleClass("difference");
          });
          
          
          
          ///Initiation Variables
          var icon_1 = document.getElementById("nav-btn");
          var topLine_1 = document.getElementById("top-line-1");
          var middleLine_1 = document.getElementById("middle-line-1");
          var bottomLine_1 = document.getElementById("bottom-line-1");
          var state_1 = "menu";  // can be "menu" or "arrow"
          var topLineY_1;
          var middleLineY_1;
          var bottomLineY_1;
          var topLeftY_1;
          var topRightY_1;
          var bottomLeftY_1;
          var bottomRightY_1;
          var topLeftX_1;
          var topRightX_1;
          var bottomLeftX_1;
          var bottomRightX_1;
          
          ///Animation Variables
          var segmentDuration_1 = 15;
          var menuDisappearDurationInFrames_1 = segmentDuration_1;
          var arrowAppearDurationInFrames_1 = segmentDuration_1;
          var arrowDisappearDurationInFrames_1 = segmentDuration_1;
          var menuAppearDurationInFrames_1 = segmentDuration_1;
          var menuDisappearComplete_1 = false;
          var arrowAppearComplete_1 = false;
          var arrowDisappearComplete_1 = false;
          var menuAppearComplete_1 = false;
          var currentFrame_1 = 1;
          
          ///Menu Disappear 
          function menuDisappearAnimation_1() {
              currentFrame_1++;
              if ( currentFrame_1 <= menuDisappearDurationInFrames_1 ) {
                  window.requestAnimationFrame( ()=> { 
                      //top line
                      topLineY_1 = AJS.easeInBack( 37, 50, menuDisappearDurationInFrames_1, currentFrame_1 );
                      topLine_1.setAttribute( "d", "M30,"+topLineY_1+" L70,"+topLineY_1 );
                      //bottom line
                      bottomLineY_1 = AJS.easeInBack( 63, 50, menuDisappearDurationInFrames_1, currentFrame_1 );
                      bottomLine_1.setAttribute( "d", "M30,"+bottomLineY_1+" L70,"+bottomLineY_1 );
                      //recursion
                      menuDisappearAnimation_1();
                  });
              } else {
                  middleLine_1.style.opacity = "0";
                  currentFrame_1 = 1;
                  menuDisappearComplete_1 = true;
                  openMenuAnimation_1();
              }
          }
          
          ///Cross Appear
          function arrowAppearAnimation_1() {
              currentFrame_1++;
              if ( currentFrame_1 <= arrowAppearDurationInFrames_1 ) {
                  window.requestAnimationFrame( ()=> { 
                      //top line
                      topLeftX_1 = AJS.easeOutBack( 30, 35, arrowAppearDurationInFrames_1, currentFrame_1 );
                      topLeftY_1 = AJS.easeOutBack( 50, 35, arrowAppearDurationInFrames_1, currentFrame_1 );
                      bottomRightX_1 = AJS.easeOutBack( 70, 65, arrowAppearDurationInFrames_1, currentFrame_1 );
                      bottomRightY_1 = AJS.easeOutBack( 50, 65, arrowAppearDurationInFrames_1, currentFrame_1 );
                      topLine_1.setAttribute( "d", "M" + topLeftX_1 + "," + topLeftY_1 + " L" + bottomRightX_1 + "," + bottomRightY_1 );
                      //bottom line
                      bottomLeftX_1 = AJS.easeOutBack( 30, 35, arrowAppearDurationInFrames_1, currentFrame_1 );
                      bottomLeftY_1 = AJS.easeOutBack( 50, 65, arrowAppearDurationInFrames_1, currentFrame_1 );
                      topRightX_1 = AJS.easeOutBack( 70, 65, arrowAppearDurationInFrames_1, currentFrame_1 );
                      topRightY_1 = AJS.easeOutBack( 50, 35, arrowAppearDurationInFrames_1, currentFrame_1 );
                      bottomLine_1.setAttribute( "d", "M" + bottomLeftX_1 + "," + bottomLeftY_1 + " L" + topRightX_1 + "," + topRightY_1 );
                      //recursion
                      arrowAppearAnimation_1();
                  });
              } else {
                  currentFrame_1 = 1;
                  arrowAppearComplete_1 = true;
                  openMenuAnimation_1();
              }
          }
          
          ///Combined Open Menu Animation
          function openMenuAnimation_1() {
              if ( !menuDisappearComplete_1 ) { 
                  menuDisappearAnimation_1();
              } else if ( !arrowAppearComplete_1) {
                  arrowAppearAnimation_1();
              }
          }
          
          ///Cross Disappear
          function arrowDisappearAnimation_1() {
              currentFrame_1++;
              if ( currentFrame_1 <= arrowDisappearDurationInFrames_1 ) {
                  window.requestAnimationFrame( ()=> {
                      //top line
                      topLeftX_1 = AJS.easeInBack( 35, 30, arrowDisappearDurationInFrames_1, currentFrame_1 );
                      topLeftY_1 = AJS.easeInBack( 35, 50, arrowDisappearDurationInFrames_1, currentFrame_1 );
                      bottomRightX_1 = AJS.easeInBack( 65, 70, arrowDisappearDurationInFrames_1, currentFrame_1 );
                      bottomRightY_1 = AJS.easeInBack( 65, 50, arrowDisappearDurationInFrames_1, currentFrame_1 );
                      topLine_1.setAttribute( "d", "M" + topLeftX_1 + "," + topLeftY_1 + " L" + bottomRightX_1 + "," + bottomRightY_1 );
                      //bottom line
                      bottomLeftX_1 = AJS.easeInBack( 35, 30, arrowDisappearDurationInFrames_1, currentFrame_1 );
                      bottomLeftY_1 = AJS.easeInBack( 65, 50, arrowDisappearDurationInFrames_1, currentFrame_1 );
                      topRightX_1 = AJS.easeInBack( 65, 70, arrowDisappearDurationInFrames_1, currentFrame_1 );
                      topRightY_1 = AJS.easeInBack( 35, 50, arrowDisappearDurationInFrames_1, currentFrame_1 );
                      bottomLine_1.setAttribute( "d", "M" + bottomLeftX_1 + "," + bottomLeftY_1 + " L" + topRightX_1 + "," + topRightY_1 );
                      //recursion
                      arrowDisappearAnimation_1();
                  });
              } else {
                  middleLine_1.style.opacity = "1";
                  currentFrame_1 = 1;
                  arrowDisappearComplete_1 = true;
                  closeMenuAnimation_1();
              }
          }
          
          ///Menu Appear
          function menuAppearAnimation_1() {
              currentFrame_1++;
              if ( currentFrame_1 <= menuAppearDurationInFrames_1 ) {
                  window.requestAnimationFrame( ()=> {
                      //top line
                      topLineY_1 = AJS.easeOutBack( 50, 37, menuDisappearDurationInFrames_1, currentFrame_1 );
                      topLine_1.setAttribute( "d", "M30,"+topLineY_1+" L70,"+topLineY_1 );
                      //bottom line
                      bottomLineY_1 = AJS.easeOutBack( 50, 63, menuDisappearDurationInFrames_1, currentFrame_1 );
                      bottomLine_1.setAttribute( "d", "M30,"+bottomLineY_1+" L70,"+bottomLineY_1 );
                      //recursion
                      menuAppearAnimation_1();
                  });
              } else {
                  currentFrame_1 = 1;
                  menuAppearComplete_1 = true;
                  closeMenuAnimation_1();
              }
          }
          
          ///Close Menu Animation
          function closeMenuAnimation_1() {
              if ( !arrowDisappearComplete_1 ) {
                  arrowDisappearAnimation_1();
              } else if ( !menuAppearComplete_1 ) {
                  menuAppearAnimation_1();
              }
          }
          
          ///Events
          icon_1.addEventListener( "click", ()=> { 
            if ( state_1 === "menu" ) {
                openMenuAnimation_1();
                state_1 = "arrow";
                arrowDisappearComplete_1 = false;
                  menuAppearComplete_1 = false;
            } else if ( state_1 === "arrow" ) {
                closeMenuAnimation_1();
                state_1 = "menu";
                menuDisappearComplete_1 = false;
                  arrowAppearComplete_1 = false;
            }
          });
          
          
          // Cursor
          document.addEventListener("DOMContentLoaded", function(event) {
            var cursor = document.querySelector(".custom-cursor");
            var links = document.querySelectorAll("a, button, #nav-btn, input.btn");
          
            var initCursor = false;
          
            for (var i = 0; i < links.length; i++) {
              var selfLink = links[i];
          
              selfLink.addEventListener("mouseover", function() {
                cursor.classList.add("custom-cursor--link");
              });
              selfLink.addEventListener("mouseout", function() {
                cursor.classList.remove("custom-cursor--link");
              });
            }
          
          
            window.onmousemove = function(e) {
              var mouseX = e.clientX;
              var mouseY = e.clientY;
          
              if (!initCursor) {
                // cursor.style.opacity = 1;
                TweenLite.to(cursor, 0.5, {
                  opacity: 1
                });
                initCursor = true;
              }
          
              TweenLite.to(cursor, 0, {
                top: mouseY + "px",
                left: mouseX + "px"
              });
            };
            
            window.ontouchmove = function(e) {
              var mouseX = e.touches[0].clientX;
              var mouseY = e.touches[0].clientY;
              if (!initCursor) {
                // cursor.style.opacity = 1;
                TweenLite.to(cursor, 0.3, {
                  opacity: 1
                });
                initCursor = true;
              }
          
              TweenLite.to(cursor, 0, {
                top: mouseY + "px",
                left: mouseX + "px"
              });
            };
          
            window.onmouseout = function(e) {
              TweenLite.to(cursor, 0.3, {
                opacity: 0
              });
              initCursor = false;
            };
          
            window.ontouchstart = function(e) {
              TweenLite.to(cursor, 0.3, {
                opacity: 1
              });
            };
            
            window.ontouchend = function(e) {
              setTimeout( function() {
                TweenLite.to(cursor, 0.3, {
                  opacity: 0
                });
              }, 200);   
            };
            
          });
          
    
      }, []);


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
