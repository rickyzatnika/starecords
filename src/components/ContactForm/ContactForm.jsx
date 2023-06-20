"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const contactForm = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const phone = e.target[2].value;

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
        }),
      });

      if (res.status === 201) {
        setSuccess(true);
        const timeoutId = setTimeout(() => {
          setLoading(false);
          setSuccess(false);
        }, 3000);
        e.target.reset();
        return () => clearTimeout(timeoutId);
      } else {
        setLoading(false);
        setError("Server Error");
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
      const timeoutId = setTimeout(() => {
        setError(false);
      }, 4000);

      return () => clearTimeout(timeoutId);
    }
  };

  return (
    <div className="w-full h-full px-6 py-4">
      <form
        onSubmit={contactForm}
        className="flex flex-col gap-6 bg-none px-0 md:px-10"
      >
        <input
          type="text"
          placeholder="name"
          required
          className="border border-t-0 border-r-0 border-l-0 focus:border-b-slate-600 px-2 py-3 border-b border-inherit bg-transparent outline-none "
        />
        <input
          type="text"
          placeholder="email"
          required
          className="border border-t-0 border-r-0 border-l-0 focus:border-b-slate-600 px-2 py-3 border-b border-inherit bg-transparent outline-none "
        />
        <input
          type="number"
          placeholder="phone"
          required
          className="border border-t-0 border-r-0 border-l-0 focus:border-b-slate-600 px-2 py-3 border-b border-inherit bg-transparent outline-none "
        />
        {err && <span className="text-sm text-red-500 py-4">{`*${err}`}</span>}
        {success && (
          <span className="text-sm text-green-600 py-4 capitalize">
            thank you, we will contact you soon
          </span>
        )}
        <button
          type="submit"
          className="btn btn-md w-full md:w-max mx-auto px-8"
        >
          {loading ? "sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
