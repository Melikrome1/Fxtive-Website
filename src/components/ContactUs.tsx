import React from 'react';

const ContactUs: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem' }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', border: '2px solid black', borderRadius: '0px', padding: '2rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            style={{ borderRadius: '20px', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            style={{ borderRadius: '20px', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            rows={4}
            style={{ borderRadius: '20px', padding: '0.5rem' }}
          ></textarea>
        </div>
        <button type="submit" style={{ borderRadius: '20px', padding: '0.5rem' }}>Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;



