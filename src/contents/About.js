import React, { Component } from "react";
// import profilepic from '../img/Profile.jpg'

class About extends Component {
    render() {
        return(
            <div className="condiv about">
                <h1 className="subtopic">About Me</h1>
                <img src="https://scontent.fbkk29-8.fna.fbcdn.net/v/t39.30808-6/297954654_1224488768326873_5885314233008147753_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeHU39fd4xBFvHebK_1p91Gp-bsfYg9Aa975ux9iD0Br3n-idPjPugHPDtlp-2Vm3KhhjTA_-7uMilMLy2m19RJ2&_nc_ohc=r7KFELwcbdIAX9kf3VH&_nc_ht=scontent.fbkk29-8.fna&oh=00_AfDv1VKevjGBvq7G7FuGijqboHjLcRhrITvuukd3NTIwRg&oe=65A23749" alt="profile" className="profilepic"/>
                {/* <img src={profilepic} /> */}
                <h2>I'm Chalida Pulkerd</h2>
                <h3></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        );
    }
}

export default About;