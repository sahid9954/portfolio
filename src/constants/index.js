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
    title: "Cloud Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "VLSI Designer",
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
    title: "DSA JAVASCRIPT AND MYSQL",
    company_name: "LEETCODE",
    icon: starbucks,
    iconBg: "#383E56",
    date: "DEC 2022 - NOW",
    points: [
      "500+ Questions Solved: Mastered a wide range of problems across various difficulty levels (Easy, Medium, Hard).",
      "Coding Streak Badges: Earned 2 badges for completing 100 days of coding and 2 badges for 50 days of coding.",
      "Algorithm and Data Structure Expertise: Proficient in Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Heaps, Sorting, Searching, Dynamic Programming, Backtracking, and more.",
      "Competitive Programming: Enhanced problem-solving skills and prepared for coding competitions through regular practice.",
    ],
  },
  {
    title: "DATA STRUCTURE AND ALGORITHM",
    company_name: "CODING NINJAS",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "DEC 2023 - NOW",
    points: [
      "150+ Questions Solved: Strengthened problem-solving skills and algorithmic thinking by solving a diverse set of problems.",
      "Comprehensive Learning Path: Followed structured courses and practice problems, gaining in-depth knowledge of various programming concepts and techniques.",
      "Project-Based Learning: Applied problem-solving skills to real-world projects and coding challenges, enhancing practical coding experience.",
    ],
  },
  {
    title: "Github",
    company_name: "contributions",
    icon: shopify,
    iconBg: "#383E56",
    date: "Dec 2022 - now",
    points: [
      "8 Repositories: Developed and maintained 8 repositories showcasing a range of projects, from small utilities to more complex applications.",
      "C Stars: Earned C stars for the quality and utility of the repositories, demonstrating peer recognition and approval.",
      "3 Badges: Achieved 3 badges for contributions and community engagement on GitHub.",
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
    name: "Myntra Clone",
    description:
      "Web-based platform that allows users to do online shopping for clothes, shoes, home & living items etc. It provides quality products to customers.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "tailwind, aws",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/sahid9954/myntra-clone",
  },
  {
    name: "WSN",
    description:
      "A wireless sensor network project aims to create a network of sensors that communicate wirelessly to collect environmental data such as temperature, humidity, and air quality. Tasks include sensor selection, deployment, network design, protocol development, data aggregation, and visualization. The goal is to build a robust system for real-time data collection without extensive wiring, suitable for applications like environmental monitoring and industrial automation.",
    tags: [
      {
        name: "matlab",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/sahid9954/wsn/tree/main",
  },
  {
    name: "Automated greenhouse",
    description:
      "An automated greenhouse project involves creating a controlled environment for plants to grow optimally using technology. This typically includes sensors to monitor conditions like temperature, humidity, and light levels, as well as actuators to adjust these conditions as needed, such as automated watering systems or shades. The goal is to maximize plant growth and health while minimizing manual intervention, often through the use of microcontrollers or computer systems to manage the various components.",
    tags: [
      {
        name: "arduino",
        color: "blue-text-gradient",
      },
      {
        name: "arduino IDE 1.8.19Arduino IDE 1.8.19",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/sahid9954/automated-greenhouse-project",
  },
];

export { services, technologies, experiences, testimonials, projects };
