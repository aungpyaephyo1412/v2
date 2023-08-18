import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import './project.css'
import ProjectCard from "./ProjectCard.jsx";
const Projects = () => {
  return(
      <section className="bg-gray-100 dark:bg-gray-800 px-3 pt-[15px] pb-[80px]" id='projects'>
              <div className="container mx-auto">
                  <div className="mx-auto text-start lg:text-center pb-6 lg:pb-16">
                      <motion.h1
                          initial={{y: 20,opacity:0}}
                          whileInView={{y: 0,opacity:1}}
                          transition={{duration: 0.5, delay: 0.4}}
                          viewport={{once: false}}
                          className="project-ct-2-sub">My Projects</motion.h1>
                      <motion.p
                          initial={{y: 20,opacity:0}}
                          whileInView={{y: 0,opacity:1}}
                          transition={{duration: 0.5, delay: 0.5}}
                          viewport={{once: false}}
                          className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                          List some of the standout features or functionalities of the project
                      </motion.p>
                      <div className="w-full flex justify-end items-end">
                          <Link to='/projects' className='text-black dark:text-gray-50'>More</Link>
                      </div>
                  </div>
                  <div className="grid gap-8 lg:grid-cols-2">
                      <ProjectCard/>
                      <ProjectCard/>
                      <ProjectCard/>
                      <ProjectCard/>
                  </div>
              </div>
      </section>
  )
}
export default Projects