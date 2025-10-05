import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Users, Star, MapPin } from 'lucide-react';

const Home = () => {
  const features = [
    {
      title: 'Comprehensive Travel Guides',
      description: 'Detailed guides covering every corner of Australia, from bustling cities to remote outback adventures.',
      icon: MapPin,
      link: '/travel-guides'
    },
    {
      title: 'Adventure Documentaries',
      description: 'Immersive documentaries showcasing Australia\'s unique wildlife, landscapes, and adventures.',
      icon: Play,
      link: '/documentaries'
    },
    {
      title: 'Cultural Tours',
      description: 'Experience authentic Aboriginal culture and modern Australian lifestyle through guided virtual tours.',
      icon: Users,
      link: '/cultural-tours'
    },
    {
      title: 'Travel Blogs',
      description: 'Real stories from travelers sharing their Australian adventures and insider tips.',
      icon: Star,
      link: '/travel-blogs'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'London, UK',
      text: 'The cultural tours gave me incredible insights before my trip to Australia. Absolutely brilliant content!',
      rating: 5
    },
    {
      name: 'James Thompson',
      location: 'Manchester, UK',
      text: 'The documentaries are stunning! Felt like I was right there in the Australian wilderness.',
      rating: 5
    },
    {
      name: 'Emma Wilson',
      location: 'Edinburgh, UK',
      text: 'Perfect planning resource. The travel guides helped me discover hidden gems I never would have found.',
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Australia Like Never Before
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Your gateway to Australia's most incredible destinations, cultural experiences, 
              and adventure stories. All free, all authentic, all Australian.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/travel-guides"
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center"
              >
                Start Exploring
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/register"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Your Australian Adventure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From comprehensive guides to immersive cultural experiences, 
              we provide all the resources you need to explore Australia.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Link
                  key={index}
                  to={feature.link}
                  className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                    <IconComponent className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="flex items-center text-orange-600 group-hover:text-orange-700">
                    <span className="text-sm font-medium">Explore</span>
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">500+</div>
              <div className="text-gray-300">Travel Guides</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">100+</div>
              <div className="text-gray-300">Documentaries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">50+</div>
              <div className="text-gray-300">Cultural Tours</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">10K+</div>
              <div className="text-gray-300">Community Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from UK travelers who explored Australia with our platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Australian Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of UK travelers who've discovered Australia through our platform
          </p>
          <Link
            to="/register"
            className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
          >
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;