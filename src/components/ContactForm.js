import React, { createRef, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import loader from "../assets/icons/loader.svg";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSucces] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);

  const form = useRef();
  const recaptcha = useRef();

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();

    const captchaValue = recaptcha.current.getValue();
    if (!captchaValue) {
      setCaptchaError(true);
      setLoading(false);
    } else {
      setCaptchaError(false);
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
          (error) => {
            setSucces(false);
            setLoading(false);
          }
        );
    }
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
            {loading ? (
              <img className="h-6 fit w-full" src={loader} alt="loader" />
            ) : (
              "Send"
            )}
          </button>
          {captchaError && (
            <p className="text-red-500">
              Please verify that you are not a robot
            </p>
          )}
          <ReCAPTCHA
            ref={recaptcha}
            className="my-2 border-2"
            sitekey={process.env.REACT_APP_SITE_KEY}
          />
        </form>
      )}
    </div>
  );
};

export default ContactForm;
