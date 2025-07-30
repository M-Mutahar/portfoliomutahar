'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Logo Design',
      description: 'Professional logo design that captures your brand essence and makes a lasting impression.',
      features: [
        '3 initial concepts',
        '2 rounds of revisions',
        'Vector files (AI, EPS)',
        'High-resolution PNG/JPG',
        'Brand guidelines document'
      ],
      price: '$199',
      popular: false,
      icon: 'ri-contrast-2-line'
    },
    {
      id: 2,
      title: 'Brand Identity Package',
      description: 'Complete brand identity solution including logo, color palette, typography, and brand guidelines.',
      features: [
        'Logo design + variations',
        'Color palette & typography',
        'Business card design',
        'Letterhead design',
        'Brand style guide',
        'Social media templates'
      ],
      price: '$499',
      popular: true,
      icon: 'ri-palette-line'
    },
    {
      id: 3,
      title: 'YouTube Thumbnails',
      description: 'Eye-catching thumbnails that boost click-through rates and grow your channel.',
      features: [
        '5 thumbnail designs',
        'High-resolution files',
        'Multiple variations',
        'Fast 24-48h delivery',
        '1 revision round'
      ],
      price: '$79',
      popular: false,
      icon: 'ri-youtube-line'
    },
    {
      id: 4,
      title: 'Social Media Graphics',
      description: 'Engaging graphics for all your social media platforms to boost engagement.',
      features: [
        '10 post designs',
        'Multiple platform sizes',
        'Consistent brand styling',
        'Editable templates',
        'Story graphics included'
      ],
      price: '$149',
      popular: false,
      icon: 'ri-share-line'
    },
    {
      id: 5,
      title: 'Web Graphics & Banners',
      description: 'Professional web graphics and banners for websites, ads, and digital marketing.',
      features: [
        '5 banner designs',
        'Multiple sizes included',
        'Web-optimized files',
        'Source files included',
        '2 revision rounds'
      ],
      price: '$129',
      popular: false,
      icon: 'ri-image-2-line'
    },
    {
      id: 6,
      title: 'Print Design',
      description: 'High-quality print designs including brochures, flyers, posters, and business cards.',
      features: [
        'Print-ready files',
        'Multiple format options',
        'Color and B&W versions',
        'Bleed and crop marks',
        'Print specifications guide'
      ],
      price: '$179',
      popular: false,
      icon: 'ri-printer-line'
    }
  ];

  const addOns = [
    { name: 'Rush Delivery (24-48 hours)', price: '$50' },
    { name: 'Additional Revisions (per round)', price: '$25' },
    { name: 'Extra Concept Variations', price: '$40' },
    { name: 'Source File Access', price: '$30' },
    { name: 'Print-Ready Setup', price: '$35' }
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Services & <span className="text-blue-600">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transparent pricing for professional design services. Choose the package that best fits your needs, or let's create a custom solution together.
            </p>
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full inline-block font-semibold">
              ✓ All prices include commercial usage rights
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className={`relative rounded-2xl p-8 ${
                  service.popular 
                    ? 'bg-blue-600 text-white ring-4 ring-blue-200' 
                    : 'bg-white border-2 border-gray-200'
                } hover:shadow-xl transition-all`}>
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-6 ${
                    service.popular ? 'bg-white/20' : 'bg-blue-100'
                  }`}>
                    <i className={`${service.icon} text-2xl ${
                      service.popular ? 'text-white' : 'text-blue-600'
                    }`}></i>
                  </div>

                  <h3 className={`text-2xl font-bold mb-4 ${
                    service.popular ? 'text-white' : 'text-gray-900'
                  }`}>
                    {service.title}
                  </h3>

                  <p className={`mb-6 ${
                    service.popular ? 'text-blue-100' : 'text-gray-600'
                  }`}>
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <div className={`text-4xl font-bold ${
                      service.popular ? 'text-white' : 'text-blue-600'
                    }`}>
                      {service.price}
                    </div>
                    <div className={`text-sm ${
                      service.popular ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      One-time payment
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className={`flex items-start ${
                        service.popular ? 'text-blue-100' : 'text-gray-600'
                      }`}>
                        <i className={`ri-check-line text-lg mr-3 ${
                          service.popular ? 'text-white' : 'text-green-500'
                        }`}></i>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href="/hire-me"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      service.popular
                        ? 'bg-white text-blue-600 hover:bg-gray-100'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Add-On Services</h2>
              <p className="text-xl text-gray-600">Enhance your project with these optional services</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900">{addon.name}</h3>
                    <span className="text-blue-600 font-bold">{addon.price}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-blue-50 rounded-xl p-8 inline-block max-w-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
                <p className="text-gray-600 mb-6">
                  Looking for something not listed here? I offer custom packages tailored to your specific needs and budget.
                </p>
                <Link href="/hire-me" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                  Request Custom Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600">Simple process, professional results</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Service</h3>
                <p className="text-gray-600">
                  Select the service package that best fits your project needs and budget.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Share Details</h3>
                <p className="text-gray-600">
                  Fill out the project brief with your requirements, preferences, and timeline.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Design Process</h3>
                <p className="text-gray-600">
                  I'll create your design according to specifications with regular updates.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Final Delivery</h3>
                <p className="text-gray-600">
                  Receive your completed design files in all required formats.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Why Choose My Services?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full mr-4 mt-1">
                      <i className="ri-time-line text-white"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Fast Turnaround</h3>
                      <p className="text-gray-300">Most projects completed within 3-5 business days with rush options available.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 flex items-center justify-center bg-green-600 rounded-full mr-4 mt-1">
                      <i className="ri-refresh-line text-white"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Unlimited Revisions</h3>
                      <p className="text-gray-300">I work with you until you're 100% satisfied with the final result.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 flex items-center justify-center bg-purple-600 rounded-full mr-4 mt-1">
                      <i className="ri-award-line text-white"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Professional Quality</h3>
                      <p className="text-gray-300">5+ years of experience with 150+ successful projects delivered.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Let's discuss your project and find the perfect solution for your design needs.
                </p>
                <Link href="/hire-me" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer w-full block text-center font-semibold">
                  Start Your Project Now
                </Link>
                <div className="mt-4 text-center text-sm text-gray-500">
                  Free consultation • No obligation • Quick response
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}