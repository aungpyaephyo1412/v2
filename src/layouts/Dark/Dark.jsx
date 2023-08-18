import {useEffect, useState} from "react";
import {MdLightMode} from "react-icons/md";
import {BsMoonStarsFill} from "react-icons/bs";
import './dark.css'
const Dark = () => {
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }
    const darkHandler = () => {
        setDark(!dark)
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }

            // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
    }
    useEffect(() => {
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setDark(true)

        } else {
            setDark(false)
        }
    }, [])
    const [dark, setDark] = useState(true)
  return(
      <button onClick={darkHandler}
              className="dark-btn">
          {dark ? <MdLightMode className='dark-icons'/> : <BsMoonStarsFill className='dark-icons'/>}
      </button>
  )
}
export default Dark