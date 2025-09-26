import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ImageGalleryContext } from '../contexts/ImageGalleryContext';

interface ImageGalleryState {
  isOpen: boolean;
  images: string[];
  title: string;
  currentIndex: number;
}

export const ImageGalleryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [galleryState, setGalleryState] = useState<ImageGalleryState>({
    isOpen: false,
    images: [],
    title: '',
    currentIndex: 0,
  });

  const openGallery = (images: string[], title: string, startIndex: number = 0) => {
    setGalleryState({
      isOpen: true,
      images,
      title,
      currentIndex: startIndex,
    });
    
    images.forEach((imageSrc) => {
      const img = new Image();
      img.src = imageSrc;
    });
  };

  const closeGallery = () => {
    setGalleryState(prev => ({ ...prev, isOpen: false }));
  };

  const nextImage = () => {
    setGalleryState(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length,
    }));
  };

  const prevImage = () => {
    setGalleryState(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
    }));
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!galleryState.isOpen) return;

      switch (event.key) {
        case 'Escape':
          closeGallery();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [galleryState.isOpen]);

  // Prevent body scroll when modal is open
  React.useEffect(() => {
    if (galleryState.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [galleryState.isOpen]);

  return (
    <ImageGalleryContext.Provider value={{ openGallery, closeGallery }}>
      {children}
      
      {/* Global Image Gallery Modal */}
      {galleryState.isOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4">
          <div className="relative w-full h-full max-w-7xl max-h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-2 sm:p-4 mb-2">
              {/* Title */}
              <div className="px-3 py-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
                <h3 className="text-white text-xs sm:text-sm font-medium truncate max-w-[200px] sm:max-w-none">
                  {galleryState.title}
                </h3>
              </div>

              {/* Close button */}
              <button
                onClick={closeGallery}
                className="p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors backdrop-blur-sm border border-white/20 hover:border-white/30"
                aria-label="Close gallery"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
            </div>

            {/* Main Image Container */}
            <div className="flex-1 flex items-center justify-center relative min-h-0">
              <img
                src={galleryState.images[galleryState.currentIndex]}
                alt={`${galleryState.title} - Image ${galleryState.currentIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                loading="eager"
                decoding="async"
              />

              {/* Navigation Controls */}
              {galleryState.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-4 rounded-full bg-black/50 hover:bg-black/70 transition-colors backdrop-blur-sm border border-white/20 hover:border-white/30 disabled:opacity-50"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-4 rounded-full bg-black/50 hover:bg-black/70 transition-colors backdrop-blur-sm border border-white/20 hover:border-white/30 disabled:opacity-50"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </button>
                </>
              )}
            </div>

            {/* Footer */}
            {galleryState.images.length > 1 && (
              <div className="flex flex-col items-center gap-2 sm:gap-3 p-2 sm:p-4">
                {/* Counter */}
                <div className="px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-black/50 text-white text-xs sm:text-sm backdrop-blur-sm border border-white/20">
                  {galleryState.currentIndex + 1} / {galleryState.images.length}
                </div>
                
                {/* Navigation Dots */}
                {galleryState.images.length <= 10 && (
                  <div className="flex gap-1 sm:gap-2">
                    {galleryState.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setGalleryState(prev => ({ ...prev, currentIndex: index }))}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors border ${
                          index === galleryState.currentIndex
                            ? 'bg-white border-white'
                            : 'bg-white/30 border-white/50 hover:bg-white/50 hover:border-white/70'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Click outside to close */}
            <div 
              className="absolute inset-0 -z-10"
              onClick={closeGallery}
              aria-label="Close gallery"
            />
          </div>
        </div>
      )}
    </ImageGalleryContext.Provider>
  );
};
