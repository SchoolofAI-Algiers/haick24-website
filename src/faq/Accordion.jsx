import { React, useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { useSpring, animated } from "react-spring";

function Accordion(props) {
  const [open, setOpen] = useState(false);
  const toggleHandler = (e) => {
    setOpen(!open);
  };



  const openAnimation = useSpring({
    from: { maxHeight: "64px" },
    to: { maxHeight: open ? "400px" : "64px" },
    config: { duration: "350" },
  });

  //rotate animation
  const iconAnimation = useSpring({
    from: {
      transform: "rotate(0deg)",
      color: "#ffff",
    },
    to: {
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      color: open ? "#fff" : "#fff",
    },
    config: { duration: "50" },
  });



  
  return (
    <div className="w-[80vw] md:w-[80vw] h- lg:w-[80vw] p-[2px] rounded-lg cursor-pointer bg-grayv bg-opacity-40 "  style={{
      boxShadow: "rgba(0, 181, 226, 0.35)0px 0px 25px",
   
      		
		  }}>
      <animated.div
        className="accordion__item rounded-lg p-4 overflow-hidden cursor-pointer opacity-100"
        style={openAnimation}
        onClick={toggleHandler}
      >
        <div className="accordion__header flex pb-2 sm:pb-1 items-center justify-between p-1 ">
          <h4 className="mb-2 font-semibold text-[15.5px] tracking-wider sm:text-[20px] transition ease-in-out delay-200">
          {props.title}        </h4>



          <animated.div
            className="transition ease-in-out origin-center mb-2"
            style={iconAnimation}
          >
            <MdExpandMore size={"26px"} enableBackground={"white"} />
          </animated.div>


          
        </div>
        <p className="accordion__content">{props.text}</p>
      </animated.div>
    </div>
  );
}

export default Accordion;
