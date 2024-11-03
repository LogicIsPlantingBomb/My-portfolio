export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Ashish Baghel',
    position: 'Low-Level engineer/developer',
    img: 'assets/user-circle.png',
    review:
      'Working with Dhruv was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Devashish Mishra',
    position: 'Backend-developer',
    img: 'assets/user-circle.png',
    review:
      'Dhruv’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'Akansha Jha',
    position: 'Project Manager',
    img: 'assets/user-circle.png',
    review:
      'I can’t say enough good things about Dhruv. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Muskan Soni',
    position: 'Frontend developer',
    img: 'assets/user-circle.png',
    review:
      'Dhruv was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Chat Application',
    desc: 'Developed a robust chat application offering seamless real-time communication and geolocation sharing. The application provides users with the ability to create chat rooms, send instant messages, and share their current location with others in the chat room. This project showcases the integration of WebSockets for real-time updates and demonstrates proficiency in both frontend and backend development.',
    subdesc:
      'The frontend is built with basic HTML, CSS, and JavaScript, ensuring a user-friendly and responsive interface, while the backend leverages Node.js and Socket.IO for efficient, event-driven communication, ChatApp is designed for optimal performance and scalability.',
    href: 'https://github.com/LogicIsPlantingBomb/CHAT',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'DWLR monitoring',
    desc: 'Developed an advanced monitoring system for Digital Water Level Recorders (DWLR) deployed across India. This application tracks water levels in various regions, providing real-time data visualization through interactive maps, graphs, and pie charts,The DWLR Monitoring System is designed to provide comprehensive monitoring and analysis of water levels across various locations in India,its a real time monitoring application.',
    subdesc:
      'Built with React and Tailwind CSS, the application offers a modern, responsive user interface. The integration of Mapbox allows for detailed geographical representation of water level data, while additional libraries enhance the analytical capabilities with comprehensive charting features,Advanced mapping platform for displaying geographical data and visualizing water levels.Libraries for creating interactive and responsive graphs and pie charts(Chart.js/Recharts,Mapbox).',
    href: 'https://dwlr.nevernever.me/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Game Dev-SFML',
    desc: 'Developed an engaging 2D role-playing game (RPG) using the Simple and Fast Multimedia Library (SFML) and C++. The game features immersive player and enemy mechanics, a dynamic combat system, and smooth frame rate management. With detailed graphics and a modular codebase, this project showcases proficiency in game development, object-oriented programming, and real-time rendering.',
    subdesc:
      'FML (Simple and Fast Multimedia Library): Framework for handling graphics, windowing, audio, and network functionalities,C++: Core programming language for implementing game logic, mechanics, and performance optimization,Tiled Map Editor: Used for designing and managing game levels,GIMP/Photoshop: For creating and editing game sprites and textures,Git: Version control system for managing and tracking changes in the codebase.',
    href: 'https://github.com/LogicIsPlantingBomb/SFML-RPG',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'ACM_OIST',
    pos: 'Developer',
    duration: '2024 - Present',
    title: "ACM OIST-Bhopal is a student chapter highly focused on planning and organising events for coding and development, developed in React,NextJS,Ts,Express,Node and MongoDB",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'DWLR',
    pos: 'Developer',
    duration: '2024',
    title: "DWLR web-site is a live monitoring web-site for monitoring the data getting fetched by DWLR devices (which measures the water-level). I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Chatapp',
    pos: 'Developer',
    duration: '2023',
    title: "I have created a chatting application using Web-Sockets, i mostly worked in the backend part , i have used socket.io library to stablize the two way connection between users and the server.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];
