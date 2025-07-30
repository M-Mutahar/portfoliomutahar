'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'TechFlow Branding',
      category: 'branding',
      description: 'Complete brand identity for a tech startup including logo, business cards, and brand guidelines.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20tech%20startup%20logo%20design%20with%20sleek%20typography%2C%20blue%20and%20silver%20color%20scheme%2C%20geometric%20elements%2C%20professional%20business%20card%20design%2C%20complete%20brand%20identity%20package%20presentation%20on%20clean%20white%20background&width=500&height=400&seq=project-tech-001&orientation=landscape',
      tags: ['Logo Design', 'Brand Identity', 'Print Design']
    },
    {
      id: 2,
      title: 'Gaming Channel Thumbnails',
      category: 'digital',
      description: 'Eye-catching YouTube thumbnails for a gaming channel that increased click-through rates by 40%.',
      image: 'https://readdy.ai/api/search-image?query=Vibrant%20gaming%20YouTube%20thumbnails%20collection%2C%20action-packed%20designs%20with%20bold%20text%20overlays%2C%20exciting%20gaming%20graphics%2C%20colorful%20backgrounds%2C%20high-energy%20visual%20style%20for%20gaming%20content%2C%20professional%20thumbnail%20design%20showcase&width=500&height=400&seq=project-gaming-001&orientation=landscape',
      tags: ['Thumbnail Design', 'Digital Graphics', 'Gaming']
    },
    {
      id: 3,
      title: 'Restaurant Menu Design',
      category: 'print',
      description: 'Elegant menu design for a fine dining restaurant with sophisticated typography and layout.',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20restaurant%20menu%20design%20with%20sophisticated%20typography%2C%20luxury%20dining%20establishment%20branding%2C%20cream%20and%20gold%20color%20scheme%2C%20fine%20dining%20menu%20layout%20with%20beautiful%20food%20photography%2C%20premium%20print%20design&width=500&height=400&seq=project-restaurant-001&orientation=landscape',
      tags: ['Menu Design', 'Print Design', 'Typography']
    },
    {
      id: 4,
      title: 'Social Media Campaign',
      category: 'digital',
      description: 'Complete social media graphics package for a fashion brand\'s seasonal campaign.',
      image: 'https://readdy.ai/api/search-image?query=Fashion%20brand%20social%20media%20graphics%20collection%2C%20stylish%20Instagram%20post%20designs%2C%20modern%20fashion%20photography%20with%20elegant%20typography%2C%20trendy%20color%20palette%2C%20professional%20social%20media%20marketing%20materials&width=500&height=400&seq=project-fashion-001&orientation=landscape',
      tags: ['Social Media', 'Fashion', 'Digital Marketing']
    },
    {
      id: 5,
      title: 'E-commerce Website Graphics',
      category: 'web',
      description: 'Banner designs and product graphics for an online electronics store.',
      image: 'https://readdy.ai/api/search-image?query=E-commerce%20website%20banner%20designs%20for%20electronics%20store%2C%20modern%20product%20showcase%20graphics%2C%20clean%20layout%20with%20tech%20products%2C%20professional%20online%20store%20visual%20elements%2C%20blue%20and%20white%20color%20scheme&width=500&height=400&seq=project-ecommerce-001&orientation=landscape',
      tags: ['Web Design', 'E-commerce', 'Banners']
    },
    {
      id: 6,
      title: 'Coffee Shop Branding',
      category: 'branding',
      description: 'Warm and inviting brand identity for a local coffee shop including logo and packaging.',
      image: 'https://readdy.ai/api/search-image?query=Cozy%20coffee%20shop%20branding%20package%20with%20warm%20brown%20tones%2C%20rustic%20logo%20design%2C%20coffee%20cup%20packaging%2C%20friendly%20local%20business%20identity%2C%20artisanal%20coffee%20brand%20design%20with%20natural%20elements&width=500&height=400&seq=project-coffee-001&orientation=landscape',
      tags: ['Logo Design', 'Packaging', 'Local Business']
    },
    {
      id: 7,
      title: 'Event Poster Series',
      category: 'print',
      description: 'Creative poster designs for a music festival series with bold typography and vibrant colors.',
      image: 'https://readdy.ai/api/search-image?query=Music%20festival%20poster%20design%20with%20vibrant%20colors%2C%20bold%20typography%2C%20concert%20event%20graphics%2C%20dynamic%20composition%20with%20musical%20elements%2C%20energetic%20poster%20series%20for%20live%20music%20events&width=500&height=400&seq=project-event-001&orientation=landscape',
      tags: ['Poster Design', 'Event Graphics', 'Typography']
    },
    {
      id: 8,
      title: 'Mobile App UI Graphics',
      category: 'web',
      description: 'Custom icons and graphics for a fitness tracking mobile application.',
      image: 'https://readdy.ai/api/search-image?query=Mobile%20app%20UI%20graphics%20for%20fitness%20application%2C%20clean%20modern%20interface%20design%2C%20health%20and%20wellness%20icons%2C%20green%20and%20blue%20color%20scheme%2C%20professional%20app%20design%20elements%2C%20user%20interface%20graphics&width=500&height=400&seq=project-mobile-001&orientation=landscape',
      tags: ['Mobile Design', 'UI/UX', 'Icons']
    },
    {
      id: 9,
      title: 'Book Cover Design',
      category: 'print',
      description: 'Captivating book cover design for a mystery novel with atmospheric typography.',
      image: 'https://readdy.ai/api/search-image?query=Mystery%20novel%20book%20cover%20design%20with%20dark%20atmospheric%20elements%2C%20dramatic%20typography%2C%20suspenseful%20visual%20composition%2C%20professional%20book%20design%20with%20mysterious%20mood%20and%20elegant%20layout&width=500&height=400&seq=project-book-001&orientation=landscape',
      tags: ['Book Design', 'Typography', 'Illustration']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'branding', name: 'Branding' },
    { id: 'digital', name: 'Digital Graphics' },
    { id: 'print', name: 'Print Design' },
    { id: 'web', name: 'Web Design' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              My <span className="text-blue-600">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore a collection of my recent design work spanning brand identity, digital graphics, print design, and web graphics. Each project represents a unique story and creative solution.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    activeFilter === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, index) => (
                            <span key={index} className="bg-white/20 text-white px-2 py-1 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <div className="bg-gray-50 rounded-xl p-8 inline-block">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Looking for something specific?</h3>
                <p className="text-gray-600 mb-6 max-w-md">
                  These are just a few examples of my work. I have experience with many other types of design projects.
                </p>
                <Link href="/hire-me" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                  Discuss Your Project
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Process</h2>
              <p className="text-xl text-gray-600">How I bring your vision to life</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                  <i className="ri-discuss-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Discovery</h3>
                <p className="text-gray-600">
                  We discuss your goals, target audience, and design preferences to understand your vision.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-4">
                  <i className="ri-pencil-ruler-line text-2xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Concept</h3>
                <p className="text-gray-600">
                  I develop initial concepts and sketches based on our discussion and research.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                  <i className="ri-palette-line text-2xl text-green-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Design</h3>
                <p className="text-gray-600">
                  The chosen concept is refined and developed into a polished final design.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mx-auto mb-4">
                  <i className="ri-check-line text-2xl text-orange-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. Delivery</h3>
                <p className="text-gray-600">
                  Final files are delivered in all required formats with usage guidelines.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's work together to create stunning designs that will make your brand memorable and impactful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/hire-me" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
                Get Started Now
              </Link>
              <Link href="/services" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
                View Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}