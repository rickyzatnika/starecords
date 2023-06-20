"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const contactForm = async ({ name, email, phone }) => {
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
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

      if (response.ok) {
        const timeoutId = setTimeout(() => {
          setSuccess(true);
          setLoading(false);
        }, 3000);
        reset();
        return () => clearTimeout(timeoutId);
      } else {
        // handle error response
        setError(response.message);
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
        onSubmit={handleSubmit(contactForm)}
        className="flex flex-col gap-6 bg-none px-0 md:px-10"
      >
        <input
          type="text"
          placeholder="name"
          {...register("name", { required: true })}
          className="border border-t-0 border-r-0 border-l-0 focus:border-b-slate-600 px-2 py-3 border-b border-inherit bg-transparent outline-none "
        />
        <input
          type="text"
          placeholder="email"
          {...register("email", { required: true })}
          className="border border-t-0 border-r-0 border-l-0 focus:border-b-slate-600 px-2 py-3 border-b border-inherit bg-transparent outline-none "
        />
        <input
          type="number"
          placeholder="phone"
          {...register("phone", { required: true })}
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
