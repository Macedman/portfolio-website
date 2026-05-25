import { Project } from '../interfaces/project.interface';

export const PROJECTS: Project[] = [
  {
    name: 'TaskFlow',
    description:
      'A modern Kanban-style task management platform designed to improve team productivity through intuitive drag-and-drop workflows, real-time updates, and collaborative project organization.',

    image: '/taskflow.png',

    techStack: [
      'Angular',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Tailwind CSS',
      'Express.js'
    ],

    github: 'https://github.com/Macedman/TaskFlow_Frontend',

    liveDemo: 'Coming Soon'
  },

  {
    name: 'Guest House Booking System',

    description:
      'A modern guest house booking platform that allows users to browse rooms, manage reservations, and streamline the booking experience through a responsive and user-friendly interface.',

    image: '/Guesthouse.png',

    techStack: [
      'Angular',
      'Tailwind CSS',
      'PostgreSQL',
      'NestJS'
    ],

    github: 'https://github.com/Macedman',
    liveDemo: 'Coming Soon'
  },

  {
    name: 'Bacolod Flood Alert and Reporting App',

    description:
      'A community-driven flood alert and incident reporting platform designed to help Bacolod residents monitor flood-prone areas, submit real-time reports, and improve local disaster awareness.',

    image: '/Flood.png',

    techStack: [
      'Angular',
      'Tailwind CSS',
      'PostgreSQL',
      'Express.js',
      'Leaflet Maps',
      'Firebase'
    ],

    github: 'https://github.com/Macedman',
    liveDemo: 'Coming Soon'
  }
];