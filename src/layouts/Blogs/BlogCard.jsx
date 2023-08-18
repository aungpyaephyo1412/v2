import {motion} from "framer-motion";
import './blog.css'
const BlogCard = () => {
  return(
      <motion.div
          initial={{y: 20,opacity:0}}
          whileInView={{y: 0,opacity:1}}
          transition={{duration: 0.5, delay: 0.3}}
          viewport={{once: false}}
          className="blog-card-container">
          <img
              className="rounded-lg"
              src="https://tecdn.b-cdn.net/img/new/slides/017.webp"
              alt="" />
          <div className="absolute top-0 p-3 md:p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-white">
                  Card title
              </h5>
              <p className="mb-4 text-base text-white">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
              </p>
              <p className="text-base text-white">
                  <small className="text-white">Last updated 3 mins ago</small>
              </p>
          </div>
      </motion.div>
  )
}
export default BlogCard