import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Contact.css';
import axios from 'axios';
const Contact=()=>{
    const navigate=useNavigate();
    const [user, setuser]=useState({
        name: '',
        email: '',
        message: ''
    });
    async function send(e)
    {
        e.preventDefault();
        console.log(user);
        if(user.name==='' || user.email==='' || user.message==='')
        {
            window.alert('Please Enter Valid Data');
            return;
        }
        const res=await axios.post('https://abhayport.onrender.com', {
            name: user.name,
            email: user.email,
            message: user.message
        });
        console.log(res);
        window.alert('message sent succesfully');
        setuser({name: '',email: '', message: ''});
        navigate('/');
    }
    function inputHandler(e)
    {
        setuser({...user, [e.target.name]: e.target.value});
    }
    return (
        <div className="con">
            <h2>Drop A Message</h2>
            <form className="form" onSubmit={send}>
                <input type="text" placeholder="Name" name="name" value={user.name} onChange={inputHandler}/>
                <input type="email" placeholder="Email" name="email" value={user.email} onChange={inputHandler}/>
                <textarea rows="6" placeholder="Message" name="message" value={user.message} onChange={inputHandler}/>
                <button type="submit" className="button">Send</button>
            </form>
        </div>
    )
}
export default Contact;
