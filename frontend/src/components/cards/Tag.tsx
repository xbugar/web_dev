import { Badge } from '@/components/ui/badge.tsx';

type TagColor = 'blue' | 'purple' | 'yellow' | 'green' | 'red' | 'pink';

const tagStyle: Record<TagColor, string> = {
  blue: 'border-transparent bg-blue-900 text-blue-400',
  purple: 'border-transparent bg-purple-900 text-purple-400',
  yellow: 'border-transparent bg-yellow-900 text-yellow-400',
  green: 'border-transparent bg-green-900 text-green-400',
  red: 'border-transparent bg-red-900 text-red-400',
  pink: 'border-transparent bg-pink-900 text-pink-400',
};

const tagMap: Record<TagColor, string> = {
  blue: 'bg-blue-900',
  purple: 'bg-purple-900',
  yellow: 'bg-yellow-900',
  green: 'bg-green-900',
  red: 'bg-red-900',
  pink: 'bg-pink-900',
};

type TagProps = {
  name: string;
  color: TagColor;
};

function Tag({ name, color }: TagProps) {
  return <Badge className={`${tagStyle[color]} rounded-2xl text-xs`}>{name}</Badge>;
}

const availableColors = [
  { label: 'Red', value: 'red' },
  { label: 'Blue', value: 'blue' },
  { label: 'Green', value: 'green' },
  { label: 'Yellow', value: 'yellow' },
  { label: 'Purple', value: 'purple' },
  { label: 'Pink', value: 'pink' },
];

export { Tag, availableColors, tagMap };
export type { TagProps, TagColor };
