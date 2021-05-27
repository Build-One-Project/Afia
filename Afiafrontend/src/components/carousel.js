import {Carousel} from 'react-bootstrap';

function HomeSlider(){
    return(
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/cream.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/tv.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/img1.jpeg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/go-big3.jpg"
      alt="Fourth slide"
    />
  </Carousel.Item>
</Carousel>
    );
}

export default HomeSlider;