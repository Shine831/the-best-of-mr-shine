export default function SvgFilters() {
  return (
    <svg className="hidden">
      <defs>
        <filter id="liquid-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise">
            <animate attributeName="baseFrequency" values="0.015;0.02;0.015" dur="10s" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="40"
          />
        </filter>

        <filter id="liquid-glass-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" />
        </filter>

        <filter id="grain-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </defs>
    </svg>
  );
}
