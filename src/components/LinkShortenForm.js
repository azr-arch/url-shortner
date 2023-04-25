/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const LinkShortenForm = ( { value, handleChange, handleSubmit, error, scrollToRef, links, setLinks } ) => {

  const shortLinks = links?.map((link, index) => {
    return (
      <li key={index}>
          {link.main}
          <a href={link.short} target='_blank'>{link.short}</a>

          <button 
            className={`copy-btn ${link.copied && 'copied'}`}
            onClick={() => {
              // copied text to clipboard
              navigator.clipboard.writeText(link.short)
              // alerting user
              alert('Text Copied')

              // setting state with copied : true
              setLinks(link.id)
            }}  
          >
            {link.copied ? 'Copied!': "Copy"}
          </button>
      </li>
    )
  })

  return (
    <>
      <div className='linkshortenform--wrapper' ref={scrollToRef}>
        <form action=""
              onSubmit={(e) => {
                e.preventDefault()
                handleSubmit(e)
              }}>
          <input 
              type="text" 
              placeholder='Shorten a link here...'
              className={`link-field ${(error.isInvalid || error.isEmpty) && 'error'}`} 
              value={value}
              onChange={(e) => handleChange(e)}
            />

          {
            error.isInvalid ? 
            <span className='error-msg'><i>Please add a valid link</i></span>
            : error.isEmpty ? 
            <span className='error-msg'><i>Can't be blank!</i></span>
            : " "
          }  

          <button className='submit-btn'>Shorten it!</button>
        </form> 
      </div>

      <ul className='shorten-links'>
        {shortLinks}
      </ul>
    </>
  )
}

export default LinkShortenForm