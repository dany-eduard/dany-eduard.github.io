interface Image {
  src: string;
  alt: string;
}

interface Project {
  image?: Image;
  name: string;
  description: string;
  technologies?: string[];
  repository: string;
  deployLink?: string;
}

const projects: Project[] = [
  {
    name: 'Anonymous Chat',
    description: 'This is a simple chat application created with Socket.io.',
    technologies: ['HTML', 'Typescript', 'Node.js', 'Socket.io'],
    repository: 'https://github.com/dany-eduard/anonymous-chat',
    deployLink: 'https://anonymous-chat.danyeduard.repl.co/',
  },
  {
    name: 'Fut21 App',
    description:
      'React app que permite hacer búsqueda de jugadores y equipos consumiendo Fut21 API.',
    technologies: ['Typescript', 'HTML', 'Node.js', 'CSS'],
    repository: 'https://github.com/dany-eduard/fut21-app',
    deployLink: 'https://dany-eduard.github.io/fut21-app/',
  },
  {
    name: 'Fut21 API',
    description:
      'Este proyecto es una réplica de la API del juego FIFA 21 Ultimate Team.',
    technologies: ['Typescript', 'Node.js', 'Express', 'PostgreSQL'],
    repository: 'https://github.com/dany-eduard/fut21-api',
    deployLink: 'https://fut21-api.herokuapp.com/api/v1/players?page=1',
  },
];

export default projects;
