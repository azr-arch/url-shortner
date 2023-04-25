import React from 'react'
import { useState } from 'react'

const CopyBtn = ( {text} ) => {
    const [copied, setCopied] = useState(false)

    function copyToClipboard() {
        navigator.clipboard.writeText(text)
        .then(() => {
            setCopied(true)
            setTimeout(() => {
                setCopied(false)
            }, 5000);
        })
        .catch((err) => {
            console.log('error occured ',err)
        })
    }

  return (
    <button 
        className='copy-btn' 
        onClick={() => copyToClipboard()} >
        {copied ? 'Copied!' : 'Copy'}
    </button>
  )
}

export default CopyBtn