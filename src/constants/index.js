export const navLinks = [
  { label: 'About me',  id: 'about'     },
  { label: 'Projects',  id: 'projects'  },
  { label: 'Education', id: 'education' },
  { label: 'Work',      id: 'work'      },
  { label: 'Contact',   id: 'contact'   },
]

export const skills = {
  frontend: [
    { name: "React", icon: "/icons/react.svg" },
    { name: "Quasar", icon: "/icons/quasar.svg" },
    { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "CSS/Tailwind", icon: "/icons/css.svg" }
  ],
  backend: [
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "Express", icon: "/icons/express.svg" },
    { name: "Java", icon: "/icons/java.svg" },
    { name: "Python", icon: "/icons/python.svg" },
    { name: "C", icon: "/icons/c.svg" }

  ],
  database: [
    { name: "MongoDB", icon: "/icons/mongodb.svg" },
    { name: "MySQL", icon: "/icons/mysql.svg" },
    { name: "HeidiSQL", icon: "/icons/heidisql.svg" },
    { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
    { name: "Firebase", icon: "/icons/firebase.svg" },

  ]
}
export const projects = [
  {
    title: "Fish forecast",
    desc: "Web app with weather,sea forecast and fish activity in the area.",
    image: "/fishforecast.png",
    tech: ["React", "Node.js", "WeatherAPI","Tailwind","Vue"],
    github: "https://github.com/DiegoBanovac/fish-forecast-app",
    live: "https://fish-forecast-app.onrender.com"
  },
  {
    title: "Cloud Estate",
    desc: "Web and mobile app made for buying and renting estate.",
    image: "/cloudestate.png",
    tech: ["Quasar", "Vue", "Express","HeidiSQL"],
    github: "https://github.com/DiegoBanovac/Cloud_Estate_Mobile",
    live: "https://cloud-estate-mobile.onrender.com/#/"
  },
  {
    title: "Hotel Batana",
    desc: "Hotel website made while on intership in Nivago.",
    image: "/hotelbatana.png",
    tech: ["Bootstrap", "Express"],
    github: "https://github.com/DiegoBanovac/hotel-batana",
    live: "https://diego-banovac.infinityfreeapp.com/index.php?i=1"
  },
  {
    title: "Geo Chat",
    desc: "Chat app with a geological guessing game.",
    image: "/geochat.png",
    tech: ["React", "Tailwind", "Express", "PostgreSQL"],
    github: "https://github.com/DiegoBanovac/geo-chat",
    live: "https://geo-chat-phi.vercel.app/"
  },
  {
    title: "Kids game",
    desc: "Game for kids with ADHD made for Vista ADHD center in Rijeka.",
    image: "/vista.webp",
    tech: ["Java"],
    github: "https://github.com/DiegoBanovac/kids-game",
    live: "#"
  },
  {
    title: "Mandates and work of committees.(IN PROGRESS)",
    desc: "Development of a system for tracking the mandates and work of committees for University of Applied Sciences of Rijeka.",
    image: "/veleri_0_0.jpg",
    tech: ["Quasar", "Vue", "Express",],
    github: "",
    live: "#"
  }
]