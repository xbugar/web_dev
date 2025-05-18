import { Input } from '@/components/ui/input.tsx';

import { Label } from '@/components/ui/label.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useState } from 'react';
import { DialogClose, DialogFooter } from '../ui/dialog';
import * as React from "react";
import { DatePicker } from "@/components/calendar/DatePicker.tsx"
// import { Switch } from "@/components/ui/switch.tsx"
import { Select, SelectTrigger,SelectContent, SelectItem, SelectValue } from "@/components/ui/select.tsx"


type EventFormProps = {
  initialData?: {
    title: string;
    description?: string;
    timeFrom?: Date;
    timeTo?: Date;
    repeat?: string;
    // allDay?: boolean;
  };

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
                                   onSubmit,
                                   isSubmitting,
                                   submitText,
                                 }: EventFormProps) {
  const day = new Date();
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');

  const timeFromFromParam = initialData?.timeFrom || day;
  const timeToFromParam = initialData?.timeTo || day;
  const [timeFrom, settimeFrom] = React.useState<Date>(timeFromFromParam)
  const [timeTo, settimeTo] = React.useState<Date>(timeToFromParam)
  // const [timeFrom, settimeFrom] = useState(initialData?.timeFrom || day);
  // const [timeTo, settimeTo] = useState(initialData?.timeTo || day);

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
      <div className="flex flex-row gap-10">
        <Label className="text-sm">Start:</Label>
        <DatePicker value={timeFrom} onChange={date => date && settimeFrom(date)} />
      </div>

      {/* Date To */}
      <div className="flex flex-row gap-10">
        <Label className="text-sm font-medium text-gray-700">End:</Label>
        <DatePicker value={timeTo} onChange={date => date && settimeTo(date)} />
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
            <SelectItem value="Daily">Daily</SelectItem>
            <SelectItem value="Weekly">Weekly</SelectItem>
            <SelectItem value="Monthly">Monthly</SelectItem>
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

