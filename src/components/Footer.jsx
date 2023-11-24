import React from "react";
import twiter from "../image/twitter.png";
import instagram from"../image/inst.png"
import facebook from"../image/fb.png"
import git from"../image/git.png"

const Footer=() =>{
    return(
        <div className="footer">
            <a href="https://twitter.com/HikaFiromsa" target="_blank"><img src={twiter}/></a>
            <a href="https://www.facebook.com/firomsa.hika.5" target="_blank"><img src={facebook}/></a>
            <a href="https://www.instagram.com/fromsahika/" target="_blank"><img src={instagram}/></a>
            <a href="https://github.com/firomsahika" target="_blank"><img src={git}/></a>
         
        </div>
    )
}

export default Footer;