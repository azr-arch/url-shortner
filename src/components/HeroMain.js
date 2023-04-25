import React from 'react'

const HeroMain = ({ scrollToRef, handleScrollRef}) => {

  return (
    <div className='heromain--wrapper'>
      <div className="heromain--left-wrapper">
        <p className='heromain--left-title'>
          More than just <br /> shorter links
        </p>
        <p className='heromain--left-subtitle'>
          Build your brand's recognition and gte detailed <br /> insights
          on how your links are performing.
        </p>

        <button className="getstart" onClick={handleScrollRef}>
          Get started
        </button>
      </div>

      <div className="heromain--right-wrapper">
        <img src='./images/illustration-working.svg' alt='working person'/>
      </div>
    </div>
  )
}

export default HeroMain