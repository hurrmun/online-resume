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
    'Styled Components',
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
    description: [
      'As a software engineer, I implemented user interfaces and designs using React and various web libraries, created back-end APIs and services and deployed code to various environments with the SHIP stack. Other responsibilities include unit & functional testing, and bug fixing for various components using Jest and React Testing Library. Projects were conducted in an AGILE environment, with continuous integration and continuous delivery over multiple sprints.',
      'Projects I have worked on include the Youth Health Management System by Health Promotion Board, a web application for creating and managing consent from students/parents and the SupportGoWhere website by GovTech GDS, where users can find and apply for financial aid schemes.',
    ],
    imageSrc: ufinityLogo,
  },
  {
    companyName: 'General Assembly',
    role: 'Instructional Associate',
    duration: 'December 2021 to March 2022',
    description: [
      'Responsibilities include conducting lessons in Full-Stack Software Development with JavaScript, React, Express and MongoDB. Assisted the Lead Instructor in preparing lesson materials and resources using version management tools like GitHub enterprise. In addition, I created new lesson materials to demonstrate the uses of different libraries.',
      'As a Teaching Assistant, I enabled students from diverse backgrounds and ages to achieve their goals of becoming industry-ready Software Engineers.',
    ],
    imageSrc: generalAssemblyLogo,
  },
  {
    companyName: 'Republic of Singapore Air Force',
    role: 'Service  Medic',
    duration: 'December 2019 to August 2021',
    description: [
      'Introduced a new patient management system, streamlining appointments between doctors and patients. Created numerous designed posters and videos for RSAF’s Healthy Lifestyle & Anti-smoking Campaigns.',
      'Best Airman of the Month award received due to various contributions to the unit and excellence in day-to-day duties.',
    ],
    imageSrc: rsafLogo,
  },
  {
    companyName: 'Sixmoredays',
    role: 'Digital Design Intern',
    duration: 'March 2018 to June 2018',
    description: [
      'Responsibilities include creating media assets for use in various advertising and branding projects. Throughout the internship, I produced website mock-ups & graphics for major brands such as Nin Jiom, Daikin, and many others.',
      'Additionally, I contributed to pitches & projects taken on by the company, and created layout designs for web banners, interactive social posts & digital marketing with Facebook post hacking.',
    ],
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
    tags: ['Typescript', 'React', 'Chakra UI', 'Hackathon'],
    imageSrc: quizsgScreen,
    github: 'https://github.com/opengovsg/quizSG',
  },
  {
    name: 'Daily Report',
    affiliation: 'Report App Concept for Concrete Supplier',
    description:
      'Full-Stack PERN application created to optimize a real use case of writing reports for material supplies on an excel spreadsheet. Implemented with login authentication, secure password hashing, and validation.',
    tags: [
      'Javascript',
      'React',
      'TailwindCSS',
      'Node.js',
      'PostgreSQL',
      'knex',
      'heroku',
      'JWT',
    ],
    imageSrc: dailyreportScreen,
    github: 'https://github.com/hurrmun/daily-report',
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
