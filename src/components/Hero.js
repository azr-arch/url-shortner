import React from 'react'

import HeroMain from './HeroMain'
import Statistics from './Statistics'
import BoostingBanner from './BoostingBanner'

const Hero = ({ handleScrollRef, value, handleChange, handleSubmit, error, scrollToRef, links, setLinks}) => {
  return (
    <main className='hero'>
        <HeroMain handleScrollRef={handleScrollRef}/>
        <Statistics 
          value={value}
          handleChange={(e) => handleChange(e)}
          handleSubmit={(e) => handleSubmit(e)}
          error={error}
          scrollToRef={scrollToRef}
          links={links}
          setLinks={setLinks}
        />
        <BoostingBanner 
          handleScrollRef={handleScrollRef}
        />
    </main>
  )
}

export default Hero     