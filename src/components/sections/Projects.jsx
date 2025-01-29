import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Eye, Code } from "lucide-react";

const ProjectSection = ({ title, projects, isEven }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    className: "gap-6",
    dotsClass: "slick-dots !bottom-[-2rem]",
  };

  return (
    <div className={`w-full py-16 ${isEven ? 'bg-[#172121]' : 'bg-[#151821]'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-thistle">
          {title} 💼
        </h2>
        
        <div className="relative px-4">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="px-3">
                <div className={`${isEven ? 'bg-[#151821]' : 'bg-[#1a1f2e]'} text-thistle p-8 rounded-lg shadow-xl h-full`}>
                  <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`${isEven ? 'bg-[#252a3a]' : 'bg-[#2a303c]'} text-gray-300 px-3 py-1 text-sm rounded-full`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6">
                    <a
                      href={project.links.preview}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Eye size={16} />
                      <span>Preview</span>
                    </a>
                    {project.links.code && (
                      <a
                        href={project.links.code}
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <Code size={16} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectCategories = {
    technicalArticles: {
      title: "Tech Articles",
      projects: [
        {
          title: "What happens when you type https://www.google.com in your browser and press Enter?",
          description: "An informative article about the browser and how it works to render results to users",
          tags: ["Google", "Browser ", "Technical Writing"],
          links: { preview: "https://medium.com/@Phanhie/what-happens-when-you-type-https-www-google-com-in-your-browser-and-press-enter-d82abb17f7fe" },
        },
        {
          title: "Position Relative and Absolute",
          description: "A beginner's guide to working with Relative and Absoluet position property",
          tags: ["HTML", "CSS", "Position Property"],
          links: { preview: "https://medium.com/@Phanhie/position-relative-and-absolute-3b248726a1e0" },
        },
        {
          title: "How to Maximize Remote Team Collaboration with SaaS Software",
          description: "A step-by-step guide on deploying React applications to Kubernetes using Docker and Minikube.",
          tags: ["SAAS", "Collaboartion", "Remote Team"],
          links: { preview: "https://medium.com/@Phanhie/how-to-maximize-remote-team-collaboration-with-saas-software-9b4d4e53623d" },
        },
       
      ],
    },
    userGuides: {
      title: "Repositories",
      projects: [
        {
          title: "Pepo 1",
          description: "Comprehensive tutorial on centering a DIV in CSS",
          tags: ["CSS", "HTML"],
          links: { preview: "https://medium.com/@Phanhie/how-to-center-a-div-in-css-4dff426256fa" },
        },
        {
          title: "Repo2",
          description: "Step-by-step guide for getting started with APIs.",
          tags: ["Beginner", "API", "SOftware Dev"],
          links: { preview: "https://medium.com/@Phanhie/apis-a-beginners-guide-cd02853f105e" },
        },
        {
          title: "My GitHub Repository",
          description: "Explore my public repositories and open-source projects on GitHub.",
          tags: ["GitHub", "Open Source", "Repositories"],
          links: { 
            preview: "https://github.com/your-username", // Replace with your GitHub profile or repository link
            code: "https://github.com/your-username/your-repository", // Replace with a specific repository link if needed
          },
        },
      ],
    },
    //empty space
  };

  return (
    <div className="flex flex-col w-full">
      {Object.entries(projectCategories).map(([key, category], index) => (
        <ProjectSection 
          key={key} 
          title={category.title} 
          projects={category.projects}
          isEven={index % 2 === 0}
        />
      ))}
    </div>
  );
};

export default Projects;