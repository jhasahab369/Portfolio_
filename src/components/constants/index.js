import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    mathongo,
    chegg,
    freelance,
    robocon,
    icse,
    cbse,
    iit,
  } from "/src/assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Competetive Programmer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    
    {
      title: "Data Analyst",
      company_name: "MathonGo",
      icon: mathongo,
      iconBg: "#383E56",
      date: "Feb 2023- March 2023",
      points: [
        "Analysed datas of competetive exam question types, and used classification mechanism to render them","Worked on ateam with 12 students in India, collaboratively to ensure the smooth workflow of content development","Was responsible for the crucial roles of multiple projects of creation of Question banks catering to different needs"
      ],
    },



    
    
    
    {
      title: "CS- Subject Matter Expert",
      company_name: "Chegg",
      icon: chegg,
      iconBg: "#383E56",
      date: "January 2023- onwards",
      points: [
        "Resolving complex sophisticated programming related doubts","A student community which is culmination of intrguing questions","Employed Deep theoritical Computer Science knowledge posing boht the core and non core fundamentals"
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Freelance clients",
      icon: freelance,
      iconBg: "#E6DEDD",
      date: " Sept 2023-onwards",
      points: [
        "Developing and maintaining web applications using React.js , and Backend via Nodejs hosting it end to end.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers or deisgners involved."
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Team Robocon IIT Patna",
      icon: robocon,
      iconBg: "#E6DEDD",
      date: " Sept 2023-onwards",
      points: [
        "Developing remote control application for Team Phoenix Abu Robocon robot",
        "Collaborating with cross-functional teams including , Co-ordinators, Sub-cordinators.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
    
  ];
  const experiencesx = [
    {
      title: "ICSE",
      company_name: "Matriculation",
      icon: icse,
      iconBg: "#383E56",
      date: "April 2020",
      points: [
        "Scored 98.4%","Under Top 50 in State","Under Top 3 in District","Student of the Year, in School","The Times Awarded for Best Co-Curricular Activity"
      ],
    },
    {
      title: "CBSE",
      company_name: "Higher Secondary",
      icon: cbse ,
      iconBg: "#E6DEDD",
      date: "April 2020-June 2022",
      points: [
        "Scored 96%","Top 5 student in District"
      ],
    },
    {
      title: "Indian Institute of Technology(IIT), Patna ",
      company_name: "Department of CSE, Undergrad with AI Major",
      icon: iit ,
      iconBg: "#383E56",
      date: "August 2023- onwards",
      points: [
        "1st semester CPI 9.31 on a scale of 10",
        "Started with research projects under professors",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Course-selling-App",
      description:
        "Web-based platform that allows admin to create and push courses, and users to purchase it",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },{
          name:"nodejs",
          color: "green-text-gradient",
        }
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Stock Prediction",
      description:
        "An End to End Model deployed on the web , to predict stock prices of next 30 days of a stock, rendered for next 30 ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    
  ];
  
  export { services, technologies, experiences,experiencesx, testimonials, projects };