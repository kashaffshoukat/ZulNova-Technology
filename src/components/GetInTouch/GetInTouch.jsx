import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { useSnackbar } from 'notistack';
import { SnackbarProvider } from "notistack";

const GetInTouch = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://test.saeedantechpvt.com/api/UserContactUs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      await response.json();
      enqueueSnackbar("Your message has been sent successfully!", { variant: "success" });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      enqueueSnackbar("There was an error sending your message. Please try again.", { variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SnackbarProvider>
       <div id="get-in-touch" className="get-in-touch-section">
     
   
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-black">Get in </span>
            <span className="text-[#2e5090]">Touch</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Ready to begin your web development journey? Share your contact
            details and a quick message to start the conversation with us!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 p-3 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 p-3 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 p-3 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 p-3 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className={`px-6 py-3 bg-primary text-white font-medium rounded-md shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                disabled={loading}
              >
                {loading ? "Sending..." : "Book My Consultation"}
              </button>
            </div>
            <div className="flex items-center justify-center text-[#9b9b9b] text-xs">
              <FaLock className="mr-1 " />
              <p>We will not share your data with anyone.</p>
            </div>
          </form>
        </div>
      </div>
      </div>
    </SnackbarProvider>
  );
};

export default GetInTouch;
