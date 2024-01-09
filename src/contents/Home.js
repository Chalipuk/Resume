import React, { Component } from "react"
import Social from '../components/Social'
// import profilepic from '../img/Profile.jpg'
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {
    render() {
        return(
            <div className="condiv home">
                <img src="https://scontent.fbkk29-8.fna.fbcdn.net/v/t39.30808-6/297954654_1224488768326873_5885314233008147753_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeHU39fd4xBFvHebK_1p91Gp-bsfYg9Aa975ux9iD0Br3n-idPjPugHPDtlp-2Vm3KhhjTA_-7uMilMLy2m19RJ2&_nc_ohc=r7KFELwcbdIAX9kf3VH&_nc_ht=scontent.fbkk29-8.fna&oh=00_AfDv1VKevjGBvq7G7FuGijqboHjLcRhrITvuukd3NTIwRg&oe=65A23749" alt="profile" className="profilepic"/>
                <ReactTypingEffect text= {['I am Chalida', 'I am a Web Developer']} speed ={80} eraseDelay={200} className="typingeffect" />
                <Social/>
            </div>
        );
    }
}

export default Home;
