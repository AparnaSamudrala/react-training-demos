let services = [
    {
      name: "Creative",
      icon: "fa fa-lightbulb-o"
    },
    {
      name: "Problem Solving",
      icon: "fa fa-cut"
    },
    {
      name: "Fast",
      icon: "fa fa-tachometer"
    },
    {
      name: "Dynamic",
      icon: "fa fa-rocket"
    }
];

function AboutServicesWebPage(){
    return(
    <div className="services">
          

          {
            services.map((i)=>{
              return(
                <div className="service" key={i.icon}>
                  <i className={i.icon}></i>
                  <h2 className="service-heading">{i.name}</h2>
                </div>
              )
            }


            )
          }
          
        </div>
    )
}

export default AboutServicesWebPage;