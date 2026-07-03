import React from 'react'
import Card from './components/Card'

const App = () => {
  const profiles = [
  {
    id: 1,
    name: "Arjun Sharma",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    projects: 28,
    following: 412,
    followers: 1850,
    description: "Passionate about building modern web applications with clean UI and smooth user experiences."
  },
  {
    id: 2,
    name: "Priya Nair",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    projects: 35,
    following: 298,
    followers: 2341,
    description: "Creative designer focused on minimal interfaces, accessibility, and user-first experiences."
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Backend Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    projects: 42,
    following: 521,
    followers: 1763,
    description: "Enjoys building scalable APIs and efficient backend systems using modern technologies."
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Data Analyst",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    projects: 19,
    following: 364,
    followers: 1284,
    description: "Transforms complex data into meaningful insights through analytics and visualization."
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    projects: 53,
    following: 682,
    followers: 3410,
    description: "Builds complete web applications with React, Node.js, and cloud-based services."
  },
  {
    id: 6,
    name: "Ananya Gupta",
    role: "Mobile App Developer",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    projects: 24,
    following: 437,
    followers: 1925,
    description: "Develops Android and cross-platform mobile apps with a focus on performance."
  },
  {
    id: 7,
    name: "Rohan Patil",
    role: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    projects: 31,
    following: 275,
    followers: 1462,
    description: "Automates deployments and manages cloud infrastructure for modern development teams."
  },
  {
    id: 8,
    name: "Meera Iyer",
    role: "Graphic Designer",
    image: "https://randomuser.me/api/portraits/women/58.jpg",
    projects: 46,
    following: 589,
    followers: 4128,
    description: "Creates engaging visuals, branding, and digital content with a modern aesthetic."
  },
  {
    id: 9,
    name: "Karan Mehta",
    role: "AI Engineer",
    image: "https://randomuser.me/api/portraits/men/73.jpg",
    projects: 21,
    following: 403,
    followers: 2186,
    description: "Passionate about machine learning, deep learning, and solving real-world AI problems."
  },
  {
    id: 10,
    name: "Aisha Khan",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/women/39.jpg",
    projects: 39,
    following: 711,
    followers: 2894,
    description: "Leads product strategy and collaborates with teams to build impactful digital products."
  },
  {
    id: 11,
    name: "Aditya Joshi",
    role: "Cybersecurity Analyst",
    image: "https://randomuser.me/api/portraits/men/81.jpg",
    projects: 27,
    following: 355,
    followers: 1638,
    description: "Protects applications and networks by implementing modern security practices."
  },
  {
    id: 12,
    name: "Kavya Menon",
    role: "Cloud Engineer",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    projects: 33,
    following: 482,
    followers: 2410,
    description: "Designs scalable cloud infrastructure with a focus on reliability and efficiency."
  },
  {
    id: 13,
    name: "Nikhil Rao",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    projects: 48,
    following: 630,
    followers: 3216,
    description: "Writes clean, maintainable code and enjoys solving challenging engineering problems."
  },
  {
    id: 14,
    name: "Pooja Kulkarni",
    role: "Content Strategist",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    projects: 17,
    following: 294,
    followers: 1357,
    description: "Crafts engaging content strategies and tells compelling stories for digital audiences."
  },
  {
    id: 15,
    name: "Harsh Vardhan",
    role: "React Developer",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
    projects: 36,
    following: 548,
    followers: 2769,
    description: "Loves building responsive React applications with modern UI and reusable components."
  }
];
  return (
    <div className='container'>
      {profiles.map(function(profile){
return <Card name={profile.name} role={profile.role} img={profile.image} projects={profile.projects} following={profile.following} followers={profile.followers} desc={profile.description}/>
      })}
    </div>
  )
}

export default App
