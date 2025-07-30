'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  About <span className="text-blue-600">Muhammad Mutahar</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  A passionate graphic designer with over 5 years of experience in creating compelling visual stories that resonate with audiences and drive business success.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">Graphic Design</span>
                  <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">Brand Identity</span>
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">Digital Marketing</span>
                  <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">Print Design</span>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://static.readdy.ai/image/01e5f42e66b51d30e5f042f8fa94cd69/66beb5a6bf671e75e84ba37bece9dfa4.jfif"
                  alt="Muhammad Mutahar"
                  className="rounded-2xl shadow-2xl object-cover w-full h-96 object-top"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">My Story</h2>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-6">
                    My journey into graphic design began during my university years when I discovered my passion for visual storytelling. What started as a hobby quickly evolved into a professional career that has allowed me to work with diverse clients across various industries.
                  </p>
                  <p className="mb-6">
                    Over the past five years, I've had the privilege of helping over 120 businesses establish their visual identity and communicate their message effectively. From small startups to established corporations, I've learned that great design is not just about making things look beautiful – it's about solving problems and creating meaningful connections between brands and their audiences.
                  </p>
                  <p className="mb-6">
                    My approach combines creative thinking with strategic insight, ensuring that every design decision serves a purpose and contributes to the overall business objectives. I believe in the power of collaboration and work closely with my clients to understand their vision and bring it to life through compelling visual solutions.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Design Philosophy</h3>
                <div className="bg-gray-50 rounded-xl p-8">
                  <blockquote className="text-lg italic text-gray-700 mb-4">
                    "Good design is not just about aesthetics – it's about creating meaningful connections and solving real problems through visual communication."
                  </blockquote>
                  <p className="text-gray-600">
                    I believe that every design should tell a story, evoke emotion, and inspire action. My work is guided by principles of simplicity, functionality, and authenticity. I strive to create designs that are not only visually appealing but also strategically sound and commercially viable.
                  </p>
                </div>
              </div>

              <div>
                <div className="bg-blue-50 rounded-xl p-8 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Skills & Expertise</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Adobe Photoshop</span>
                        <span className="text-sm text-gray-500">95%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Adobe Illustrator</span>
                        <span className="text-sm text-gray-500">90%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{width: '90%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Brand Identity</span>
                        <span className="text-sm text-gray-500">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Web Design</span>
                        <span className="text-sm text-gray-500">80%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-600 h-2 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 text-white rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-6">Let's Connect</h3>
                  <p className="text-gray-300 mb-6">
                    Ready to discuss your next project? I'd love to hear about your vision and explore how we can work together.
                  </p>
                  <Link href="/hire-me" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer inline-block">
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">My Journey</h2>
              <p className="text-xl text-gray-600">Key milestones in my design career</p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
              
              <div className="space-y-12">
                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-blue-600 font-semibold mb-2">2019</div>
                      <h3 className="font-bold text-gray-900 mb-2">Started Freelancing</h3>
                      <p className="text-gray-600">Began my journey as a freelance graphic designer, working with local businesses</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md z-10"></div>
                  <div className="flex-1 pl-8"></div>
                </div>

                <div className="flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md z-10"></div>
                  <div className="flex-1 text-left pl-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-blue-600 font-semibold mb-2">2020</div>
                      <h3 className="font-bold text-gray-900 mb-2">50+ Projects Milestone</h3>
                      <p className="text-gray-600">Reached my first major milestone of 50 completed projects</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-blue-600 font-semibold mb-2">2022</div>
                      <h3 className="font-bold text-gray-900 mb-2">International Clients</h3>
                      <p className="text-gray-600">Expanded to work with international clients across multiple continents</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md z-10"></div>
                  <div className="flex-1 pl-8"></div>
                </div>

                <div className="flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md z-10"></div>
                  <div className="flex-1 text-left pl-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-blue-600 font-semibold mb-2">2024</div>
                      <h3 className="font-bold text-gray-900 mb-2">150+ Projects & Growing</h3>
                      <p className="text-gray-600">Currently serving 120+ happy clients with over 150 successful projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              I'm always excited to take on new challenges and help businesses tell their story through compelling visual design.
            </p>
            <Link href="/hire-me" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
              Start Your Project
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
