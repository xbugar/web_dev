import { createFileRoute, Link } from '@tanstack/react-router';
import gradient from '@/assets/gradient.webp';
import { ArrowDown } from 'lucide-react';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-bg-lm-primary dark:bg-bg-dm-primary h-dvh p-2">
      <div
        className="flex h-full w-full flex-col overflow-y-auto rounded-3xl bg-cover bg-center bg-no-repeat lg:justify-between"
        style={{ backgroundImage: `url(${gradient})` }}
      >
        {/* <div className="flex gap-2">
          <Link to={'/home'} className="bg-red-500">
            HOME
          </Link>
          <Link to={'/login'} className="bg-red-500">
            LOGIN
          </Link>
          <Link to={'/sign-up'} className="bg-red-500">
            SIGN UP
          </Link>
        </div> */}
        <section className="relative flex min-h-dvh items-center justify-between px-5 py-4 lg:w-full lg:flex-col lg:justify-center lg:gap-2">
          <Link to="/" className="font-serif text-4xl font-bold text-white lg:text-9xl">
            gradia.
          </Link>
          <div className="text-md text-center font-serif text-white">
            Write it down, make it happen.
          </div>
          <div className="absolute bottom-12 flex animate-bounce items-center justify-center rounded-full bg-white/20 p-4 text-white backdrop-blur-lg">
            <ArrowDown className="h-8 w-8" />
          </div>
        </section>

        <section className="flex min-h-dvh items-center justify-between px-5 py-4 lg:w-full lg:flex-col lg:justify-center lg:gap-2">
          test
        </section>
      </div>
    </div>
  );
}
