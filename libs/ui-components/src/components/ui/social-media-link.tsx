import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

interface SocialMediaLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  target: string;
  icon: 'github' | 'linkedin';
}

export function SocialMediaLink({ target, icon }: SocialMediaLinkProps) {
  return (
    <Link
      href={target}
      target="_blank"
      className="w-16 h-16 flex justify-center items-center rounded-full border-secondary border-2 hover:linear-gradient"
    >
      {icon === 'github' && (
        <GitHubLogoIcon className="text-secondary w-9 h-9" />
      )}
      {icon === 'linkedin' && (
        <LinkedInLogoIcon className="text-secondary w-9 h-9" />
      )}
    </Link>
  );
}
