import NavNews from "./NavNews";
import HeaderNews from "./HeaderNews";
import MainNews from "./MainNews";
import WelcomeNews from "./WelcomeNews";
import FooterNews from "./FooterNews";

function FlexNewsGallery(){

    return(
       
<div className="container">
	
    <HeaderNews/>
    <NavNews/>   
	
	<div className="img1"></div>
	<MainNews/>
	<WelcomeNews/>
	<FooterNews/>

	</div>

    )

}

export default FlexNewsGallery;