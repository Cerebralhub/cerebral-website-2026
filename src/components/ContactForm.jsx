// src/components/ContactForm.jsx
import React, {useState} from "react";
import {InputField} from "./InputField";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({type: null, message: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({type: null, message: ""});

    try {
      const response = await fetch(
        "https://cerebral-website-backend.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus({
        type: "success",
        message: "Message sent successfully!",
      });
      // Clear form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "An error occurred",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
      <InputField
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <InputField
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <InputField
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="bg-gray-100 rounded-xl h-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />

      {status.message && (
        <div
          className={`p-3 rounded-lg ${
            status.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className={`bg-cerebralOrange-600 text-white rounded-full py-2 px-5 cursor-pointer text-sm w-fit
          ${
            isLoading
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-cerebralOrange-700"
          }`}
      >
        {isLoading ? "Sending..." : "Submit"}
      </button>
    </form>
  );
};
