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
  } from "../assets";
  
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
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Data Scientist",
      icon: mobile,
    },
    {
      title: "App Developer",
      icon: backend,
    },
    {
      title: "Designer",
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
      title: "Exploring Data Science",
      company_name: "Self Paced Learning",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "July 2024 - Present",
      points: [
        "Completed the 'Data Science for Engineers' course from NPTEL, focusing on data science applications in R, taught by professors from IIT Madras.",
        "Finished the Udemy 'Python for Data Science and Machine Learning Bootcamp' by Jose Portilla, covering key concepts in data analysis, machine learning, and visualization.",
        "Developed ALOHA, a chatbot project using TensorFlow and NLTK for managing tasks with natural language processing and machine learning techniques.",
        "Worked on Flood Guard, a machine learning project predicting potential flood disasters in Kerala based on rainfall patterns and environmental data.",
      ],
    },
    {
      title: "College",
      company_name: "Government Engineering College Thrissur",
      icon: shopify,
      iconBg: "#383E56",
      date: "October 2022 - Present",
      points: [
        "Completed an internship with the Thrissur Corporation, working on a project related to digital literacy.",
        "Secured 3rd place in the GEC Kannur Hackathon with the team Nobel Dev's.",
        "Achieved 2nd place in the Christ College Irinjalakuda competition alongside the team.",
        "Won 2nd place in the College of Engineering Vadakara competition as part of Nobel Dev's.",
      ],
    },
    {
      title: "High School",
      company_name: "Nirmala Matha Central School",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "May 2017 - May 2021",
      points: [
        "Secured 97.8% in my 10th-grade.",
        "Achieved 96% in 12th grade with a focus on Bio-Science.",
        "Explored Java during this time.",
        "Explored Kerala and life in Thrissur.",
      ],
    },
    {
      title: "Schooling",
      company_name: "Al-Yasmin International School",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2008 - April 2017",
      points: [
        "I consistently ranked as the top student in most of my classes.",
        "Secured first place in a zonal-level robotics competition in Saudi Arabia. ",
        "Developed a strong interest in programming. ",
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
      name: "A.L.O.H.A",
      description:
        "ALOHA is an AI driven personal assistant designed to help users manage their tasks, events, and categories. Leveraging Natural Language Processing (NLP) and Machine Learning (ML), ALOHA can understand user commands and perform various functions such as adding, deleting, and listing tasks or creating categories.",
      tags: [
        {
          name: "ML",
          color: "blue-text-gradient",
        },
        {
          name: "NLTK",
          color: "green-text-gradient",
        },
        {
          name: "Flutter",
          color: "pink-text-gradient",
        },
        {
          name: "Flask",
          color: "yellow-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Apollo-Blaze/A.L.O.H.A",
    },
    {
      name: "FloodGuard",
      description:
        "FloodGuard is a predictive modeling project aimed at assessing the risk of flooding in Kerala based on current rainfall conditions. Utilizing machine learning and data analysis techniques, this project leverages historical weather data to forecast potential flooding events, providing valuable insights for disaster management and response efforts.",
      tags: [
        {
          name: "Tensorflow",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Docker",
          color: "pink-text-gradient",
        },
        {
          name: "Flask",
          color: "yellow-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Apollo-Blaze/FloodGuard",
    },
    {
      name: "LearnSpectra",
      description:
        "LearnSpectra is an educational web application that helps teachers and educators analyze educational materials. Users can upload PDF files containing chapters, submit questions related to the content, and receive AI-generated insights. The application provides suggestions for relevant topics and assignments.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Gemini",
          color: "green-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
        {
          name: "Firebase",
          color: "yellow-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Apollo-Blaze/LearnSpectra",
    },
    {
      name: "Reddit Topic Modeling",
      description:
        "This project uses Python to perform topic modeling on Reddit comments. It leverages libraries like praw for accessing Reddit data, nltk for text preprocessing, and sklearn for topic modeling using Latent Dirichlet Allocation (LDA).",
      tags: [
        {
          name: "Tensorflow",
          color: "blue-text-gradient",
        },
        {
          name: "PRAW",
          color: "green-text-gradient",
        },
        {
          name: "NLTK",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Apollo-Blaze/Reddit_Topic_Modeling",
    },
    {
      name: "Eko",
      description:
        "EKO is an innovative platform designed to bridge the gap between the general public and repair technicians by facilitating the sale of unusable electronic and electrical components. This project aims to make repairs more affordable and accessible .",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "green-text-gradient",
        },
        {
          name: "Gemini",
          color: "pink-text-gradient",
        },
        {
          name: "Firebase",
          color: "yellow-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Apollo-Blaze/Ekov1",
    },
    {
      name: "Trip Guide",
      description:
        "A simple Flutter app to add and delete quotes, which served as my beginner project to gain hands-on experience in Flutter. The user interface and design elements are well-curated, making the app both functional and visually appealing.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Shared_Preferences",
          color: "green-text-gradient",
        },
        {
          name: "UI",
          color: "pink-text-gradient",
        },
        {
          name: "UX",
          color: "yellow-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Apollo-Blaze/Quotify-flutter-app-",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };