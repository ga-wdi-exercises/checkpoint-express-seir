import React from "react";
import Contact from "../Contact/Contact.js";

function ContactList(props) {

    return(
        <div className='contact-list'>
            {props.contacts.map((contact, i) => {
                return <Contact key={i} contact={contact} />
            })}
        </div>
    )
}

export default ContactList;