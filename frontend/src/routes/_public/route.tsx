import { createFileRoute, Link, Outlet, redirect } from '@tanstack/react-router';
import gradient from '@/assets/gradient.webp';
import { useAuthStore } from '@/lib/authStore';

export const Route = createFileRoute('/_public')({
  loader: () => {
    const { auth } = useAuthStore.getState();
    if (auth.isAuth) {
      throw redirect({
        to: '/home',
      });
    }
  },
  component: LoginAndRegisterLayout,
});

function LoginAndRegisterLayout() {
  return (
    <>
      <div className="bg-bg-lm-primary dark:bg-bg-dm-primary h-dvh p-2">
        <div
          className="flex h-full w-full flex-col rounded-3xl bg-cover bg-center bg-no-repeat lg:flex-row lg:justify-between"
          style={{ backgroundImage: `url(${gradient})` }}
        >
          <div className="flex items-center justify-between px-5 py-4 lg:w-full lg:flex-col lg:justify-center lg:gap-2">
            <Link to="/" className="font-serif text-4xl font-bold text-white lg:text-9xl">
              gradia.
            </Link>
            <div className="text-center font-serif text-sm text-white">
              Write it down,
              <br className="block lg:hidden" />
              <span className="hidden lg:inline"> </span>
              make it happen.
            </div>
          </div>

          <div className="flex h-full items-center justify-center p-8 text-white lg:w-3xl lg:backdrop-blur-xl lg:rounded-r-3xl lg:bg-black/60">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
