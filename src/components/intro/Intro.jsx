import "./intro.css";
import Me from "../../img/me-removebg.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My <span>name</span> is</h2>
          <h1 className="i-name"> Sujay Sapkal</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Open Source Enthusiast</div>
              <div className="i-title-item">UI/UX Designer</div>
            </div>
          </div>
          
        </div>  
      </div>
      <div className="i-right">
        <div className="i-bg">
        </div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
