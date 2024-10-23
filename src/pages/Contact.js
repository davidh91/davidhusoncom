import React from "react";
import AnimatedLayout from "../layouts/AnimatedLayout";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  console.log(process.env.REACT_APP_PUBLIC_KEY);
  return (
    <AnimatedLayout>
      <div className="w-96 mb-32">
        <ContactForm />
      </div>
    </AnimatedLayout>
  );
};

export default Contact;
