export type AccentColor = 'blue' | 'purple' | 'orange' | 'green' | 'red' | 'pink';

export const iconColor: Record<AccentColor, string> = {
  blue: 'bg-accent-blue',
  purple: 'bg-accent-purple',
  orange: 'bg-accent-orange',
  green: 'bg-accent-green',
  red: 'bg-accent-red',
  pink: 'bg-accent-pink',
};

export const lineColor: Record<AccentColor, string> = {
  blue: 'border-l-accent-blue',
  purple: 'border-l-accent-purple',
  orange: 'border-l-accent-orange',
  green: 'border-l-accent-green',
  red: 'border-l-accent-red',
  pink: 'border-l-accent-pink',
};

export const tagColor: Record<AccentColor, string> = {
  blue: 'bg-blue-900',
  purple: 'bg-purple-900',
  orange: 'bg-orange-900',
  green: 'bg-green-900',
  red: 'bg-red-900',
  pink: 'bg-pink-900',
};

export const tagStyle: Record<AccentColor, string> = {
  blue: 'border-transparent bg-blue-900 text-blue-400',
  purple: 'border-transparent bg-purple-900 text-purple-400',
  orange: 'border-transparent bg-orange-900 text-orange-400',
  green: 'border-transparent bg-green-900 text-green-400',
  red: 'border-transparent bg-red-900 text-red-400',
  pink: 'border-transparent bg-pink-900 text-pink-400',
};

export const accentColors = [
  { label: 'Red', value: 'red' },
  { label: 'Blue', value: 'blue' },
  { label: 'Green', value: 'green' },
  { label: 'Orange', value: 'orange' },
  { label: 'Purple', value: 'purple' },
  { label: 'Pink', value: 'pink' },
];
