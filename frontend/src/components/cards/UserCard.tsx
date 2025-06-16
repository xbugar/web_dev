import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

import { AccentColor, lineColor } from '@/components/cards/cardColors';
import { cn } from '@/lib/utils.ts';
import {UserCardProps} from "@/types/AdminDashboard.ts";
import {Dropdown} from "@/components/cards/Dropdown.tsx";

export function UserCard({
                             userId,
                             title,
                             titleOfParent,
                             color,
                             }: UserCardProps) {

    return (
        <Card
            className={cn(
                'flex gap-4 overflow-hidden border-l-10 p-0 py-4 flex-shrink-0',
                lineColor[color as AccentColor],
            )}
        >
            <CardHeader className="flex items-center justify-start gap-2 px-4">
                <div className="flex w-full flex-col gap-1">
                    <div className="flex w-full items-center justify-between">
                        <CardTitle>
                            {
                            title
                            }
                        </CardTitle>
                        { (
                            <Dropdown
                                noteId={""}
                                notebookId={""}
                                eventId={userId}
                                data={{
                                    title: title,
                                }}
                                type={'admin'}
                            />
                        )}
                    </div>

                    <div className="text-black-text-secondary dark:text-white-text-secondary flex items-center justify-between self-stretch">
                        <div className="flex gap-1">
                            <CardDescription>{titleOfParent}</CardDescription>
                        </div>

                    </div>
                </div>
            </CardHeader>

        </Card>
    );
}
