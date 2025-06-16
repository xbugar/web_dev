import { cn } from "@/lib/utils.ts";

type EmptyStateProps = {
  title?: string;
  message: string;
  className?: string;
}

export const EmptyState = ({ title, message, className }: EmptyStateProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center rounded-2xl p-6 border border-dashed border-white-text-secondary dark:border-black-text-secondary",
        className
      )}
    >
      {title && <h3 className="text-lg font-semibold">{title}</h3>}
      <p className="text-black-text-secondary dark:text-white-text-secondary text-sm mt-1">{message}</p>
    </div>
  );
};
