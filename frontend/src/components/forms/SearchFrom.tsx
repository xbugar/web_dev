import { Input } from '@/components/ui/input.tsx';
import { useState } from 'react';
import { Button } from '@/components/ui/button.tsx';

type SearchFormProps = {
  initialValues?: {
    q: string;
  };
  onSubmit: (data: { q: string }) => void;
  isSubmitting?: boolean;
  submitText: string;
};

export function SearchForm({ initialValues, onSubmit, isSubmitting, submitText }: SearchFormProps) {
  const [q, setQ] = useState(initialValues?.q || '');
  const handleSubmit = () => {
    if (!q) return;
    onSubmit({
      q,
    });
  };
  return (
    <div className="flex flex-col gap-4">
      <Input
        id="search"
        placeholder="Search for notebooks, notes, ..."
        value={q}
        onChange={e => setQ(e.target.value)}
        className="w-full flex-1"
      />
      <Button
        type="submit"
        variant="submit"
        onClick={handleSubmit}
        disabled={!q}
        loading={isSubmitting}
      >
        {submitText}
      </Button>
    </div>
  );
}
