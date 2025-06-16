import { TagType } from '@/types/tagType';

// what we get from api
export type Event = {
  id: string;
  title: string;
  description: string;
  tags: TagType[];
  timeFrom: string;
  timeTo: string;
  repeat: string;
};

// what we need to render card
export type EventCardProps = {
  id: string;
  title: string;
  description?: string;
  tags?: TagType[];
  from: string;
  to: string;
  repeat: string;
  // allDay: boolean;
};

// what dialog needs
export type EventDialogProps = {
  eventCardProps: EventCardProps;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

// what form needs
export type EventFormProps = {
  eventCardProps: EventCardProps;
  submitText: string;
  isSubmitting?: boolean;
  onSubmit: (data: EventModifiableProps) => void;
};

// what is modifiable by user
export type EventModifiableProps = {
  title: string;
  description?: string;
  tags?: TagType[];
  timeFrom: string;
  timeTo: string;
  repeat?: string;
};
