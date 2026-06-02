import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import md5 from 'md5';

interface AvatarProps {
  className?: string;
  email: string;
  src?: string;
  size?: number;
}

export function Avatar({ className, email, src, size = 400 }: AvatarProps) {
  const gravatarHash = md5(email.toLowerCase().trim());
  const imageSrc =
    src || `https://www.gravatar.com/avatar/${gravatarHash}?s=${size}`;

  return (
    <div
      className={cn(
        'overflow-hidden rounded-lg bg-pink-100/50 dark:bg-cyan-950/50',
        className
      )}
    >
      <motion.img
        src={imageSrc}
        alt="Avatar"
        className="size-full object-cover"
        loading="lazy"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}
