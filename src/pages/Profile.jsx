import React, { useState } from "react";
import "../styles/Profile.css";

function Profile() {

    const [info] = useState({
        name: "John Doe",
        address: "Street 312, Metro City, st 12345",
        phone: "+91 94584 93402",
        email: "Johndoe@gmail.com",
        pass: "****************"});

    function editprofile(){
        alert("edit feature coming soon");
    }

    return (
        <div className="main">

            <div className="pic">
                <img src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png" />
                <h2>{info.name}</h2>
            </div>

            <div className="table">

                <div className="row">
                    <p className="label">Address</p>
                    <p className="value">{info.address}</p>
                </div>

                <div className="row">
                    <p className="label">Phone</p>
                    <p className="value">{info.phone}</p>
                </div>

                <div className="row">
                    <p className="label">Email</p>
                    <p className="value">{info.email}</p>
                </div>

                <div className="row">
                    <p className="label">Password</p>
                     <p className="value">{info.pass}</p>
                
                </div>

            </div>

            <div className="button">
                <button onClick={editprofile}>Edit profile</button>
            </div>
            <div className="update">Last updated: 18 February 2025</div>

        </div> );
}

export default Profile;