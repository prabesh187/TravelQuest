import React from 'react';
import { Users, Clock, MapPin, Star, Calendar } from 'lucide-react';

const CulturalTours = () => {
  const tours = [
    {
      id: 1,
      title: 'Dreamtime Journey: Aboriginal Cultural Experience',
      location: 'Uluru-Kata Tjuta National Park',
      duration: '3 hours',
      participants: 'Max 12',
      rating: 4.9,
      price: 'Free Virtual Tour',
      image: 'https://tse1.mm.bing.net/th/id/OIP.cQQxd_9S7V6nPaerQzoAagHaEL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3https://images.pexels.com/photos/71116/pexels-photo-71116.jpeg',
      description: 'Immerse yourself in 40,000+ years of Aboriginal culture through traditional stories, art, and connection to Country.',
      highlights: ['Traditional storytelling', 'Aboriginal art workshop', 'Bush tucker experience', 'Sacred site visits'],
      difficulty: 'Easy',
      languages: ['English', 'Aboriginal languages with translation']
    },
    {
      id: 2,
      title: 'Melbourne Multicultural Discovery',
      location: 'Melbourne CBD & Suburbs',
      duration: '4 hours',
      participants: 'Max 15',
      rating: 4.8,
      price: 'Free Virtual Tour',
      image: 'https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg',
      description: 'Explore Melbourne\'s diverse cultural communities through food, art, and traditions from around the world.',
      highlights: ['Little Italy exploration', 'Chinatown cultural walk', 'Greek precinct visit', 'Street art tour'],
      difficulty: 'Easy',
      languages: ['English', 'Mandarin', 'Italian', 'Greek']
    },
    {
      id: 3,
      title: 'Sydney Harbour Maritime Heritage',
      location: 'Sydney Harbour',
      duration: '2.5 hours',
      participants: 'Max 20',
      rating: 4.7,
      price: 'Free Virtual Tour',
      image: 'https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg',
      description: 'Discover Sydney\'s maritime history from First Fleet arrival to modern day through historic sites and stories.',
      highlights: ['The Rocks historical walk', 'Harbour Bridge stories', 'Maritime museum virtual tour', 'Colonial architecture'],
      difficulty: 'Easy',
      languages: ['English']
    },
    {
      id: 4,
      title: 'Outback Station Life Experience',
      location: 'Virtual Cattle Station',
      duration: '2 hours',
      participants: 'Max 25',
      rating: 4.6,
      price: 'Free Virtual Tour',
      image: 'https://images.pexels.com/photos/552793/pexels-photo-552793.jpeg',
      description: 'Experience authentic Australian bush life through virtual visits to working cattle stations and rural communities.',
      highlights: ['Cattle mustering demonstration', 'Bush cooking techniques', 'Stockman stories', 'Outback survival skills'],
      difficulty: 'Easy',
      languages: ['English']
    },
    {
      id: 5,
      title: 'Torres Strait Islander Culture',
      location: 'Torres Strait Islands (Virtual)',
      duration: '2.5 hours',
      participants: 'Max 10',
      rating: 4.9,
      price: 'Free Virtual Tour',
      image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
      description: 'Learn about the unique culture of Torres Strait Islander people through traditional dance, music, and crafts.',
      highlights: ['Traditional dance performance', 'Island music session', 'Cultural craft making', 'Storytelling tradition'],
      difficulty: 'Easy',
      languages: ['English', 'Torres Strait Creole']
    },
    {
      id: 6,
      title: 'Modern Australian Food Culture',
      location: 'Major Australian Cities (Virtual)',
      duration: '3 hours',
      participants: 'Max 18',
      rating: 4.5,
      price: 'Free Virtual Tour',
      image: 'https://images.pexels.com/photos/847402/pexels-photo-847402.jpeg',
      description: 'Explore Australia\'s evolving food scene, from traditional bush tucker to modern fusion cuisine.',
      highlights: ['Celebrity chef demonstrations', 'Wine region virtual visits', 'Food market tours', 'Cooking workshops'],
      difficulty: 'Easy',
      languages: ['English']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cultural Tours & Experiences
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Immerse yourself in Australia's rich cultural tapestry through authentic experiences 
            and meaningful connections with local communities.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-green-800 mb-2">Virtual Cultural Experiences</h3>
            <p className="text-green-700">
              All our cultural tours are currently available as immersive virtual experiences, 
              allowing you to connect with Australian culture from anywhere in the world. 
              Each tour includes live interaction with cultural guides and community members.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Guides</h3>
              <p className="text-gray-600">Local cultural ambassadors and community elders share authentic stories</p>
            </div>
            <div>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Authentic Locations</h3>
              <p className="text-gray-600">Virtual visits to sacred sites, communities, and cultural centers</p>
            </div>
            <div>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Sessions</h3>
              <p className="text-gray-600">Live Q&A, workshops, and cultural exchange opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map(tour => (
              <div
                key={tour.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-full flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{tour.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {tour.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {tour.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{tour.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{tour.participants}</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4 mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Tour Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tour.highlights.slice(0, 2).map((highlight, index) => (
                        <span
                          key={index}
                          className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                      {tour.highlights.length > 2 && (
                        <span className="text-green-600 text-xs font-medium">
                          +{tour.highlights.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200">
                    Join Virtual Tour
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Explore Australian Culture?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our community of cultural explorers and discover the authentic spirit of Australia
          </p>
          <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Browse All Tours
          </button>
        </div>
      </section>
    </div>
  );
};

export default CulturalTours;