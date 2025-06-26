import React from 'react';
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';
import type { SectionProps } from '../types';

const ContactSection: React.FC<SectionProps> = ({ darkMode, isVisible }) => {
  return (
    <section id="contact" className={`w-full py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className={`text-4xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Let's Work Together
              </h3>
              <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
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
                    <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Email</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>zayminkhant@email.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Location</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Chiang Mai, Thailand</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <button className={`p-3 rounded-full transition-all duration-200 ${
                  darkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-900'
                } hover:scale-110 shadow-sm hover:shadow-md`}>
                  <Github className="w-5 h-5" />
                </button>
                <button className={`p-3 rounded-full transition-all duration-200 ${
                  darkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-900'
                } hover:scale-110 shadow-sm hover:shadow-md`}>
                  <Linkedin className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <div className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none`}
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