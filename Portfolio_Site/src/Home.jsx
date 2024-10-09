import arrow from "./assets/rightArrow.svg";
import Projects from "./Projects";

const Hero = ({Hero}) => {
  return (
    <>
      <div className="flex justify-center font-sans top-0 left-0" id="ome">
        <div className="relative">
          <img
            src={Hero}
            alt="hero"
            style={{
              marginTop: "96px",
              width: "auto",
              height: "auto",
            }}
            className="top-0 left-0"
          />

          <div className="absolute top-52 left-24 text-white p-4">
            <p className="text-black font-bold text-5xl">
              I'm Piyush Gupta </p>
              <p className="text-black font-bold text-5xl pt-3">
              <span className="text-yellow-500 ">Front-end</span> Developer
            </p>
          </div>

          <div className="absolute p-2 mt-6" style={{top:"380px", left:"100px"}}>
            <p className="text-gray-500 text-base top-12">
              Sunt commodo Lorem veniam quis veniam sunt officia officia enim
              <br />
              ullamco exercitation.
              Esse ipsum elit cupidatat deserunt
              consectetur occaecat.
            </p>
          </div>

          <button
            className="absolute flex justify-center items-center border-yellow-600 bg-yellow-500 px-5 py-2 rounded-lg"
            style={{
              top: "540px",
              left: "120px",
              width: "154px",
              height: "51px",
            }}
          >
            <span className="mr-2">Hire Me</span>
            <img src={arrow} className="h-4 w-4" />
          </button>
        </div>
      </div>
      <Projects></Projects>
    </>
  );
};

export default Hero;
