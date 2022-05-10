import generalAssemblyLogo from '../assets/generalassembly-logo.png';
import ufinityLogo from '../assets/ufinity-logo.png';
import rsafLogo from '../assets/rsaf-logo.png';
import sixmoredaysLogo from '../assets/sixmoredays-logo.png';
import singaporepolyLogo from '../assets/singaporepoly-logo.png';
import buildawtScreen from '../assets/buildawt-screen.png';
import dailyreportScreen from '../assets/dailyreport-screen.png';
import financialcalcScreen from '../assets/financialcalc-screen.png';
import quizsgScreen from '../assets/quizsg-screen.png';
import game2048screen from '../assets/2048-screen.png';

export const skills = {
  languages: ['Javascript', 'Typescript', 'Node.js', 'HTML', 'CSS', 'Python'],
  technologies: [
    'React',
    'Redux',
    'Redux Toolkit',
    'TailwindCSS',
    'ChakraUI',
    'MUI',
    'Testing Library',
    'Jest',
    'Express',
    'MongoDB',
    'Heroku',
    'jQuery',
  ],
  otherSkills: [
    'Adobe Creative Cloud',
    'Figma',
    'Design Thinking',
    'Graphic Design',
    'UI/UX Design',
  ],
};

export const workExperience = [
  {
    companyName: 'Ufinity',

    role: 'Associate Software Engineer',
    duration: 'March 2022 to Present',
    description:
      'Implemented UI using front-end libraries such as React, Redux, Redux Toolkit, React Hook Forms, and MUI. Unit, functional testing, and bug fixing for various UI components using Jest and React Testing Library.',
    imageSrc: ufinityLogo,
  },
  {
    companyName: 'General Assembly',
    role: 'Instructional Associate',
    duration: 'December 2021 to March 2022',
    description:
      'Conducted lessons in Full-Stack Software Development with JavaScript, React, Express and MongoDB. As a Teaching Assistant, enabled students to achieve their goals to be industry-ready Software Engineers.',
    imageSrc: generalAssemblyLogo,
  },
  {
    companyName: 'Republic of Singapore Air Force',
    role: 'Service  Medic',
    duration: 'December 2019 to August 2021',
    description:
      'Introduced a new patient management system, streamlining appointments between doctors and patients. Created numerous designed posters and videos for RSAF’s Healthy Lifestyle & Anti-smoking Campaigns.',
    imageSrc: rsafLogo,
  },
  {
    companyName: 'Sixmoredays',
    role: 'Digital Design Intern',
    duration: 'March 2018 to June 2018',
    description:
      'Produced website mock-ups & social media assets and contributed to pitches & projects taken by the company. Created layout designs for web banners, interactive social posts & digital marketing with Facebook post hacking.',
    imageSrc: sixmoredaysLogo,
  },
];

export const education = [
  {
    institution: 'Singapore Polytechnic',
    duration: '2016 - 2019',
    certification: 'Diploma in Visual Communication and Media Design',
    imageSrc: singaporepolyLogo,
  },
  {
    institution: 'General Assembly',
    duration: '2021 - 2021',
    certification: 'Software Engineering Immersive',
    imageSrc: generalAssemblyLogo,
  },
];

export const projects = [
  {
    name: 'Financial Estimator',
    affiliation: 'Compound Interest Calculator for Multiple Accounts',
    description:
      'Compound interest calculator for multiple accounts, created to track your net worth after investing over time. Application calculates and displays information by year in a line chart for easy viewing.',
    tags: [
      'Javascript',
      'React',
      'Chakra UI',
      'React Hook Form',
      'Yup',
      'ChartJS',
    ],
    imageSrc: financialcalcScreen,
    github: 'https://github.com/hurrmun/singaporean-fi-estimator',
    deployment: 'https://singaporean-fi-estimator.vercel.app/',
  },
  {
    name: 'QuizSG',
    affiliation: 'Hack for Public Good Hackathon by OGP',
    description:
      'Full-Stack quiz builder and taker web application. Led creation of design screens for landing page, quiz taker & quiz maker flow using the OGP design system. Built to solve real problems that government officers are facing.',
    tags: ['Typescript', 'React', 'Chakra UI'],
    imageSrc: quizsgScreen,
    github: 'https://github.com/opengovsg/quizSG',
  },
  {
    name: 'Daily Report',
    affiliation: 'Report App Concept for Concrete Supplier',
    description:
      'Full-Stack application created to optimize a real use case of writing reports for material supplies on an excel spreadsheet. Implemented with login authentication, secure password hashing, and validation.',
    tags: [
      'Javascript',
      'React',
      'Node.js',
      'PostgreSQL',
      'knex',
      'heroku',
      'JWT',
    ],
    imageSrc: dailyreportScreen,
    github: 'https://github.com/hurrmun/daily-report',
    deployment: 'https://daily-report-hurrmun.herokuapp.com/',
  },
  {
    name: 'BuildAWT',
    affiliation: 'Workout Building Tool',
    description:
      'Front-End application implemented with public API (wger API) that returns different exercises sorted by equipment and category. The app categorizes the data from the API, which the user can search for and add to their workouts.',
    tags: ['Javascript', 'React', 'TailwindCSS', 'API'],
    imageSrc: buildawtScreen,
    github: 'https://github.com/hurrmun/BuildAWT',
    deployment: 'https://buildawt-app.vercel.app/',
  },
  {
    name: '2048 Game Clone',
    affiliation: 'Recreation of the hit mobile classic',
    description:
      'My attempt to recreate the popular 2048 game using javascript logic, including features to reset/ restart game, track high-score, and win and lose condition. Made using html, css, javascript, jquery, bootstrap and deployed with Vercel.',
    tags: ['Javascript', 'JQuery', 'Game', 'Bootstrap'],
    imageSrc: game2048screen,
    github: 'https://github.com/hurrmun/2048GameClone',
    deployment: 'https://2048-game-clone.vercel.app/',
  },
];
