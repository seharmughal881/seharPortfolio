"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface Props {
  image: string
  title: string
  text: string
  link: string
}

const ProjectCard = ({ image, title, text, link }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped)
      setIsAnimating(true)
    }
  }

  return (
    <div
      onClick={handleFlip}
      className="w-[450px] h-[280px] rounded-md cursor-pointer"
    >
      <motion.div
        className="flip-card-inner w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: 'normal' }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        {/* Front Side */}
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40" />
          <div className="absolute inset-0 w-full h-full text-[20px] pb-5 hidden group-hover:flex items-center z-[20] justify-center">
          See Full Project →
          </div>
        </div>

        {/* Back Side */}
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-4"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-50 z-[-1]" />
          <div className="flex flex-col gap-6 py-3 pt-16 z-[30]">
            <h1 className="text-white text-2xl font-semibold">{title}</h1>
            <p className="text-gray-200 text-[13px]">{text}</p>

           
            <a
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  onClick={(e) => e.stopPropagation()} // prevent flip when clicking
  className="
    relative mt-3 inline-flex items-center justify-center 
      
    px-5 py-2.5 
    font-semibold text-sm tracking-wide 
    text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
    rounded-xl shadow-lg 
    hover:shadow-[0_0_15px_rgba(147,51,234,0.6)] 
    hover:scale-105 active:scale-95 
    transition-all duration-300 ease-out 
    before:absolute before:inset-0 before:rounded-xl 
    before:bg-gradient-to-r before:from-blue-400 before:to-pink-400 
    before:opacity-0 hover:before:opacity-20 
    overflow-hidden
  " 
>
  🚀 Visit Website
</a>


          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectCard
