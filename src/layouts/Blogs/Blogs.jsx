import {motion} from "framer-motion";
import './blog.css'
import BlogCard from "./BlogCard.jsx";
const Blogs = () => {
  return(
      <section className="blog transition duration-500" id='blogs'>
          <div className="container mx-auto">
              <div className="mx-auto text-start lg:text-center pb-6 lg:pb-7">
                  <motion.h1
                      initial={{y: 20,opacity:0}}
                      whileInView={{y: 0,opacity:1}}
                      transition={{duration: 0.5, delay: 0.4}}
                      viewport={{once: false}}
                      className="blog-ct-2-sub transition duration-500">My Blogs</motion.h1>
              </div>
              <div className="grid gap-8 lg:grid-cols-2">
                  <BlogCard/>
                  <BlogCard/>
                  <BlogCard/>
                  <BlogCard/>
                  <BlogCard/>
                  <BlogCard/>
                  <BlogCard/>
                  <BlogCard/>
                  <BlogCard/>
              </div>
          </div>
      </section>
  )
}
export default Blogs