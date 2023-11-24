
import React from "react";
import firo from "../image/fira.jpg";
import Email from "../image/email.png";
import Linkedin from "../image/linked.png"


const Info = () =>{
    return(
        <div className="info">
            <img src={firo}/>
            <h2>Firomsa Hika</h2>
            <p>Frontend Developer</p>
            
            <a href="http://www.firomsahika2022@gmail.com" target="_blank" ><button><img className="email-img" src={Email}/>Email</button></a>
    
           <a href="http://www.linkedin.com/in/firomsa-hika-633a03254" target="_blank"><button className="linkedin-btn"><img className="linkedin-img" src={Linkedin}/>Linkedin</button></a>
        </div>
    )
}

export default Info;