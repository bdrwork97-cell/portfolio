import { Download } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

interface ResumeDownloadProps {
  className?: string;
  showIcon?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function ResumeDownload({
  className = 'btn-primary',
  showIcon = true,
  children = 'Download Resume',
  onClick,
}: ResumeDownloadProps) {
  return (
    <a
      href={personalInfo.resumePath}
      download={personalInfo.resumeDownloadName}
      className={className}
      aria-label="Download resume PDF"
      onClick={onClick}
    >
      {showIcon && <Download className="h-4 w-4" aria-hidden="true" />}
      {children}
    </a>
  );
}
