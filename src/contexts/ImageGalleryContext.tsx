import { createContext, useContext } from 'react';

export interface ImageGalleryContextType {
  openGallery: (images: string[], title: string, startIndex?: number) => void;
  closeGallery: () => void;
}

export const ImageGalleryContext = createContext<ImageGalleryContextType | undefined>(undefined);

export const useImageGallery = () => {
  const context = useContext(ImageGalleryContext);
  if (!context) {
    throw new Error('useImageGallery must be used within an ImageGalleryProvider');
  }
  return context;
};

