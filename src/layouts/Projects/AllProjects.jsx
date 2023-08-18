import {motion} from "framer-motion";
import './project.css'
import ProjectCard from "./ProjectCard.jsx";
import projects from "./projects.js";
const AllProjects = () => {
  return(
      <section className='min-h-screen bg-gray-300 dark:bg-gray-800 flex flex-col justify-center items-center pb-[80px] pt-[15px] px-5 transition duration-500'>
          <motion.h1
              initial={{y: 20,opacity:0}}
              whileInView={{y: 0,opacity:1}}
              transition={{duration: 0.5, delay: 0.4}}
              viewport={{once: false}}
              className="project-ct-2-sub transition duration-500">My Projects</motion.h1>
          <div className="mx-auto container grid gap-8 lg:grid-cols-2">
              {projects.map(project=><ProjectCard key={project} project={project}/>)}
          </div>
      </section>
  )
}
export default AllProjects