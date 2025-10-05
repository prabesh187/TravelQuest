import React, { useState } from 'react';
import { Play, Clock, Calendar, Star } from 'lucide-react';

const Documentaries = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Documentaries' },
    { id: 'wildlife', name: 'Wildlife' },
    { id: 'culture', name: 'Culture' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'nature', name: 'Nature' }
  ];

  const documentaries = [
    {
      id: 1,
      title: 'The Great Barrier Reef: A Living Wonder',
      category: 'nature',
      thumbnail: 'https://images.pexels.com/photos/847402/pexels-photo-847402.jpeg',
      duration: '45 min',
      releaseDate: '2024',
      rating: 4.9,
      description: 'Dive into the world\'s largest coral reef system and discover its incredible biodiversity and conservation efforts.',
      highlights: ['4K underwater footage', 'Marine biology insights', 'Conservation stories']
    },
    {
      id: 2,
      title: 'Dreamtime Stories: Aboriginal Heritage',
      category: 'culture',
      thumbnail: 'https://tse1.mm.bing.net/th/id/OIP.cQQxd_9S7V6nPaerQzoAagHaEL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3://stock.adobe.com/search?k=aboriginal',
      duration: '60 min',
      releaseDate: '2024',
      rating: 4.8,
      description: 'Explore the rich cultural heritage of Australia\'s Aboriginal peoples through ancient stories and modern perspectives.',
      highlights: ['Traditional storytelling', 'Sacred sites', 'Cultural preservation']
    },
    {
      id: 3,
      title: 'Tasmania\'s Wild Heart',
      category: 'wildlife',
      thumbnail: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
      duration: '52 min',
      releaseDate: '2024',
      rating: 4.7,
      description: 'Journey through Tasmania\'s pristine wilderness and meet its unique wildlife, including the famous Tasmanian Devil.',
      highlights: ['Tasmanian Devils', 'Ancient forests', 'Rare species']
    },
    {
      id: 4,
      title: 'Outback Adventures: Beyond the Horizon',
      category: 'adventure',
      thumbnail: 'https://images.pexels.com/photos/552793/pexels-photo-552793.jpeg',
      duration: '90 min',
      releaseDate: '2023',
      rating: 4.6,
      description: 'Follow adventurers as they traverse Australia\'s vast outback, facing challenges and discovering hidden gems.',
      highlights: ['Extreme conditions', 'Survival stories', 'Remote landscapes']
    },
    {
      id: 5,
      title: 'Sydney: Harbor City Evolution',
      category: 'culture',
      thumbnail: 'https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg',
      duration: '75 min',
      releaseDate: '2023',
      rating: 4.5,
      description: 'Trace Sydney\'s transformation from colonial settlement to modern metropolis through architecture, culture, and people.',
      highlights: ['Historical footage', 'Urban development', 'Cultural diversity']
    },
    {
      id: 6,
      title: 'Kangaroo Island: Wildlife Sanctuary',
      category: 'wildlife',
      thumbnail: 'https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg',
      duration: '40 min',
      releaseDate: '2023',
      rating: 4.8,
      description: 'Discover Kangaroo Island\'s unique ecosystem and the conservation efforts protecting its native species.',
      highlights: ['Endemic species', 'Conservation efforts', 'Natural habitats']
    }
  ];

  const filteredDocumentaries = selectedCategory === 'all' 
    ? documentaries 
    : documentaries.filter(doc => doc.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Adventure Documentaries
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Immerse yourself in Australia's natural beauty, wildlife, and culture 
            through our collection of stunning documentaries.
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
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Documentary */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Featured Documentary
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {documentaries[0].title}
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                {documentaries[0].description}
              </p>
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-purple-400" />
                  <span>{documentaries[0].duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-purple-400" />
                  <span>{documentaries[0].releaseDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span>{documentaries[0].rating}</span>
                </div>
              </div>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center">
                <Play className="h-5 w-5 mr-2" />
                Watch Now
              </button>
            </div>
            <div className="relative">
              <img
                src={documentaries[0].thumbnail}
                alt={documentaries[0].title}
                className="w-full h-64 lg:h-80 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-xl">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-full">
                  <Play className="h-12 w-12 text-white fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentaries Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDocumentaries.map(doc => (
              <div
                key={doc.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={doc.thumbnail}
                    alt={doc.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm p-3 rounded-full">
                      <Play className="h-8 w-8 text-white fill-current" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-2 py-1 rounded text-sm font-medium">
                    {doc.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    {doc.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{doc.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{doc.rating}</span>
                    </div>
                    <span>{doc.releaseDate}</span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex flex-wrap gap-2">
                      {doc.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentaries;