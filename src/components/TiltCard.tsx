import { type ReactNode } from 'react';
import MotionCard, { type MotionCardProps } from './MotionCard';

interface TiltCardProps extends Omit<MotionCardProps, 'children'> {
  children: ReactNode;
  holo?: boolean;
}

export default function TiltCard({
  children,
  className = '',
  holo = true,
  tilt = 8,
  lift = -6,
  depth = 0,
  showGlare = false,
  ...props
}: TiltCardProps) {
  return (
    <MotionCard
      tilt={tilt}
      lift={lift}
      depth={depth}
      showGlare={showGlare}
      className={`${holo ? 'holo-glass holo-glass-hover' : ''} ${className}`}
      {...props}
    >
      <div className="relative z-[1]">{children}</div>
    </MotionCard>
  );
}
