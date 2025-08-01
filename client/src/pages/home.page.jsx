import React from 'react'
import NavBar from '../components/navBar.component'
 import { useNavigate } from 'react-router-dom'
export default function Home() {
  const navigate = useNavigate()
  return (
    <div className='min-h-screen w-full dark:bg-dark-background bg-light-background p-4'>
       <NavBar />
       <h1 onClick={()=>navigate("/")} className='m-10'>landing</h1>
    </div>
  )
}
