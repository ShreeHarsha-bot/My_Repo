import React from 'react'
import Card from './components/Card'

const App = () => {
  const profile = [
  {
    name: "Sophie Bennett",
    role: "Product Designer",
    profiles: 329,
    tasksCompleted: 48,
    image: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ethan Carter",
    role: "Frontend Developer",
    profiles: 312,
    tasksCompleted: 54,
    image: "https://images.unsplash.com/photo-1619169312864-c81168058d7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxtYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Olivia Turner",
    role: "UI/UX Designer",
    profiles: 287,
    tasksCompleted: 41,
    image: "https://plus.unsplash.com/premium_photo-1723575847152-7b503e5a1f40?q=80&w=711&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Noah Brooks",
    role: "Backend Developer",
    profiles: 356,
    tasksCompleted: 67,
    image: "https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ava Mitchell",
    role: "Project Manager",
    profiles: 298,
    tasksCompleted: 73,
    image: "https://images.unsplash.com/photo-1615109398623-88346a601842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww",
  },
  {
    name: "Liam Parker",
    role: "Full Stack Developer",
    profiles: 341,
    tasksCompleted: 62,
    image: "https://plus.unsplash.com/premium_photo-1732117940281-e1598445016c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Emma Wilson",
    role: "Data Analyst",
    profiles: 276,
    tasksCompleted: 39,
    image: "https://images.unsplash.com/photo-1569122897895-cc5ba2288685?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "James Foster",
    role: "DevOps Engineer",
    profiles: 321,
    tasksCompleted: 58,
    image: "https://images.unsplash.com/photo-1729157661483-ed21901ed892?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Charlotte Reed",
    role: "Mobile Developer",
    profiles: 304,
    tasksCompleted: 52,
    image: "https://media.istockphoto.com/id/641803518/photo/girl-in-white-t-shirt-smiling.jpg?s=1024x1024&w=is&k=20&c=1dQNhoJi5n-IMjVlHXrUBESsOgVvZjaremwOvrLgB6Q=",
  },
  {
    name: "Benjamin Scott",
    role: "Software Engineer",
    profiles: 338,
    tasksCompleted: 65,
    image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Mia Collins",
    role: "QA Engineer",
    profiles: 291,
    tasksCompleted: 46,
    image: "https://images.unsplash.com/photo-1690444963408-9573a17a8058?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Lucas Adams",
    role: "Cloud Engineer",
    profiles: 347,
    tasksCompleted: 69,
    image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Harper Evans",
    role: "Business Analyst",
    profiles: 283,
    tasksCompleted: 44,
    image:"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Henry Cooper",
    role: "Machine Learning Engineer",
    profiles: 365,
    tasksCompleted: 78,
    image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Grace Morgan",
    role: "Cybersecurity Analyst",
    profiles: 315,
    tasksCompleted: 56,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
  return (
    <div className="card-container">
      {profile.map(function(profile){
        return <Card img={profile.image} name={profile.name} role={profile.role} profiles={profile.profiles} tasks={profile.tasksCompleted} />
      })}
    </div>
  )
}

export default App
