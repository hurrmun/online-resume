import generalAssemblyLogo from '../assets/generalassembly-logo.png';
import ufinityLogo from '../assets/ufinity-logo.png';
import rsafLogo from '../assets/rsaf-logo.png';
import sixmoredaysLogo from '../assets/sixmoredays-logo.png';
import singaporepolyLogo from '../assets/singaporepoly-logo.png';

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
    institution: 'General Assembly',
    duration: '2021 - 2021',
    certification: 'Software Engineering Immersive',
    imageSrc: generalAssemblyLogo,
  },
  {
    institution: 'Singapore Polytechnic',
    duration: '2016 - 2019',
    certification: 'Diploma in Visual Communication and Media Design',
    imageSrc: singaporepolyLogo,
  },
];
