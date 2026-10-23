import React from "react";
import AnimatedLayout from "../layouts/AnimatedLayout";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <AnimatedLayout>
      <div className="lg:w-1/3 2xl:w-1/4 mx-auto px-8 o mb-32">
        <ContactForm />
      </div>
    </AnimatedLayout>
  );
};

export default Contact;
