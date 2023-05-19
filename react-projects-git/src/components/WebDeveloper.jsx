import ".././WebDeveloper.css";
import HeaderWebPage from "./HeaderWebPage";
import NavBarWebPage from "./NavBarWebPage";
import AboutMeWebPage from "./AboutMeWebPage";
import MyProjectsWebPage from "./MyProjectsWebPage";
import ContactMeWebPage from "./ContactMeWebPage";
import FooterWebPage from "./FooterWebPage";
//import ".././WebDeveloper.js";
function WebDeveloper(){
   return(
        <div className="container-fluid p-0">
            <HeaderWebPage title="Web Developer" name="John Smith" job="Projects"/>
            <NavBarWebPage/>
            <AboutMeWebPage/>
            <MyProjectsWebPage/>
            <ContactMeWebPage/>
            <FooterWebPage/>
        </div>
  )
}

export default WebDeveloper;

