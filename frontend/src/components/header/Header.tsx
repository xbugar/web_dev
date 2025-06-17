import gradient from '@/assets/gradient.webp';

import { ArrowLeft, User, UserCog } from 'lucide-react';
import { Link, useCanGoBack, useRouter } from '@tanstack/react-router';
import { useState } from 'react';
import { Button } from '../ui/button';
import { UserSettingsDialog } from '@/components/dialogs/user/UserSettingsDialog';
import { useIsAdmin } from "@/hooks/admin/useIsAdmin.ts";

export function Header() {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const canGoBack = useCanGoBack();
  const { data: isAdmin }  = useIsAdmin();

  const handleBack = () => {
    if (canGoBack) {
      // Go back one entry in history, preserving state
      router.history.back();
    } else {
      // If there's nowhere to go back to, navigate to home
      router.navigate({ to: '/' });
    }
  };

  return (
    <>
      <header className="sticky top-0 right-0 z-50 w-full rounded-b-md px-2 py-2 backdrop-blur-md">
        <div
          className="shadow-ours flex items-center justify-center relative rounded-md bg-cover bg-center p-2"
          style={{ backgroundImage: `url(${gradient})` }}
        >
          <Button asChild variant={'header'} onClick={handleBack} className="absolute left-2">
            <a>
              {/* // Workaround to make the buttons svg bigger */}
              <ArrowLeft />
            </a>
          </Button>
          <Link to={'/home'}>
            <h1 className="font-serif text-3xl font-bold text-white">gradia.</h1>
          </Link>

          <div className="absolute right-2 flex items-center gap-2">
            {isAdmin && (
              <Link to={'/admin'}>
                <Button variant="header">
                  <UserCog/>
                </Button>
              </Link>
            )}
            <Button variant="header" onClick={() => setOpen(true)}>
              <User />
            </Button>
          </div>
        </div>
      </header>

      <UserSettingsDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
