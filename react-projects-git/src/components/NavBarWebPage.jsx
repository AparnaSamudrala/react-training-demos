function NavBarWebPage(){
       return(
        <nav className="navbar center">
           {
              (() => {
                let container = [];
                let arr =  ["Home","About","Portfolio","Contact"]; //can be anything array, object
                arr.forEach((val, index) => {
                  container.push(
                    <a key={index} href ={`#section-${index+1}`} className="navbar-link">
                      {val}
                    </a>)
                });
                return container;
              })()
            }
          </nav>


)
}

export default NavBarWebPage;
        