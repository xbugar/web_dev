import { Badge } from '@/components/ui/badge.tsx';
import { TagProps } from '@/types/tag';
import { tagStyle } from './cardColors';

export function Tag({ name, color, x }: TagProps) {
  return (
    <Badge className={`${tagStyle[color]} rounded-2xl text-xs`}>
      {name}
      {x && <div className="text-white-secondary">×</div>}
    </Badge>
  );
}
