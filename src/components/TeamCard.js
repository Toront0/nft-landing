import React from 'react'
import styled from 'styled-components'
import icon from '../assets/icons/GitHub.svg'
import icon2 from '../assets/icons/Pinterest.svg'
import icon3 from '../assets/icons/VK.svg'

const TeamCard = ({ github, vk, pinterest, name, job, img, forwardedRef, forwardedRef2 }) => {


  // console.log(forwardedRef, forwardedRef2)

  return (
    <Wrapper ref={forwardedRef}>

       <div className="img-block">
      <img className='avatar' src={img} alt="" />
     </div>
          <div className="wrapper">
       <div className="info">
      <h3 className='name'>{name}</h3>
     <h5 className='job'>{job}</h5>
     <div className="icons">
       {pinterest && <a href="https://pinterest.com">
       <img className='icon' src={icon2} alt="pinterest logo" />
      </a>}
      {github && <a href="https://github.com">
       <img className='icon' src={icon} alt="github logo" />
      </a>}
      {vk &&<a href="https://vk.com">
       <img className='icon vk' src={icon3} alt="vk logo" />
      </a>}
     </div>
     </div>
     <div className="backdrop" ref={forwardedRef2}>
       <div className='backdrop-light'></div>
     </div>
     </div>

    </Wrapper>
  )
}

const Wrapper = styled.div`
transform-style: preserve-3d;
position: relative;
width: 337px;
height: 229px;
background: #190836;
box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.2);
backdrop-filter: blur(3rem);
border-radius: 12px;
box-shadow: 0 0 0 1px rgb(255 133 255 / 50%);
z-index: 100;
transition: all .2s ease-out;

 /* &::after {
  content: '';
  position: absolute;
  width: 338px;
  height: 230px;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  background: linear-gradient(134.18deg, #FFFFFF 7.73%, rgba(255, 255, 255, 0.5) 38.66%, #630384 92.57%);
  border-radius: 12px;
  z-index: -10;
 } */
    .img-block {
  position: relative;
  transform: translate(-50%, -50%);
  top: 0;
  left: 50%;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 101;
  .avatar {
  object-fit: cover;
  width: 118px;
  height: 118px;
   border-radius: 50%;
 }
 &::after {
  content: '';
  position: absolute;
  inset: -5px;
  border: 1px solid #fff;
  background: linear-gradient(91.18deg, #FFFFFF 1.01%, rgba(255, 255, 255, 0) 186.08%);
  z-index: -1;
  border-radius: 50%;

 }
 }


.wrapper {
position: absolute;
inset: 0;
overflow: hidden;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
&::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  border-radius: 50%;
  height: 50%;
  background-color: #fff;
  opacity: 0.15;
  filter: blur(60px);
  pointer-events: none;
}
   .info {
  width: 100%;
  
  display: flex;
  align-items: center;

  flex-direction: column;
  margin-top: 3rem;


  .name {
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 29px;
  color: #fff;
  }
  .job {
   font-weight: 400;
   font-size: 1.125rem;
   margin-top: 0.5rem;
   color: #D7D7D7;
  }

   .icons {
  display: flex;
  gap: 1.5rem;
    align-items: center;
  .icon {
   width: 50px;
   height: 50px;
   /* &:hover {
     box-shadow: 0px 0px 12px rgba(255,255,255,.5);
   } */
  }
  .vk {
   width: 32px;
   height: 32px;
   margin-left: .3rem;
  }
 }
 }
 .backdrop {
  position: absolute;
  inset: 0;
  border-radius: 100%;
   display: flex;
   overflow: hidden;
   align-items: center;
   justify-content: center;
   will-change: transform;
    transform-style: preserve-3d;
    pointer-events: none;
    transition: all .2s ease-out;
   .backdrop-light {
     position: relative;
    width: 3rem;
    height: 3rem;
    background: #fff;
    opacity: 0.6;
    filter: blur(50px);
   }

 }
}
@media (max-width: 370px) {
  width: 288px;
  height: 200px;
  .img-block {
      width: 100px;
  height: 100px;
  }
  .wrapper {

    .info {
      .name {
        font-size: 1.3rem;
      }
      .job {
        font-size: 1rem;
        margin-top: 0;
      }

      .icons {
        gap: 1rem;
        .icon {
          width: 40px;
          height: 40px;
        }
        .vk {
          width: 28px;
          height: 28px;
          margin-left: .5rem;
        }
      }
    }
  }
}
`

export default TeamCard