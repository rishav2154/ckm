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

  // Convert Google Drive URLs to different formats
  const getAlternativeUrls = (originalUrl: string): string[] => {
    const fileIdMatch = originalUrl.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (!fileIdMatch) return [originalUrl];
    
    const fileId = fileIdMatch[1];
    return [
      `https://drive.google.com/uc?export=view&id=${fileId}`,
      `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`,
      `https://lh3.googleusercontent.com/d/${fileId}`,
      `https://drive.google.com/file/d/${fileId}/preview`,
      fallbackSrc || `https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800`
    ].filter(Boolean);
  };

  const [urlIndex, setUrlIndex] = useState(0);
  const alternativeUrls = getAlternativeUrls(src);

  const handleError = () => {
    if (urlIndex < alternativeUrls.length - 1) {
      setUrlIndex(prev => prev + 1);
      setImgSrc(alternativeUrls[urlIndex + 1]);
    } else {
      setHasError(true);
      setIsLoading(false);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  useEffect(() => {
    setImgSrc(alternativeUrls[urlIndex]);
    setIsLoading(true);
    setHasError(false);
  }, [src, urlIndex]);

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
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />
    </div>
  );
};

export default ImageWithFallback;