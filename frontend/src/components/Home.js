
import React from 'react'
import Sample from '../video/water2.mp4';
function Home() {
  return (
    <div className='main'>
    <div className="overlay"></div>
    <video src={Sample} autoPlay loop muted />
    <div className="content">
        <h1>Welcome</h1>
        <p>To Blog site.</p>
        <p>Signup and let your thoughts flow like water...</p>
    </div>
</div>

  )
}

export default Home