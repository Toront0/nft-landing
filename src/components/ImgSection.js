import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const textVariants = {
  initial: {
    x: -50,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: .6,
      ease: 'easeOut'
    }
  }
}

const imgVariants = {
  initial: {
    x: 50,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: .6,
      ease: 'easeOut'
    }
  }
}



const ImgSection = ({ title, subtitle, description, img, gradient, id,  }) => {

  return (
    <Wrapper gradient={gradient} id={id}>
     <div className="wrapper container">
      <motion.div className="text-block"
      variants={textVariants}
      initial='initial'
      viewport={{ amount: 0.3, once: true }}
      whileInView='animate'>
       <span>{subtitle}</span>
       <h2 className="title">{title}</h2>
        <div className="description">
       <div className="line"></div>
       <p>{description}</p>
        <Link to='more'>
          <button>Подробнее</button>
        </Link>
      </div>
      </motion.div>
      <motion.div className="img-block"
      variants={imgVariants}
      initial='initial'
      viewport={{ amount: 0.3, once: true }}
      whileInView='animate'>
       <img src={img} alt={title} loading='lazy'/>
      </motion.div>
     </div>
    </Wrapper>
  )
}

export const Wrapper = styled.section`
padding: 7rem 0;
/* background: ${props => props.gradient || 'linear-gradient(90deg, #1D0128 0%, #650188 100%)'}; */
background-color: #000317;
overflow: hidden;
 .wrapper {
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
 align-items: center;
 gap: 2.5rem;
  .text-block {
  span {
  font-size: 1.2rem;
  line-height: 29px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #D7D7D7;
    order: 0;
  }
  .title {
   font-weight: 700;
  font-size: 3rem;
  line-height: 58px;
  color: #FFFFFF;
  width: 90%;
  }
  


  .description {
   position: relative;
   margin-top: 2rem;

   .line {
   position: absolute;
   top: 0;
   left: 0.5%;
   display: inline-block;
   box-shadow: ${props => props.gradient ? '0px 0px 12px #FFFFFF, inset 0px 4px 4px #FAFF00;' : '0px 0px 12px rgba(255, 255, 255, 0.4), inset 0px 0px 14px #FF0000'};
   border-radius: .25rem;
   background-color: ${props => props.gradient ? '#FFF500' : '#FF0000'};
   height: 100%;
   width: 5px;

   }
   p {
   padding-left: 2.5rem;
   font-weight: 400;
   font-size: 1rem;
   line-height: 30px;
   letter-spacing: 0.05em;
   color: #D7D7D7;
   
   }
      button {
  width: 250px;
  height: 45px;
  color: #fff;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid #fff;
  margin-left: 2.5rem;
  font-size: 1.1rem;
  margin-top: 2rem;
  box-shadow: inset 0 0 0 0 #fff;
  outline: none;
  transition: .45s cubic-bezier(.785,.135,.15,.86);
  &:hover {
    box-shadow: inset 250px 0 0 0 #fff;
    color: #000;
  }
   }
  }
 }
 .img-block {
   max-width: 100%;

   img {
     width: 100%;
     height: 100%;
   }
 }

 }

@media (max-width: 1070px) {
  padding: 5rem 0;
  .wrapper {
    padding-left: 5vw;
    padding-right: 5vw;
    .text-block {
      span {
        font-size: 1.1rem;
      }
      .title {
        font-size: 2.5rem;
        line-height: 44px;
      }
      .description {
         margin-top: 1.5rem;
        p {
          font-size: .9rem;
          letter-spacing: 0.02em;
          padding-left: 2rem;
        }
      }
    }

  }
} 

@media (max-width: 932px) {
.wrapper {
  padding: 0 10vw;
  .text-block {
    order: 1;
    .description {

      p {
        padding-left: 1.5rem;
      }
    }
  }
}
}

@media (max-width: 567px) {
  padding: 3rem 0;
  .wrapper {
    padding: 0 5vw;
    .text-block {
      span {
        font-size: .9rem;
      }
      .title {
        font-size: 1.8rem;
        line-height: 35px;
      }
      .description {
         margin-top: 1rem;
      }
    }
  }
}
@media (max-width: 440px) {
  .wrapper {
grid-template-columns: 1fr;
    .img-block {

      width: 100%;
    }
    .text-block {
      .description {
      
      button {
        width: 200px;
  height: 45px;
      }
    }
    }
  }
}
`

export default ImgSection