import React from 'react'

function Avatar({url}) {
    return (<img className="h-2 rounded-full animate-bounce cursor-pointer transition duration-150 transform hover:scale-110" loading="lazy" src={url} alt="Profile Image"/>)
}

export default Avatar
