import { Input } from '@/components/ui/input.tsx';
import { Label } from '@/components/ui/label.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useState } from 'react';
import { DialogClose, DialogFooter } from '../ui/dialog';
import * as React from 'react';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select.tsx';
import { DateTimePicker } from '@/components/calendar/DateTimePicker.tsx';
import { EventFormProps } from '@/types/event';

export function EventForm({ eventCardProps, submitText, isSubmitting, onSubmit }: EventFormProps) {
  const [title, setTitle] = useState(eventCardProps.title);
  const [description, setDescription] = useState(eventCardProps.description);
  const [timeFrom, settimeFrom] = React.useState<Date>(new Date(eventCardProps.from));
  const [timeTo, settimeTo] = React.useState<Date>(new Date(eventCardProps.to));
  const [repeat, setRepeat] = useState(eventCardProps.repeat);
  // const [allDay, setAllDay] = useState(initialData.allDay);

  React.useEffect(() => {
    if (timeTo < timeFrom) {
      settimeTo(timeFrom);
    }
  }, [timeFrom, timeTo]);

  const handleSubmit = () => {
    if (!title || !timeFrom || !timeTo || !repeat) return;

    onSubmit({
      title,
      description,
      timeFrom: timeFrom.toISOString(),
      timeTo: timeTo.toISOString(),
      repeat,
      // allDay,
    });
  };

  return (
    <div className="relative grid gap-6">
      <div className="grid items-center">
        <Label htmlFor="title" className="text-right">
          Title*
        </Label>
        <Input
          id="title"
          placeholder="Enter title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="col-span-3"
        />
      </div>

      <div className="border-black-text-secondary dark:border-white-text-secondary flex flex-row justify-between border-b">
        <Label className="pb-3 text-sm">Start:</Label>
        <DateTimePicker
          date={timeFrom}
          setDate={date => date && settimeFrom(date)}
        ></DateTimePicker>
      </div>

      <div className="border-black-text-secondary dark:border-white-text-secondary flex flex-row justify-between border-b">
        <Label className="pb-3 text-sm">End:</Label>
        <DateTimePicker
          dateFrom={timeFrom}
          date={timeTo}
          setDate={date => date && settimeTo(date)}
        ></DateTimePicker>
      </div>

      {/*<div className="flex items-center space-x-2">*/}
      {/*  <Switch*/}
      {/*    id="all-day"*/}
      {/*    checked={allDay}*/}
      {/*    onCheckedChange={setAllDay}*/}
      {/*  />*/}
      {/*  <Label htmlFor="all-day">All Day</Label>*/}
      {/*</div>*/}

      <div className="grid items-center">
        <Label htmlFor="repeat" className="text-right">
          Repeat
        </Label>
        <Select value={repeat} onValueChange={setRepeat}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select repeat" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Never">Never</SelectItem>
            <SelectItem value="Every Day">Every Day</SelectItem>
            <SelectItem value="Every Week">Every Week</SelectItem>
            <SelectItem value="Every Month">Every Month</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid items-center">
        <Label htmlFor="description" className="text-right">
          Description
        </Label>
        <Input
          id="description"
          placeholder="Enter description"
          value={description}
          onChange={e => setDescription(e.target.value ?? '')}
          className="col-span-3"
        />
      </div>

      <DialogFooter className="flex-row">
        <Button
          type="submit"
          variant="submit"
          onClick={handleSubmit}
          disabled={!title || !timeFrom || !timeTo || !repeat}
          loading={isSubmitting}
        >
          {submitText}
        </Button>
        <DialogClose>Cancel</DialogClose>
      </DialogFooter>
    </div>
  );
}
