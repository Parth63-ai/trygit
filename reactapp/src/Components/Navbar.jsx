// import React from 'react'

// function Navbar() {
//   return (
//     <div>
//       <h2>This is a Navbar</h2>
//     </div>
//   )
// }

// export default Navbar

import React from 'react'

function Navbar(props) {
  return (
    <div>
      <h2>This is a Navbar</h2>
      <ul>
        <li>{props.list}</li>
      </ul>
        <h3>Logo</h3>
    </div>
  )
}

export default Navbar
