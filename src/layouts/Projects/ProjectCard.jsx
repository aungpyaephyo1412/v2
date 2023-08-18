import {Link} from "react-router-dom";
import {AiFillGithub} from "react-icons/ai";
import {FiEye} from "react-icons/fi";
import {motion} from "framer-motion";

const ProjectCard = ({project}) => {
  return(
      <motion.div
          initial={{y: 20,opacity:0}}
          whileInView={{y: 0,opacity:1}}
          transition={{duration: 0.5, delay: 0.3}}
          viewport={{once: false}}
          className="project-card transition duration-500">
          <img className="project-card-img" src={project.image} alt="Bonnie Avatar" loading={"lazy"}/>
          <div className="p-5">
              <h3 className="project-card-title transition duration-500">{project.name}
              </h3>
              <span className="project-card-sub transition duration-500">CEO & Web Developer</span>
              <p className="project-card-para transition duration-500">Bonnie drives the technical strategy of the flowbite platform and brand.</p>
              <div className="w-full flex gap-x-2">
                  <Link target={"_blank"} to={project.github}  className='project-card-link'>
                      <AiFillGithub/>
                      <span>Code</span>
                  </Link>
                  <Link  target={"_blank"} to={project.demo} className='project-card-link'>
                      <FiEye/>
                      <span>Demo</span>
                  </Link>
              </div>
          </div>
      </motion.div>
  )
}
export default ProjectCard