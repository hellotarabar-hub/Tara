// import React, { useState } from 'react'

// const ERROR_IMG_SRC =
//   'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

// export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
//   const [didError, setDidError] = useState(false)

//   const handleError = () => {
//     setDidError(true)
//   }

//   const { src, alt, style, className, ...rest } = props

//   return didError ? (
//     <div
//       className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
//       style={style}
//     >
//       <div className="flex items-center justify-center w-full h-full">
//         <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
//       </div>
//     </div>
//   ) : (
//     <img src={src} alt={alt} className={className} style={style} {...rest} onError={handleError} />
//   )
// }













// import React, { useState } from "react";

// const ERROR_IMG_SRC =
//   "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

// export function ImageWithFallback({
//   src,
//   alt = "",
//   className = "",
//   style,
//   ...rest
// }: React.ImgHTMLAttributes<HTMLImageElement>) {
//   const [imgSrc, setImgSrc] = useState(src);

//   const handleError = () => {
//     setImgSrc(ERROR_IMG_SRC);  // always render an image, never a collapsing <div>
//   };

//   return (
//     <img
//       src={imgSrc}
//       alt={alt}
//       onError={handleError}
//       className={className}
//       style={{
//         ...style,
//         width: "100%",
//         height: "100%",
//         objectFit: "cover",
//         display: "block",
//       }}
//       {...rest}
//     />
//   );
// }














import React, { useState } from "react";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

export function ImageWithFallback({
  src,
  alt = "",
  className = "",
  style,
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(ERROR_IMG_SRC);
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      className={className}
      style={{
        ...style,
        display: "block", // ⬅️ removed forced width/height
      }}
      {...rest}
    />
  );
}
