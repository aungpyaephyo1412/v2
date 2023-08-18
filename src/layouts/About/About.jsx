import './about.css'
import HOMEPNG from '../../assets/photo_2023-08-11_19-38-04-removebg-preview.png'
import LIKEDIN from '../../assets/icons/icons8-linkedin-96.png'
import {motion} from "framer-motion";

const About = () => {
    return (
        <section className='about-session' id="about">
            <div className='about-container'>
                <div className="about-container-div">
                    <div className="about-ct-1">
                        <img src={HOMEPNG} className='about-img' alt="about"/>
                    </div>
                    <div className="about-ct-2">
                        <div className='about-ct-2-div'>
                            <motion.h1
                                initial={{y: 20,opacity:0}}
                                whileInView={{y: 0,opacity:1}}
                                transition={{duration: 0.5, delay: 0.2}}
                                viewport={{once: false}}
                                className="about-ct-2-title">My abilities</motion.h1>
                            <motion.p
                                initial={{y: 20,opacity:0}}
                                whileInView={{y: 0,opacity:1}}
                                transition={{duration: 0.5, delay: 0.3}}
                                viewport={{once: false}}
                                className='about-ct-2-para'>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                I'm Aung Pyae Phyo, a junior web developer at Codewall Technologies in Yangon. My tech stack includes HTML, CSS, JS, Tailwind CSS, Bootstrap, SCSS, PostCSS, PHP, Laravel, ReactJS, and Redux. Beyond web development, I'm also passionate about learning the Japanese language. Excited to grow both as a developer and a language enthusiast!
                            </motion.p>
                            <motion.h1
                                initial={{y: 20,opacity:0}}
                                whileInView={{y: 0,opacity:1}}
                                transition={{duration: 0.5, delay: 0.4}}
                                viewport={{once: false}}
                                className="about-ct-2-sub">My Experience</motion.h1>
                            <ol className="items-center sm:flex">
                                <motion.li
                                    initial={{y: 20,opacity:0}}
                                whileInView={{y: 0,opacity:1}}
                                transition={{duration: 0.5, delay: 0.5}}
                                viewport={{once: false}}
                                    className="relative mb-6 sm:mb-0">
                                    <div className="flex items-center">
                                        <div className="experience-card">
                                            <img src="https://scontent.frgn12-1.fna.fbcdn.net/v/t39.30808-6/365180723_675849567893450_2251739176415749509_n.jpg?_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=be3454&_nc_ohc=fua66yewkNcAX-IyOa1&_nc_ht=scontent.frgn12-1.fna&oh=00_AfDD0vw4w9_vEqshri0e_aywpnAJEj-1Hfc8RLgZ7pH3og&oe=64DC41F3" className='exp-company-img' alt=""/>
                                        </div>
                                        <div className="about-exp-bar"></div>
                                    </div>
                                    <div className="mt-3 sm:pr-8">
                                        <h3 className="exp-company-title">
                                            Codewall Technologies
                                        </h3>
                                        <time className="exp-time">
                                            July, 2023 - Present
                                        </time>
                                        <p className="exp-sub">
                                            Frontend Instructor & Developer (Full Time)
                                        </p>
                                    </div>
                                </motion.li>
                                <motion.li
                                    initial={{y: 20,opacity:0}}
                                whileInView={{y: 0,opacity:1}}
                                transition={{duration: 0.5, delay: 0.6}}
                                viewport={{once: false}}
                                    className="relative mb-6 sm:mb-0">
                                    <div className="flex items-center">
                                        <div className="experience-card">
                                            <img src={LIKEDIN} className='exp-company-img' alt=""/>
                                        </div>
                                        <div className="about-exp-bar"></div>
                                    </div>
                                    <div className="mt-3 sm:pr-8">
                                        <h3 className="exp-company-title">
                                            Freelance
                                        </h3>
                                        <time className="exp-time">2022-June, 2023</time>
                                        <p className="exp-sub">
                                            Frontend Development & Backend Development
                                        </p>
                                    </div>
                                </motion.li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About