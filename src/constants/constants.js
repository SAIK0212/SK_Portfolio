import {
  mobile,
  backend,
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
  Freak,
  Nike,
  Chicken,
  tracker,
  threejs,
  nextjs,
  express,
  java,
  jwt,
  nextauth,
  socialSphere,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Programmer",
    icon: backend,
  },
  // {
  //   title: "Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
    position: [0, 0, 0],
  },
  {
    name: "Next JS",
    icon: nextjs,
    position: [2, 0, 0],
  },
  {
    name: "Express JS",
    icon: express,
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JWT",
    icon: jwt,
  },
  // {
  //   name: "NextAuth",
  //   icon: nextauth,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const projects = [
  {
    name: "FIT-FREAK",
    description:
      "A fitness tracking web application built with ReactJs, Express, JWT, NodeJs, And MongoDB.",
    features: [
      "Users can create an account and login to the application.",
      "Users can track their fitness goals and progress.",
      "Users can create a workout plan and track their progress.",
      "Users can create a workout plan and track their progress.",
    ],
    tags: [
      // {
      //   name: "NextJs",
      //   color: "blue-text-gradient",
      // },
      {
        name: "ExpressJs",
        color: "green-text-gradient",
      },
      // {
      //   name: "Socket.io",
      //   color: "pink-text-gradient",
      // },
      {
        name: "Tailwind",
        color: "orange-text-gradient",
      },
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "JWT",
        color: "pink-text-gradient",
      },
      {
        name: "ReactJs",
        color: "orange-text-gradient",
      },
      // {
      //   name: "ExpressJs",
      //   color: "blue-text-gradient",
      // },
    ],
    image: Freak,
    // source_code_link: "https://github.com/himanshu8443/InkSync",
    // live_link: "https://www.fit-freak.cloud/",
  },
  {
    name: "Nike-Store",
    description:
      "A dynamic full-stack Nike-Store web application with ReactJs , ExpressJs , JWT , NodeJs and MongoDB.",
    features: [
      "User authentication using JWT and OAuth providers.",
      "Users can Create, update and delete their own products.",
      "Add products to favorites in one click.",
      "Users can view all products and add them to the cart.",
      "Users can view all products and add them to the cart.",
    ],
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      // {
      //   name: "NextJs",
      //   color: "orange-text-gradient",
      // },
      {
        name: "JWT",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "pink-text-gradient",
      },
    ],
    image: Nike,
    // source_code_link: "https://github.com/himanshu8443/hayasaka",
    // live_link: "https://hayasaka.live/",
  },
  {
    name: "Chicken-Road Cross Game",
    description: "Developed a chicken road cross game with ReactJs , ThreeJs and Tailwind.",
    features: [
      "Users can play the game and score points.",
      "Users can see the score and the time.",
      "Users can see the high score.",
      "Users can see the time.",
    ],
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      
    ],
    image: Chicken,
    // source_code_link: "https://github.com/himanshu8443/Study-Notion-master",
    // live_link: "https://studynotion-master.vercel.app/",
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "STARMARK SOFTWARE",
    icon: web,
    iconBg: "#383E56",
    date: "2025 - Present",
    points: [
      "Developed and deployed full-stack web applications using DOTNET, C#, SQL Server, and ASP.NET Core.",
      "Used Angularjs framework for frontend development.",
      "Built responsive and user-friendly interfaces with modern UI/UX principles.",
      "Implemented GRAPHQL APIs and integrated third-party services for enhanced functionality.",
      "Collaborated with clients to understand requirements and deliver high-quality solutions.",
    ],
  },
  {
    title: "Software Developer (Intern)",
    company_name: "TECHCITI TECHNOLOGIES PVT LTD",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "JULY 2024 - OCTOBER 2024",
    points: [
      "Developed  web applications using React.js  framework And Machine Learning.",
      "Implemented state management solutions using Redux Toolkit.",
      "Designed and developed responsive user interfaces with Tailwind CSS.",
      "Optimized application performance and user experience. ",
      "Implemented Machine Learning algorithms to predict user behavior and improve application performance.",
      "Trained and deployed machine learning models to predict user behavior and improve application performance.",
    ],
  },
];

// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

export {
  services,
  technologies,
  experiences,
  //  testimonials,
  projects,
};
