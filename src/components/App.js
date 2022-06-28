import './App.css';
import React, { useState, useEffect } from "react"
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactsList";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { v4 as uuid } from "uuid";
function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, { ...contact, id: uuid() }]);
  }

  const removeContactHandler = (id) => {
    const newContactsList = contacts.filter((contact) => {
      return contact.id !== id;
    })
    setContacts(newContactsList);
  }
  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);
  useEffect(() => {
    if (contacts.length) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);
  return (
    <div className="ui container">
      <Header />
      <Router>
        <Switch>
         <Route path="/"
         render={(props)=>{
          <ContactList {...props} contacts={contacts} getContactId={removeContactHandler} />
         }}
         />
          <Route path="/add" 
          render={(props)=>{
            <AddContact {...props} addContactHandler={addContactHandler} />
          }} />
        </Switch>
        {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      </Router>
    </div>
  );
}
export default App;
