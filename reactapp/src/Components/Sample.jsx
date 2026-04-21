// import React, {Component} from 'react'

// class Sample extends Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         return (
//         <div>
//           <h2>Trending Topics</h2>
//            <p>This is a Sample Component</p>
//            <button
//             className="counter"
//             onClick={() => this.props.setCount((count) => count + 1)}
//             >
//             Count is {this.props.count}
//             </button>
//         </div>
//     )
//     }
// }
// export default Sample


import React, { use } from 'react'
import { useState } from 'react'
import styles from '../css/Sample.module.css'
import NavStyle from '../css/Navbar.module.css'
import styled from '@emotion/styled'
import {useState,useEffect} from 'react'
import {css} from '@emotion/react'
import axios from 'axios'
// import React, { Component } from 'react'

// class Sample extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             count: 0
//         }
//     }

//     componentDidMount() {
//         console.log('Component did mount')
//     }

//     shouldComponentUpdate(nextProps, nextState) {
//         console.log('Should component update')
//         return true
//     }

//     componentDidUpdate(){
//         console.log("Component did update")
//     }    

//     increment = () => {
//         this.setState({ count: this.state.count + 1 })
//     }

     function Sample() {
     const [count, setCount] = useState(0);
     const [name, setName] = useState("Parth")
     const [loading, setLoading] = useState(true)

     useEffect(() => {
      console.log("Component did mount")
      
      return () => {
        console.log("Component will unmount")
      }
     }, [])

     useEffect(() => {
    //   const fetchData = async () => {
    //     const response = await fetch("https://jsonplaceholder.typicode.com/posts",[
        
        
    //     ])
    //     const data = await response.json()
    //     console.log(data)
    //   }
    //   fetchData()
      // }, []
      const fetchData = async () => {
        try{
          const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
          console.log(response.data)
          setLoading(false)
        } catch (error) {
          console.error("Error fetching data:", error)
        }
      }
      fetchData()
     },[])

     const increment = () => {
        setCount(count + 1);
     }

    const decrement = () => {
         setCount(count - 1);
     }
     
   return (
     <div>
       <h1>This is a sample component</h1>
       <h2>Count: {count}</h2>
       <h3>Name: {name}</h3>
       <h3>Loading: {loading ? "Yes" : "No"}</h3>
       <button className={styles.btn} onClick={() => setName("Alice")}>
         Change Name
       </button>
       <button className={styles.btn} onClick={increment}>
         Increment
       </button>
       <button className={styles.btn} style={{ backgroundColor: "Yellow", color: "White", padding: "10px 20px", border:"None", borderRadius:"5px", cursor:"pointer" }} onClick={decrement}>
         Decrement
       </button>
     </div>
   )
 }

export default Sample

const Button = styled.button`
  background-color: blue;
  color:White;
  padding: 10px 20px;
  border: none;
  width: 100px;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
`


// import React, { Component } from 'react'

// class Sample extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             count: 0
//         }
//     }

//     componentDidMount() {
//         console.log('Component did mount')
//     }

//     shouldComponentUpdate(nextProps, nextState) {
//         console.log('Should component update')
//         return true
//     }

//     componentDidUpdate(){
//         console.log("Component did update")
//     }    

//     increment = () => {
//         this.setState({ count: this.state.count + 1 })
//     }
//     render() {
//         return (
//             <div>
//                 <h1>This is a sample component</h1>
//                 <h2>{this.state.count}</h2>
//                 <button onClick={this.increment}>Increment</button>
//             </div>
//         )
//     }
// }

// export default Sample

// function sample() {
//     const [count, setCount] = React.useState(0)

//     const increment = () => {
//         setCount(count + 1)
//     }
//     return(
//         <div>
//             <h1> This is sample component</h1>
//             <h2>{count}</h2>
//             <button  onClick={increment}>Increment</button>
//         </div>
//     )
// }
//     function sample() {
//         const [count, setCount] = React.useState(0)

//         const decrement  = () => {
//             setCount(count -1 )
//         }
//     return (
//         <div>
//             <h1> This is sample component</h1>
//             <h2>{count}</h2>
//             <button  onClick={decrement}>Decrement</button>
//         </div>
//     )
// }


