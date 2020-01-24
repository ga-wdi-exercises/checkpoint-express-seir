import React from "react";

function NewContact(props) {

    return (
        <div>
            <h1>New Contact</h1>
            <form>
                <label>
                    Name:
                    <input type='text' name='name' />
                </label>
                <label>
                    Email:
                    <input type='text' name='email' />
                </label>
                <label>
                    Image:
                    <input type='text' name='profile_picture' />
                </label>
                <input type='submit' value='Submit' onSubmit={props.onSubmit} />
            </form>
        </div>
    )
}

export default NewContact;