import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
            <p className="text-xl text-gray-600">
              I'd love to hear from you. Send me a message and I'll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600">📧</span>
                  </div>
                  <span className="text-gray-600">your.email@example.com</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600">📱</span>
                  </div>
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600">📍</span>
                  </div>
                  <span className="text-gray-600">Your City, Country</span>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your message here..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
