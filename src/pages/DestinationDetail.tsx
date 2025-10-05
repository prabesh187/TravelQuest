import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Star, Clock, Users, Calendar, MessageCircle, User, Send } from 'lucide-react';

const DestinationDetail = () => {
  const { id } = useParams();
  const [newComment, setNewComment] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Mock destination data
  const destination = {
    id: 1,
    title: 'Sydney: The Harbour City Experience',
    location: 'Sydney, New South Wales',
    image: 'https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg',
    rating: 4.9,
    duration: '5-7 days',
    difficulty: 'Easy',
    lastUpdated: '2024-12-20',
    description: `Sydney, Australia's largest city, offers an incredible blend of iconic landmarks, beautiful beaches, and vibrant culture. From the world-famous Opera House to the stunning Harbour Bridge, Sydney provides endless opportunities for exploration and adventure.

This comprehensive guide covers everything you need to know about visiting Sydney, including the best times to visit, must-see attractions, hidden local gems, and practical travel tips to make your journey unforgettable.`,
    
    highlights: [
      'Sydney Opera House tours and performances',
      'Harbour Bridge climb and walks',
      'Bondi Beach and coastal walks',
      'The Rocks historic area exploration',
      'Royal Botanic Gardens',
      'Darling Harbour entertainment precinct',
      'Ferry rides across the harbour',
      'Local food scene and markets'
    ],
    
    itinerary: [
      {
        day: '1',
        title: 'Arrival and Harbour Exploration',
        activities: [
          'Check into accommodation',
          'Walk around Circular Quay',
          'Visit Sydney Opera House',
          'Explore The Rocks area',
          'Sunset at Mrs Macquarie\'s Chair'
        ]
      },
      {
        day: '2',
        title: 'Beach Day and Coastal Walk',
        activities: [
          'Travel to Bondi Beach',
          'Bondi to Coogee coastal walk',
          'Lunch at Coogee Beach',
          'Afternoon at Bronte Beach',
          'Return to city via bus'
        ]
      },
      {
        day: '3',
        title: 'City Culture and Gardens',
        activities: [
          'Royal Botanic Gardens',
          'Art Gallery of New South Wales',
          'Hyde Park and St Mary\'s Cathedral',
          'Queen Victoria Building shopping',
          'Chinatown dinner'
        ]
      }
    ],
    
    practicalInfo: {
      bestTimeToVisit: 'September to November and March to May',
      currency: 'Australian Dollar (AUD)',
      language: 'English',
      climate: 'Temperate oceanic climate',
      transport: 'Excellent public transport including buses, trains, ferries, and light rail'
    }
  };

  const comments = [
    {
      id: 1,
      author: 'Sarah Thompson',
      location: 'London, UK',
      date: '2024-12-18',
      rating: 5,
      comment: 'This guide was absolutely perfect for my first trip to Sydney! The itinerary suggestions were spot on, and I discovered so many hidden gems in The Rocks area that I would have missed otherwise.'
    },
    {
      id: 2,
      author: 'James Wilson',
      location: 'Manchester, UK',
      date: '2024-12-15',
      rating: 5,
      comment: 'The practical information section saved me so much planning time. The transport tips were especially helpful - the ferry system is brilliant!'
    },
    {
      id: 3,
      author: 'Emma Davis',
      location: 'Birmingham, UK',
      date: '2024-12-12',
      rating: 4,
      comment: 'Great comprehensive guide. Would love to see more budget-friendly restaurant recommendations for families traveling with children.'
    }
  ];

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() && isLoggedIn) {
      
      console.log('Submitting comment:', newComment);
      setNewComment('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <section className="relative h-96 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{destination.title}</h1>
            <div className="flex items-center space-x-6 text-lg">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>{destination.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span>{destination.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                {destination.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Highlights */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Highlights</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {destination.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Suggested Itinerary */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Suggested Itinerary</h2>
              <div className="space-y-6">
                {destination.itinerary.map((day, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        {day.day}
                      </span>
                      {day.title}
                    </h3>
                    <ul className="space-y-2">
                      {day.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="flex items-center text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Comments Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Community Feedback</h2>
              
              {/* Comment Form */}
              <div className="bg-white p-6 rounded-xl shadow-sm border mb-8">
                {isLoggedIn ? (
                  <form onSubmit={handleCommentSubmit}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Share Your Experience</h3>
                    <textarea
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Tell us about your experience with this destination..."
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      rows={4}
                    />
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-500">Rate your experience:</span>
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-5 w-5 text-gray-300 hover:text-yellow-400 cursor-pointer" />
                          ))}
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Post Comment
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-600 mb-4">Please log in to leave a comment and share your experience.</p>
                    <button 
                      onClick={() => setIsLoggedIn(true)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                    >
                      Login to Comment
                    </button>
                  </div>
                )}
              </div>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="bg-white p-6 rounded-xl shadow-sm border">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center">
                          <User className="h-6 w-6 text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{comment.author}</h4>
                          <p className="text-sm text-gray-500">{comment.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex">
                          {[...Array(comment.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">{comment.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-700">{comment.comment}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Quick Info */}
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{destination.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Difficulty:</span>
                    <span className="font-medium">{destination.difficulty}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Rating:</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{destination.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Last Updated:</span>
                    <span className="font-medium">{destination.lastUpdated}</span>
                  </div>
                </div>
              </div>

              {/* Practical Information */}
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Practical Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Best Time to Visit</h4>
                    <p className="text-sm text-gray-600">{destination.practicalInfo.bestTimeToVisit}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Currency</h4>
                    <p className="text-sm text-gray-600">{destination.practicalInfo.currency}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Language</h4>
                    <p className="text-sm text-gray-600">{destination.practicalInfo.language}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Climate</h4>
                    <p className="text-sm text-gray-600">{destination.practicalInfo.climate}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Transport</h4>
                    <p className="text-sm text-gray-600">{destination.practicalInfo.transport}</p>
                  </div>
                </div>
              </div>

              {/* Related Content */}
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Content</h3>
                <div className="space-y-3">
                  <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-medium text-gray-900 text-sm">Melbourne Cultural Guide</h4>
                    <p className="text-xs text-gray-500 mt-1">Explore Australia's cultural capital</p>
                  </a>
                  <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-medium text-gray-900 text-sm">Great Ocean Road Adventure</h4>
                    <p className="text-xs text-gray-500 mt-1">Epic coastal drive from Sydney</p>
                  </a>
                  <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-medium text-gray-900 text-sm">Blue Mountains Day Trip</h4>
                    <p className="text-xs text-gray-500 mt-1">Perfect escape from Sydney</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;