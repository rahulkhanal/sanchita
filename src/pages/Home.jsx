import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FcPrevious } from "react-icons/fc";

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow-next" onClick={onClick}>
    <GrFormNext size={22} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow-prev" onClick={onClick}>
    <GrFormPrevious size={22} />
  </div>
);
const Home = () => {
  const settings = {
    dots: false, // Show navigation dots
    infinite: true, // Enable infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="your-carousel-class">
      <Slider {...settings}>
        <center>
          <div className="carasoul-container">
            Slide 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Rem, in amet laudantium provident quod, culpa ullam molestias esse
            reiciendis, magnam id eaque est ad! A esse ut dolore quaerat
            perspiciatis?
          </div>
        </center>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Slider>
    </div>
  );
};

export default Home;
