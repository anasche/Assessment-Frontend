import React, { useState } from "react";
import { X, Mail, Phone, MapPin } from "lucide-react";
import { IoArrowForwardOutline } from "react-icons/io5";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate API call
    console.log("Form Data Submitted:", formData);

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => {
        setStatus("idle");
        onClose();
      }, 2000);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <X size={20} className="text-gray-600" />
          </button>

          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h2>
              <p className="text-gray-600">Have a question or ready to start? We'd love to hear from you.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#161687]/10 p-3 rounded-lg text-[#161687]">
                      <Mail size={20} />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Email Us</h4>
                      <p className="text-gray-600 text-sm">info@uaepresidentcup.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#161687]/10 p-3 rounded-lg text-[#161687]">
                      <Phone size={20} />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Call Us</h4>
                      <p className="text-gray-600 text-sm">+971 2 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#161687]/10 p-3 rounded-lg text-[#161687]">
                      <MapPin size={20} />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Visit Us</h4>
                      <p className="text-gray-600 text-sm">UAE President Cup Office<br />Abu Dhabi, UAE</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#161687] focus:border-transparent outline-none transition-all text-sm"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#161687] focus:border-transparent outline-none transition-all text-sm"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#161687] focus:border-transparent outline-none transition-all text-sm"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#161687] focus:border-transparent outline-none transition-all resize-none text-sm"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="group relative inline-flex items-center justify-start bg-gradient-to-r from-[#3c3cb6] to-[#141473] rounded-[100px] py-[10px] pr-[10px] pl-5 transition-all duration-300 ease-in-out active:rounded-[12px] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {/* Label */}
                      <span className="text-white block text-xs md:text-sm font-medium transform transition-all duration-300 ease-in-out group-active:scale-110 group-hover:translate-x-[20%]">
                        {status === "submitting" ? "Sending..." : "Send Message"}
                      </span>

                      {/* Arrow */}
                      <span className="ms-3 size-7 md:size-10 rounded-full bg-white text-black text-xl flex items-center justify-center transition-all duration-300 ease-in-out group-hover:scale-0 group-hover:opacity-0">
                        <IoArrowForwardOutline />
                      </span>
                    </button>
                  </div>

                  {status === "success" && (
                    <div className="bg-green-50 text-green-700 p-3 rounded-lg text-center text-sm">
                      Message sent successfully! We'll get back to you soon.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;