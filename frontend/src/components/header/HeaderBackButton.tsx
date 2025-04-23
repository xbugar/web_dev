import { useRouter, useCanGoBack } from '@tanstack/react-router';
import { Button } from '../ui/button';
import { LucideIcon } from 'lucide-react';

type HeaderButtonProps = {
  Icon: LucideIcon
}

export const HeaderBackButton = ({ Icon }: HeaderButtonProps) => {
  const router = useRouter()
  const canGoBack = useCanGoBack()

  const handleBack = () => {
    if (canGoBack) {
      // Go back one entry in history, preserving state
      router.history.back()
    } else {
      // If there's nowhere to go back to, navigate to home
      router.navigate({ to: '/' })
    }
  }

  return (
    <Button asChild variant={"header"} onClick={handleBack}>
      <a>
        {/* // Workaround to make the buttons svg bigger */}
        <Icon />
      </a>
    </Button>
  )
};