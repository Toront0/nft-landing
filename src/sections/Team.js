import React, { useRef, useContext, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import TeamCard from '../components/TeamCard'
import img from '../assets/images/team-1.webp'
import img2 from '../assets/images/team-2.webp'
import img3 from '../assets/images/team-3.webp'
import img4 from '../assets/images/team-5.webp'
import { SizeContext } from '../utils/hooks/window-size-observer'

const Team = () => {
  const { innerWidth } = useContext(SizeContext)
  const cardsRef = useRef()
  const cardRef = useRef()
  const cardRef2 = useRef()
  const cardRef3 = useRef()
  const cardRef4 = useRef()
  const lightRef = useRef()
  const lightRef2 = useRef()
  const lightRef3 = useRef()
  const lightRef4 = useRef()

  const change = (e) => {
    if (innerWidth < 1140) {
      return
    } else {
      let xAxis = (cardsRef.current.offsetWidth / 2 - e.pageX) / 100
      let yAxis = (cardsRef.current.offsetHeight * 3.3 - e.pageY) / 50
      if (yAxis > 10) {
        yAxis = 10
      }
      if (yAxis < -10) {
        yAxis = -10
      }
      let dXAxis = (cardsRef.current.offsetWidth / 2 - e.pageX) / 5
      let yXAxis = (cardsRef.current.offsetHeight * 3.55 - e.pageY) / 8
      cardRef.current.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`
      cardRef2.current.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`
      cardRef3.current.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`
      cardRef4.current.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`
      lightRef.current.style.transform = `translateX(${dXAxis}px) translateY(${yXAxis}%)`
      lightRef2.current.style.transform = `translateX(${dXAxis}px) translateY(${yXAxis}%)`
      lightRef3.current.style.transform = `translateX(${dXAxis}px) translateY(${yXAxis}%)`
      lightRef4.current.style.transform = `translateX(${dXAxis}px) translateY(${yXAxis}%)`
    }
  }

  window.addEventListener('mousemove', change)

  return (
    <Wrapper ref={cardsRef} id='team'>
      <div className='wrapper container'>
        <h2 className='title'>
          Знакомьтесь с <br />
          <span>Нашей командой</span>
        </h2>
        <div className='cards'>
          <TeamCard
            forwardedRef={cardRef}
            forwardedRef2={lightRef}
            img={img}
            name='Sasha Babinski'
            job='Генеральный директор'
            pinterest
            github
            vk
          />
          <TeamCard
            forwardedRef={cardRef2}
            forwardedRef2={lightRef2}
            img={img4}
            name='Denis Minsky'
            job='SEO'
            pinterest
            github
            vk
          />
          <TeamCard
            forwardedRef={cardRef3}
            forwardedRef2={lightRef3}
            img={img2}
            name='Nikita Levitsky'
            job='Full Stack разработчик'
            github
            vk
          />
          <TeamCard
            forwardedRef={cardRef4}
            forwardedRef2={lightRef4}
            img={img3}
            name='Vitya Polyakov'
            job='UI/UX - Дизайнер'
            vk
          />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: #000317;
  padding: 7rem 0;
  overflow: hidden;
  .wrapper {
    font-weight: 700;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      text-align: center;
      font-size: 2.375rem;
      line-height: 46px;
      color: #d7d7d7;
      margin: 0 auto;
      span {
        font-size: 3rem;
        color: #fff;
      }
    }

    .cards {
      margin-top: 8rem;
      display: flex;
      gap: 1rem;
      row-gap: 5rem;
      flex-wrap: wrap;
      perspective: 1000px;
    }
  }

  @media (max-width: 1074px) {
    padding: 5rem 0;
    .wrapper {
      .title {
        font-size: 2rem;
        line-height: 42px;
        span {
          font-size: 2rem;
        }
      }

      .cards {
        margin-top: 6rem;
        justify-content: center;
      }
    }
  }

  @media (max-width: 567px) {
    padding: 3rem 0;
    .wrapper {
      align-items: flex-start;

      .title {
        font-size: 1.8rem;
        line-height: 36px;
        span {
          font-size: 2rem;
        }
      }
    }
  }
`

export default Team
