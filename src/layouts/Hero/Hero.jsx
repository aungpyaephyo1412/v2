import './hero.css'
import {AiFillHeart} from 'react-icons/ai'
import {BiSolidRightArrow, BiLogoFacebook, BiLogoGithub, BiLogoInstagram} from 'react-icons/bi'
import {IoBarChartSharp} from 'react-icons/io5'
import HOMEPNG from '../../assets/photo_2023-08-11_19-38-04-removebg-preview.png'
import {motion} from "framer-motion";
import CountUp from "react-countup";
import HTML from "../../assets/icons/icons8-html-48.png";
import CSS from "../../assets/icons/icons8-css-48.png";
import JS from '../../assets/icons/icons8-js-48.png'
import TAIL from '../../assets/icons/icons8-tailwindcss-48.png'
import REACT from '../../assets/icons/icons8-react-80.png'
import PHP from '../../assets/icons/icons8-php-96.png'
import LARAVEL from '../../assets/icons/icons8-laravel-96.png'
import MYSQL from '../../assets/icons/icons8-mysql-96.png'
import Java from '../../assets/icons/icons8-java-96.png'
import MONGODB from '../../assets/icons/icons8-mongodb-96.png'
import CV from '../../assets/aungpyaephyo.pdf'
const Hero = () => {
    return (
        <section className='hero-session pt-[15px] md:pt-0' id="home">
            <div className='hero-container  pb-[55px] md:pb-0'>
                <div className='hero-container-div'>
                    <div className="hero-container-div-items px-3 md:px-0">
                        <div className="hero-pt-1">
                            <motion.div
                                initial={{opacity: 0, y: -30}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: 0.4}}
                                viewport={{once: false}}
                                className='mb-3'>
                                <AiFillHeart className='text-red-500 mb-1'/>
                                <p className='hero-pt-1-subtitle'>
                                    SPEED UP <br/>
                                    COMMUNICATIONS
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{opacity: 0, y: -30}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: 0.5}}
                                viewport={{once: false}}
                                className="mb-5">
                                <h1 className='hero-pt-1-title'>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    Hi, I'm <span className='font-aceme text-blue-500'>Typle</span> <br/>
                                    Web Developer
                                </h1>
                            </motion.div>
                            <motion.div
                                initial={{opacity: 0, y: -30}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: 0.6}}
                                viewport={{once: false}}
                                className='mb-5'>
                                <p className='hero-pt-1-paragraph'>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    Passionate junior web developer with skills in JavaScript, React, Php and Java.
                                    Eager to collaborate on meaningful projects. Let's build something amazing! 🚀
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{opacity: 0, y: -30}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: 0.7}}
                                viewport={{once: false}}
                                className='mb-5'>
                                <div className='hero-pt-1-btn-container'>
                                    <a href={CV} download className='hero-pt-1-btn  peer'>
                                        Download Cv
                                    </a>
                                    <BiSolidRightArrow className='hero-pt-1-icons'/>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{opacity: 0, y: -30}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: 0.8}}
                                viewport={{once: false}}
                            >
                                <div className='flex justify-center items-center space-x-4'>
                                    <a target="blank" rel="noreferrer" href="https://www.facebook.com/aungpyaephyo1412"
                                       className='hero-pt-1-social-link'>
                                        <BiLogoFacebook/>
                                    </a>
                                    <a target="blank" rel="noreferrer" href="https://github.com/aungpyaephyo1412"
                                       className='hero-pt-1-social-link'>
                                        <BiLogoGithub/>
                                    </a>
                                    <a target="blank" rel="noreferrer"
                                       href="https://www.instagram.com/aungpyaephyo1412/"
                                       className='hero-pt-1-social-link'>
                                        <BiLogoInstagram/>
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className="hero-container-div-items overflow-hidden">
                        <div className="w-full h-full  relative z-[50]">
                            <motion.img
                                initial={{y: 60,opacity:0}}
                                whileInView={{y: 0,opacity:1}}
                                transition={{duration: 0.5, delay: 0.5}}
                                viewport={{once: false}}
                                src={HOMEPNG} className='block w-full h-[560px] object-contain translate-x-0'
                                alt="HOMEPNG"/>
                            <div
                                className="absolute inset-0 z-[5]">
                                <div className="area">
                                    <ul className="circles">
                                        <li>
                                            <div className='p-2 animate-spin-slow hero-skill-shadow rounded-full'>
                                                <img className='h-[40px] w-[40px] object-cover' src={HTML} alt="HTML"/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='p-2 animate-spin-slow hero-skill-shadow rounded-full'>
                                                <img className='h-[40px] w-[40px] object-cover' src={CSS} alt="HTML"/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='p-2 animate-spin-slow hero-skill-shadow rounded-full'>
                                                <img className='h-[40px] w-[40px] object-cover' src={JS} alt="HTML"/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='p-2 animate-spin-slow hero-skill-shadow rounded-full'>
                                                <img className='h-[40px] w-[40px] object-cover' src={REACT} alt="HTML"/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='p-2 animate-spin-slow hero-skill-shadow rounded-full'>
                                                <img className='h-[40px] w-[40px] object-cover' src={TAIL} alt="HTML"/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='p-2 animate-spin-slow hero-skill-shadow rounded-full'>
                                                <img className='h-[40px] w-[40px] object-cover' src={PHP} alt="HTML"/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='p-2 animate-spin-slow hero-skill-shadow rounded-full'>
                                                <img className='h-[40px] w-[40px] object-cover' src={LARAVEL} alt="HTML"/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='p-2 animate-spin-slow hero-skill-shadow rounded-full'>
                                                <img className='h-[40px] w-[40px] object-cover' src={MYSQL} alt="HTML"/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='p-2 animate-spin-slow hero-skill-shadow rounded-full'>
                                                <img className='h-[40px] w-[40px] object-cover' src={MONGODB} alt="HTML"/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='p-2 animate-spin-slow hero-skill-shadow rounded-full'>
                                                <img className='h-[40px] w-[40px] object-cover' src={Java} alt="HTML"/>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <motion.div
                                initial={{opacity:0}}
                                whileInView={{opacity:1}}
                                transition={{duration: 0.6, delay: 0.8}}
                                viewport={{once: false}}
                                className='absolute z-[-15] translate-y-[300px] rounded-full inset-0 w-full h-full  overflow-hidden'>
                                <div className="w-full h-full  rounded-full overflow-hidden">
                                    <div className='box'>
                                        <div className='wave -one'></div>
                                        <div className='wave -two'></div>
                                        <div className='wave -three'></div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: 0.7}}
                                viewport={{once: false}}
                                className="project-countUp">
                                <IoBarChartSharp/>
                                <span className='ml-1'>
                                    <CountUp end={36} duration={4} delay={1} enableScrollSpy scrollSpyOnce={false}
                                             scrollSpyDelay={1000}/>+
                                    Projects
                                </span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero