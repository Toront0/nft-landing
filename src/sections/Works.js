import React, { useState } from 'react'
import styled from 'styled-components'
import arrowLeft from '../assets/icons/Arrow.svg'
import arrowRight from '../assets/icons/Arrow-right.svg'

import { sliderImgs } from '../utils/constants'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'


const variants = {
  enter: (direction) => {

    return {
      x: direction > 0 ? 930 : -930,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 930 : -930,
    };
  }
};



const Works = () => {
const [[page, direction], setPage] = useState([0, 0]);


const imageIndex = wrap(0, sliderImgs.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
    
  };

  
  return (
    <Wrapper id='works'>
     <div className="wrapper container">
      <div className="head">
        <h2 className="title">Несколько артов</h2>
        <p className='subtitle'>В этой коллекции собраны одни из самых известных работ в мире NFT.</p>
      </div>
      <div className="slider">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div className="slide" key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { duration: .8, ease: [0.76, 0, 0.24, 1]},
          }}>
          <motion.img alt="slide"
          loading='lazy'
          src={sliderImgs[imageIndex].img}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: .8, ease: 'linear'}}
          

          // className={sliderImgs[imageIndex].id }
          />
                    </motion.div>

        </AnimatePresence>
      </div>
      <div className="arrows">
        <button onClick={() => paginate(-1)}>
         <img src={arrowLeft} alt="arrow-left" />
        </button>
        <button onClick={() => paginate(1)}>
         <img src={arrowRight} alt="arrow-right" />
        </button>
       </div>
     </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
 padding: 7rem 0;
background-color: #000317;
overflow: hidden;
 .wrapper {

  .head {
  text-align: center;
  color: #D7D7D7;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
     .title {
  font-weight: 700;
  font-size: 3rem;

  color: #fff;
  }
  .subtitle {
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.05em;
  width: 80%;
  }
  }

  .slider {
    position: relative;
    width: 80vw;
   max-width: 930px;
   height: 479px;
   margin: 4rem auto;
    display: flex;
    overflow: hidden;
    .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    overflow: hidden;
   img {
    width: 100%;
    height: 100%;
    object-fit: cover;
   }
    }


  }
     .arrows {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    button{
     border: none;
     background-color: transparent;
     cursor: pointer;
     color: #fff;
    }
   }
 }

@media (max-width: 1070px) {
  padding: 5rem 0;
  .wrapper {
    .title {
      font-size: 2.5rem;
      margin-bottom: .8rem;
    }  
    .subtitle {
      font-size: .9rem;
    }
    .slider {
      margin-top: 3rem;
      margin-bottom: 3rem;
    }
    .arrows {

      button img {
        width: 140px;
      }
    }
  }
} 
@media (max-width: 567px) {
  padding: 3rem 0 3rem;
  .wrapper {
    .slider {
      height: 279px;
    }
    .head {
      .title {
      font-size: 1.6rem;
      margin-bottom: .4rem;
    } 
    .subtitle {
      font-size: .9rem;
      width: 100%;
    }
    }
    .arrows {
      button img {
        width: 100px;
      }
    }
  }
}
`

export default Works