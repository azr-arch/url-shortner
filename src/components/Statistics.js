import React from 'react'

import brandLogo from '../assets/icon-brand-recognition.svg'
import recordLogo from '../assets/icon-detailed-records.svg'
import customizeLogo from '../assets/icon-fully-customizable.svg'

import LinkShortenForm from './LinkShortenForm'
const Statistics = ( { scrollToRef, value, handleChange, handleSubmit, error, links, setLinks }) => {
  return (
    <div className='statistics--wrapper'>
        <LinkShortenForm
            value={value}
            handleChange={(e) => handleChange(e)}
            handleSubmit={(e) => handleSubmit(e)}
            error={error}
            scrollToRef={scrollToRef}
            links={links}
            setLinks={setLinks}
        />

        <div className="title-wrapper">
            <p>Advanced Statistics</p>
            <p>Track how your links are performing across the web 
                with <br /> our adcanced statistics dashboard
            </p>
        </div>

        <div className="cards--wrapper">
            <div className="card">
                <div className='stats-logo'>
                    <img src={brandLogo} alt="brand-logo"/>
                </div>

                <p className='card--title'>Brand recognition</p>
                <p className='card--subtitle'>
                    Boost your brand recognition with each click. Generic links don’t 
                    mean a thing. Branded links help instil confidence in your content.
                </p>
            </div>
            <div className="card">
                <div className='stats-logo'>
                    <img src={recordLogo} alt="brand-logo"/>
                </div>

                <p className='card--title'>Detailed Records</p>
                <p className='card--subtitle'>
                    Gain insights into who is clicking your links. Knowing when and where 
                    people engage with your content helps inform better decisions.
                </p>
            </div>
            <div className="card">
                <div className='stats-logo'>
                    <img src={customizeLogo} alt="brand-logo"/>
                </div>

                <p className='card--title'>Fully Customizable</p>
                <p className='card--subtitle'>
                    Improve brand awareness and content discoverability through customizable 
                    links, supercharging audience engagement.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Statistics