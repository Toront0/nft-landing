import React from 'react'
import styled from 'styled-components'

const Circle = ({ title, subtitle }) => {
  return (
    <Wrapper>
     <div className="ring"></div>
     <div className="text">
       <h3 className='circle-title'>{title}</h3>
        <h5 className='circle-subtitle'>{subtitle}</h5>
     </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
width: 190px;
height: 190px;
display: flex;
align-items: center;
justify-content: center;
.ring {
position: absolute;
inset: 0px;
border-radius: 50%;

background: linear-gradient(45deg, transparent, transparent 40%, #ff00f7, #FF5000  );
animation: animate 3s linear infinite;

z-index: 300;



&::before {
  content: '';
  position: absolute;
  inset: 4px;
  background: #000317;
  border-radius: 50%;
  z-index: 100;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 1);
}
&::after {
  content: '';
  position: absolute;
  inset: 0px;
  background: linear-gradient(45deg, transparent, transparent 40%, #e5f403);
  border-radius: 50%;
  z-index: 1;
  filter: blur(7px);
}

&:nth-child(1) {
  
}
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
    filter: hue-rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
    filter: hue-rotate(90deg);
  }
}

 .text {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 80%;
   z-index: 301;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   text-align: center;
   color: #D7D7D7;
font-weight: 500;
   .circle-title {
  font-size: 3rem;
  line-height: 53px;
  transform: rotate(0deg);
 }

 .circle-subtitle {
  font-size: 1rem;
  line-height: 22px;
  margin: 0;
  width: 90%;
 }
 }
`

export default Circle