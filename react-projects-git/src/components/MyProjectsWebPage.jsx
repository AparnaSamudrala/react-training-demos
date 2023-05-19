
import project1 from ".././images/project-1.jpg";
import project2 from ".././images/project-2.jpg";
import project3 from ".././images/project-3.jpg";
import project4 from ".././images/project-4.jpg";
import project5 from ".././images/project-5.jpg";
import project6 from ".././images/project-6.jpg";
import project7 from ".././images/project-7.jpg";
import project8 from ".././images/project-8.jpg";
import project9 from ".././images/project-9.jpg";

function MyProjectsWebPage(){
  let projects = [
    {
      projname: "architect website",
      technologies: "HTML / CSS / JS",
      photo: project1,
      url:"https://www.youtube.com/watch?v=3J-EFMzz94g",
      text: "Go to Video"
    },
    {
      projname: "Budget App",
      technologies: "ReactJS",
      photo: project2,
      url:"https://www.youtube.com/watch?v=fDffQYs2WB0",
      text: "Go to Video"
    },
    {
      projname: "wine house",
      technologies: "HTML / CSS / JS",
      photo: project3,
      url:"https://www.youtube.com/watch?v=jtmuopTpzGE",
      text: "Go to Video"
    },
    {
      projname: "task manager",
      technologies: "ReactJS",
      photo: project4,
      url:"https://www.youtube.com/watch?v=fqup-BL3VjI",
      text: "Go to Video"
    },
    {
      projname: "The Road",
      technologies: "HTML / CSS / JS",
      photo: project5,
      url:"https://www.youtube.com/watch?v=qmyN7lYY_xo",
      text: "Go to Video"
    },
    {
      projname: "food recipe app",
      technologies: "ReactJS",
      photo: project6,
      url:"https://www.youtube.com/watch?v=d1vT4kkTCaw",
      text: "Go to Video"
    },
    {
      projname: "slideshow",
      technologies: "HTML / CSS / JS",
      photo: project7,
      url:"https://www.youtube.com/watch?v=1qhSSp2q7n4",
      text: "Go to Video"
    },
    {
      projname: "Hamburger menu",
      technologies: "ReactJS",
      photo: project8,
      url:"https://www.youtube.com/watch?v=9Q7wy8r3i8w",
      text: "Go to Video"
    },
    {
      projname: "CSS grid menu",
      technologies: "HTML / CSS / JS",
      photo: project9,
      url:"https://www.youtube.com/watch?v=9Q7wy8r3i8w",
      text: "Go to Video"
    }
    
    
  ];
    return(
      <section className="section-3" id="section-3">
      <h1 className="section-heading section-3-heading">My Projects</h1>
      <div className="projects-wrapper center">
      {
            projects.map((i) => {
              return (
                
          <div className="project" key={i.projname}>
                <div className="project-text">
                    <h2 className="project-name">{i.projname}</h2>
                    <h4 className="project-technologies">{i.technologies}</h4>
                </div>
                <img src={i.photo} className="project-img" />
                <a href={i.url} className="project-link" target="_blank">{i.text}</a>
            </div>
              
           )
          })}
            
        </div>
    </section>
)
    
}

export default MyProjectsWebPage;