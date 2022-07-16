import React from 'react'
import styled from 'styled-components'
import img from '../assets/images/Weedman_Clean.webp'
import Circle from '../components/Circle'
import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'


const Hero = () => {


  return (
    <Wrapper>
     <div className="wrapper">
      <motion.div className="text-block"
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }}>
      <h1 className='title'>Совершенно новый подход к NFT</h1>  
       <p className="subtitle">Some subtitle goes here, some subtitle goes here some subtitle goes heresome subtitle goes here some subtitle goes here some subtitle goes heresome subtitle goes heresome subtitle goes here</p>
       <Link to='more'>
        <button>Присоединиться</button>
       </Link>
       <motion.div className="circles"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ delay: 2, duration: 3 }}>
        <Circle title='12M+' subtitle='Заработано'/>
        <Circle title='260+' subtitle='Успешных проектов'/>
        <Circle title='2Y+' subtitle='На рынке'/>
       </motion.div>
      </motion.div>
      <motion.div className="img-block"
      initial={{ y: 500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }}
      >  
        <motion.img src={require('../assets/images/Weedman_Clean.webp')} alt="hero-img"
        
        initial={{ scale: 1.6 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }}
        />
      </motion.div>
     </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
 background: #000317;
 display: flex;
 align-items: center;
 padding: 0 1.25rem;
  overflow: hidden;
 .wrapper {
  display: grid;
  grid-template-columns: 60% 40%;
  width: 100%;
  .text-block {
    padding: 10rem 0;
   width: 70%;
    color: #D7D7D7;
    margin-right: 10rem;
   .title {
    font-weight: 800;
    font-size: 4rem;
    line-height: 68px;
    letter-spacing: -0.02em;
   }

   .subtitle {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 29px;
    margin: 1.75rem 0 2.5rem;
   }

   button {
    width: 250px;
  height: 45px;
  color: #fff;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid red;
  font-size: 1.1rem;
  margin-top: 2rem;
  box-shadow: inset 0 0 0 0 #fff;
  transition: background-color .2s ease;
  &:hover {
    background-color: red;
    color: #000;
    box-shadow: 4px 2px 18px red;
  }
   }

   .circles {
    margin-top: 8rem;
    display: flex;
    gap: 5rem;
    border-top: 1px solid rgba(255,255,255,0.1);
    max-width: 730px;
    padding-top: 2rem;
    flex-wrap: wrap;
   }
  }

  .img-block {
   margin-top: 8rem;
   position: relative;
   width: 605px;
   height: 770px;
   background: linear-gradient(146.53deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
   filter: drop-shadow(0px 4px 14px rgba(1, 0, 9, 0.2));
   backdrop-filter: blur(40px);
   border: 1px solid transparent;
   border-image: linear-gradient(148deg, rgba(255,250,250,1) 0%, rgba(0,0,0,1) 100%, rgba(255,255,255,1) 100%);
   border-image-slice: 1;
   overflow: hidden;
   img {
    position: absolute;
    bottom: 0;
    left: 0;
   }
  }
 }

@media (max-width: 1502px) {
  .wrapper {

    .img-block {
      width: 405px;
   height: 568px;
    }
    .text-block {
      padding: 10rem 0 5rem;
      .title {
        font-size: 3.5rem;
      }

      .circles {
        /* width: 600px; */
        & > * {
          width: 150px;
          height: 150px;

          .circle-title {
            font-size: 2.5rem;
          }

          .circle-subtitle {
            font-size: .9rem;
          }
        }
      }
    }
  }
}

@media (max-width: 1072px) {
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    .img-block {
      display: none;
    }

    .text-block {
      margin-right: 0;
      width: 100%;
      .title {
        font-size: 3rem;
      }
      .subtitle {
        font-size: 1rem;
      }
      .circles {
        justify-content: center;
        margin: 5rem auto 0;
        /* width: 630px; */
        gap: 3rem;
        & > * {
          width: 140px;
          height: 140px;

          .circle-title {
            font-size: 1.8rem;
            line-height: 33px;
          }

          .circle-subtitle {
            font-size: .8rem;
            line-height: 16px;
          }
        }
      }
    }
  }
} 

@media (max-width: 768px) {
  .wrapper {

    .text-block {

      .title {
        font-size: 3rem;
      }

      .subtitle {
        font-size: .9rem;
      }

      .circles {
        gap: 1rem;
        
      }
    }
  }
}

@media (max-width: 567px) {
  .wrapper {
    .text-block {
      padding-top: 7rem;
      .title {
        font-size: 2.2rem;
        line-height: 42px;
      }

      .subtitle {
        font-size: .85rem;
        line-height: 24px;
      }
    }
  }
}
`

export default Hero