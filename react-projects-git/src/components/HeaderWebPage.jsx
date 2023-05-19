import john from ".././images/john-smith.jpg";
function HeaderWebPage(props){
    return(
    <section className="section-1 center" id="section-1">
          <h1 className="section-1-heading">
           {props.title}
          </h1>
          <img src={john} alt="John Smith" className="person-img" />
          <h3 className="person-name">{props.name}</h3>
          <a href="#section-3" className="section-1-btn">{props.job}</a>
        </section>
        )
}
export default HeaderWebPage;