import { createFileRoute, Link, Outlet } from '@tanstack/react-router';
import gradient from '@/assets/gradient.webp';

export const Route = createFileRoute('/_public')({
  component: LoginAndRegisterLayout,
});

function LoginAndRegisterLayout() {
  return (
    <>
      <div className="bg-bg-lm-primary dark:bg-bg-dm-primary p-2 h-dvh">
        <div
          className="flex flex-col bg-no-repeat bg-cover bg-center h-full w-full rounded-3xl"
          style={{ backgroundImage: `url(${gradient})` }}
        >
          <div className="flex py-4 px-5 items-center justify-between">
            <Link to="/" className="text-white text-4xl font-bold font-serif">
              gradia.
            </Link>
            <div className="text-center text-white text-sm font-serif">
              Write it down,
              <br />
              make it happen.
            </div>
          </div>

          <div className="h-full flex justify-center items-center p-8 text-white">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
