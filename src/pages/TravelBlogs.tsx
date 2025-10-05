import React, { useState } from 'react';
import { Calendar, User, Heart, MessageCircle, BookOpen, Clock } from 'lucide-react';

const TravelBlogs = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'adventures', name: 'Adventures' },
    { id: 'culture', name: 'Culture' },
    { id: 'food', name: 'Food & Drink' },
    { id: 'photography', name: 'Photography' },
    { id: 'tips', name: 'Travel Tips' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'My Epic Road Trip Along the Great Ocean Road',
      author: 'Emma Thompson',
      authorLocation: 'Manchester, UK',
      category: 'adventures',
      publishDate: '2024-12-20',
      readTime: '8 min read',
      likes: 234,
      comments: 45,
      excerpt: 'Three weeks exploring Victoria\'s stunning coastline, from the Twelve Apostles to hidden beaches that took my breath away.',
      image: 'https://images.pexels.com/photos/552793/pexels-photo-552793.jpeg',
      tags: ['Road Trip', 'Victoria', 'Coastal Drive', 'Photography']
    },
    {
      id: 2,
      title: 'Learning Aboriginal Culture in the Heart of Australia',
      author: 'James Wilson',
      authorLocation: 'Edinburgh, UK',
      category: 'culture',
      publishDate: '2024-12-18',
      readTime: '12 min read',
      likes: 189,
      comments: 32,
      excerpt: 'A transformative journey into Aboriginal culture at Uluru, where ancient wisdom meets modern conservation efforts.',
      image: 'https://images.pexels.com/photos/71116/pexels-photo-71116.jpeg',
      tags: ['Aboriginal Culture', 'Uluru', 'Sacred Sites', 'Cultural Exchange']
    },
    {
      id: 3,
      title: 'Melbourne\'s Coffee Culture: A Londoner\'s Perspective',
      author: 'Sarah Mitchell',
      authorLocation: 'London, UK',
      category: 'food',
      publishDate: '2024-12-15',
      readTime: '6 min read',
      likes: 156,
      comments: 28,
      excerpt: 'Comparing Melbourne\'s legendary coffee scene with London\'s, and why Australian café culture won my heart.',
      image: 'https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg',
      tags: ['Coffee', 'Melbourne', 'Food Culture', 'Café Life']
    },
    {
      id: 4,
      title: 'Underwater Paradise: Diving the Great Barrier Reef',
      author: 'Michael Brown',
      authorLocation: 'Bristol, UK',
      category: 'adventures',
      publishDate: '2024-12-12',
      readTime: '10 min read',
      likes: 298,
      comments: 67,
      excerpt: 'My first diving experience in the world\'s largest coral reef system was nothing short of magical.',
      image: 'https://images.pexels.com/photos/847402/pexels-photo-847402.jpeg',
      tags: ['Diving', 'Great Barrier Reef', 'Marine Life', 'Queensland']
    },
    {
      id: 5,
      title: 'Capturing Sydney: A Photographer\'s Dream',
      author: 'Lucy Davis',
      authorLocation: 'Birmingham, UK',
      category: 'photography',
      publishDate: '2024-12-10',
      readTime: '9 min read',
      likes: 203,
      comments: 41,
      excerpt: 'The best spots and golden hours for photographing Sydney\'s iconic landmarks and hidden gems.',
      image: 'https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg',
      tags: ['Photography', 'Sydney', 'Landmarks', 'Travel Tips']
    },
    {
      id: 6,
      title: 'Budget Backpacking Through the Outback',
      author: 'Tom Harris',
      authorLocation: 'Liverpool, UK',
      category: 'tips',
      publishDate: '2024-12-08',
      readTime: '7 min read',
      likes: 167,
      comments: 53,
      excerpt: 'How I explored Australia\'s red center on a shoestring budget, including transport, accommodation, and food tips.',
      image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
      tags: ['Budget Travel', 'Backpacking', 'Outback', 'Money Saving Tips']
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts[0];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Travel Blogs & Stories
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Real experiences from UK travelers exploring Australia. Share your journey, 
            connect with fellow adventurers, and inspire others.
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
                    ? 'bg-pink-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured Story
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(featuredPost.publishDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-xl text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-5 w-5" />
                      <span>{featuredPost.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="h-5 w-5" />
                      <span>{featuredPost.comments}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Read Full Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map(post => (
              <article
                key={post.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-pink-600 text-white px-2 py-1 rounded text-sm font-medium">
                    {categories.find(c => c.id === post.category)?.name}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-pink-50 text-pink-700 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="text-pink-600 text-xs font-medium">
                          +{post.tags.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Share Your Australian Adventure
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Have you traveled to Australia? Share your story with our community 
            and inspire fellow UK travelers with your experiences.
          </p>
          <button className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Write Your Story
          </button>
        </div>
      </section>
    </div>
  );
};

export default TravelBlogs;