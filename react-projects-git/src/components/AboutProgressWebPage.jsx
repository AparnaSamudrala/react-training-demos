let progressText = [
    {
      text: "HTML",
      percent: "97%"
    },
    {
      text: "CSS",
      percent: "86%"
    },
    {
      text: "JS",
      percent: "55%"
    },
    {
      text: "React JS",
      percent: "78%"
    },
    {
      text: "Mongo DB",
      percent: "22%"
    },
    {
      text: "Node JS",
      percent: "10%"
    },
    {
      text: "SASS",
      percent: "56%"
    }
  ];

  function AboutProgressWebPage(){
    return(
        
          <div className="progress-bars-wrapper">
               {
                  progressText.map((i) => {
                    return (
                      <div className="progress-bar" key={i.text}>
                                          
                        <p className="progress-text">
                        {i.text}<span>{i.percent}</span>
                        </p>
                        <div className="progress-percent" style={{width: `${i.percent}`}}></div>
                    </div>
                    
                      )
                  })
            }

          </div> 
    )
  }

  export default AboutProgressWebPage;