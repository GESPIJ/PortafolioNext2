const Python = { title: "Python", img: "/assets/pythonLogo.png" };
const React = { title: "React", img: "/assets/reactLogo.png" };
const Next = { title: "Next", img: "/assets/nextjsLogo.png" };
const Redux = { title: "Redux", img: "/assets/reduxLogo.png" };
const Javascript = { title: "Javascript", img: "/assets/javascriptLogo.png" };
const Css = { title: "Css", img: "/assets/cssLogo.png" };
const Vue = { title: "Vue", img: "/assets/vueLogo.png" };
const NodeJs = { title: "Node", img: "/assets/nodejsLogo.png" };
const Laravel = { title: "Laravel", img: "/assets/LaravelLogo.png" };
const Firebase = { title: "Firebase", img: "/assets/fireBaseLogo_Resized.png" };
const Flutter = { title: "Flutter", img: "/assets/flutterLogo.png" };

export const featuredPortfolio = [
  {
    id: 1,
    // title: "Social Media App",
    title: "Market Place",
    //img: "/assets/bodegon2.JPG",
    img: "/assets/bodegon_resized.JPG",
    // img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU",
    //link: "https://marketplace-liart.vercel.app/",
    link: "http://bodegon99.com",
    titulo: "Bodegon 99",
    descripcion: "Tus dulces y comidas importadas favoritas ahora más cerca. ",
    tecnologias: [React, Firebase],
  },
  {
    id: 2,
    //title: "Rampa UI Design",
    //img: "https://cdn.dribbble.com/users/702789/screenshots/15054318/media/4ea5d492b7b07eebc9528ff960794879.png?compress=1&resize=1200x900",
    title: "Industrias",
    titulo: "iDetectFugas",
    descripcion:
      "Sistema industrial basado en inteligencia artificial para monitorear, detectar y prevenir fugas en oleoductos",
    //img: "/assets/PipelinePhoto.jpg",
    img: "/assets/PipelinePhoto.JPG",
    tecnologias: [React, Python, Redux],
  },
  // {
  //   id: 3,
  //   title: "Industrias",
  //   img: "/assets/ControlStationPhoto.jpg",
  // },

  {
    id: 3,
    //title: "E-commerce Web Design",
    title: "Gestión y manejo de empresas",
    img: "/assets/AMIM3.jpeg",
    titulo: "AMIM",
    descripcion: "Sistema de gestion y manejo de inventario para empresas",
    tecnologias: [Javascript, Css, Python],
    //img: "/assets/LuxTopper.JPG",
  },
  {
    id: 4,
    //title: "E-commerce Web Design",
    title: "Core Bancario",
    img: "/assets/BancoDeVenezuela.jpg",
    titulo: "Departamento Seguridad Banco de Venezuela",
    descripcion:
      "Diseño, implementación y mantenimiento de sistemas administrativos empleados para la prevención, monitoreo y resolución de fraudes bancarios.",
    tecnologias: [React, NodeJs, Javascript, Laravel, Css, Next],
    //img: "https://cdn.dribbble.com/users/1387827/screenshots/15466426/media/deb2dca6762cd3610321c98bfccb0b72.png?compress=1&resize=1200x900",
  },
  // {
  //   id: 4,
  //   title: "Relax Mobile App",
  //   img: "https://cdn.dribbble.com/users/4095861/screenshots/15467417/media/d6a15c416626f12b31fa5ca1db192572.png?compress=1&resize=1200x900",
  // },
  // {
  //   id: 5,
  //   title: "Hero Web Design",
  //   img: "https://cdn.dribbble.com/users/5031392/screenshots/15467520/media/c36b3b15b25b1e190d081abdbbf947cf.png?compress=1&resize=1200x900",
  // },
  // {
  //   id: 6,
  //   title: "Banking App",
  //   img: "https://cdn.dribbble.com/users/3307260/screenshots/15468444/media/447b4501f7a145b05e11c70199a9c417.jpg?compress=1&resize=1200x900",
  // },
];

