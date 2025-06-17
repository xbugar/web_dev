import {Input} from '@/components/ui/input.tsx';
import React, {useState} from 'react';
import {Button} from '@/components/ui/button.tsx';
import {SearchRequest} from "@/types/Search.ts";

type SearchFormProps = {
    initialValues: {
        q?: string;
    };
    onSubmit: (data: SearchRequest) => void;
    isSubmitting?: boolean;
    submitText: string;
};

export function SearchForm({initialValues, onSubmit, isSubmitting, submitText}: SearchFormProps) {
    const [filters, setFilters] = useState(initialValues || {});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!filters.q) return;
        onSubmit(filters);
    };

    return (
          <form onSubmit={handleSubmit} className="flex	mt-2 flex-row items-center justify-between py-1 border-b font-serif gap-5 w-full">
            <Input
                id="search"
                placeholder="Search anything"
                value={filters.q || ''}
                onChange={e => setFilters({q: e.target.value})}
                className="w-3xs lg:w-5xl border-b-0 focus-visible:border-b-0"
            />

            <Button
                variant="submitSearch"
                disabled={!filters.q}
                loading={isSubmitting}
            >
                {submitText}
            </Button>
        </form>
    );
}