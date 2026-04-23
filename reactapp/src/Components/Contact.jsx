import React,{useState} from "react";

function Contact(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const handleSubmit = (data) => {
        e.preventDefault()
        console.log()
        if(!email.endsWith("krmu.edu.in")){
            alert("Please enter a valid email")
            return
        }
        console.log("Name: ", name)
        console.log("Email: ", email)
        console.log("Message: ", message)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Enter your mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} />
                <input type="submit" value="Send Message" />
            </form>
        </div>
)}
export default Contact
