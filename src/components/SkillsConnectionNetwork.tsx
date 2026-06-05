import { useCallback, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface Point {
  x: number;
  y: number;
}

interface LineSegment {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
}

function buildConnections(points: Point[]): LineSegment[] {
  if (points.length < 2) return [];

  const indexed = points.map((p, i) => ({ ...p, i }));
  indexed.sort((a, b) => a.y - b.y || a.x - b.x);

  const rows: { y: number; indices: number[] }[] = [];
  const rowTolerance = 48;

  indexed.forEach(({ y, i }) => {
    const row = rows.find((r) => Math.abs(r.y - y) < rowTolerance);
    if (row) {
      row.indices.push(i);
      row.y = (row.y + y) / 2;
    } else {
      rows.push({ y, indices: [i] });
    }
  });

  rows.forEach((row) => row.indices.sort((a, b) => points[a].x - points[b].x));

  const pairs = new Set<string>();
  const lines: LineSegment[] = [];
  let delay = 0;

  const addLine = (a: number, b: number) => {
    const key = [Math.min(a, b), Math.max(a, b)].join('-');
    if (pairs.has(key)) return;
    pairs.add(key);
    lines.push({
      x1: points[a].x,
      y1: points[a].y,
      x2: points[b].x,
      y2: points[b].y,
      delay: delay++ * 0.35,
    });
  };

  rows.forEach((row) => {
    for (let i = 0; i < row.indices.length - 1; i++) {
      addLine(row.indices[i], row.indices[i + 1]);
    }
  });

  for (let r = 0; r < rows.length - 1; r++) {
    const current = rows[r].indices;
    const next = rows[r + 1].indices;
    current.forEach((fromIdx, i) => {
      const toIdx = next[Math.min(i, next.length - 1)];
      if (toIdx !== undefined) addLine(fromIdx, toIdx);
      if (next[i] !== undefined && i < next.length) addLine(fromIdx, next[i]);
    });
  }

  return lines;
}

interface SkillsConnectionNetworkProps {
  count: number;
  children: (registerRef: (index: number) => (node: HTMLDivElement | null) => void) => ReactNode;
}

export default function SkillsConnectionNetwork({ count, children }: SkillsConnectionNetworkProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lines, setLines] = useState<LineSegment[]>([]);
  const [nodes, setNodes] = useState<Point[]>([]);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const reduced = useReducedMotion() ?? false;

  const registerRef = useCallback(
    (index: number) => (node: HTMLDivElement | null) => {
      cardRefs.current[index] = node;
    },
    []
  );

  const updateNetwork = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const cr = container.getBoundingClientRect();
    setSize({ width: cr.width, height: cr.height });

    const points: Point[] = [];
    for (let i = 0; i < count; i++) {
      const el = cardRefs.current[i];
      if (!el) return;
      const r = el.getBoundingClientRect();
      points.push({
        x: r.left - cr.left + r.width / 2,
        y: r.top - cr.top + r.height / 2,
      });
    }

    if (points.length < 2) return;

    setNodes(points);
    setLines(buildConnections(points));
  }, [count]);

  useLayoutEffect(() => {
    updateNetwork();
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(updateNetwork);
    observer.observe(container);
    window.addEventListener('resize', updateNetwork);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateNetwork);
    };
  }, [updateNetwork, count]);

  return (
    <div ref={containerRef} className="relative">
      {size.width > 0 && lines.length > 0 && (
        <svg
          className="pointer-events-none absolute inset-0 z-0 hidden sm:block"
          width={size.width}
          height={size.height}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="skills-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0078d4" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#50e6ff" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.45" />
            </linearGradient>
          </defs>

          {lines.map((line, i) => (
            <g key={i}>
              <line
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="url(#skills-line-grad)"
                strokeWidth="1.5"
                strokeDasharray="6 8"
                strokeOpacity="0.55"
              />
              {!reduced && (
                <>
                  <motion.circle
                    r="3.5"
                    fill="#0078d4"
                    initial={{ cx: line.x1, cy: line.y1, opacity: 0 }}
                    animate={{
                      cx: [line.x1, line.x2],
                      cy: [line.y1, line.y2],
                      opacity: [0, 0.9, 0.9, 0],
                    }}
                    transition={{
                      duration: 2.8,
                      delay: line.delay,
                      repeat: Infinity,
                      ease: 'linear',
                      times: [0, 0.05, 0.95, 1],
                    }}
                  />
                  <motion.circle
                    r="2"
                    fill="#7c3aed"
                    initial={{ cx: line.x2, cy: line.y2, opacity: 0 }}
                    animate={{
                      cx: [line.x2, line.x1],
                      cy: [line.y2, line.y1],
                      opacity: [0, 0.7, 0.7, 0],
                    }}
                    transition={{
                      duration: 3.4,
                      delay: line.delay + 1,
                      repeat: Infinity,
                      ease: 'linear',
                      times: [0, 0.05, 0.95, 1],
                    }}
                  />
                </>
              )}
            </g>
          ))}

          {nodes.map(
            (node, i) =>
              node && (
                <motion.circle
                  key={i}
                  cx={node.x}
                  cy={node.y}
                  r="5"
                  fill="#0078d4"
                  fillOpacity="0.2"
                  stroke="#50e6ff"
                  strokeWidth="1.5"
                  strokeOpacity="0.5"
                  animate={
                    reduced
                      ? {}
                      : {
                          r: [5, 7, 5],
                          fillOpacity: [0.15, 0.35, 0.15],
                        }
                  }
                  transition={{ duration: 2.5, delay: i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                />
              )
          )}
        </svg>
      )}

      <div className="relative z-10">{children(registerRef)}</div>
    </div>
  );
}
