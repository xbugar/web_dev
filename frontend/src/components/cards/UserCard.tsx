import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

import { cn } from '@/lib/utils.ts';
import { UserCardProps } from "@/types/AdminDashboard.ts";
import { AdminUserDropdown } from "@/components/dropdown/AdminUserDropdown.tsx";

export function UserCard({
                           userId,
                           title,
                           titleOfParent,
                         }: UserCardProps) {

  return (
    <Card
      className={cn(
        'flex gap-4 overflow-hidden border-l-10 p-0 py-4 flex-shrink-0 border-l-black dark:border-l-white',
      )}
    >
      <CardHeader className="flex items-center justify-start gap-2 px-4">
        <div className="flex w-full flex-col gap-1">
          <div className="flex w-full items-center justify-between">
            <CardTitle>
              {title}
            </CardTitle>
            {(
              <AdminUserDropdown
                userId={userId}
              />
            )}
          </div>

          <div
            className="text-black-text-secondary dark:text-white-text-secondary flex items-center justify-between self-stretch">
            <div className="flex gap-1">
              <CardDescription>{titleOfParent}</CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
