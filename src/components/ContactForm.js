import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import loader from "../assets/icons/loader.svg";

// Keep these in step with the limits configured on the EmailJS template.
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 2000;

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSucces] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);
  const [sendError, setSendError] = useState(false);

  const form = useRef();
  const recaptcha = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSendError(false);

    // The token proves a human filled in the form. EmailJS verifies it server
    // side, so enable reCAPTCHA on the EmailJS template as well. This check
    // alone only improves the message shown to the visitor.
    const captchaValue = recaptcha.current.getValue();
    if (!captchaValue) {
      setCaptchaError(true);
      return;
    }

    setCaptchaError(false);
    setLoading(true);

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
          setLoading(false);
          setSucces(true);
        },
        () => {
          setSucces(false);
          setLoading(false);
          setSendError(true);
          // A token is valid for one verification only. Clear it so the
          // visitor solves a fresh challenge before the next attempt.
          recaptcha.current.reset();
        }
      );
  };

  return (
    <div className="p-4 mt-6 w-full">
      {success ? (
        <div className="text-center">Email has been sent</div>
      ) : (
        <form
          className="flex gap-y-0.5 flex-col text-start"
          ref={form}
          onSubmit={sendEmail}
        >
          <label htmlFor="user_name">Name</label>
          <input
            className="rounded-md p-1 px-2"
            type="text"
            id="user_name"
            name="user_name"
            autoComplete="name"
            maxLength={MAX_NAME_LENGTH}
            required
          />
          <label className="mt-2" htmlFor="user_email">
            Email
          </label>
          <input
            className="rounded-md p-1 px-2"
            type="email"
            id="user_email"
            name="user_email"
            autoComplete="email"
            maxLength={MAX_EMAIL_LENGTH}
            required
          />
          <label className="mt-4" htmlFor="message">
            Message
          </label>
          <textarea
            className="rounded-md p-1 px-2 h-36"
            id="message"
            name="message"
            maxLength={MAX_MESSAGE_LENGTH}
            required
          />
          <button
            className="p-2 mt-4 text-white bg-slate-600 rounded-md hover:bg-slate-400 disabled:bg-slate-400"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <img className="h-6 w-full" src={loader} alt="loader" />
            ) : (
              "Send"
            )}
          </button>
          {captchaError && (
            <p className="text-red-500">
              Please verify that you are not a robot
            </p>
          )}
          {sendError && (
            <p className="text-red-500">
              The email could not be sent. Please try again.
            </p>
          )}
          <ReCAPTCHA
            style={{ transform: "scale(0.70)", transformOrigin: "0 0" }}
            ref={recaptcha}
            className="my-2 border-2 max-w-3"
            sitekey={process.env.REACT_APP_SITE_KEY}
          />
        </form>
      )}
    </div>
  );
};

export default ContactForm;
