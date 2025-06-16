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
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
                id="search"
                placeholder="Search for notebooks, notes, ..."
                value={filters.q || ''}
                onChange={e => setFilters({q: e.target.value})}
                className="w-full flex-1"
            />

            <Button
                type="submit"
                variant="submit"
                disabled={!filters.q}
                loading={isSubmitting}
            >
                {submitText}
            </Button>
        </form>
    );
}