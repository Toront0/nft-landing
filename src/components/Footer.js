import React from 'react'
import styled from 'styled-components'
import logo from '../assets/icons/Pinterest.svg'
import logo2 from '../assets/icons/discord.svg'

const Footer = () => {
  return (
    <Wrapper>
     <div className="wrapper">
      <div className="info">
       <a href="#" className='logo'>
        WEB<br /><span>TECH</span>
       </a>
       <p>All rights reserved 2022 &copy;</p>
      </div>
      <ul className="links">
       <li className='link'><a href="#">Главная</a></li>
       <li className='link'><a href="#">Преимушества</a></li>
       <li className='link'><a href="#">О нас</a></li>
       <li className='link'><a href="#">Отзывы</a></li>
       <li className='link'><a href="#">Контакты</a></li>
      </ul>
      <div className="icons">
       <a href="https://pinterest.com">
        <img src={logo} alt="pinterest logo" />
       </a>
       <a href="https://discord.com">
        <img src={logo2} alt="discord logo" />
       </a>
      </div>
     </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
background-color: #111111;
padding: 2rem 1.25rem;
border-top: 2px solid transparent;

border-image-source: linear-gradient(270deg, #001AFF 0%, rgba(255, 0, 229, 0.5) 25%, rgba(255, 2, 124, 0.5) 49.48%, rgba(255, 0, 0, 0.5) 78.12%, #FF0000 100%);
border-image-slice: 1;


.wrapper {
 display: flex;
 align-items: center;
 justify-content: space-between;
 .info {

.logo {
display: inline-block;
font-weight: 700;
font-size: 2rem;
color: #ffffff;
text-align: center;
line-height: 15px;
   span {
     font-size: 1.2rem;
  }
  }

  p {
   font-weight: 500;
   font-size: 1rem;
   margin-top: .5rem;
   color: #A7A7A7;
  }
 }
 .links {
 list-style: none;
 margin: 0;
 padding: 0;

 .link {
  display: inline-block;
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 24px;
  margin-right: 2.5rem;

  a {
   color: #D7D7D7;
  }
 }
}


.icons {
 display: flex;
 gap: 1.5rem;
 img {
  width: 40px;
  height: 40px;
 }
}
}
@media (max-width: 768px) {
  padding: 1.5rem 1.25rem;
  .wrapper {
    .info {

      a {
        font-size: 1.2rem;
      }
      p {
        font-size: .75rem;
        margin-top: .3rem;
      }
    }

    .links {
    display: none;
  }
  .icons {
    gap: 1rem;
    img {
      width: 35px;
      height: 35px;
    }
  }
  }
}

`

export default Footer