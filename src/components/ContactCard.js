import React, { useState } from 'react';
import './ContactCard.css';

const ContactCard = ({ contact }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`contact-card ${isExpanded ? 'expanded' : ''}`} onClick={() => setIsExpanded(!isExpanded)}>
      <div className="contact-avatar">
        <span className="avatar-text">{contact.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0,2)}</span>
      </div>
      
      <div className="contact-info">
        <h3 className="contact-name">{contact.name}</h3>
        <p className="contact-username">@{contact.username}</p>
        <p className="contact-email">{contact.email}</p>
        
        {isExpanded && (
          <div className="contact-details">
            <div className="detail-item">
              <span className="detail-label">Phone:</span>
              <span className="detail-value">{contact.phone}</span>
            </div>
            
            <div className="detail-item">
              <span className="detail-label">Website:</span>
              <a href={contact.website} target="_blank" className="detail-link">
                {contact.website}
              </a>
            </div>
            
            <div className="detail-item">
              <span className="detail-label">Company:</span>
              <span className="detail-value">{contact.company.name}</span>
            </div>
            
            <div className="detail-item">
              <span className="detail-label">Address:</span>
              <span className="detail-value">
                {contact.address.street}, {contact.address.city}, {contact.address.zipcode}
              </span>
            </div>
          </div>
        )}
      </div>
      
      <div className="expand-icon">
        {isExpanded ? '−' : '+'}
      </div>
    </div>
  );
};

export default ContactCard;
