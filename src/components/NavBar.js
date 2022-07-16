import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import icon from '../assets/icons/GitHub.svg'
import icon2 from '../assets/icons/discord.svg'
import icon3 from '../assets/icons/Pinterest.svg'
import icon4 from '../assets/icons/VK.svg'

import { motion, AnimatePresence } from 'framer-motion'

const NavBar = () => {
  const [active, setActive] = useState(false)
  const [sticky, setSticky] = useState(false)


  const change = () => {
    if (active) {
      setSticky(false)
      return
    }
    if (window.scrollY > 600) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }





  window.addEventListener('scroll', change)

  return (
    <Wrapper className={`${sticky && 'active'}`}
    initial={{ top: -200, opacity: 0 }}
    animate={{ top: 0, opacity: 1 }}
    transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1] }}
    >
     <div className="wrapper">
       <Link to='/' className='logo'>WEB<br /></Link>
      <nav>
       <ul className={`list ${active && 'active'}`}
       >
        <li className="link" onClick={() => setActive(false)}><a href="/#">Главная</a></li>
        <li className="link" onClick={() => setActive(false)}><a href="/#our-story">О нас</a></li>
        <li className="link" onClick={() => setActive(false)}><a href="/#team">Команда</a></li>
        <li className="link" onClick={() => setActive(false)}><a href="/#why-are-we">Почему мы?</a></li>
        <li className="link" onClick={() => setActive(false)}><a href="/#partners">Партнеры</a></li>
        <li className="link" onClick={() => setActive(false)}><a href="/#works">Работы</a></li>
              {active && <div className="icons">
        <a href="https://github.com">
          <img src={icon} alt="github logo" />
        </a>
        <a href="https://discord.com">
          <img src={icon2} alt="discord logo" />
        </a>
        <a href="https://pinterest.com">
          <img src={icon3} alt="pinterest logo" />
        </a>
        <a href="https://vk.com">
          <img className='vk-icon' src={icon4} alt="vk logo" />
        </a>
      </div>}
       </ul>
      </nav>
      <div className="lang">
       <button>RU</button>
       <button>EN</button>
      <button className={`hamburger ${active && 'open'}`} onClick={() => setActive(prev => !prev)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      </div>
     </div>
    </Wrapper>
  )
}

const Wrapper = styled(motion.header)`
position: absolute;
top: 0;
left: 0;
right: 0;
width: 100%;
padding: 1rem 1.25rem;
border-bottom: 1px solid rgba(255,255,255,0.1);
z-index: 1000;
&.active {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  backdrop-filter: blur(1.5rem);
}
 .wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
   font-weight: 700;
   font-size: 2rem;
   color: #ffffff;
   position: relative;
   z-index: 1000;
   line-height: 15px;
   text-align: center;

   span {
     font-size: 1.2rem;

  }
   
  }
  .list {
   list-style: none;
    margin: 0;
    padding: 0;
   .link {
    display: inline-block;
    margin-right: 2.25rem;
    font-weight: 400;
    font-size: 1rem;
    line-height: 24px;
    a {
     color: #D7D7D7;
    }
   }
  }
  .list.active {
    position: fixed;
    top: 0%;
    left: 0%;
    right: 0%;
    bottom: 0%;
    display: block;
    width: 100vw;
    height: 100vh;
    background-color: #111111;
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    padding: 0 1rem;
    animation: slide-in 1s cubic-bezier(.785,.135,.15,.86);    
    .icons {
      display: flex;
      margin-top: 2rem;
      gap: 1rem;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
      }
      .vk-icon {
        width: 30px;
        height: 30px;
      }
      
    }


    .link {
      margin-bottom: 1.25rem;
      font-size: 1.8rem;
    }
  }
@keyframes slide-in {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}

  .lang {
    display: flex;
    position: relative;
    z-index: 1000;
   button {
    border: none;
    background-color: transparent;
    font-weight: 500;
    font-size: 1rem;
    line-height: 24px;
    color: #fff;
   }
   .hamburger {
     margin-left: 1rem;
   }
  }

  .hamburger {
    display: none;
    width: 40px;
  height: 15px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;

    span {
      display: block;
  position: absolute;
  height: 3px;
  width: 80%;
  background: #d3531a;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
  &:nth-child(1){
    top: 0px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
  }
  &:nth-child(2) {
    top: 9px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
  }
  &:nth-child(3) {
    top: 18px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
  }
}

    }
    .hamburger.open span:nth-child(1) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  top: -3px;
  left: 2px;
  
    }
    .hamburger.open span:nth-child(2) {
      width: 0%;
  opacity: 0;
    }
    .hamburger.open span:nth-child(3) {
      -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  top: 19.5px;
  left: 2px;
    }
  }
 
@media (max-width: 768px) {
  .wrapper {
    .list {
      display: none;
    }
    .hamburger {
    display: block;
  }
  }
}
`

export default NavBar