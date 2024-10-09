import Slider from "react-slick";
import star from './assets/rating-stars.png';
import ContactForm from "./Contact";

const Recommendations = ({ reviews }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerPadding:'10   0px'
      };

  return (
    <>
      <div className="flex-col justify-center font-sans">
        <h1 className="font-bold text-center text-3xl mt-10 p-4">
          Recommendations
        </h1>
        <p className="text-center font-normal text-gray-600">
          Duis ut velit cupidatat sint mollit officia consectetur non ea.
          <br />
          Non do eu cupidatat est pariatur labore magna enim.
        </p>
      </div>

      <div className="flex justify-evenly items-center py-10 m-4" id="recommendations">
        <div className="max-w-full px-4 space-x-14">
          <Slider {...settings}>
            {reviews.map((r, index) => (
              <div
                key={index}
                className="wrapper-Carousel bg-white shadow-lg p-8 rounded-lg space-x-10 hover:drop-shadow-2xl h-[280px] " 
              >
                <div className="stars flex items-center">
                  {Array.from({ length: r.stars }).map((_, starIndex) => (
                    <img
                      key={starIndex}
                      src={star}
                      alt="Star"
                      className="h-5 w-5"
                    />
                  ))}
                </div>
                <p className="reviewText text-gray-700 my-4">{r.review}</p>
                <div className="flex item-center p-4 space-x-3">
                  <img
                    src={r.images}
                    className="border rounded-full w-[100px] h-[100px]"
                  />
                  <div className="flex-col p-5">
                    <h2 className="text-lg font-semibold">{r.name}</h2>
                    <p className="text-sm text-gray-500">{r.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <ContactForm></ContactForm>
    </>
  );
};

export default Recommendations;
