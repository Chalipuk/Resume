import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Contact Me</h1>
        <div className="contact-container">
          <img
            src="https://scontent.fbkk22-3.fna.fbcdn.net/v/t39.30808-6/357366678_1435006913941723_5735278065151002969_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeERoCTxk-qPEwUUZkAjHBUOU3mG4bN_GCBTeYbhs38YIL6Im0NACg7QX6phOGd-Dy6BxWQrMCl_3kYTDcL3710p&_nc_ohc=_GJjir526q4AX8Wu9Uh&_nc_zt=23&_nc_ht=scontent.fbkk22-3.fna&oh=00_AfCnNbx0XzIc5K4_zWgTQcVofexPFjq7fFSxSNeK06a7tA&oe=65A13AF3"
            alt="profile"
            className="profilepic"
          />
          <div className="tactdiv">
            <h3>Email : chalida.pulkd@gmail.com</h3>
            <h3>Instagram : @chalipuk</h3>
            <h3>Facebook : Earng</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
