import React from 'react'

function Homepage() {
    const isloggedin = true;
    // if(isloggedin){
    //     return(
    //         <button>Logout</button>
    //     )
    // }else{
    //     return(
    //         <button>Login</button>
    //     )
    // }

    return(
        isloggedin ? <button>Logout</button> : <button>Login</button>
    )
  
}

export default Homepage
