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
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    mm,
    redbuffer,
    hixol,
    education,
    falaya,
    companion,
    orcasmart,
    spills,
    aims
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Bachelor of Science in Computer Science",
      university: "Air University",
      date: "2016 - 2020",
      icon: education,
    },
    {
      title: "Master of Science in Project Management",
      university: "SZABIST",
      date: "2020 - 2022",
      icon: education,
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
      title: "Jr. Software Engineer",
      company_name: "Hixol",
      icon: hixol,
      iconBg: "#383E56",
      date: "Aug 2020 - Dec 2020",
      points: [
        "Assisted full-stack team in project deliverables",
        "Front-end development using ReactJS, HTML, CSS, and Ant Design grid system.",
        "Debugged code and resolved issues by reviewing configuration files and logs.",
        "Collaborated with designers and back-end developers for seamless project integration.",
      ],
    },
      {
        title: "Associate Software Engineer",
        company_name: "MicroMerger",
        icon: mm,
        iconBg: "#383E56",
        date: "January 2021 - February 2022",
        points: [
          "Worked closely with other business analysts, development teams and infrastructure specialists to deliver high availability solutions for mission-critical applications.",
          "Debugged code and located root causes of problems by reviewing configuration files and logs.",
          "Collaborated with cross-functional development team members to analyze potential system solutions based on evolving client requirements.",
          "valuated and adopted new technologies to address changing industry needs.",
        ],
      },
    {
      title: "Software Engineer",
      company_name: "RedBuffer AI",
      icon: redbuffer,
      iconBg: "#ffff",
      date: "February 2022 - Present",
      points: [
        "Working on team to maintain the website of the client also working on the new features and bugs that are reported by the client.",
        "Debugged code and located root causes of problems by reviewing configuration files and logs",
        "Technologies include A, NodeJS, And Database including MYSQL and MongoDB.",
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
      name: "OrcaSmart",
      description:
        "OrcaSmart is a Packaging Marketplace connecting Suppliers and Brands, offering business intelligence and an all-in-one portal for seamless management of various services. Facilitating collaboration, information sharing, and transaction automation worldwide.",
      tags: [
        {
          name: "Angular 15",
          color: "blue-text-gradient",
        },
        {
          name: "Ngzorro",
          color: "green-text-gradient",
        },
        {
          name: "ckeditor",
          color: "pink-text-gradient",
        },
        {
          name: "pdflib",
          color: "yellow-text-gradient",
        },
      ],
      image: orcasmart,
      source_code_link: "https://github.com/MuhammadHasher017",

    },
    {
      name: "EPrime",
      description:
        "Eprime Brands offers a customizable platform with pre-built KPIs and interactive graphs, built on React.js and Apex Charts, for streamlined data analysis and visualization. Experience enhanced design with Antd for efficient data insights.",
      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "Apex Charts",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/MuhammadHasher017",
    },
    {
      name: "FALAYA",
      description:
        "Falaya is a Baton Rouge-based real estate platform that connects buyers directly with sellers, eliminating middlemen and offering cost savings. Sellers can list properties and complete legal documents, while buyers can make offers and negotiate directly on the site.",
      tags: [
        {
          name: "NestJs",
          color: "blue-text-gradient",
        },
        {
          name: "Backend",
          color: "green-text-gradient",
        },
        {
          name: "AWS",
          color: "pink-text-gradient",
        },
        {
          name: "DynamoDB",
          color: "yellow-text-gradient",
        },
        {
          name: "Angular 14",
          color: "blue-text-gradient",
        },
      ],
      image: falaya,
      source_code_link: "https://github.com/MuhammadHasher017",
    },

    {
      name: "Companion AI",
      description:
        "Companion AI revolutionizes chat interfaces by seamlessly integrating industry-specific recommendations and templates, offering a user friendly experience and real-time engagement. Connecting users with tailored solutions through React.js, Ant Design, Nest.js, PostgreSQL, and google Cloud.",
      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "Nest.js",
          color: "green-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "pink-text-gradient",
        },
        {
          name: "Google Cloud",
          color: "yellow-text-gradient",
        },
        {
          name: "Ant Design",
          color: "blue-text-gradient",
        },
      ],
      image: companion,
      source_code_link: "https://github.com/MuhammadHasher017/companion-ai",
    },
    {
      name: "PES Spills",
      description:
        "The Incident Management System is a web platform for documenting and managing spills and incidents during field missions or projects. It records contractor actions in response to mishaps, casualties, and resource losses. In this we Enhanced backend performance by architecture micro-services for resource-intensive modules",
      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "mySQL",
          color: "pink-text-gradient",
        },
        {
          name: "AWS",
          color: "yellow-text-gradient",
        },
        {
          name: "Docker",
          color: "blue-text-gradient",
        },
      ],
      image: spills,
      source_code_link: "https://github.com/MuhammadHasher017",
    },
    {
      name: "AIMS",
      description:
        "AIMS (Activity, Incidents management System) is a system developed for UNICEF’s field missions in South Sudan. The web platform is used to document every action of the mission team. for instance, the mishaps that could happen, their intensity, casualties, and loss of resources",
      tags: [
        {
          name: "NextJs",
          color: "blue-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "mySQL",
          color: "pink-text-gradient",
        },
        {
          name: "AWS",
          color: "yellow-text-gradient",
        },
        {
          name: "Nodejs",
          color: "blue-text-gradient",
        },
      ],
      image: aims,
      source_code_link: "https://github.com/MuhammadHasher017",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };