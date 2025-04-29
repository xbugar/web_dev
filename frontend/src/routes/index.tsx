import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <h1>LANDING PAGE</h1>
      <div className="flex gap-2">
        <Link to={'/home'} className="bg-red-500">
          HOME
        </Link>
        <Link to={'/login'} className="bg-red-500">
          LOGIN
        </Link>
        <Link to={'/sign-up'} className="bg-red-500">
          SIGN UP
        </Link>
      </div>
    </>
  );
}
