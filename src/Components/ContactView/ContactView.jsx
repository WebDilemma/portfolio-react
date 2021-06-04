import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Title from '../Title/Title';
import './ContactView.styles.css';

const ContactView = () => {
  return (
    <section className="contactView">
      <Title name="contact" />
      <ContactForm />
      <div className="contactView__email">contact@webdilemma.com</div>
    </section>
  );
};

export default ContactView;