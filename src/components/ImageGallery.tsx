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
        <div className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full w-full">
            {/* Close button */}
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors backdrop-blur-sm border border-white/20 hover:border-white/30"
              aria-label="Close gallery"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Title */}
            <div className="absolute top-4 left-4 z-10 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
              <h3 className="text-white text-sm font-medium">{galleryState.title}</h3>
            </div>

            {/* Main Image */}
            <div className="flex items-center justify-center h-full">
              <img
                src={galleryState.images[galleryState.currentIndex]}
                alt={`${galleryState.title} - Image ${galleryState.currentIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Navigation Controls */}
            {galleryState.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/50 hover:bg-black/70 transition-colors backdrop-blur-sm border border-white/20 hover:border-white/30 disabled:opacity-50"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/50 hover:bg-black/70 transition-colors backdrop-blur-sm border border-white/20 hover:border-white/30 disabled:opacity-50"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}

            {/* Image Counter and Navigation Dots */}
            {galleryState.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
                {/* Counter */}
                <div className="px-4 py-2 rounded-full bg-black/50 text-white text-sm backdrop-blur-sm border border-white/20">
                  {galleryState.currentIndex + 1} / {galleryState.images.length}
                </div>
                
                {/* Navigation Dots */}
                {galleryState.images.length <= 10 && (
                  <div className="flex gap-2">
                    {galleryState.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setGalleryState(prev => ({ ...prev, currentIndex: index }))}
                        className={`w-3 h-3 rounded-full transition-colors border ${
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
