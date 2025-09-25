import React, { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";
import type { SectionProps } from "../types";

const ContactSection: React.FC<SectionProps> = ({ isVisible }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const subject = `Portfolio Contact from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:zayminkhant.dev@email.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;


      // Try to open default email client
      const link = document.createElement("a");
      link.href = mailtoLink;
      link.click();

      // Reset form after a short delay
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      }, 500);
    } catch (error) {
      console.error("Error opening email client:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 bg-background-page transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-text-default">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-text-default">
                Let's Work Together
              </h3>
              <p className="text-lg mb-8 text-text-secondary">
                I'm always interested in new opportunities and exciting
                projects. Whether you need a full-stack solution or want to
                discuss your next big idea, I'd love to hear from you.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <div className="p-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-default">Email</p>
                    <p className="text-sm text-text-secondary">
                      zayminkhant.dev@email.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <div className="p-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-default">Location</p>
                    <p className="text-sm text-text-secondary">
                      Bangkok, Thailand
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button className="p-3 rounded-full transition-all duration-200 bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 shadow-xl hover:scale-110 hover:bg-white/60 dark:hover:bg-gray-900/60 text-text-secondary hover:text-text-default">
                  <Github className="w-5 h-5" />
                </button>
                <a
                  href="https://www.linkedin.com/in/zay-min-khant/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full transition-all duration-200 bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 shadow-xl hover:scale-110 hover:bg-white/60 dark:hover:bg-gray-900/60 text-text-secondary hover:text-text-default"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-text-secondary">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-white/30 dark:border-gray-600/30 text-text-default focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-text-secondary">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-white/30 dark:border-gray-600/30 text-text-default focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-text-secondary">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-white/30 dark:border-gray-600/30 text-text-default focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={(e) => {
                    // Backup click handler in case form submission doesn't work
                    if (
                      !formData.name ||
                      !formData.email ||
                      !formData.message
                    ) {
                      e.preventDefault();
                      return;
                    }
                  }}
                  className="w-full px-6 py-3 bg-white/80 dark:bg-gray-700/80 backdrop-blur-lg border-2 border-white/50 dark:border-gray-500/50 text-text-default font-semibold transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl hover:bg-white/90 dark:hover:bg-gray-700/90 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? "Opening Email..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
