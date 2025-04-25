import { createFileRoute } from '@tanstack/react-router'
import { LoginForm } from "@/components/login/LoginForm.tsx";

export const Route = createFileRoute('/_public/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <LoginForm/>
  )
}
