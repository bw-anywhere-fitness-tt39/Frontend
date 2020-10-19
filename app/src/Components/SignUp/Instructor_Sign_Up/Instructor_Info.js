import React from 'react'

function Member({ details }) {
  if(!details) {
    return <h3>Fetching Users...</h3>
  }

  return(
    <div>
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Authentication Code: {details.code}</p>
    </div>
  )
}

export default Member