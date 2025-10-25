import React, { useState, useEffect } from 'react';
import './Contacts.css';
import ContactCard from './ContactCard';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setContacts(data));
  }, []);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="contacts-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search contacts by name, email, or phone..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <div className="search-icon">🔍</div>
      </div>
      
      <div className="contacts-header">
        <h2>Your Contacts ({filteredContacts.length})</h2>
      </div>
      
      <div className="contacts-grid">
        {filteredContacts.map(contact => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
      
      {filteredContacts.length === 0 && searchTerm && (
        <div className="no-results">
          <p>No contacts found matching "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
};

export default Contacts;
