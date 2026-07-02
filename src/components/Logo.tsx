/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface LogoProps {
  className?: string;
  color?: string; // Fill color of the logo icon, defaults to '#b68a5a' (luxury gold)
  size?: number | string; // Width/height scale
  transparent?: boolean; // If true, renders a transparent background. If false, renders the original bronze background container
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  color = "#b68a5a",
  size = "100%",
  transparent = true,
}) => {
  const uniqueId = React.useId().replace(/:/g, ""); // Safe ID for SVGs

  const logoContent = (
    <svg
      viewBox="0 0 200 300"
      width={size}
      height={size}
      className={`${className} overflow-visible`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Transparent Mask to carve out the elegant tracks in the monogram */}
        <mask id={`logo-mask-${uniqueId}`}>
          {/* Default white background keeps everything inside it visible */}
          <rect width="200" height="300" fill="white" />
          
          {/* Top Loop Track: horizontal cuts and right-facing semicircle */}
          <path
            d="M 10 55 H 122 A 25 25 0 0 1 122 105 H 10"
            stroke="black"
            strokeWidth="18"
            strokeLinecap="butt"
            fill="none"
          />
          
          {/* Bottom Loop Track: horizontal middle cut, semicircle, and sweeping bottom-left curve */}
          <path
            d="M 10 175 H 122 A 30 30 0 0 1 122 235 C 85 235 50 255 10 278"
            stroke="black"
            strokeWidth="18"
            strokeLinecap="butt"
            fill="none"
          />
        </mask>
      </defs>

      {/* Main Gold Monogram Shape, masked with our transparency track cuts */}
      <g mask={`url(#logo-mask-${uniqueId})`}>
        <path
          d="M 40 20 H 125 C 160 20 178 48 178 80 C 178 110 160 138 125 138 C 160 138 178 162 178 198 C 178 232 160 280 125 280 H 40 Z"
          fill={color}
        />
      </g>
    </svg>
  );

  if (transparent) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        {logoContent}
      </div>
    );
  }

  // Symmetrical brand container (luxury bronze box)
  return (
    <div className={`relative flex items-center justify-center p-4 bg-brand-surface border border-brand-accent/20 rounded-xs shadow-xs ${className}`}>
      <Logo size={size} color={color} transparent={true} />
    </div>
  );
};
