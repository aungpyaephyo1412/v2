import CONTACT from '../../assets/3d-casual-life-young-people-discussing-team-project-at-a-laptop.png'
import './contact.css'
import {motion} from "framer-motion";

const Contact = () => {
  return(
      <section className='contact transition duration-500' id='contact'>
          <div className="contact-container">
              <div className="w-full md:w-1/2">
                  <motion.img
                      initial={{y: 20,opacity:0}}
                      whileInView={{y: 0,opacity:1}}
                      transition={{duration: 0.5, delay: 0.4}}
                      viewport={{once: false}}
                      src={CONTACT} className='contact-img' alt=""/>
              </div>
              <div className="w-full md:w-1/2">
                  <form className='p-5 w-full'>
                      <div className="mb-3">
                          <h1 className='contact-title'>Get In Touch</h1>
                      </div>
                          <motion.div
                              initial={{y: 20,opacity:0}}
                              whileInView={{y: 0,opacity:1}}
                              transition={{duration: 0.5, delay: 0.4}}
                              viewport={{once: false}}
                              className="relative z-0 w-full mb-6 group">
                              <input type="text" name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                              <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Name</label>
                          </motion.div>
                          <motion.div
                              initial={{y: 20,opacity:0}}
                              whileInView={{y: 0,opacity:1}}
                              transition={{duration: 0.5, delay: 0.4}}
                              viewport={{once: false}}
                              className="relative z-0 w-full mb-6 group">
                              <input type="eamil" name="floating_eamil" id="floating_eamil" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                              <label htmlFor="floating_eamil" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Email</label>
                          </motion.div>
                          <motion.div
                              initial={{y: 20,opacity:0}}
                              whileInView={{y: 0,opacity:1}}
                              transition={{duration: 0.5, delay: 0.4}}
                              viewport={{once: false}}
                              className="relative z-0 w-full mb-6 group">
                              <input type="text" name="question" id="floating_eamil" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                              <label htmlFor="floating_eamil" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Question</label>
                          </motion.div>
                      <motion.div
                          initial={{y: 20,opacity:0}}
                          whileInView={{y: 0,opacity:1}}
                          transition={{duration: 0.5, delay: 0.4}}
                          viewport={{once: false}}
                          className="relative z-0 w-full mb-6 group">
                          <textarea rows={5} name="messagee"  className="resize-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required ></textarea>
                          <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
                      </motion.div>
                          <motion.button
                              initial={{y: 20,opacity:0}}
                              whileInView={{y: 0,opacity:1}}
                              transition={{duration: 0.5, delay: 0.4}}
                              viewport={{once: false}}
                              type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send Message</motion.button>
                      </form>
              </div>
          </div>
      </section>
  )
}
export default Contact