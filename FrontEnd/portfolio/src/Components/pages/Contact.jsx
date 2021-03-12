import React from "react";
import { useState } from "react";
import "../css/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [content, setContent] = useState("");

  const formSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:4000/contact_form/entries", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phoneNumber, content }),
    });

    const payload = await response.json();
    console.log(payload);
    if (response.status >= 400) {
      alert(
        `Oops! Error: ${payload.message} for fields: ${payload.invalid.join(
          ","
        )}`
      );
    } else {
      alert(`Congrats! Submission submitted with id: ${payload.id}`);
    }
  };

  return (
    <>
      <section id="contact" className="contact-page">
        <h1 className="contact-heading">Get In Touch</h1>
        <span className="contact-divider"></span>
        <div className="contact-form-wrapper">
          <form className="contact-form" id="form">
            <label className="contact-label" for="username">
              NAME
            </label>
            <input
              type="name"
              className="contact-input"
              name="name"
              value={name}
              id="username"
              placeholder="Enter Your Name"
              autocomplete="off"
              onChange={(e) => setName(e.target.value)}
            />

            <label className="contact-label" for="username">
              EMAIL
            </label>
            <input
              type="email"
              className="contact-input"
              name="email"
              id="email"
              value={email}
              placeholder="Enter Your Email"
              autocomplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="contact-label" for="username">
              PHONE NUMBER
            </label>
            <input
              type="phone"
              className="contact-input"
              name="phone"
              id="phoneEntry"
              value={phoneNumber}
              placeholder="Enter Your Phone Number"
              autocomplete="off"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <label className="contact-label" for="username">
              CONTENT
            </label>
            <input
              type="textarea"
              className="contact-input"
              name="text"
              id="message"
              value={content}
              placeholder="Enter Your MESSAGE"
              autocomplete="off"
              onChange={(e) => setContent(e.target.value)}
            />

            <button
              onClick={formSubmit}
              type="button"
              value="SUBMIT"
              className="contact-submit-btn"
              id="submit"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
