import { TagType } from '@/types/tag';

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
  eventId: string;
  title: string;
  description?: string;
  tags?: TagType[];
  from?: string;
  to?: string;
  allDay?: boolean;
  tillDate?: string;
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
