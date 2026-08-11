import React, { useState } from "react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export default function LazyImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Skeleton Shimmer Background while loading */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-slate-100 animate-shimmer z-10" />
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={(e) => {
          setHasError(true);
          if (props.onError) props.onError(e);
        }}
        className={`transition-all duration-700 cubic-bezier(0.16,1,0.3,1) ${
          isLoaded ? "opacity-100 scale-100 filter-none" : "opacity-0 scale-105 blur-sm"
        } ${className}`}
        {...props}
      />
    </div>
  );
}
