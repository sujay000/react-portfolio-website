import "./contact.css";

import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Contact = () => {
   return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Sujay Sapkal</h1>
          <h2 className="ctitlesub">Contact Me</h2>
          <div className="c-info">
            <div className="c-info-item">
            <a href="https://www.instagram.com/invites/contact/?i=1f275rmr6rra7&utm_content=mjmzkbk" target="_blank" className="links"><InstagramIcon/></a>
            
            </div>
            <div className="c-info-item">
            <a href="mailto:sujaysapkal22@gmail.com" target="_blank" className="links"><EmailIcon/></a>
              
            </div>
            <div className="c-info-item">
            <a href="https://github.com/sujay000" target="_blank" className="links"><GitHubIcon/></a>
              
            </div>
            <div className="c-info-item">
            <a href="https://www.linkedin.com/in/sujay-sapkal-3a84a2224/" target="_blank" className="links"><LinkedInIcon/></a>
              
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
