import React, { Component } from 'react';
import Widecard from '../components/Widecard';
// import BSRUImage from '../img/BSRU.png';
// import ASImage from '../img/AS.png';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard
                    // image={BSRUImage}
                    title="Bansomdejchaopraya Rajabhat University"
                    where="Computer Science"
                    from="2019"
                    to="2023"
                    
                />
                <Widecard
                    // image={ASImage}
                    title="Satri Wat Absornsawan School"
                    where="Business - Computer"
                    from="2011"
                    to="2018"
                />
            </div>
        );
    }
}

export default Education;
