import React from 'react'

const header = ({name, username,time}) => {// {prop} is props 
  return (

    <>
    <div><div className="tweet-content">
    <div className="tweet-header">
      <h3 className="username">{name}</h3>   {/* we can writw any js code inside {}*/}
      <span className="handle">{username}</span>
      <span className="timestamp">{time}</span>
    </div>
  </div>

  </div>

  </>
  )
}

export default header