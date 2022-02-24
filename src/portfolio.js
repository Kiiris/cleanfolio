const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/Kiiris/Calvin-Menyfields-Projects',
  title: 'GIT.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Calvin Menyfield',
  role: 'Full Stack Developer',
  description:
    'Highly motivated resourceful and goal-driven professional with an eager desire to grow. Experienced in MERN stack, Django, Vue3, Postgres, SQL, and more. Graduate student of General Assemblys Software Immersive, I plan to continue my skills in growing my variety and understanding the web of modern software development.',
  resume:
    'https://docs.google.com/document/d/1qmzkMPLPXLlxDn7fz5EJ-tHl5jGacVTVM3wX2Or-ah0/edit',
  social: {
    linkedin: 'https://www.linkedin.com/in/calvin-menyfield/',
    github: 'https://github.com/Kiiris',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'On My Block',
    description:
      ' Users can report suspicious activity and concerns to caution others as well as comment on posts with any new information or personal experiences based on their zipcode. Useful for newcomers and long-term residents alike, the app also includes recommendations for various services and local businesses with reviews.',
    stack: ['Node', 'Express', 'Postgres', 'React'],
    sourceCode: 'https://github.com/biancajoseph101/on_my_block',
    livePreview: 'https://obscure-sands-48639.herokuapp.com/',
  },
  {
    name: 'Resist-A-Piece',
    description:
      'This is a recipe sharing website used for finding, interacting with, and utulizing recipes shared through a database I created. A user will be able to go to the app, create a profile, and create, delete, and update recipes as well as sharing and interacting with the data associated with it. ',
    stack: ['Node', 'Express', 'MongoDB', 'React'],
    sourceCode: 'https://github.com/Kiiris/First-FullStack-Application',
    livePreview: 'https://github.com',
  },
  {
    name: 'Vlyons Heart',
    description:
      'If youre bored and in a pandemic, have a good time by chating with others, and finding the one for you. This application will let users connect and interact with each other, find new friends and more with a customizable way to filter by characteristics!',
    stack: ['React', 'Django', 'React', 'Python'],
    sourceCode: 'https://github.com/Kiiris/Vlyons-Heart',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Rest Framework',
  'Django',
  'MySQL',
  'Vue',
  'Redux/Contex',
  'Postgres',
  'Python',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'barthlemont@gmail.com',
}

export { header, about, projects, skills, contact }
