import { useCallback, useEffect, useRef, useState } from 'react';
import { StaticArchitectureMascot, type ArchMascotId } from './AboutArchitectureMascot';

const nodes: { id: ArchMascotId; label: string }[] = [
  { id: 'cloud', label: 'Cloud' },
  { id: 'server', label: 'Server' },
  { id: 'database', label: 'Database' },
  { id: 'shield', label: 'Shield' },
  { id: 'pipeline', label: 'Pipeline' },
];

type Point = { x: number; y: number };

export default function CloudArchitectureDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [centers, setCenters] = useState<Point[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });

  const measure = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    if (rect.width === 0) return;

    const next = nodeRefs.current.map((el) => {
      if (!el) return { x: 0, y: 0 };
      const r = el.getBoundingClientRect();
      return {
        x: r.left - rect.left + r.width / 2,
        y: r.top - rect.top + r.height / 2,
      };
    });

    setCenters(next);
    setSize({ w: rect.width, h: rect.height });
  }, []);

  useEffect(() => {
    measure();
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(measure);
    observer.observe(container);
    window.addEventListener('resize', measure);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  const connections = centers.slice(0, -1).map((from, i) => ({
    from,
    to: centers[i + 1],
  }));

  return (
    <div ref={containerRef} className="relative min-h-[150px] w-full py-4">
      {size.w > 0 && centers.length === nodes.length && (
        <svg
          className="pointer-events-none absolute inset-0 z-0 overflow-visible"
          width={size.w}
          height={size.h}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="arch-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0078d4" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#50e6ff" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#0078d4" stopOpacity="0.35" />
            </linearGradient>
          </defs>

          {connections.map(({ from, to }, i) => {
            if (!from || !to) return null;

            return (
              <g key={i}>
                <line
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="url(#arch-line-grad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx={from.x} cy={from.y} r="3" fill="#0078d4" opacity="0.5" />
                <circle cx={to.x} cy={to.y} r="3" fill="#50e6ff" opacity="0.7" />
              </g>
            );
          })}
        </svg>
      )}

      <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {nodes.map(({ id, label }, i) => (
          <div
            key={label}
            ref={(el) => {
              nodeRefs.current[i] = el;
            }}
          >
            <div className="flex flex-col items-center gap-1.5 rounded-xl border border-azure-200/50 bg-gradient-to-br from-white via-azure-50/40 to-white px-2.5 py-2.5 shadow-sm sm:px-3 sm:py-3">
              <div className="rounded-lg bg-azure-500/10 p-1 ring-1 ring-azure-200/40 sm:p-1.5">
                <StaticArchitectureMascot id={id} />
              </div>
              <span className="text-[10px] font-semibold text-ms-text-secondary">{label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
