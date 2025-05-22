import gradient from '@/assets/gradient.webp';

import { ArrowLeft, User } from 'lucide-react';
import { Link, useCanGoBack, useRouter } from '@tanstack/react-router';
import { useState } from 'react';
import { Button } from '../ui/button';
import { UserSettingsDialog } from '@/components/dialogs/UserSettingsDialog';

export function Header() {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const canGoBack = useCanGoBack();

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
          className="shadow-ours flex items-center justify-between rounded-md bg-cover bg-center p-2"
          style={{ backgroundImage: `url(${gradient})` }}
        >
          <Button asChild variant={'header'} onClick={handleBack}>
            <a>
              {/* // Workaround to make the buttons svg bigger */}
              <ArrowLeft />
            </a>
          </Button>
          <Link to={'/home'}>
            <h1 className="font-serif text-3xl font-bold text-white">gradia.</h1>
          </Link>
          <Button variant="header" onClick={() => setOpen(true)}>
            <User />
          </Button>
        </div>
      </header>

      <UserSettingsDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
