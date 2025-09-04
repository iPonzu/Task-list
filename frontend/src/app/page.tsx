"use client"
import { useState, useEffect } from 'react';
interface Task {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
}

export default function Home(){
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState("")

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/tasks`, {
      headers: {
        'Authorization': `Bearer TOKEN }`
      }
    })
    .then(res => res.json())
    .then(data => setTasks(data))
  })

  
  const addTask = async() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer TOKEN`
      },
      body: JSON.stringify({ title: newTask, description: "Gerada pelo frontend" })
    })
    .then(res => res.json())
    .then(data => setTasks([...tasks,data]))
    setNewTask("")
  }

  return(
    //TODO: build frontend
  )
}