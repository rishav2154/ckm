import React, { useState, useEffect } from 'react';
import { ImageOff } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ 
  src, 
  alt, 
  className = '', 
  fallbackSrc 
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [urlIndex, setUrlIndex] = useState(0);

  // Convert Google Drive URLs to different formats and add fallbacks
  const getAlternativeUrls = (originalUrl: string): string[] => {
    const fileIdMatch = originalUrl.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (!fileIdMatch) return [originalUrl];
    
    const fileId = fileIdMatch[1];
    
    // Cybersecurity-themed fallback images from Pexels
    const fallbackImages = [
      'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800'
    ];
    
    const randomFallback = fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
    
    return [
      // Primary Google Drive formats
      `https://drive.google.com/uc?export=view&id=${fileId}`,
      `https://drive.google.com/uc?id=${fileId}&export=download`,
      `https://lh3.googleusercontent.com/d/${fileId}=w800-h600-no`,
      `https://drive.google.com/thumbnail?id=${fileId}&sz=w800-h600`,
      
      // Alternative Google formats
      `https://docs.google.com/uc?export=view&id=${fileId}`,
      `https://drive.google.com/file/d/${fileId}/preview`,
      
      // Fallback to Pexels images
      fallbackSrc || randomFallback,
      randomFallback
    ].filter(Boolean);
  };

  const alternativeUrls = getAlternativeUrls(src);

  const handleError = () => {
    console.log(`Image failed to load: ${imgSrc}`);
    if (urlIndex < alternativeUrls.length - 1) {
      const nextIndex = urlIndex + 1;
      setUrlIndex(nextIndex);
      setImgSrc(alternativeUrls[nextIndex]);
      setIsLoading(true);
      console.log(`Trying alternative URL ${nextIndex}: ${alternativeUrls[nextIndex]}`);
    } else {
      console.log('All URLs failed, showing error state');
      setHasError(true);
      setIsLoading(false);
    }
  };

  const handleLoad = () => {
    console.log(`Image loaded successfully: ${imgSrc}`);
    setIsLoading(false);
    setHasError(false);
  };

  useEffect(() => {
    setImgSrc(alternativeUrls[0]);
    setUrlIndex(0);
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  if (hasError) {
    return (
      <div className={`${className} bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center`}>
        <div className="text-center p-4">
          <ImageOff className="h-8 w-8 text-gray-400 mx-auto mb-2" />
          <p className="text-xs text-gray-500 dark:text-gray-400">Image unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 flex items-center justify-center">
          <div className="flex flex-col items-center space-y-2">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Loading...</p>
          </div>
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
        crossOrigin="anonymous"
      />
    </div>
  );
};

export default ImageWithFallback;