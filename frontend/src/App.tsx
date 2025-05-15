import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';
import { useEffect } from 'react';
import { useAuth } from './hooks/useAuth';
import { useAuthStore } from './lib/authStore';
import { routeTree } from './routeTree.gen';
import { createRouter } from '@tanstack/react-router';

const queryClient = new QueryClient();

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function AuthGate() {
  const { data, isLoading } = useAuth();
  const setAuth = useAuthStore(s => s.setAuth);

  useEffect(() => {
    if (data !== undefined) {
      setAuth({ isAuth: data });
    }
  }, [data, setAuth]);

  if (isLoading) return <div>Checking auth...</div>;

  return <RouterProvider router={router} />;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthGate />
    </QueryClientProvider>
  );
}
