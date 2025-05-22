import React, { useState } from 'react'
import { motion } from "motion/react"
import './App.css'
import ProjectCard from "./Component/ProjectCard.jsx";
import Layout from "./Layout/Layout.jsx";

function App() {
    const colors = [
        "#0D0D0D", // Dark Charcoal
        "#1A73E8", // Modern Blue
        "#34A853", // Fresh Green
        "#FBBC05", // Warm Yellow
        "#EA4335", // Vibrant Red
        "#9C27B0", // Soft Purple
        "#00ACC1"  // Cool Teal
    ];


    return (
    <div className=" w-full flex place-items-center justify-center ">


        <Layout/>
    </div>
  )
}

export default App
