import React from 'react';
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';
import type { SectionProps } from '../types';

const ContactSection: React.FC<SectionProps> = ({ isVisible }) => {
  return (
    <section id="contact" className="w-full py-20 bg-background-page transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-center mb-16 text-text-default">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-text-default">
                Let's Work Together
              </h3>
              <p className="text-lg mb-8 text-text-secondary">
                I'm always interested in new opportunities and exciting projects. 
                Whether you need a full-stack solution or want to discuss your next big idea, 
                I'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-default">Email</p>
                    <p className="text-sm text-text-secondary">zayminkhant@email.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-default">Location</p>
                    <p className="text-sm text-text-secondary">Chiang Mai, Thailand</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <button className="p-3 rounded-full transition-all duration-200 bg-background-card hover:bg-border text-text-secondary hover:text-text-default hover:scale-110 shadow-sm hover:shadow-md">
                  <Github className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-full transition-all duration-200 bg-background-card hover:bg-border text-text-secondary hover:text-text-default hover:scale-110 shadow-sm hover:shadow-md">
                  <Linkedin className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-8 rounded-2xl bg-background-card">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-text-secondary">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 bg-background-card border-border text-text-default focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-text-secondary">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 bg-background-card border-border text-text-default focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-text-secondary">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 bg-background-card border-border text-text-default focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  onClick={() => alert('Message sent! (Demo functionality)')}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;