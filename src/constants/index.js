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
    desc: "Web app  .",
    image: "/fishforecast.png",
    tech: ["React", "Node.js", "WeatherAPI","Tailwind"],
    github: "https://github.com/DiegoBanovac/fish-forecast-app",
    live: "https://fish-forecast-app.onrender.com"
  },
  {
    title: "Cloud Estate",
    desc: "Short description of the project.",
    image: "/cloudestate.png",
    tech: ["Quasar", "Vue", "Express","HeidiSQL"],
    github: "https://github.com/DiegoBanovac/Cloud_Estate_Mobile",
    live: "https://cloud-estate-mobile.onrender.com/#/"
  },
  {
    title: "Hotel Batana",
    desc: "Short description of the project.",
    image: "/hotelbatana.png",
    tech: ["Bootstrap", "Express"],
    github: "https://github.com/DiegoBanovac/hotel-batana",
    live: "https://diego-banovac.infinityfreeapp.com/index.php?i=1"
  },
  {
    title: "Geo Chat",
    desc: "Short description of the project.",
    image: "/geochat.png",
    tech: ["React", "Tailwind", "Express"],
    github: "https://github.com/DiegoBanovac/geo-chat",
    live: "#"
  }
]