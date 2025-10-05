import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Clock, Users } from 'lucide-react';

const TravelGuides = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Destinations' },
    { id: 'cities', name: 'Major Cities' },
    { id: 'nature', name: 'Natural Wonders' },
    { id: 'outback', name: 'Outback Adventures' },
    { id: 'coastal', name: 'Coastal Regions' }
  ];

  const guides = [
    {
      id: 1,
      title: 'Sydney: The Harbour City Experience',
      category: 'cities',
      image: 'https://www.tripsavvy.com/thmb/JvUwSGA00TT-U7kf4j-4lfe4H28=/5472x3648/filters:fill(auto,1)/sydney-opera-house-scenery-940915740-5b19b54d43a103003688a9e2.jpg',
      rating: 4.9,
      duration: '5-7 days',
      difficulty: 'Easy',
      highlights: ['Sydney Opera House', 'Harbour Bridge', 'Bondi Beach', 'The Rocks']
    },
    {
      id: 2,
      title: 'Great Barrier Reef: Underwater Paradise',
      category: 'nature',
      image: 'https://images.pexels.com/photos/847402/pexels-photo-847402.jpeg',
      description: 'Comprehensive diving and snorkeling guide to the world\'s largest coral reef system.',
      rating: 4.8,
      duration: '3-5 days',
      difficulty: 'Moderate',
      highlights: ['Coral Gardens', 'Marine Life', 'Diving Spots', 'Conservation Areas']
    },
    {
      id: 3,
      title: 'Uluru & Kata Tjuta: Sacred Outback',
      category: 'outback',
      image: 'https://uluru.gov.au/static/6945aa85059e3c572c992210146b3110/eb642/kata-tjuta-dune-meegan-ebert-hero.webp',
      description: 'Spiritual journey through Australia\'s red heart with cultural insights and hiking trails.',
      rating: 4.9,
      duration: '2-3 days',
      difficulty: 'Moderate',
      highlights: ['Uluru Sunrise', 'Kata Tjuta Walks', 'Aboriginal Culture', 'Desert Landscapes']
    },
    {
      id: 4,
      title: 'Melbourne: Cultural Capital',
      category: 'cities',
      image: 'https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg',
      description: 'Explore Melbourne\'s famous laneways, coffee culture, and vibrant arts scene.',
      rating: 4.7,
      duration: '4-6 days',
      difficulty: 'Easy',
      highlights: ['Street Art', 'Coffee Culture', 'Queen Victoria Market', 'Royal Botanic Gardens']
    },
    {
      id: 5,
      title: 'Great Ocean Road: Coastal Drive',
      category: 'coastal',
      image: 'https://images.pexels.com/photos/552793/pexels-photo-552793.jpeg',
      description: 'Epic coastal road trip featuring the Twelve Apostles and stunning ocean views.',
      rating: 4.8,
      duration: '3-4 days',
      difficulty: 'Easy',
      highlights: ['Twelve Apostles', 'Port Campbell', 'Loch Ard Gorge', 'Coastal Towns']
    },
    {
      id: 6,
      title: 'Blue Mountains: Wilderness Escape',
      category: 'nature',
      image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
      description: 'Adventure guide to the Blue Mountains with bushwalking, canyoning, and scenic railways.',
      rating: 4.6,
      duration: '2-3 days',
      difficulty: 'Moderate',
      highlights: ['Three Sisters', 'Scenic Railway', 'Echo Point', 'Bushwalking Trails']
    }
  ];

  const filteredGuides = selectedCategory === 'all' 
    ? guides 
    : guides.filter(guide => guide.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Australia Travel Guides
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Comprehensive guides to Australia's most incredible destinations, 
            crafted by local experts and experienced travelers.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGuides.map(guide => (
              <Link
                key={guide.id}
                to={`/destination/${guide.id}`}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-full flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{guide.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{guide.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{guide.difficulty}</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex flex-wrap gap-2">
                      {guide.highlights.slice(0, 3).map((highlight, index) => (
                        <span
                          key={index}
                          className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                      {guide.highlights.length > 3 && (
                        <span className="text-blue-600 text-xs font-medium">
                          +{guide.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelGuides;