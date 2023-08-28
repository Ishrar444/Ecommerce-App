import React from 'react'
import  "./Loader.css"
import { Audio } from 'react-loader-spinner'

const Loader = () => {
  return (

<div style={{marginLeft: "44%",
    marginTop: "15%",
    marginBottom :"10%"

    }}>
<Audio
  height="80"
  width="80"
  radius="9"
  color="Red"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
</div>
  )
}

export default Loader