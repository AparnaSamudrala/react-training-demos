function FooterWebPage(){
  return(
        <footer className="section-5 center">
          <div className="social-media">
            {
              (() => {
                let container = [];
                let socialLinks = ["fa fa-github-square","fa fa-youtube","fa fa-facebook-square","fa fa-instagram"];
                socialLinks.forEach((val, index) => {
                  container.push(
                    <a key={index} href ={`#`} className="social-media-link">
                      <i className={val}></i>
                    </a>)
                });
                return container;
              })()
            }
            
          </div>
          <p className="copyright">
            Copyright &copy; Code And Create. All Rights Reserved
          </p>
        </footer>
    )
}

export default FooterWebPage;