import React, { useState, useMemo } from 'react';
import { Search, Filter, Calendar, Tag, X, ChevronLeft, ChevronRight, ArrowLeft, Album } from 'lucide-react';
import { photos, photoCategories, Photo } from '../data/photos';
import ImageWithFallback from '../components/ImageWithFallback';

const PhotosPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'albums'>('albums');

  const filteredPhotos = useMemo(() => {
    let filtered = photos.filter((photo) => {
      const matchesSearch = photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           photo.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || photo.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    if (selectedEvent) {
      filtered = filtered.filter(photo => 
        photo.title.toLowerCase().includes(selectedEvent.toLowerCase()) ||
        photo.tags.some(tag => tag.toLowerCase().includes(selectedEvent.toLowerCase()))
      );
    }

    return filtered;
  }, [searchTerm, selectedCategory, selectedEvent]);

  // Group photos by event/title similarity for event view
  const eventGroups = useMemo(() => {
    const groups: Record<string, Photo[]> = {};
    
    photos.forEach(photo => {
      const eventName = photo.title;
      if (!groups[eventName]) {
        groups[eventName] = [];
      }
      groups[eventName].push(photo);
    });

    return groups;
  }, []);

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo);
    setCurrentPhotoIndex(filteredPhotos.findIndex(p => p.id === photo.id));
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (currentPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length
      : (currentPhotoIndex + 1) % filteredPhotos.length;
    
    setCurrentPhotoIndex(newIndex);
    setSelectedPhoto(filteredPhotos[newIndex]);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'events':
        return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white';
      case 'workshops':
        return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white';
      case 'competitions':
        return 'bg-gradient-to-r from-red-500 to-rose-500 text-white';
      case 'team':
        return 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white';
      default:
        return 'bg-gradient-to-r from-gray-500 to-slate-500 text-white';
    }
  };

  const selectEvent = (eventName: string) => {
    setSelectedEvent(eventName);
    setSearchTerm('');
    setSelectedCategory('all');
    setViewMode('grid');
  };

  const clearEventFilter = () => {
    setSelectedEvent(null);
    setViewMode('albums');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900">
      {/* Professional Header */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Album className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  Photo Gallery
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {photos.length} photos • {Object.keys(eventGroups).length} albums
                </p>
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
              <button
                onClick={() => setViewMode('albums')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  viewMode === 'albums'
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Albums
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Grid
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Event Filter Banner */}
        {selectedEvent && (
          <div className="mb-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10"></div>
            <div className="relative flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3">
                  <Album className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-1">{selectedEvent}</h2>
                  <p className="text-indigo-100">
                    {filteredPhotos.length} photo{filteredPhotos.length !== 1 ? 's' : ''} in this album
                  </p>
                </div>
              </div>
              <button
                onClick={clearEventFilter}
                className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl px-6 py-3 transition-all duration-300 transform hover:scale-105"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="font-medium">Back to Albums</span>
              </button>
            </div>
          </div>
        )}

        {/* Search and Filters */}
        {(viewMode === 'grid' || selectedEvent) && (
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-8 mb-8">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative">
                  <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search photos by title or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-14 pr-6 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/90 dark:bg-gray-700/90 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 text-lg"
                  />
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="appearance-none bg-white/90 dark:bg-gray-700/90 border-2 border-gray-200 dark:border-gray-600 rounded-2xl px-6 py-4 pr-12 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-300 text-lg min-w-[200px]"
                  >
                    <option value="all">All Categories</option>
                    {Object.entries(photoCategories).map(([key, label]) => (
                      <option key={key} value={key}>{label}</option>
                    ))}
                  </select>
                  <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium text-gray-900 dark:text-white">
                  {filteredPhotos.length}
                </span> photo{filteredPhotos.length !== 1 ? 's' : ''} found
                {searchTerm && (
                  <span className="ml-1">
                    for "<span className="font-medium text-indigo-600 dark:text-indigo-400">{searchTerm}</span>"
                  </span>
                )}
              </div>
              
              {(searchTerm || selectedCategory !== 'all') && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium transition-colors duration-200"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>
        )}

        {/* Albums View */}
        {viewMode === 'albums' && !selectedEvent && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
                Photo Albums
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Explore our collection organized by events and occasions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(eventGroups).map(([eventName, eventPhotos], index) => (
                <div
                  key={eventName}
                  className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 cursor-pointer"
                  onClick={() => selectEvent(eventName)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.8s ease-out forwards'
                  }}
                >
                  {/* Album Cover */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                    <ImageWithFallback
                      src={eventPhotos[0].imageUrl}
                      alt={eventName}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Photo Count Badge */}
                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium z-20">
                      {eventPhotos.length} photos
                    </div>

                    {/* Preview Grid */}
                    {eventPhotos.length > 1 && (
                      <div className="absolute bottom-4 left-4 flex space-x-2 z-20">
                        {eventPhotos.slice(1, 4).map((photo, i) => (
                          <div
                            key={photo.id}
                            className="w-12 h-12 rounded-lg overflow-hidden border-2 border-white/50 opacity-80 hover:opacity-100 transition-opacity duration-300"
                          >
                            <ImageWithFallback
                              src={photo.imageUrl}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                        {eventPhotos.length > 4 && (
                          <div className="w-12 h-12 rounded-lg bg-black/50 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center text-white text-xs font-medium">
                            +{eventPhotos.length - 4}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Album Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      {eventName}
                    </h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(eventPhotos[0].date).toLocaleDateString()}</span>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        {eventPhotos.slice(0, 3).map((photo) => {
                          const categoryColor = getCategoryColor(photo.category);
                          return (
                            <div
                              key={photo.id}
                              className={`w-3 h-3 rounded-full ${categoryColor} opacity-60`}
                            ></div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Category Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {[...new Set(eventPhotos.map(p => p.category))]
                        .slice(0, 2)
                        .map((category) => (
                          <span
                            key={category}
                            className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(category)}`}
                          >
                            {photoCategories[category as keyof typeof photoCategories]}
                          </span>
                        ))}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Album className="h-8 w-8 mx-auto mb-2" />
                      <p className="font-medium">View Album</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Photos Grid */}
        {(viewMode === 'grid' || selectedEvent) && (
          <>
            {filteredPhotos.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-gray-400 dark:text-gray-500 mb-6">
                  <Album className="h-20 w-20 mx-auto opacity-50" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  No photos found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Try adjusting your search terms or filters
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredPhotos.map((photo, index) => (
                  <div
                    key={photo.id}
                    className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
                    onClick={() => openLightbox(photo)}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: 'fadeInUp 0.6s ease-out forwards'
                    }}
                  >
                    <div className="aspect-square overflow-hidden relative">
                      <ImageWithFallback
                        src={photo.imageUrl}
                        alt={photo.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-white text-center p-4">
                          <h3 className="font-bold text-lg mb-2">{photo.title}</h3>
                          <p className="text-sm opacity-90 line-clamp-2">{photo.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(photo.category)}`}>
                          {photoCategories[photo.category as keyof typeof photoCategories]}
                        </span>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(photo.date).toLocaleDateString()}
                        </div>
                      </div>

                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3 line-clamp-1">
                        {photo.title}
                      </h3>

                      <div className="flex flex-wrap gap-1">
                        {photo.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg"
                          >
                            <Tag className="h-2 w-2 mr-1" />
                            {tag}
                          </span>
                        ))}
                        {photo.tags.length > 2 && (
                          <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg">
                            +{photo.tags.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
            <div className="relative max-w-6xl max-h-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Buttons */}
              {filteredPhotos.length > 1 && (
                <>
                  <button
                    onClick={() => navigatePhoto('prev')}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={() => navigatePhoto('next')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}

              {/* Image */}
              <ImageWithFallback
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl animate-slideUp"
              />

              {/* Photo Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 text-white rounded-b-2xl">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-4 py-2 text-sm font-medium rounded-full ${getCategoryColor(selectedPhoto.category)}`}>
                    {photoCategories[selectedPhoto.category as keyof typeof photoCategories]}
                  </span>
                  <div className="flex items-center text-sm bg-black/30 rounded-full px-3 py-1 backdrop-blur-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(selectedPhoto.date).toLocaleDateString()}
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-3">{selectedPhoto.title}</h2>
                <p className="text-gray-200 mb-4 text-lg">{selectedPhoto.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedPhoto.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 text-sm bg-white/20 text-white rounded-full backdrop-blur-sm"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotosPage;