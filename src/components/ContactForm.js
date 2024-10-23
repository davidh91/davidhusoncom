import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [success, setSucces] = useState(true);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="p-4 mt-16 w-full">
      {success ? (
        <div className="text-center">Email has been sent</div>
      ) : (
        <form
          className="flex gap-y-0.5 flex-col text-start"
          ref={form}
          onSubmit={sendEmail}
        >
          <label>Name</label>
          <input className="rounded-md p-1 px-2" type="text" name="user_name" />
          <label className="mt-2">Email</label>
          <input
            className="rounded-md p-1 px-2"
            type="email"
            name="user_email"
          />
          <label className="mt-4">Message</label>
          <textarea className="rounded-md p-1 px-2 h-36" name="message" />
          <button
            className="p-2 mt-4 text-white bg-slate-600 rounded-md hover:bg-slate-400 "
            type="submit"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
