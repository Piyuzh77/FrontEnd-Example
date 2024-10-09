import Cards from "./Cards";
import Recommendations from "./Recommendations";
import reviews from "./reviews";

const Projects = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Git",
    "Responsive Design",
    "RESTful APIs",
    "Web Accessibility",
    "UX/UI Design",
    "TypeScript",
    "Webpack",
    "Jest",
    "Figma",
  ];
  return (
    <>
      <div className="flex-col justify-center font-sans" id="projects">
        <div>
          <h1 className="font-bold text-center text-3xl mt-10 p-4">Projects</h1>
          <p className="text-center font-normal text-gray-600">
            Ut adipisicing duis non ullamco labore commodo eu commodo. Cupidatat
            veniam voluptate velit aliquip
            <br /> magna sunt veniam labore voluptate occaecat officia minim
            tempor.
          </p>
        </div>
      </div>
      <div className="flex justify-evenly m-4 p-10">
        <Cards
          skills={skills}
          counter={5}
          imgSrc={
            "https://images.unsplash.com/photo-1610433572201-110753c6cff9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fHww"
          }
          heading={"My Project!"}
        ></Cards>
        <Cards
          skills={skills}
          counter={3}
          imgSrc={
            "https://plus.unsplash.com/premium_photo-1683120963435-6f9355d4a776?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbXB1dGVyJTIwc2NpZW5jZXxlbnwwfHwwfHx8MA%3D%3D"
          }
          heading={"Something About AI!"}
        ></Cards>
        <Cards
          skills={skills}
          counter={7}
          imgSrc={
            "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww"
          }
          heading={"The way i design my Portfolio"}
        ></Cards>
      </div>
      <div className="p-2 flex justify-evenly pt-4">
        <Cards
          skills={skills}
          counter={4}
          imgSrc={
            "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww"
          }
          heading={"Java Technologies!"}
        ></Cards>
        <Cards
          skills={skills}
          counter={5}
          imgSrc={
            "https://images.unsplash.com/photo-1610894372363-21183fa31111?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuY2hlc3RlciUyMHVuaXRlZHxlbnwwfHwwfHx8MA%3D%3D"
          }
          heading={"What Went Wrong in United!?"}
        ></Cards>
        <Cards
          skills={skills}
          counter={6}
          imgSrc={
            "https://plus.unsplash.com/premium_photo-1664304752635-3e0d8d8185e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"
          }
          heading={"RedBull in F1"}
        ></Cards>
      </div>
          <Recommendations reviews={reviews}></Recommendations>
    </>
  );
};

export default Projects;
