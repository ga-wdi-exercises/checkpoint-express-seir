import React from "react"

function Contact(props) {

    return (
        <div className='contact'>
            <img src={props.contact.profile_picture} alt=' '></img>
            <h3>{props.contact.name}</h3>
            <h4>{props.contact.email}</h4>
        </div>
    )
}

export default Contact