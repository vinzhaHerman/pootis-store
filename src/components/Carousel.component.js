import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";

const Carousel = () => {
    return (
        <div className="mb-5" >
            <MDBContainer>
              <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
              >
                <MDBCarouselInner style={{height: "300px"}}>
                  <MDBCarouselItem itemId="1">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src="img/front_1.jpg"
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src="img/front_2.jpg"
                        alt="Second slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                        alt="Third slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBContainer>
        </div>
  );
}

export default Carousel;