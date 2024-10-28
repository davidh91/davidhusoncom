import React from "react";
import AnimatedLayout from "../layouts/AnimatedLayout";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <AnimatedLayout>
      <div className="lg:w-full px-8 o mb-32">
        <ContactForm />
      </div>
    </AnimatedLayout>
  );
};

export default Contact;
