import AboutProgressWebPage from "./AboutProgressWebPage";
import AboutServicesWebPage from "./AboutServicesWebPage";

    function AboutMeWebPage(){
        return (
          <section className="section-2" id="section-2">
            <h1 className="section-heading section-2-heading">About Me</h1>
            <AboutProgressWebPage/>   
            <AboutServicesWebPage/>      
          </section>
        )
    }
    export default AboutMeWebPage;
   