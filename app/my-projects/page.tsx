// "use client"

// import ProjectCard from '@/components/ProjectCard'
// import { Projects } from '@/constants'
// import React from 'react'

// const Page = () => {
//   return (
//     <div
//     style={{backgroundImage: "url(/mountains.jpg)"}}
//      className='w-screen h-screen flex items-center justify-center bg-center bg-cover'>
//       <div className='grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]'>
//         {Projects.map((project, index) => (
//           <ProjectCard
//               key={index}
//               title={project.title}
//               text={project.text}
//               <a href={link} target="_blank" rel="noopener noreferrer">
//               image={project.src}
//               </a>
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Page


// "use client"
// import Image from "next/image"
// import React from "react"

// interface Props {
//   title: string
//   text: string
//   image: string
//   link: string
// }

// const ProjectCard: React.FC<Props> = ({ title, text, image, link }) => {
//   return (
//     <a
//       href={link}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="block group transition-transform transform hover:scale-105 duration-300"
//     >
//       <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg">
//         <Image
//           src={image}
//           alt={title}
//           width={400}
//           height={250}
//           className="w-full h-56 object-cover"
//         />
//         <div className="p-4 text-white">
//           <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400">{title}</h3>
//           <p className="text-sm opacity-80">{text}</p>
//         </div>
//       </div>
//     </a>
//   )
// }

// export default ProjectCard



"use client"

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    
    <div
      style={{ backgroundImage: "url(/Mountains.jpg)" }}
      className="w-screen h-screen flex items-center justify-center bg-center bg-cover"
    >
      <div className="grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]">
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
            link={project.link}   // ✅ pass the link as a prop
          />
        ))}
      </div>
      
    </div>
  )
}

export default Page