export const webPortfolio = [
  {
    id: 1,
    // title: "Social Media App",
    title: "Market Place",
    img: "/assets/bodegon_resized.JPG",
    // img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU",
    //link: "https://marketplace-liart.vercel.app/",
    link: "http://bodegon99.com",
    titulo: "Bodegon 99",
    descripcion: "Tus dulces y comidas importadas favoritas ahora más cerca",
    tecnologias: [React, Firebase],
  },
  {
    id: 2,
    //title: "Rampa UI Design",
    //img: "https://cdn.dribbble.com/users/702789/screenshots/15054318/media/4ea5d492b7b07eebc9528ff960794879.png?compress=1&resize=1200x900",
    title: "Industrias",
    //img: "/assets/PipelinePhoto.jpg",
    img: "/assets/PipelinePhoto.JPG",
    titulo: "iDetectFugas",
    descripcion:
      "Sistema industrial basado en inteligencia artificial para monitorear, detectar y prevenir fugas en oleoductos",
    tecnologias: [React, Python, Redux],
  },
  // {
  //   id: 3,
  //   title: "Industrias",
  //   img: "/assets/ControlStationPhoto.jpg",
  // },

  {
    id: 3,
    //title: "E-commerce Web Design",
    title: "Gestión y manejo de empresas",
    img: "/assets/AMIM3.jpeg",
    titulo: "AMIM",
    descripcion: "Sistema de gestion y manejo de inventario para empresas",
    tecnologias: [Javascript, Css, Python],
    //img: "/assets/LuxTopper.JPG",
  },
  {
    id: 4,
    //title: "E-commerce Web Design",
    title: "Gestión de hoteles",
    img: "/assets/LuxTopper2_resized.JPG",
    descripcion:
      "Habitaciones lujosas en la Costa Norte de Estados Unidos al mejor precio",
    link: "http://www.luxtopper.com",
    tecnologias: [React, Css],

    //img: "/assets/LuxTopper.JPG",
  },

  {
    id: 6,
    //title: "E-commerce Web Design",
    title: "Core Bancario",
    img: "/assets/BancoDeVenezuela.jpg",
    titulo: "Departamento Seguridad Banco de Venezuela",
    descripcion:
      "Diseño, implementación y mantenimiento de sistemas administrativos empleados para la prevención, monitoreo y resolución de fraudes bancarios.",
    tecnologias: [React, NodeJs, Javascript, Laravel, Css, Next],
    //img: "https://cdn.dribbble.com/users/1387827/screenshots/15466426/media/deb2dca6762cd3610321c98bfccb0b72.png?compress=1&resize=1200x900",
  },

  // {
  //   id: 1,
  //   title: "Web Social Media App",
  //   img: "https://cdn.dribbble.com/users/5031392/screenshots/15467520/media/c36b3b15b25b1e190d081abdbbf947cf.png?compress=1&resize=1200x900",
  // },
  // {
  //   id: 2,
  //   title: "Web Rampa UI Design",
  //   img: "https://cdn.dribbble.com/users/3967258/screenshots/15463803/media/4fddb9a2caf3b3bd634060f706a91e73.png?compress=1&resize=1200x900",
  // },
  // {
  //   id: 3,
  //   title: "Web E-commerce Design",
  //   img: "https://cdn.dribbble.com/users/3637068/screenshots/15467010/media/69a3279182b75365013fe285733d1122.png?compress=1&resize=1200x900",
  // },
  // {
  //   id: 4,
  //   title: "Web Relax App",
  //   img: "https://cdn.dribbble.com/users/2264844/screenshots/15463998/media/d85e92a332c41094f68e1f716884f7ce.jpg?compress=1&resize=1200x900",
  // },
  // {
  //   id: 5,
  //   title: "Web Design",
  //   img: "https://cdn.dribbble.com/users/387658/screenshots/15458608/media/e92ec1dd33dd1170ae3dc9c5272f2693.jpg?compress=1&resize=1200x900",
  // },
  // {
  //   id: 6,
  //   title: "Web Banking App",
  //   img: "https://cdn.dribbble.com/users/6384483/screenshots/15468426/media/ce9479fa1f8dba3a4a49840d76e55e31.png?compress=1&resize=1200x900",
  // },
];

export const mobilePortfolio = [
  {
    id: 1,
    title: "Mobile Social Media App",
    //img: "https://cdn.dribbble.com/users/2597268/screenshots/15468893/media/44313553d73ba41580f1df69749bba28.jpg?compress=1&resize=1200x900",
    img: "/assets/FitnessAppMerged.jpg",
    titulo: "Fitness App",
    descripcion:
      "Aplicación usada para monitorear y llevar registros semanales de la actividad física ",
    tecnologias: [Flutter],
  },
  {
    id: 2,
    title: "Mobile Rampa UI Design",
    //img: "https://cdn.dribbble.com/users/5920881/screenshots/15463142/media/b5a460223798bd85d835710806e2f3dd.png?compress=1&resize=1200x900",
    img: "/assets/BooksAppMerged.jpg",
    titulo: "Read Lovers",
    descripcion:
      "Red social para amantes de la lectura. Organiza, gestiona tus libros favoritos y compartelo con tus amigos en tiempo real",
    tecnologias: [Flutter, Firebase],
  },
  // {
  //   id: 3,
  //   title: "Mobile E-commerce Design",

  //   img: "/assets/BookApp1.jpeg",
  // },
  // {
  //   id: 4,
  //   title: "Mobile Relax App",

  //   img: "/assets/BookApp2.jpeg",
  // },
  // {
  //   id: 5,
  //   title: "Mobile Hero Design",
  //   img: "https://cdn.dribbble.com/users/26642/screenshots/15462545/media/1a202ef5c8338b6f78634e6edc1ba350.png?compress=1&resize=1200x900",
  // },
  // {
  //   id: 6,
  //   title: "Mobile Banking App",
  //   img: "https://cdn.dribbble.com/users/1387827/screenshots/15466426/media/deb2dca6762cd3610321c98bfccb0b72.png?compress=1&resize=1200x900",
  // },
];

export const designPortfolio = [
  {
    id: 1,
    title: "Mine Sweeper",
    img: "/assets/MineSweeper.jpeg",
    titulo: "AI Buscaminas",
    descripcion:
      "El juego original de buscaminas basado en inteligencia artificial",
    tecnologias: [Python],
  },
  {
    id: 2,
    title: "Scrabble",
    img: "/assets/ScrabbleAI.jpeg",
    titlo: "AI Scrabble",
    descripcion:
      "El clásico juego de Scrabble, resuelto por medio de la inteligencia artificial",
    tecnologias: [Python],
  },
  // {
  //   id: 3,
  //   title: "Design E-commerce Web Design",
  //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU",
  // },
  // {
  //   id: 4,
  //   title: "Design Relax Mobile App",
  //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU",
  // },
  // {
  //   id: 5,
  //   title: "Design Keser Web Design",
  //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU",
  // },
  // {
  //   id: 6,
  //   title: "Design Banking App",
  //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU",
  // },
];

export const contentPortfolio = [
  // {
  //   id: 1,
  //   title: "Content Social Media App",
  //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU",
  // },
  // {
  //   id: 2,
  //   title: "Content Rampa UI Design",
  //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU",
  // },
  // {
  //   id: 3,
  //   title: "Content E-commerce Web Design",
  //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU",
  // },
  // {
  //   id: 4,
  //   title: "Content Relax Mobile App",
  //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU",
  // },
  // {
  //   id: 5,
  //   title: "Content Keser Web Design",
  //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU",
  // },
  // {
  //   id: 6,
  //   title: "Content Banking App",
  //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU",
  // },
];
