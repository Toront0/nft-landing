import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const ErrorPage = () => {
  return (
    <>
    <NavBar />
      <Wrapper>
        <div className="text">
          <h3 className="error" title='404'>404</h3>
          <p>Это тестовая версия сайта, поэтому некоторые страницы недоступны.</p>
          <Link to='/'>
            <button className='btn'>Вернуться</button>
          </Link>
        </div>
      </Wrapper>
      <Footer />
    </>
  )
}

const Wrapper = styled.main`
 background: #000317;
  height: 90vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem;
  
  color: #fff;
  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    .error {
    font-size: 100px;
    position: relative;
    font-weight: 600;
    color: #fff;
    animation: glitch 1s linear infinite;  
    &::before,
    &::after {
      content: attr(title);
      position: absolute;
      left: 0;
    }
    &::before {
      animation: glitchTop 1s linear infinite;
      clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    }
    &::after {
      animation: glitchBotom 1.5s linear infinite;
      clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
      -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    }
  }
@keyframes glitch{
  2%,64%{
    transform: translate(2px,0) skew(0deg);
  }
  4%,60%{
    transform: translate(-2px,0) skew(0deg);
  }
  62%{
    transform: translate(0,0) skew(5deg); 
  }
}  
@keyframes glitchTop{
  2%,64%{
    transform: translate(2px,-2px);
  }
  4%,60%{
    transform: translate(-2px,2px);
  }
  62%{
    transform: translate(13px,-1px) skew(-13deg); 
  }
}
@keyframes glitchBotom{
  2%,64%{
    transform: translate(-2px,0);
  }
  4%,60%{
    transform: translate(-2px,0);
  }
  62%{
    transform: translate(-22px,5px) skew(21deg); 
  }
}




  p {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
.btn {
  width: 200px;
  height: 40px;
  color: #fff;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid #fff;
  font-size: 1.1rem;
  box-shadow: inset 0 0 0 0 #fff;
  outline: none;
  transition: .45s cubic-bezier(.785,.135,.15,.86);
  &:hover {
    box-shadow: inset 200px 0 0 0 #fff;
    color: #000;
  }
}
    
}

@media (max-width: 567px) {
.text {
  .btn {
    width: 160px;
    height: 30px;
    font-size: .95rem;
    
  }
  p {
    font-size: 1.1rem;
  }
} 
}
    
  

  
`

export default ErrorPage