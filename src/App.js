import {React, useState, useRef} from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'


const App = () => {
  const [formData, setFormData] = useState('')
  const [id, setId] = useState(0)

  const [error, setError] = useState({
    isEmpty: false,
    isInvalid: false
  })

  const [links, setLinks] = useState([])

  const [expanded, setExpanded] = useState(false)
  const scrollToRef = useRef(null)

  function handleChange(e){
    setFormData(e.target.value)
  }

  function handleSubmit(e) {
    // const urlRegex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9]+\.){1,2}[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/

    console.log('submit clicked')
    shortenLink(formData)
  }

  function handleScrollRef(){
    const field = document.querySelector('.link-field')
    field.focus()
    scrollToRef.current.scrollIntoView({  behavior: "smooth"})
  }

  async function shortenLink(ogLink){
    if(formData === ''){
      setError({...error, isEmpty: true})
      return
    }

    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${ogLink}`)
    const data = await response.json()
    
    if(response.ok === false) {
      setError({...error, isInvalid: true})
    
    }
    else {
      const shortUrl = data.result.full_short_link
      setError({isEmpty:false, isInvalid: false})
     
     setLinks(prevLinks => [
      ...prevLinks,
      {
        short:shortUrl,
        main: ogLink,
        copied: false,
        id: id
      }
     ])
     setId(prevId => prevId + 1)
  
    setFormData('')
    }
  }

  function handleSetLinks(currId){
    console.log('curr id ', currId)
    const updatedLinks = links.map((link) => {
      if(link.id === currId){
        return {...link, copied:true}
      }else {
        return {...link, copied:false}
      }
    })

    setLinks(updatedLinks)
  }

  return (
    <>
      <Header 
        expanded={expanded}
        handleClick={() => setExpanded(prevState => !prevState)}
      />
      <Hero 
        value={formData}
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        error={error}
        scrollToRef={scrollToRef}
        handleScrollRef={handleScrollRef}
        links={links}
        setLinks={(currId) => handleSetLinks(currId)}
      />
      <Footer />
    </>
  )
}

export default App