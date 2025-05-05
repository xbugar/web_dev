import gradient from '@/assets/gradient.webp';
import { HeaderButton } from './HeaderButton';

import { ArrowLeft, User } from 'lucide-react';
import { HeaderBackButton } from './HeaderBackButton';
import { Link } from '@tanstack/react-router';

export function Header() {
  return (
    <header className="sticky top-0 right-0 z-50 w-full rounded-b-md px-2 py-2 backdrop-blur-md">
      <div
        className="shadow-ours flex items-center justify-between rounded-md bg-cover bg-center p-2"
        style={{ backgroundImage: `url(${gradient})` }}
      >
        <HeaderBackButton Icon={ArrowLeft} />
        <Link to={'/home'}>
          <h1 className="font-serif text-3xl font-bold text-white">gradia.</h1>
        </Link>
        <HeaderButton to={'/'} Icon={User} />
      </div>
    </header>
  );
}
