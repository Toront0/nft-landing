import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { partnerLogos } from '../utils/constants';


// import logo from '../assets/icons/Bloomberg.svg'
// import logo2 from '../assets/icons/Crypton.svg'
// import logo3 from '../assets/icons/JPMorgan.svg'
// import logo4 from '../assets/icons/Phoenix_Group.svg'
// import logo5 from '../assets/icons/Stripe.svg'
// import logo6 from '../assets/icons/Polycom.svg'






const Partners = () => {
  const root = document.documentElement;
  const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
  // const marqueeContent = document.querySelector("ul.marquee-content");
  const marqueeContentRef = useRef()

  useEffect(() => {
    root.style.setProperty("--marquee-elements", 
    marqueeContentRef.current.children.length);


      for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContentRef.current.appendChild(marqueeContentRef.current.children[i].cloneNode(true));
}
  }, [])


  return (
    <Wrapper id='partners'>
      <div className="head">
        <h2 className="title">Наши партнеры</h2>
      </div>
    <div className="carousel">
      <ul className="marquee-content" ref={marqueeContentRef} >
        {partnerLogos.map(item => {
          return <li className="slide" key={item.id}>
          <img loading='lazy' src={item.logo}  alt={`logo${item.id}`} />
        </li>
        })}
        
      </ul>
    </div>
    <div className="info">
      <p>Mы обучали наши алгоритмы под наблюдением специалистов, как внутри компании, так и в сотрудничестве с партнерами и учреждениями, чтобы наши рекомендации были актуальными. Мы верим в хорошую коммуникацию и полностью прозрачный процесс работы.</p>
    </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
padding: 7rem 0 3rem;
background-color: #000317;
border-top: 1px solid rgba(255,255,255,0.1);
border-bottom: 1px solid rgba(255,255,255,0.1);
.title {
  font-weight: 700;
  font-size: 3rem;
    text-align: center;
  color: #fff;
  margin-bottom: 3rem;
  padding: 0 1rem;
}


.carousel {
      width: var(--marquee-width);
  height: var(--marquee-height);

  color: #eee;
  overflow: hidden;
  position: relative;
&::before, &::after {
  position: absolute;
  top: 0;
  width: 10rem;
  height: 100%;
  content: "";
  z-index: 1;
}
&::before {
  left: 0;
  background: linear-gradient(to right, #111 0%, transparent 100%);
}
&::after {
  right: 0;
  background: linear-gradient(to left, #111 0%, transparent 100%);
}
}

.marquee-content {
  list-style: none;
  height: 100%;
  display: flex;
  animation: scrolling var(--marquee-animation-duration) linear infinite;
  margin: 0;
  padding: 0;
}

.marquee-content li {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-shrink: 0;
  width: var(--marquee-element-width);
  max-height: 100%;
  font-size: calc(var(--marquee-height)*3/4); /* 5rem; */
  white-space: nowrap;
  padding: 0 2rem;
  pointer-events: none;
  user-select: none;
}

.marquee-content li img {
  width: 100%;
  /* height: 100%; */

}

@keyframes scrolling {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-1 * var(--marquee-element-width) * var(--marquee-elements))); }
}


.info {
  width: 40%;
  margin: 0 auto;
  text-align: center;
  margin-top: 5rem;
  p {
    color: #D7D7D7;
    font-size: 1.3rem;
  }
}

@media (max-width: 1070px) {
  padding: 5rem 0 3rem;
  .title {
    font-size: 2.5rem;
    line-height: 45px;
  }

  .info {
    width: 75%;
    padding: 0 1rem;
  }
}

@media (max-width: 567px) {
  padding: 3rem 0;
  .title {
    font-size: 2rem;
    line-height: 35px;
  }
  .info {
    width: 100%;
    padding: 0 1rem;
    margin-top: 3rem;
    p {
      font-size: .9rem;
    }
  }
}
`

export default Partners