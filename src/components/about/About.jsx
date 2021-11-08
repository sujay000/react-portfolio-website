import "./about.css";
import { MdDoubleArrow } from "react-icons/md";



const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/4665064/pexels-photo-4665064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About <span>Me</span> </h1>
        <p className="a-sub">
        An ambitious individual who is always keen to learn more & hone his skills and eager to contribute & work to real-world projects & problems.
        </p>
        <p className="a-desc">
          <h3> Skills & Languages          </h3>
          <div className="a-container">
          
            <div className="a-container-item">   <MdDoubleArrow className="arrow" size="1.2rem" />  React </div>
            <div className="a-container-item">     <MdDoubleArrow className="arrow" size="1.2rem" />Node.js</div>
            <div className="a-container-item">     <MdDoubleArrow className="arrow" size="1.2rem" />  Git </div>

          </div>
          <div className="a-container">
            <div className="a-container-item">   <MdDoubleArrow className="arrow" size="1.2rem" />  HTML</div>
            <div className="a-container-item">   <MdDoubleArrow className="arrow" size="1.2rem" />  CSS</div>
            <div className="a-container-item">   <MdDoubleArrow className="arrow" size="1.2rem" />  JS</div>

          </div><div className="a-container">
          <div className="a-container-item"> <MdDoubleArrow className="arrow" size="1.2rem" />  jQuery</div>
            <div className="a-container-item">   <MdDoubleArrow className="arrow" size="1.2rem" />  Bootstrap </div>
            <div className="a-container-item">   <MdDoubleArrow className="arrow" size="1.2rem" />  Canva</div>
            

          </div><div className="a-container">
            <div className="a-container-item">          <MdDoubleArrow className="arrow" size="1.2rem" />  C++</div>
            <div className="a-container-item">          <MdDoubleArrow className="arrow" size="1.2rem" />  C</div>
            

          </div>
        </p>
        
      </div>
    </div>
  );
};

export default About;
