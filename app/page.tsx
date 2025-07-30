
'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section 
          className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(15, 15, 15, 0.85)), url('https://readdy.ai/api/search-image?query=Professional%20photography%20studio%20with%20modern%20lighting%20equipment%2C%20dark%20moody%20atmosphere%2C%20creative%20workspace%20with%20studio%20lights%2C%20camera%20equipment%2C%20black%20backdrop%20setup%2C%20dramatic%20lighting%20for%20professional%20photo%20shoot%2C%20dark%20theme%20studio%20environment&width=1920&height=1080&seq=studio-bg-001&orientation=landscape')`
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center text-white">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 sm:mb-8 leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent drop-shadow-2xl">Muhammad Mutahar</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-3xl mb-8 sm:mb-12 text-gray-200 max-w-4xl mx-auto font-medium leading-relaxed px-4">
                A <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">passionate graphic designer</span> creating stunning visual experiences that captivate audiences and elevate brands to new heights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
                <Link href="/projects" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:from-yellow-300 hover:to-orange-400 transition-all transform hover:scale-110 hover:shadow-2xl whitespace-nowrap cursor-pointer shadow-xl border-2 border-yellow-300">
                  View My Work
                </Link>
                <Link href="/hire-me" className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-110 whitespace-nowrap cursor-pointer shadow-2xl border-2 border-purple-400 animate-pulse">
                  <span className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200"></span>
                  <span className="relative"> Hire Me Now</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl font-black text-white mb-8 leading-tight">
                  Bringing Ideas to Life Through <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Design</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed font-medium">
                  With over 5 years of experience in graphic design, I specialize in creating compelling visual solutions that tell your brand's story. From logo design to complete brand identities, I help businesses stand out in today's competitive market.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div className="text-center bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-xl p-6 border border-yellow-400/30">
                    <div className="text-4xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-3">150+</div>
                    <div className="text-gray-300 font-semibold">Projects Completed</div>
                  </div>
                  <div className="text-center bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-xl p-6 border border-blue-400/30">
                    <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-3">120+</div>
                    <div className="text-gray-300 font-semibold">Happy Clients</div>
                  </div>
                </div>
                <Link href="/about" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-xl hover:from-blue-400 hover:to-purple-500 transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer font-bold text-lg shadow-xl">
                  Learn More About Me
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-xl opacity-30"></div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20graphic%20designer%20workspace%20with%20modern%20computer%20setup%2C%20multiple%20monitors%20displaying%20creative%20work%2C%20design%20sketches%20on%20desk%2C%20colorful%20design%20elements%2C%20creative%20studio%20environment%20with%20natural%20lighting%2C%20inspiring%20artistic%20atmosphere&width=600&height=600&seq=about-img-001&orientation=squarish"
                  alt="Design workspace"
                  className="relative rounded-3xl shadow-2xl object-cover w-full h-96 border-2 border-gray-700"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-white mb-6 leading-tight">What I Do <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Best</span></h2>
              <p className="text-2xl text-gray-400 max-w-4xl mx-auto font-medium">
                I offer a comprehensive range of design services to help your business make a lasting impression
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-10 shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 border border-gray-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-2xl"></div>
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-8 relative">
                  <i className="ri-palette-line text-3xl text-black"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Brand Identity</h3>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                  Complete brand identity packages including logos, color schemes, typography, and brand guidelines.
                </p>
                <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Starting at $299</div>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-10 shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 border border-gray-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-2xl"></div>
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mb-8 relative">
                  <i className="ri-image-line text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Digital Graphics</h3>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                  Eye-catching thumbnails, banners, social media graphics, and web graphics that convert.
                </p>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Starting at $49</div>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-10 shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 border border-gray-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-teal-500/20 rounded-full blur-2xl"></div>
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-green-400 to-teal-500 rounded-full mb-8 relative">
                  <i className="ri-printer-line text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Print Design</h3>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                  Professional print materials including brochures, flyers, business cards, and packaging design.
                </p>
                <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">Starting at $99</div>
              </div>
            </div>

            <div className="text-center mt-16">
              <Link href="/services" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-5 rounded-2xl hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-110 whitespace-nowrap cursor-pointer font-bold text-xl shadow-2xl">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-white mb-6 leading-tight">Recent <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">Work</span></h2>
              <p className="text-2xl text-gray-400 font-medium">
                Here are some of my latest design projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 border-2 border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Modern%20logo%20design%20showcase%20for%20tech%20startup%2C%20clean%20minimalist%20branding%20with%20geometric%20elements%2C%20professional%20color%20scheme%20blue%20and%20white%2C%20contemporary%20typography%2C%20sleek%20design%20presentation%20on%20white%20background&width=400&height=300&seq=project-001&orientation=landscape"
                  alt="Brand Identity Project"
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="font-bold text-xl mb-2">Tech Startup Branding</h3>
                    <p className="text-sm text-gray-200">Complete brand identity package</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 border-2 border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src="https://readdy.ai/api/search-image?query=YouTube%20thumbnail%20design%20collection%20showing%20vibrant%20colorful%20designs%2C%20eye-catching%20graphics%20for%20gaming%20content%2C%20bold%20typography%20and%20exciting%20visual%20elements%2C%20professional%20thumbnail%20layout%20examples&width=400&height=300&seq=project-002&orientation=landscape"
                  alt="YouTube Thumbnails"
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="font-bold text-xl mb-2">YouTube Thumbnails</h3>
                    <p className="text-sm text-gray-200">High-converting thumbnail designs</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 border-2 border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Social%20media%20banner%20design%20collection%20featuring%20modern%20graphics%2C%20promotional%20content%20for%20business%2C%20vibrant%20colors%20and%20professional%20layout%2C%20marketing%20materials%20showcase%20with%20clean%20design&width=400&height=300&seq=project-003&orientation=landscape"
                  alt="Social Media Graphics"
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="font-bold text-xl mb-2">Social Media Campaign</h3>
                    <p className="text-sm text-gray-200">Complete social media graphics suite</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <Link href="/projects" className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-12 py-5 rounded-2xl hover:from-blue-500 hover:to-teal-500 transition-all transform hover:scale-110 whitespace-nowrap cursor-pointer font-bold text-xl shadow-2xl">
                View All Projects
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl font-black text-white mb-8 drop-shadow-2xl">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-2xl text-white/90 mb-12 max-w-4xl mx-auto font-medium drop-shadow-lg">
              Let's work together to create stunning visuals that will make your brand stand out from the competition.
            </p>
            <Link href="/hire-me" className="relative inline-block bg-black text-white px-12 py-6 rounded-full font-black text-xl hover:bg-gray-900 transition-all transform hover:scale-110 whitespace-nowrap cursor-pointer shadow-2xl border-4 border-white">
              <span className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur opacity-75 animate-pulse"></span>
              <span className="relative"> Start Your Project Today</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
