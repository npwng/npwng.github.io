import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  placeholder: React.ReactElement;
  src: string;
  alt: string;
  [key: string]: any;
}

const LazyImage: React.FC<LazyImageProps> = ({ placeholder, src, alt, ...rest }) => {
  const [loaded, setLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // Set up Intersection Observer to check if the image container is in view.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(container);
      return () => observer.disconnect();
    } else {
      // Fallback if IntersectionObserver isn’t supported.
      setIsInView(true);
    }
  }, []);

  // If the image element is in view and is already loaded (cached), update state immediately.
  useEffect(() => {
    if (isInView && imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, [isInView, src]);

  return (
    <div ref={containerRef}>
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          style={{ display: loaded ? 'block' : 'none' }}
          {...rest}
        />
      )}
      {!loaded && placeholder}
    </div>
  );
};

export default LazyImage;
