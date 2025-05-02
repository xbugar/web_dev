import { createFileRoute } from '@tanstack/react-router';
import { SignupForm } from '@/components/forms/SignupForm';

export const Route = createFileRoute('/_public/sign-up')({
  component: RouteComponent,
});

function RouteComponent() {
  return <SignupForm />;
}
