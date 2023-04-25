import React from 'react'

const BoostingBanner = ({handleScrollRef}) => {
  return (
    <div className='boosting'>
        <h1>Boost your links today</h1>
        <button className='getstart' onClick={handleScrollRef}>
            Get Started
        </button>
    </div>
  )
}

export default BoostingBanner