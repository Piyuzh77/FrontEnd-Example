
const Cards = ({skills, counter, imgSrc, heading}) => {
   const displayedSkills= skills.slice(0,counter);
  return (
    <>
      <div
        className="font-inter bg-slate-100 border-solid rounded-2xl shadow-2xl"
        style={{ width: "340px", height: "400px" }}
      >
        <div className="relative w-full h-full">
          <img
            src={imgSrc}
            alt="cardImage"
            className="w-[340px] h-[230px] object-cover rounded-t-2xl"
          />
          <div className="absolute p-2" style={{ top: "230px", left: "15px" }}>
            <p className="font-medium">{heading}</p>
            <p className="font-inter text-sm text-gray-600">
              Dolore consectetur esse occaecat qui <br />
              ullamco magna laborum in...
            </p>
          </div>

          <div className="absolute bottom-6 left-5">
            <ul className="flex flex-wrap space-x-2 mt-3">
              {displayedSkills.map(
                (item, index) => (
                  <li
                    key={index}
                    className="shadow-lg rounded-full text-black px-2 text-sm mb-2"
                    style={{backgroundColor:"#EFEFEF",height:"25.28px", fontSize:"13px", lineHeight:"24px"}}>
                    {item}
                  </li>
                )
              )
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
