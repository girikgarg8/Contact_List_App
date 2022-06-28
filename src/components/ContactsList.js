import React from 'react'
import CardContact from './ContactCard'
import {Link} from 'react-router-dom'
const ContactList = (props) => {
    // console.log(props);
    const deleteContactHandler=(id)=>{
        props.getContactId(id);
    }
    const contacts=[
        {
            id:"1",
            name: "girik",
            email: "girikgarg@gmail.com"
        }
    ]
    const renderContactList = contacts.map((contact) => {
        return (
            <CardContact contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
        );
    });
    return (
        <div className="ui celled list">
            <br></br>
            <br></br>
            <h2> Contact List
            <Link to="/add">
            <button className="ui button blue right" style={{position:"absolute",right:70}}> Add Contact </button>    
            </Link> 
            </h2>
            {renderContactList}
        </div>)
};
export default ContactList;