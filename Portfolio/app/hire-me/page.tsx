'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HireMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (formData.message.length > 500) {
      setSubmitStatus('Message must be 500 characters or less.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString()
      });

      if (response.ok) {
        setSubmitStatus('Thank you! Your message has been sent successfully. I\'ll get back to you within 24 hours.');
        setFormData({
          name: '',
          email: '',
          company: '',
          serviceType: '',
          budget: '',
          timeline: '',
          message: ''
        });
      } else {
        setSubmitStatus('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('There was an error sending your message. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Let's Work <span className="text-blue-600">Together</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to bring your creative vision to life? Fill out the form below and I'll get back to you within 24 hours with a detailed proposal tailored to your needs.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Your Free Quote</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Tell me about your project and I'll provide you with a detailed quote and timeline. No obligation, completely free consultation.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-full mr-4 mt-1">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Free Consultation</h3>
                      <p className="text-gray-600">No cost for initial project discussion and quote</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full mr-4 mt-1">
                      <i className="ri-time-line text-blue-600"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Quick Response</h3>
                      <p className="text-gray-600">I'll respond within 24 hours with next steps</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-full mr-4 mt-1">
                      <i className="ri-shield-check-line text-purple-600"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Professional Service</h3>
                      <p className="text-gray-600">5+ years experience, 150+ successful projects</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <i className="ri-mail-line text-blue-600 mr-3"></i>
                      <span className="text-gray-700">mutaharzaf11@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-phone-line text-blue-600 mr-3"></i>
                      <span className="text-gray-700">03488951100</span>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-time-line text-blue-600 mr-3"></i>
                      <span className="text-gray-700">Mon - Fri: 9AM - 6PM EST</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Your company name (optional)"
                    />
                  </div>

                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type *
                    </label>
                    <div className="relative">
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8 appearance-none bg-white"
                      >
                        <option value="">Select a service</option>
                        <option value="logo-design">Logo Design</option>
                        <option value="brand-identity">Brand Identity Package</option>
                        <option value="youtube-thumbnails">YouTube Thumbnails</option>
                        <option value="social-media">Social Media Graphics</option>
                        <option value="web-graphics">Web Graphics & Banners</option>
                        <option value="print-design">Print Design</option>
                        <option value="custom">Custom Project</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <i className="ri-arrow-down-s-line text-gray-400"></i>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <div className="relative">
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8 appearance-none bg-white"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-100">Under $100</option>
                          <option value="100-300">$100 - $300</option>
                          <option value="300-500">$300 - $500</option>
                          <option value="500-1000">$500 - $1,000</option>
                          <option value="1000-plus">$1,000+</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <i className="ri-arrow-down-s-line text-gray-400"></i>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                        Timeline
                      </label>
                      <div className="relative">
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8 appearance-none bg-white"
                        >
                          <option value="">Select timeline</option>
                          <option value="asap">ASAP (Rush fee applies)</option>
                          <option value="1-week">Within 1 week</option>
                          <option value="2-weeks">Within 2 weeks</option>
                          <option value="1-month">Within 1 month</option>
                          <option value="flexible">I'm flexible</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <i className="ri-arrow-down-s-line text-gray-400"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      maxLength={500}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                      placeholder="Tell me about your project, goals, style preferences, and any specific requirements..."
                    />
                    <div className="text-right text-sm text-gray-500 mt-1">
                      {formData.message.length}/500 characters
                    </div>
                  </div>

                  {submitStatus && (
                    <div className={`p-4 rounded-lg ${submitStatus.includes('error') || submitStatus.includes('must be')
                      ? 'bg-red-50 text-red-700'
                      : 'bg-green-50 text-green-700'
                    }`}>
                      {submitStatus}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Project Details'}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to receive project-related communications from Muhammad Mutahar.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Happens Next?</h2>
              <p className="text-xl text-gray-600">Here's what you can expect after submitting your project</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                  <i className="ri-message-2-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Initial Response</h3>
                <p className="text-gray-600">
                  Within 24 hours, I'll review your project details and send an initial response with questions if needed.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-4">
                  <i className="ri-file-text-line text-2xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Detailed Proposal</h3>
                <p className="text-gray-600">
                  I'll send a comprehensive proposal with timeline, pricing, deliverables, and next steps.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                  <i className="ri-rocket-line text-2xl text-green-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Project Kickoff</h3>
                <p className="text-gray-600">
                  Once approved, we'll schedule a kickoff call and I'll begin working on your project immediately.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Feel free to reach out directly if you have any questions about the process, pricing, or want to discuss your project in more detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:mutaharzaf11@gmail.com" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
                Send Email
              </a>
              <a href="tel:03488951100" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
