import Link from 'next/link';
import Image from 'next/image';

export default function Logo({
  src,
  children,
  width = 45,
  height = 45,
}: {
  src: string | null;
  children?: React.ReactNode;
  width?: number;
  height?: number;
}) {
  return (
    <Link
      href='/'
      aria-label='Back to homepage'
      className='flex items-center justify-center p-2'
    >
      {src && (
        <Image
          priority
          src={src}
          alt='logo'
          width={width}
          height={height}
          style={{ width: 'auto', height: 'auto' }}
        />
      )}
      <div className='ml-2'>{children}</div>
    </Link>
  );
}
