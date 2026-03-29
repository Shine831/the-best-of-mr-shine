"use client";

export default function SvgFilters() {
  return (
    <svg className="fixed inset-0 pointer-events-none opacity-0 h-0 w-0" aria-hidden="true">
      <defs>
        {/* Cinematic Liquid Distortion */}
        <filter id="liquid-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015"
            numOctaves="4"
            result="noise"
            seed="1"
          >
            <animate
              attributeName="baseFrequency"
              values="0.015;0.012;0.015"
              dur="20s"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="25" />
        </filter>

        {/* Refined Liquid Glass Morphism */}
        <filter id="liquid-glass-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008"
            numOctaves="2"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" />
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Dynamic Film Grain Texture */}
        <filter id="grain-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.05" />
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
  );
}
