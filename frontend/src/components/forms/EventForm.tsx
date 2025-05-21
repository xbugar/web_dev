import { Input } from '@/components/ui/input.tsx';
import { Label } from '@/components/ui/label.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useState } from 'react';
import { DialogClose, DialogFooter } from '../ui/dialog';
import * as React from "react";
import { Select, SelectTrigger,SelectContent, SelectItem, SelectValue } from "@/components/ui/select.tsx"
import { DateTimePicker } from "@/components/calendar/DateTimePicker.tsx";


type EventFormProps = {
  initialData?: {
    title: string;
    description?: string;
    timeFrom: string;
    timeTo: string;
    repeat?: string;
    // allDay?: boolean;
  };

  dateFrom: Date;
  dateTo: Date;

  onSubmit: (data: {
    title: string;
    description?: string;
    timeFrom: string;
    timeTo: string;
    repeat?: string;
    // allDay?: boolean;
  }) => void;
  isSubmitting?: boolean;
  submitText: string;
};

export function EventForm({
                                   initialData,
                                   dateFrom,
                                   dateTo,
                                   onSubmit,
                                   isSubmitting,
                                   submitText,
                                 }: EventFormProps) {


  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');

  const [timeFrom, settimeFrom] = React.useState<Date>(dateFrom)
  const [timeTo, settimeTo] = React.useState<Date>(dateTo)

  const [repeat, setRepeat] = useState(initialData?.repeat || "Never");
  // const [allDay, setAllDay] = useState(initialData?.allDay || false);

  const handleSubmit = () => {
    if (!title) return;
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
    <div className="grid gap-6 relative">
      {/* Title */}
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

      {/* Date From */}
      <div className="flex flex-row justify-between border-b border-black-text-secondary dark:border-white-text-secondary ">
        <Label className="text-sm pb-3">Start:</Label>
        <DateTimePicker date={timeFrom} setDate={date => date && settimeFrom(date)}></DateTimePicker>
      </div>

      {/* Date To */}
      <div className="flex flex-row justify-between border-b border-black-text-secondary dark:border-white-text-secondary ">
        <Label className="text-sm pb-3">End:</Label>
        <DateTimePicker dateFrom={timeFrom} date={timeTo} setDate={date => date && settimeTo(date)}></DateTimePicker>
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
        <Label htmlFor="repeat" className="text-right">Repeat</Label>
        <Select
          value={repeat}
          onValueChange={setRepeat}
        >
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


      <>
        {/* Description */}
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
      </>

      <DialogFooter className="flex-row-reverse">
        <DialogClose>Cancel</DialogClose>
        <Button
          type="submit"
          variant="submit"
          onClick={handleSubmit}
          disabled={!title}
          loading={isSubmitting}
        >
          {submitText}
        </Button>
      </DialogFooter>
    </div>
  );
}

