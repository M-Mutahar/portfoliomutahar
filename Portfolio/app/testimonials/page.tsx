'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Marketing Director',
      company: 'TechFlow Solutions',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20businesswoman%20Sarah%20Johnson%2C%20marketing%20director%2C%20modern%20office%20background%2C%20friendly%20smile%2C%20business%20attire%2C%20contemporary%20corporate%20portrait&width=150&height=150&seq=avatar-sarah&orientation=squarish',
      rating: 5,
      text: 'Muhammad delivered an outstanding brand identity that perfectly captured our tech startup\'s vision. The logo design process was collaborative and the final result exceeded our expectations. Highly recommended!',
      project: 'Brand Identity Package'
    },
    {
      id: 2,
      name: 'Alex Rodriguez',
      position: 'Content Creator',
      company: 'Gaming Channel Pro',
      avatar: 'https://readdy.ai/api/search-image?query=Young%20male%20content%20creator%20Alex%20Rodriguez%20portrait%2C%20casual%20gaming%20setup%20background%2C%20friendly%20confident%20expression%2C%20modern%20headshot%20for%20YouTube%20creator&width=150&height=150&seq=avatar-alex&orientation=squarish',
      rating: 5,
      text: 'The YouTube thumbnails Muhammad created for my gaming channel are absolutely incredible! My click-through rates increased by 40% after using his designs. Professional, fast, and creative work.',
      project: 'YouTube Thumbnails'
    },
    {
      id: 3,
      name: 'Emily Chen',
      position: 'Restaurant Owner',
      company: 'Bella Vista Restaurant',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20Asian%20businesswoman%20Emily%20Chen%2C%20restaurant%20owner%2C%20warm%20smile%2C%20elegant%20business%20attire%2C%20modern%20restaurant%20background&width=150&height=150&seq=avatar-emily&orientation=squarish',
      rating: 5,
      text: 'Our new menu design is absolutely beautiful! Muhammad understood our fine dining aesthetic perfectly and created something that truly reflects our brand. Our customers love it.',
      project: 'Menu Design'
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'Startup Founder',
      company: 'InnovateTech',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20entrepreneur%20David%20Thompson%2C%20startup%20founder%2C%20confident%20expression%2C%20modern%20office%20setting%2C%20business%20casual%20attire&width=150&height=150&seq=avatar-david&orientation=squarish',
      rating: 5,
      text: 'Working with Muhammad was a fantastic experience. He created a complete social media graphics package that helped us establish a strong online presence. Great communication and attention to detail.',
      project: 'Social Media Graphics'
    },
    {
      id: 5,
      name: 'Lisa Martinez',
      position: 'E-commerce Manager',
      company: 'StyleHub Fashion',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20businesswoman%20Lisa%20Martinez%20portrait%2C%20e-commerce%20manager%2C%20confident%20smile%2C%20modern%20office%20background%2C%20professional%20attire&width=150&height=150&seq=avatar-lisa&orientation=squarish',
      rating: 5,
      text: 'The web banners and graphics Muhammad designed for our fashion e-commerce site are stunning! They perfectly match our brand aesthetic and have significantly improved our conversion rates.',
      project: 'Web Graphics'
    },
    {
      id: 6,
      name: 'Michael Brown',
      position: 'Event Organizer',
      company: 'City Music Festival',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20male%20event%20organizer%20Michael%20Brown%20portrait%2C%20music%20industry%20professional%2C%20casual%20confident%20style%2C%20event%20venue%20background&width=150&height=150&seq=avatar-michael&orientation=squarish',
      rating: 5,
      text: 'Muhammad created amazing posters for our music festival series. The designs are vibrant, eye-catching, and perfectly capture the energy of our events. Exceptional creative work!',
      project: 'Event Posters'
    },
    {
      id: 7,
      name: 'Rachel Green',
      position: 'Fitness Coach',
      company: 'FitLife Studio',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20fitness%20coach%20Rachel%20Green%20portrait%2C%20athletic%20woman%2C%20confident%20smile%2C%20gym%20background%2C%20fitness%20attire%2C%20healthy%20lifestyle%20professional&width=150&height=150&seq=avatar-rachel&orientation=squarish',
      rating: 5,
      text: 'The mobile app graphics Muhammad designed for our fitness tracking app are clean, modern, and user-friendly. His understanding of UI design principles really shows in the final product.',
      project: 'Mobile App Graphics'
    },
    {
      id: 8,
      name: 'James Wilson',
      position: 'Author',
      company: 'Independent Publisher',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20author%20James%20Wilson%20portrait%2C%20writer%20headshot%2C%20intellectual%20appearance%2C%20book-filled%20background%2C%20thoughtful%20expression%2C%20literary%20professional&width=150&height=150&seq=avatar-james&orientation=squarish',
      rating: 5,
      text: 'My book cover design is absolutely perfect! Muhammad captured the essence of my mystery novel beautifully. The atmospheric design has definitely helped with book sales.',
      project: 'Book Cover Design'
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '120+', label: 'Happy Clients' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Years Experience' }
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Client <span className="text-blue-600">Testimonials</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Don't just take my word for it. Here's what my clients have to say about working with me and the results they've achieved.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.position}</p>
                      <p className="text-blue-600 text-sm font-medium">{testimonial.company}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-yellow-400"></i>
                    ))}
                  </div>

                  <blockquote className="text-gray-700 mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>

                  <div className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    {testimonial.project}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Clients Choose Me</h2>
              <p className="text-xl text-gray-600">The key factors that make clients happy to work with me</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                  <i className="ri-time-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Delivery</h3>
                <p className="text-gray-600">
                  Most projects completed within 3-5 business days with clear communication throughout.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                  <i className="ri-refresh-line text-2xl text-green-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Unlimited Revisions</h3>
                <p className="text-gray-600">
                  I work with you until you're 100% satisfied with the final result.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-4">
                  <i className="ri-award-line text-2xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Quality</h3>
                <p className="text-gray-600">
                  5+ years of experience delivering high-quality designs that drive results.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mx-auto mb-4">
                  <i className="ri-customer-service-2-line text-2xl text-orange-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Great Communication</h3>
                <p className="text-gray-600">
                  Clear updates, prompt responses, and collaborative approach to every project.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
              <h2 className="text-4xl font-bold mb-6">Ready to Join My Happy Clients?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Let's create something amazing together. I'm here to help bring your creative vision to life with the same dedication and quality that my clients rave about.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/hire-me" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
                  Start Your Project
                </Link>
                <Link href="/projects" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
                  View My Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Common questions from potential clients</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">How long does a typical project take?</h3>
                <p className="text-gray-600">
                  Most projects are completed within 3-5 business days. Complex brand identity packages may take 1-2 weeks. Rush delivery is available for urgent projects.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Do you offer unlimited revisions?</h3>
                <p className="text-gray-600">
                  Yes! I include unlimited revisions with all packages to ensure you're completely satisfied with the final result. Your happiness is my priority.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What file formats do you provide?</h3>
                <p className="text-gray-600">
                  I provide all source files plus high-resolution formats suitable for both print and web use (PNG, JPG, PDF, AI, EPS) depending on your project needs.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Can I request a custom package?</h3>
                <p className="text-gray-600">
                  Absolutely! I create custom packages tailored to your specific needs and budget. Contact me to discuss your requirements and get a personalized quote.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}