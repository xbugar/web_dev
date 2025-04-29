import { createFileRoute } from '@tanstack/react-router';
import { SignupForm } from '@/components/login/SignupForm.tsx';

export const Route = createFileRoute('/_public/sign-up')({
  component: RouteComponent,
});

function RouteComponent() {
  return <SignupForm />;
}
