import Header from "./Header";
import Nav from "./Nav";
import Content from "./Content";
import MainContent from "./MainContent";
import Footer from "./Footer";
function FlexLayout() {

    return (
        <div className="wrapper">
            <Header />
            <Nav />
            <div className="row">
                <Content />
                <MainContent />
                <Content />
            </div>
            <Footer />
        </div>
    )

}

export default FlexLayout;